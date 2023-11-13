import { Button, Input, Table } from "reactstrap"
import { getAllProducts, getProductsByCategory } from "../../store/selector/product.selector";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";
import { deleteProduct, fetchProducts } from "../../store/slices/product.slice";
import { useNavigate } from "react-router-dom";


const ProductList = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState('');
  const products = useAppSelector(state => category ? getProductsByCategory(state, category) : getAllProducts(state));
  const navigate = useNavigate();
  const [limit, setLimit] = useState(10);
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

const handleDelete = (id) => {
  if(window.confirm('Are you sure you want to delete this product?')) {
    dispatch(deleteProduct(id));
  }
}

const handleSort = (field) => {
  setSortField(field);
  setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
}

const sortedProducts = [...products].sort((a, b) => {
  if (a[sortField] < b[sortField]) return sortDirection === 'asc' ? -1 : 1;
  if (a[sortField] > b[sortField]) return sortDirection === 'asc' ? 1 : -1;
  return 0;
})
  return (
    <>
      <div>
      <div>
        <Button color="primary" onClick={() => navigate(`../add-product`)}>Add a new product</Button>
        <Button color="primary" onClick={() => navigate('../product-category')}>All products category</Button>
      </div>
      <div>
        <Input type="select" name="category" id="category" value={category} onChange={e => setCategory(e.target.value)}>
          <option value="">Select a category</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </Input>       
      </div>
      <div>
        <Input type="number" placeholder="View Limit" value={limit} onChange={e => setLimit(e.target.value)}/>  
      </div>      
        <h1>Product List</h1>
        <Table className="text-center" style={{ width: '100%' }}>
          <thead>
            <tr>
              <th onClick={() => handleSort('id')}>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Category</th>
              <th>Description</th>
              <th>Image</th>
              <th>Detail</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {sortedProducts.slice(0, limit).map(product => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.description}</td>
                <td>{product.image}</td>
                <td>
                  <Button color="primary" onClick={() => navigate(`../product-detail/${product.id}`)}>Detail</Button>
                </td>
                <td>
                  <Button color="primary" onClick={() => handleDelete(product.id)}>Delete</Button>
                </td>
              </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default ProductList;
