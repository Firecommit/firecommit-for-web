import React, { FC, useState } from 'react';
import { TextField, Container, Box, Button, Link } from '@mui/material';

export const SignUpScreen: FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container maxWidth="sm">
      <h1>Sign In Screen</h1>
      <Box
        component="form"
        sx={{ '& .MuiTextField-root': { mt: 3, mb: 3 } }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            fullWidth
            margin="normal"
            id="username"
            label="ユーザー名"
            variant="filled"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            id="email"
            label="メールアドレス"
            variant="filled"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            id="password"
            label="パスワード"
            type="password"
            variant="filled"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button
            fullWidth
            type="button"
            variant="contained"
            disabled={!username || !email || !password}
            onClick={() => {
              console.log(username, email, password);
            }}
          >
            Sign Up
          </Button>
        </div>
      </Box>
      <p>すでにアカウントをお持ちですか？</p>
      <Link href="/signin">Sign In</Link>
    </Container>
  );
};
