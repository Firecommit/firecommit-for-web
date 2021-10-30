import React, { useState } from 'react';
import {
  TextField,
  Container,
  Box,
  Button,
  Link,
  Typography,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { withRouter } from 'react-router-dom';
import firebase, { auth } from '../firebase';

export const SignInScreen = withRouter((props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(true);

  const SignIn = () => {
    if (checked) {
      auth
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() =>
          auth
            .signInWithEmailAndPassword(email, password)
            .then(() => {
              props.history.push('/workspace');
            })
            .catch((error) => {
              alert(error);
            })
        )
        .catch((error) => {
          alert(error);
        });
    } else {
      auth
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          props.history.push('/workspace');
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  return (
    <Container maxWidth="sm" sx={{ position: 'relative' }}>
      <Box sx={{ height: '100vh', textAlign: 'center' }}>
        <Typography variant="h2" component="div" gutterBottom>
          Sign in
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
            <FormControlLabel
              sx={{ mb: 3, width: '100%' }}
              control={
                <Checkbox
                  checked={checked}
                  onChange={(event) => setChecked(event.target.checked)}
                />
              }
              label="Remember me"
            />
            <Button
              fullWidth
              type="button"
              variant="outlined"
              disabled={!email || !password}
              onClick={SignIn}
            >
              続行する
            </Button>
          </div>
        </Box>
        <p>FIRECOMMITを使うのは初めてですか？</p>
        <Link href="/signup">新規アカウント作成</Link>
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
