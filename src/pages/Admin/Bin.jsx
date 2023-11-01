import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { getAllUsersFromBinSelector } from "../../redux/selector/user.selector";
import { hardDeleteUser, softDeleteUser } from "../../redux/slices/user.slice";
import { Button, Table } from "reactstrap";
import { Select } from "@mui/material";

const Bin = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const users = useAppSelector(getAllUsersFromBinSelector);

  const handleRestore = (id) => {
    dispatch(softDeleteUser({id , value: false}));
  }

  const handleDelete = (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this user? This is not reversible!!!")
    if (isConfirmed) {
      dispatch(hardDeleteUser(id));
    }
  }

  const handleReturnUserList = () => {
    navigate(`/admin/userList`);
  }

  return (
    <>
      <h1 className="text-center">List of user accounts get deleted bin</h1>
      <Button color="primary" onClick={handleReturnUserList}>Return to User List</Button>
      <br />
      <Table border={1} style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>UserName</th>
            <th>Password</th>
            <th>Email</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Role</th>
            <th>Restore</th>
            <th>True Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.email}</td>
              <td>${user.name.firstname} ${user.name.lastname}</td>
              <td>{user.phone}</td>
              <td>${user.address.city}, ${user.address.street}, ${user.address.number}, ${user.address.zipcode}</td>
              
              <td>
                <Select value={user.role} disabled>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </Select>
              </td>
              <td>
                <Button onClick={() => handleRestore(user.id)}>Restore</Button>
              </td>
              <td>
                <Button onClick={() => handleDelete(user.id)}>Delete</Button>
              </td>
            </tr>
          ))}
         
        </tbody>
      </Table>
    </>
  )
}

export default Bin;
