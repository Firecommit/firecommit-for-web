import React, { FC, useState } from 'react';
import { TextField, Container, Box, Button, Link } from '@mui/material';

export const SignInScreen: FC = () => {
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
            variant="outlined"
            disabled={!email || !password}
            onClick={() => {
              console.log(email, password);
            }}
          >
            Sign In
          </Button>
        </div>
      </Box>
      <p>FIRECOMMITを使うのは初めてですか？</p>
      <Link href="/signup">Sign Up</Link>
    </Container>
  );
};
