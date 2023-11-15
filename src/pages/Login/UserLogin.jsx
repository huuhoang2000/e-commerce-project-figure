import React, { useState } from 'react';
import { Input, Form } from 'reactstrap';

function Login() {
  const dispatch = useDispatch();
  const users = useAppSelector(getAllUsers);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    

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
      <button type="submit">Login</button>
    </Form>
  );
}

export default Login;
