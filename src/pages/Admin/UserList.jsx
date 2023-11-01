import { useDispatch } from "react-redux"
import { updateInfo, softDeleteUser } from "../../store/slices/user.slice";
import { useNavigate } from 'react-router-dom';
import {Table, Button} from 'reactstrap' ;
import User from "../../models/User.js";
import { getAllUsers } from "../../store/selector/user.selector";
import { useAppSelector } from "../../store/hooks";

const UserList = () => {
  const dispatch = useDispatch();

  const users = useAppSelector(getAllUsers);
  // console.log(users);
  const handleSoftDelete = (id) => {
    const isConfirmed = window.confirm('Are you sure you want to delete?');
    if (isConfirmed) {
      dispatch(softDeleteUser({id, value: true})); 
    }
  }

  const handleRoleChange = (id, newRole) => {
    const user = users.find(user => user.id === id);

    if (user) {
      const updatedUser = new User(
        user.id, 
        user.username, 
        user.email, 
        user.password, 
        `${user.name.firstname} ${user.name.lastname}`,
        user.phone, 
        `${user.address.city}, ${user.address.street}, ${user.address.number}, ${user.address.zipcode}` 
        );
      updatedUser.role = newRole;
      dispatch(updateInfo({id, adminFormDetail: updatedUser}))
    }
  }

  const navigate = useNavigate();
  
  const navigateToAddUser = () => {
    navigate("/admin/add-user")
  }

  const navigateToTrash = () => {
    navigate("/admin/trash")
  }

  const handleShowingDetail = (id) => {
    navigate(`/admin/user-detail/${id}`)
  }

  return (
    <>
      <h1 className="text-center">User List</h1>
      <Button color="primary" onClick={navigateToAddUser}>Add a new product</Button>
        {/* bắt eventclick -> useRouter -> u */}
      <Button color="primary" onClick={navigateToTrash}>Trash</Button>
      <Table className="text-center" style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>UserName</th>
            <th>Password</th>
            <th>Email</th>
            <th colspan="2">Name</th>
            <th>Phone</th>
            <th colspan="4">Address</th>
            <th>Role</th>
            <th>Detail</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.email}</td>
              <td>{user.name.firstname} {user.name.lastname}</td>
              <td>{user.phone}</td>
              <td>{user.address.city}, {address.street}, {address.number}, {address.zipcode}</td>
              <td>
                <select value={user.role} onChange={(e) => handleRoleChange(user.id, e.target.value)}>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </td>
              <td>
                <Button color="primary" onClick={() => handleShowingDetail(user.id)}>Detail</Button>
              </td>
              <td>
                <Button color="primary" onClick={() => handleSoftDelete(user.id)}>Delete</Button>
              </td>
            </tr>

          ))}
        </tbody>
      </Table>
    </>
  );
}

export default UserList;
