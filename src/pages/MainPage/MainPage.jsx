import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, Nav, NavItem, Navbar, NavbarBrand, Row, Table } from "reactstrap"
import { getAllProducts, getProductsByCategory } from "../../store/selector/product.selector";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";
import { deleteProduct, fetchProducts } from "../../store/slices/product.slice";
import { NavLink, useNavigate } from "react-router-dom";
import '../../assets/CSS/mainpage.css';

const MainPage = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState('');
  const products = useAppSelector(getAllProducts);
  const navigate = useNavigate();
  //drop down button
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  //show description
  const [showFullDescription, setShowFullDescription] = useState(Array(products.length).fill(false));
  //create a array of boolean - false

  //search the item:
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const filteredProducts = currentProducts.filter(product => 
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filteredProducts;
  }

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <div>
        <Navbar color="light" light expand="md">
          <Container fluid className=" d-flex justify-content-between">
            <NavbarBrand href="#">HCMax</NavbarBrand>
            <Nav navbar className="navbar d-flex flex-row">
              <NavItem className="pe-2 ps-2 navItem">
                <NavLink href="#" className="navbarlink">Home</NavLink>
              </NavItem>
              <NavItem className="pe-2 ps-2 navItem">
                <NavLink href="#" className="navbarlink">Shop</NavLink>
              </NavItem>
              <NavItem className="pe-2 ps-2 navItem">
                <NavLink href="#" className="navbarlink">Cart</NavLink>
              </NavItem>
              <Dropdown className="navItem" nav isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle nav caret>
                  Menu
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="#">Contact</DropdownItem>
                  <DropdownItem href="#">Login</DropdownItem>
                  <DropdownItem href="#">Sign Up</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div className="background-img">
        <Container className="d-flex justify-content-center align-items-center h-100">
          <div>
            <h1 className="mb-3 hero">Welcome to HCMax</h1>
            <h4 className="mb-3 hero">specializes in Manga, Anime, Vocaloid, Japanese Game toy models</h4>
          </div>
        </Container>
      </div>
      <Container>
        <section>
          <h2>Featured Products</h2>
          <Row className="d-flex justify-content-center align-items-center">
            {/* Repeat this Card for each product */}
            {currentProducts.map( (product, index) => {
              return (
                <Col sm="6" md="4" lg="3">
                  <Card className="productCard">
                    <CardImg top width="100%" src={product.image} alt="Card image cap" />
                    <CardBody>
                      <CardTitle tag="h5">{product.title}</CardTitle>
                      <CardText>
                      {showFullDescription[index] ? product.description : `${product.description.substring(0, 100)}...`}
                        <button onClick={() => {
                          const newShowFullDescription = [...showFullDescription];
                          newShowFullDescription[index] = !newShowFullDescription[index];
                          setShowFullDescription(newShowFullDescription);
                        }}>
                          {showFullDescription[index] ? 'Show less' : 'Show more'}
                        </button>
                        </CardText>
                      <div>{product.price}</div>
                      <Button href="#">Add to Cart</Button>
                    </CardBody>
                  </Card>
                </Col>

              )})}
            {/* End repeat */}
          </Row>
          <div className="naviButton">
            <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
            <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === Math.ceil(products.length / productsPerPage)}>Next</button>
          </div>
          <div className="linkToProductList">
             <Button onClick={() => navigate(`./products/product-list`)}>All Products</Button>
          </div>
        </section>
      </Container>
      {/* <Container>
        <section>
          <h2>Latest Products</h2>
        </section>
      </Container> */}
      <footer>
        <Container>
          <Row>
            <Col>
              <h3>About</h3>
              <p>A paradise for Manga Anime fans, the shop gathers most typical products of Japanese comics and animation.</p>
            </Col>
            <Col>
              <h3>Contact Us</h3>
              <div>Address: </div>
              <div>Phone Number: </div>
              <div>Email: </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>© 2023 My E-commerce Site</p>
              <div className="payment-block">
                {/* Add payment icons here */}
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
     </>
  )
}

export default MainPage;
