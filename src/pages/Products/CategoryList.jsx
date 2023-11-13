import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import { getCategory } from "../../store/selector/product.selector";
import { fetchProductCategory } from "../../store/slices/product.slice";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const CategoryList = () => {
  const dispatch = useDispatch();
  const categories = useAppSelector(getCategory);
  const navigate = useNavigate();
  console.log(categories);

  useEffect(() => {
    dispatch(fetchProductCategory());
  }, [dispatch]);

  return (
    <> 
      <div className="d-flex justify-content-center flex-column align-items-center">
        <h1>Categories</h1>
        {categories && categories.map(category => (
          <div key={category}>
            <p><b>{category}</b></p>
          </div>
        ))}
        <Button color="primary" onClick={() => navigate('/products/product-list')}>Back to product list</Button>
      </div>

    </>
  );
}

export default CategoryList;
