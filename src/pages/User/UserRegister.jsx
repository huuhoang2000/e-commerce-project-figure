import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input, Form, Button, Label } from 'reactstrap';
import { useAppSelector } from '../../store/hooks';
import { getAllUsers } from '../../store/selector/user.selector';
import HeaderLayout from '../../layout/HeaderLayout';
import FooterLayout from '../../layout/FooterLayout';

function UserRegister() {
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
        <div className='container' 
        // onSubmit={handleSubmit} 
        style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
            width: '300px'}}>
          <title>Login Form</title>
          <Label for='uname'><b>Username</b></Label>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 20px',
              margin: '8px 0',
              display: 'inline-block',
              border: '1px solid #ccc',
              boxSizing: 'border-box',
              borderRadius: '4px'
            }}
          />
          <Label for='psword'><b>Password</b></Label>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 20px',
              margin: '8px 0',
              display: 'inline-block',
              border: '1px solid #ccc',
              boxSizing: 'border-box',
              borderRadius: '4px'
            }}
          />
          <Label>Email</Label>
          <Input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 20px',
              margin: '8px 0',
              display: 'inline-block',
              border: '1px solid #ccc',
              boxSizing: 'border-box',
              borderRadius: '4px'
            }}
          />
          <Label htmlFor="name">Name</Label>
            <div className="row">
              <div className="col">
                <Input type="text" className="form-control" name="name.firstname" placeholder="First name" value={userDetail.name.firstname} onChange={handleUserChange} aria-label="First name"/>
              </div>
              <div className="col">
                <Input type="text" className="form-control" name="name.lastname" placeholder="Last name" value={userDetail.name.lastname} onChange={handleUserChange} aria-label="Last name" />
              </div>
            </div>
          <Label></Label>
          <Input></Input>
          <Button type="submit"
          style={{
            // backgroundColor: '#4CAF50',
            color: 'white',
            padding: '14px 20px',
            margin: '8px 0',
            border: 'none',
            cursor: 'pointer',
            width: '100%',
            borderRadius: '4px'
          }}>Login</Button>
          <div className="container" style={{backgroundColor:'#f1f1f1'}}>
                <span class="psw">Forgot <a href="#">password?</a></span>
            </div>
        </div>
      </div>
      <div><FooterLayout></FooterLayout></div>
      </>
    
  );
}

export default UserRegister;
