import { createBrowserRouter, redirect } from "react-router-dom";
import AddUser from "../pages/User/AddUser";
import PageNotFound from "../pages/PageNotFound";
import UpdateUser from "../pages/User/UpdateUser";
import UserList from "../pages/User/UserList";
import User from "../pages/User";
import UserDetail from "../pages/User/UserDetail";
import AddProduct from "../pages/Products/AddProduct";
import UpdateProduct from "../pages/Products/UpdateProduct";
import ProductList from "../pages/Products/ProductList";
import Products from "../pages/Products";
import ProductDetail from "../pages/Products/ProductDetail";
import CategoryList from "../pages/Products/CategoryList";
import MainPage from "../pages/MainPage/MainPage";
import UserLogin from "../pages/User/UserLogin";
import UserRegister from "../pages/User/UserRegister";
import Admin from "../pages/Admin";
import AdminLogin, { checkTokenLogin } from "../pages/Login/AdminLogin";
// store : "/" => buy

// user: "/user" => manage CRUD

const checkToken = () => {
  const token = localStorage.getItem('token');
  return token ? null : redirect('/admin/admin-login');
}

export const router = createBrowserRouter([
  {
    path: "/",
    loader: () => redirect('/mainpage'),
  },
  {
    path: "/mainpage",
    element: <MainPage />,
    loader: checkToken,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/admin/index",
    element: <Admin/>,
    // loader: checkToken,
  },
  {
    path: "/admin/admin-login",
    element: <AdminLogin/>,
    loader: checkTokenLogin,
  },
  {
    path: "/admin/user",
    element: <User />,
    children: [
      {
        path: "/admin/user",
        loader: () => redirect('/admin/user/user-list')
      },
      {
        path: "/admin/user/user-list",
        element: <UserList />,
      },
      {
        path: "/admin/user/user-detail/:id",
        element: <UserDetail />,
      },
      {
        path: "/admin/user/add-user",
        element: <AddUser />,
      },
      {
        path: "/admin/user/update-user/:id",
        element: <UpdateUser />,
      },
      {
        path: "/admin/user/user-login",
        element: <UserLogin />,
      },
      {
        path: "/admin/user/user-register",
        element: <UserRegister />,
      },
    ]
  },
  {
    path: "/admin/products",
    element: <Products />,
    children: [
      {
        path: "/admin/products/product-list",
        element: <ProductList />,
      },
      {
        path: "/admin/products/product-detail/:id",
        element: <ProductDetail />,
      },
      {
        path: "/admin/products/add-product",
        element: <AddProduct />,
      },
      {
        path: "/admin/products/update-product/:id",
        element: <UpdateProduct />,
      },
      {
        path: "/admin/products/product-category",
        element: <CategoryList />,
      },
    ]
  },
]);


