import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Input, Row } from "reactstrap"
import { getAllProducts, getCategory } from "../../store/selector/product.selector";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";
import { fetchProductCategory, fetchProducts } from "../../store/slices/product.slice";
import '../../assets/CSS/mainpage.css';
import HeaderLayout from "../../layout/HeaderLayout";
import FooterLayout from "../../layout/FooterLayout";
import SearchProduct from "../../components/SearchProduct";
import ShortenDescription from "../../components/ShortenDescription";
import CheckboxFilter from "../../components/CheckboxFilter";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useAppSelector(getAllProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (term) => {
    setSearchTerm(term);
  }

  const [filteredProducts, setFilteredData] = useState(products);
  const [selectedCategories, setSelectedCategories] = useState({});
  

  const handleCategoryChange = event => {
    setSelectedCategories({
      ...selectedCategories,
      [event.target.name]: event.target.checked
    });
  };

  // const filteredbyCheckBox = filteredProducts.filter(product =>
  //   product.category && selectedCategories[product.category]
  // );

  const filterProducts = products.filter(product => {
    const matchesSearchTerm = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCheckbox = product.category && selectedCategories[product.category];
    return matchesSearchTerm && matchesCheckbox;
  });



  const categories = useAppSelector(getCategory);
  useEffect(() => {
    const initialCategories = {};
    categories && categories.forEach(category => {
      initialCategories[category] = true;
    });
    setSelectedCategories(initialCategories);
  }, [categories]);
  
  useEffect(() => {
    setFilteredData(products);
  }, [products]);

  useEffect(() => {
    dispatch(fetchProducts());
  });

  useEffect(() => {
    dispatch(fetchProductCategory());
  }, [dispatch]);

  return (
    <>
    <div><HeaderLayout></HeaderLayout></div>
      <div>
        <Container>
          <section>
            <h2>All Products</h2>
            <SearchProduct setSearchTerm={setSearchTerm} searchTerm={searchTerm}  data={products} setFilteredData={setFilteredData} />
            <CheckboxFilter categories={categories} handleCategoryChange={handleCategoryChange} selectedCategories={selectedCategories } />
            <Row className="d-flex justify-content-center align-items-center">
              {filterProducts.map( (product) => {
                return (
                  <Col sm="6" md="4" lg="3" key={product.id}>
                    <Card className="productCard">
                      <CardImg top width="100%" src={product.image} alt="Card image cap" />
                      <CardBody>
                        <CardTitle tag="h5">{product.title}</CardTitle>
                        <CardText>
                          <ShortenDescription description={product.description}/>
                        </CardText>
                        <div>Price: {product.price}$</div>
                        <Button className="product-button" href="#">Add to Cart</Button>
                        <Button className="product-button" href="#">Product Detail</Button>
                      </CardBody>
                    </Card>
                  </Col>
                )})}
            </Row>
          </section>
        </Container>
        </div>
        <div><FooterLayout></FooterLayout></div>
    </>
  )
}

export default ProductList;
