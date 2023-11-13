import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const cartForm = () => {
  const [cartDetail, setCartDetail] = useState({
    id: '',
    userId: '',
    date: '',
    products: '' 
  });

  return (
    <>
      <div>
        <Form>
          
        </Form>
      </div>
    </>
  )
}
