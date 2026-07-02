import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const EmptyState = () => {
  const navigate = useNavigate();

  return (
    <Box
      textAlign="center"
      sx={{
        py: 10,
      }}
    >
      <ContactPhoneIcon
        sx={{
          fontSize: 70,
          color: "text.secondary",
          mb: 2,
        }}
      />

      <Typography variant="h5" gutterBottom>
        No contacts found
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Add your first contact to get started.
      </Typography>

      <Button variant="contained" onClick={() => navigate("/create")}>
        Add Contact
      </Button>
    </Box>
  );
};

export default EmptyState;
