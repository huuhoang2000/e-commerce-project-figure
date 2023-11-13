import { useDispatch } from "react-redux";
import ProductForm  from "../../components/ProductForm";
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../../store/hooks";
import { getAllProducts } from "../../store/selector/product.selector";
import { createProduct, fetchProducts } from "../../store/slices/product.slice";
import { Button } from "reactstrap";

const AddProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useAppSelector(getAllProducts);

  const handleAddProduct= (productDetail) => {
    let newId = productDetail.id;

    if (productDetail.id === null) {
      const maxId = Math.max(...products.map(product => product.id));
      newId = maxId + 1;
    }
    const newProduct = {
      id: newId,
      ...productDetail,
      isDeleted: false,
    }
    dispatch(createProduct(newProduct)).then(() => {
      dispatch(fetchProducts());
      navigate('../product-list');
    });
  }

    return (
      <>
        <div>
          <h1>Create new product</h1>
          <Button color="primary" onClick={() => navigate(`../product-list`)}>Go back to the product list</Button>
          <ProductForm title="Add Product" submitBtnText="Add" onSubmit={handleAddProduct}></ProductForm>
        </div>
      </>
    )
}

export default AddProduct;
