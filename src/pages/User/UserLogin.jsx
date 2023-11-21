import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input, Form, Button, Label, FormGroup } from 'reactstrap';
import { useAppSelector } from '../../store/hooks';
import { getAllUsers } from '../../store/selector/user.selector';
import HeaderLayout from '../../layout/HeaderLayout';
import FooterLayout from '../../layout/FooterLayout';
import '../../assets/CSS/mainpage.css';

function UserLogin() {
  const dispatch = useDispatch();
  const users = useAppSelector(getAllUsers);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = users.find(user => user.username === username && user.password === password);
  };

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
            <Input type="password" className='input-User' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </FormGroup>    
          <Button type="submit" className='btn-submit'>Login</Button>
          <div className="container" style={{backgroundColor:'#f1f1f1'}}>
                <span class="psw">Forgot <a href="#">password?</a></span>
          </div>
        </Form>
      </div>
      <div><FooterLayout></FooterLayout></div>
      </>
    
  );
}

export default UserLogin;
