import React from 'react'
import { useAppSelector } from '../../store/hooks'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';

export const AddNewCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const carts = useAppSelector(getAllCarts);

  const handleAddCart = (cartDetail) => {
    let newId = cartDetail.id;

    if (cartDetail.id === null) {
      const maxId = Math.max(...carts.map(cart => cart.id));
      newId = maxId + 1;
    }

    const newCart = {
      id: newId,
      ...cartDetail,
      isDeleted: false,
    }
    dispatch().then(() => {
      
    }); 

  }

  return (
    <>
      <div>
        <h1>Create new Cart</h1>
        <Button color="primary" onClick={() => navigate(`../cart-list`)}>Go back to the cart list</Button>
        <CartForm title="Add Cart" submitBtnText="Add" onSubmit={handleAddCart}></CartForm>
      </div>
    </>
  )
}
