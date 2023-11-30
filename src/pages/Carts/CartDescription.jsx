import HeaderLayout from "../../layout/HeaderLayout";
import FooterLayout from "../../layout/FooterLayout";

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCartByCartId, getLoading } from "../../store/selector/cart.selector";
import { fetchACartById } from "../../store/slices/cart.slice";
import { Button, Table } from "reactstrap";
import { useAppSelector } from "../../store/hooks";
import { fetchProductsById } from "../../store/slices/product.slice";
import { getProductDetails } from "../../store/selector/product.selector";

export const CartDescription = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useAppSelector(getCartByCartId);
  const loading = useAppSelector(getLoading);
  console.log(cart);

  useEffect(() => {
    dispatch(fetchACartById(Number(id)));
  }, [id, dispatch])

  if (loading === 'loading' || !cart) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div>
        <HeaderLayout></HeaderLayout>
        <h2><b>Shopping Cart</b></h2>
        <Table>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Quantity</th>
            </tr>
          </thead>
          <tbody>
            {cart.products.map(product => {
              return (
                <tr key={product.productId}>
                  <td>{product.productId}</td>
                  <td>{product.quantity}</td>
                  <td><Button color="primary" onClick={() => navigate(`/admin/products/product-detail/${product.productId}`)}>Detail</Button></td>
                  <td><Button color="primary" onClick={() => handleDelete(cart.id)}>Delete</Button></td>
                </tr>
              )
            })}
          </tbody>
        </Table>
        <FooterLayout></FooterLayout>
      </div>
    </>
  );
}

export default CartDescription;
