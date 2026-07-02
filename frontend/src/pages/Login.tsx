import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { loginUser } from "../api/authApi";

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await loginUser({
        username,
        password,
      });

      localStorage.setItem("token", response.data.data.token);

      navigate("/");
    } catch (error) {
      alert("Invalid username or password");
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 4, mt: 10 }}>
        <Stack spacing={3}>
          <Typography variant="h4">Login</Typography>

          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button variant="contained" onClick={handleLogin}>
            Login
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}
