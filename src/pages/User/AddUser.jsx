import { useNavigate } from "react-router-dom";
import UserForm  from "../../components/UserForm"
import { createUser, fetchUser } from "../../store/slices/user.slice";
import { useDispatch } from 'react-redux';
import { useAppSelector } from "../../store/hooks";
import { getAllUsers } from "../../store/selector/user.selector";
import { Button } from "reactstrap";

const AddUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useAppSelector(getAllUsers);

  const handleCreateNewUser = (userDetail) => {
    let newId = userDetail.id;

    if (userDetail.id === null) {
      const maxId = Math.max(...users.map(user => user.id));
      newId = maxId + 1;
    }
    const newUser = {
      id: newId,
      ...userDetail,
      role: "user",
      isDeleted: false, 
    };

    dispatch(createUser(newUser)).then(() => {
      dispatch(fetchUser());
      navigate('/user/user-list');
    });  
  }
  return (
    <>
    <div>
      <h2>Create new User</h2>
      <Button color="primary"  onClick={() => navigate(`/user/user-list`)}>Go back to user list</Button>
      <UserForm title="Add User" submitBtnText="Add" onSubmit={handleCreateNewUser} />
    </div>
    </>
  );
}
export default AddUser;
