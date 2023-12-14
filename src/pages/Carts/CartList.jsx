import { useEffect } from "react";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row, Table } from "reactstrap"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { deleteCart, fetchAllCarts } from "../../store/slices/cart.slice";
import { useAppSelector } from "../../store/hooks";
import { getAllCarts } from "../../store/selector/cart.selector";
import HeaderLayout from "../../layout/HeaderLayout";
import FooterLayout from "../../layout/FooterLayout";

const CartList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const carts = useAppSelector(getAllCarts);
  useEffect(() => {
    dispatch(fetchAllCarts());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this account?')) {
      dispatch(deleteCart(id));
    }
  }
  return (
    <>
      <div><HeaderLayout></HeaderLayout></div>
      <div>
        <h2>All Carts</h2>
        <Container>
          <Table>  
            <thead>
              <tr>
                <th>Id</th>
                <th>User Id</th>
                <th>Date</th>
                <th>Products</th>
                <th>Detail</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((cart) => (
                <tr key={cart.id}>
                  
                  <td><b>{cart.id}</b></td>
                  <td><b>{cart.userId}</b></td>
                  <td><b>{cart.date}</b></td>
                  <td>{cart.products && cart.products.map((product) => (
                    <div key={product.productId}>
                      <b>Product Id </b>{product.productId}
                      <b>Quantity </b>{product.quantity}
                      <br />
                    </div>
                  ))}
                  </td>
                  <td><Button color="primary" onClick={() => navigate(`/admin/carts/cart-detail/${cart.id}`)}>Detail</Button></td>
                  <td><Button color="primary" onClick={() => handleDelete(cart.id)}>Delete</Button></td>
                </tr>    
              ))}
            </tbody>
          </Table>
        </Container>
        </div>
        <div><FooterLayout></FooterLayout></div>
    </>
  )
}

export default CartList;
