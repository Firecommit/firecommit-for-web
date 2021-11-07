import React, { useState } from 'react';
import {
  TextField,
  Container,
  Box,
  Button,
  Link,
  Typography,
} from '@mui/material';
import { withRouter } from 'react-router-dom';
import { auth, db } from '../firebase';

export const SignUpScreen = withRouter((props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createUser = () => {
    if (name) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const { user } = userCredential;
          user?.updateProfile({
            displayName: name,
          });
          db.ref(`users/${user?.uid}`)
            .set({
              coordinate: {
                lattitude: 0,
                longtitude: 0,
              },
            })
            .catch((error) => {
              alert(error);
            });
          props.history.push('/workspace');
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      alert('require username');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ position: 'relative' }}>
      <Box sx={{ height: '100vh', textAlign: 'center' }}>
        <Typography variant="h2" component="div" gutterBottom>
          Sign Up
        </Typography>
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
              autoComplete="off"
              margin="normal"
              id="name"
              label="氏名"
              type="text"
              variant="filled"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <TextField
              required
              fullWidth
              autoComplete="off"
              margin="normal"
              id="email"
              label="メールアドレス"
              type="email"
              variant="filled"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              required
              fullWidth
              autoComplete="off"
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
              disabled={!name || !email || !password}
              onClick={createUser}
            >
              アカウント作成
            </Button>
          </div>
        </Box>
        <p>すでにアカウントをお持ちですか？</p>
        <Link href="/signin">サインイン</Link>
        <Box
          component="footer"
          sx={{
            '& .MuiLink-root': { m: 1 },
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: 50,
          }}
        >
          <Link href="/" color="inherit">
            プライバシーポリシー
          </Link>
          <Link href="/" color="inherit">
            利用規約
          </Link>
          <Link href="/" color="inherit">
            お問い合わせ
          </Link>
        </Box>
      </Box>
    </Container>
  );
});
