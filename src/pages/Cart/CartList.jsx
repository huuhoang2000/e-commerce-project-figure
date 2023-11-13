import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";

const CartList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>Cart</h1>
      </div>
    </>
  )
}
