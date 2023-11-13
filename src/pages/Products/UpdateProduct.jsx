import { useDispatch, useSelector } from "react-redux";
import ProductForm  from "../../components/ProductForm";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "reactstrap";
import { getLoading, getProductDetails } from "../../store/selector/product.selector";
import { fetchProductsById, updateProduct, updateProductById } from "../../store/slices/product.slice";
import { useEffect } from "react";

const UpdateProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(getLoading);
  const product = useSelector(getProductDetails);
  
  useEffect(() => {
    dispatch(fetchProductsById(Number(id)));
  }, [dispatch, id])

  if (loading === 'loading' || !product) {
    return <div>Loading...</div>
  }

  const handleSubmit = (productFormDetail) => {
    if (id && !isNaN(id)) {
      const updatedProduct = {
        id: productFormDetail.id,
        title: productFormDetail.title,
        price: productFormDetail.price,
        category: productFormDetail.category,
        description: productFormDetail.description,
        image: productFormDetail.image,
      };

      dispatch(updateProductById({id: Number(id), productData: updatedProduct}));
      dispatch(updateProduct({id: Number(id), productFormDetail: updateProduct}));
      navigate(`/products/product-detail/${product.id}`);
    }
  }

  if (!product) {
    return <>
      <h1>404 | Product with {id} is not found</h1>
      <Button color="primary" onClick={() => navigate(`/products/product-list`)}>Return to product list</Button>
    </>
  }

  return (
    <>
    <div>
      <h1>Update Product Details</h1>
      <Button color="primary" onClick={() => navigate(`/products/product-detail/${id}`)}>Back to the product detail</Button>
      <Button color="primary" onClick={() => navigate(`/products/product-list`)}>Back to product list</Button>
      <ProductForm title="Update product" submitBtnText="Save" productinfo={product} onSubmit={handleSubmit}></ProductForm>
    </div>
    </>
  )
}


export default UpdateProduct;
