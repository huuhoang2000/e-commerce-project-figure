import { Button, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, Nav, NavItem, Navbar, NavbarBrand, Table } from "reactstrap"
import { getAllProducts, getProductsByCategory } from "../../store/selector/product.selector";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";
import { deleteProduct, fetchProducts } from "../../store/slices/product.slice";
import { NavLink, useNavigate } from "react-router-dom";


const MainPage = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState('');
  const products = useAppSelector(getAllProducts);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <Navbar color="light" light expand="md">
        <Container fluid className="d-flex justify-content-between">
          <NavbarBrand href="#">HCMax</NavbarBrand>
          <Nav navbar>
            <NavItem className="pe-2 ps-2">
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem className="pe-2 ps-2">
              <NavLink href="#">Shop</NavLink>
            </NavItem>
            <NavItem className="pe-2 ps-2">
              <NavLink href="#">Cart</NavLink>
            </NavItem>
            <Dropdown nav isOpen={false} toggle={() => {}}>
              <DropdownToggle nav caret>
                Menu
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="#">Contact</DropdownItem>
                <DropdownItem href="#">Login</DropdownItem>
                <DropdownItem href="#">Sign Up</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
     </>
  )
}

// export default MainPage;

    {/*
    <div style="background-image: url('./src/assets/images/06.jpg');
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div>
            <h1 class="mb-3">Heading</h1>
            <h4 class="mb-3">Subheading</h4>
            <a class="btn btn-outline-light btn-lg" href="#!" role="button">Call to action</a>
          </div>
        </div>
    </div>
    <div>
      <section>
        <h2><span class="text">Featured Products</span></h2>
          <div class="d-flex justify-content-center align-items-center">
          <div class="product-card">
            <div class="product-pic"></div>
            <div class="product-info">
                <h1>Product Name</h1>
                <p>Product Description</p>
                <div class="product-price">$90</div>
                <a href="#" class="product-button">Add to Cart</a>
            </div>
          </div>    
          <div class="product-card">
            <div class="product-pic"></div>
            <div class="product-info">
                <h1>Product Name</h1>
                <p>Product Description</p>
                <div class="product-price">$90</div>
                <a href="#" class="product-button">Add to Cart</a>
            </div>
          </div>    
          <div class="product-card">
            <h1>Product Name</h1>
            <p>Product Description</p>
            <div class="product-pic"></div>
            <div class="product-info">
                <div class="product-price">$90</div>
                <a href="#" class="product-button">Add to Cart</a>
            </div>
          </div>    
          <div class="product-card">
            <h1>Product Name</h1>
            <p>Product Description</p>
            <div class="product-pic"></div>
            <div class="product-info">
                <div class="product-price">$90</div>
                <a href="#" class="product-button">Add to Cart</a>
            </div>
          </div>
        </div>    
      </section>
    </div>
    <div>
      <section>
            <h2>Latest Products</h2>
      </section>
    </div> */}

