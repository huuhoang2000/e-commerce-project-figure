import { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Card } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const cartForm = () => {
  const [cartDetail, setCartDetail] = useState({
    id: '',
    userId: '',
    date: '',
    products: { productId: '', productQuantity: ''} 
  });

  const handleCartChange = (e) => {
    const {name, value} = e.target;
    if (name.includes('.')) {
      const [field, subfield] = name.split('.');
      setCartDetail(prev => ({
        ...prev, [field]: {
          ...prev[field],
          [subfield]:value
        }
      })) 
    } else {
      setCartDetail(prev => ({ ...prev, [name]: value }))
    }
    
  }

  const handleFormSubmit = () => {
    e.preventDefault();
    onSubmit(cartDetail);
  }

  return (
    <>
      <div>
        <Form onSubmit={handleFormSubmit}>
          <FormGroup>
            <Label htmlFor="productId">Product Id</Label>
            <Input type="text" name="productId" value={cartDetail.products.productId} onChange={handleCartChange} className="cart-input"/>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="productQuantity">Product Quantity</Label>
            <Input type="number" name="productQuantity" value={cartDetail.products.productQuantity} onChange={handleCartChange} className="cart-input"/>
          </FormGroup>
          <Button className="btn-submit" color="primary">{submitBtnText}</Button>
        </Form>
      </div>
    </>
  )
}

export default cartForm;
