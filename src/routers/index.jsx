import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddUser from "../pages/User/AddUser";
import PageNotFound from "../pages/User/PageNotFound";
import UpdateUserProfile from "../pages/User/UpdateUserProfile";
import UserList from "../pages/User/UserList";
import Store from "../pages/Store";
import Admin from "../pages/User";
import UserDetail from "../pages/User/UserDetail";
import Bin from "../pages/User/Bin";

// store : "/" => buy

// admin: "/admin" => manage CRUD

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Store />,
//   },
//   {
//     path: "/admin",
//     element: <Admin />,
//     children: [
//       {
//         path: "/admin",
//         loader: () => redirect('/admin/userList')
//       },
//       {
//         path: "/admin/userList",
//         element: <UserList />,
//       },
//       {
//         path: "/admin/user-detail/:id",
//         element: <UserDetail />,
//       },
//       {
//         path: "/admin/add-user",
//         element: <AddUser />,
//       },
//       {
//         path: "/admin/update-user/:id",
//         element: <UpdateUserProfile />,
//       },
//       {
//         path: "*",
//         element: <PageNotFound />,
//       },
//       {
//         path: "/admin/trash",
//         element: <Bin />
//       }
//     ],
//   },
// ]);
// export default router;

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Store} />
      <Route exact path="/admin/userList" component={UserList} />
      <Route exact path="/admin/user-detail/:id" component={UserDetail} />
      <Route exact path="/admin/add-user" component={AddUser} />
      <Route exact path="/admin/update-user/:id" component={UpdateUserProfile} />
      <Route exact path="/admin/trash" component={Bin} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
);

export default AppRouter;
