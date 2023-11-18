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
// store : "/" => buy

// user: "/user" => manage CRUD

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/user",
    element: <User />,
    children: [
      {
        path: "/user",
        loader: () => redirect('/user/user-list')
      },
      {
        path: "/user/user-list",
        element: <UserList />,
      },
      {
        path: "/user/user-detail/:id",
        element: <UserDetail />,
      },
      {
        path: "/user/add-user",
        element: <AddUser />,
      },
      {
        path: "/user/update-user/:id",
        element: <UpdateUser />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
  {
    path: "/products",
    element: <Products />,
    children: [
      {
        path: "/products",
        loader: () => redirect('/products/product-list')
      },
      {
        path: "/products/product-list",
        element: <ProductList />,
      },
      {
        path: "/products/product-detail/:id",
        element: <ProductDetail />,
      },
      {
        path: "/products/add-product",
        element: <AddProduct />,
      },
      {
        path: "/products/update-product/:id",
        element: <UpdateProduct />,
      },
      {
        path: "/products/product-category",
        element: <CategoryList />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ]
  }
]);


