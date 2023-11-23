import React, { useEffect, useState } from 'react';
import { redirect } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { Input, Form, Button, Label, FormGroup } from 'reactstrap';
import { useAppSelector } from '../../store/hooks';
import { getAllUsers } from '../../store/selector/user.selector';
import HeaderLayout from '../../layout/HeaderLayout';
import FooterLayout from '../../layout/FooterLayout';
import '../../assets/CSS/mainpage.css';
import { fetchLoginValidation } from '../../store/slices/login.slice';
import { getLoginToken } from '../../store/selector/login.selector';
import { fetchUser } from '../../store/slices/user.slice';

export const checkTokenLogin = () => {
  const token = localStorage.getItem('token');
  // return token ? redirect('/admin/index') : null;
  return token ? redirect('/mainpage') : null;
}

function AdminLogin() {
  const dispatch = useDispatch();
  const users = useAppSelector(getAllUsers);
  const loginValidation = useAppSelector(getLoginToken);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    dispatch(fetchUser()); // fetch the users when the component mounts
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const user = users.find(user => user.username === username && user.password === password);

    // Validation
    if (!username || !password) {
      alert('Please enter your username and password.');
      return;
    }

    // Call this function when the user logs in
    const handleLogin = () => {
      setIsLoggedIn(true);
    };

    dispatch(fetchLoginValidation({ username, password }))
  .then((action) => {
    const response = action.payload;
    if (response) {
      console.log(response);
      alert('You have logged in successfully!');
      //store username in localStorage once login successful
      localStorage.setItem('username', username);
      handleLogin();
    }
  })
  .catch((error) => {
    console.error(error);
    alert('An error occurred while logging in.');
  });
  }

  return (
    <>
      <div><HeaderLayout></HeaderLayout></div>
      <div className='d-flex justify-content-center' style={{alignItem: 'center', height: '100vh',backgroundColor: '#f0f0f0'}}>
        <Form className='login-container my-5 p-5' onSubmit={handleSubmit} >
          <title>Login Form</title>
          <FormGroup>
            <Label for='uname'><b>Username</b></Label>
            <Input type="text" className='input-User' placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
          </FormGroup>
          <FormGroup>
            <Label for='psword'><b>Password</b></Label>
            <Input type="password" className='input-User' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password"/>
          </FormGroup>    
          <Button type="submit" className='btn-submit'>Login</Button>
          <div className="container" style={{backgroundColor:'#f1f1f1'}}>
                <span className="psw">Forgot <a href="#">password?</a></span>
          </div>
        </Form>
      </div>
      <div><FooterLayout></FooterLayout></div>
      </>
    
  );
  }
export default AdminLogin;
