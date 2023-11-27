import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { getLoading, getProductDetails } from "../../store/selector/product.selector";
import { useEffect } from "react";
import { fetchProductsById } from "../../store/slices/product.slice";
import { Button, Card, CardImg } from "reactstrap";
import HeaderLayout from "../../layout/HeaderLayout";
import FooterLayout from "../../layout/FooterLayout";

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
      <HeaderLayout></HeaderLayout>
      <Card >
        <h2><b>{product.title}</b></h2>
        <div className="view-card d-flex  flex-column flex-sm-row  justify-content-between">
          <div>
          <CardImg top width="80%" src={product.image} alt="Card image cap" />
          </div>
          <div>
            <p><b>Price: </b>{product.price}</p>
            <p><b>Description: </b>{product.description}</p>
            <p><b>Category: </b>{product.category}</p>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-center">
          <Button className="product-button" color="primary" onClick={() => navigate('/admin/products/product-list')}>Back to product list</Button>
          <Button className="product-button" color="primary" onClick={() => navigate(`/admin/products/update-product/${product.id}`)}>Update product</Button>
        </div>    
      </Card>
     
    <FooterLayout></FooterLayout>
    </div>
    </>
  )
}

export default ProductDetail;
