import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { getLoading, getProductDetails } from "../../store/selector/product.selector";
import { useEffect } from "react";
import { fetchProductsById } from "../../store/slices/product.slice";
import { Button } from "reactstrap";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector(getProductDetails);
  const loading = useSelector(getLoading);

  useEffect(() => {
    dispatch(fetchProductsById(Number(id)));
  }, [id, dispatch])

  if (loading === 'loading' || !product) {
    return <div>Loading...</div>
  }

  return (
    <>
    <div>
      <h1>Product Detail</h1>
      <p><b>Id: </b>{product.id}</p>
      <p><b>Title: </b>{product.title}</p>
      <p><b>Price: </b>{product.price}</p>
      <p><b>Category: </b>{product.category}</p>
      <p><b>Description: </b>{product.description}</p>
      <p><b>Image: </b>{product.image}</p>
    </div>
    <Button color="primary" onClick={() => navigate('/products/product-list')}>Back to product list</Button>
    <Button color="primary" onClick={() => navigate(`/products/update-product/${product.id}`)}>Update product</Button>
    </>
  )
}

export default ProductDetail;
