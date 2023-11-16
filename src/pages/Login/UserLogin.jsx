import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input, Form, Button } from 'reactstrap';
import { useAppSelector } from '../../store/hooks';

function Login() {
  const dispatch = useDispatch();
  const users = useAppSelector(getAllUsers);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = users.find(user => user.username === username && user.password === password);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit">Login</Button>
    </Form>
  );
}

export default Login;
