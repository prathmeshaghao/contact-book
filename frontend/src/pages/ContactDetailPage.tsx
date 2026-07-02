import { useState } from "react";

import {
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Paper,
  Typography,
} from "@mui/material";

import { useNavigate, useParams } from "react-router-dom";

import ConfirmDialog from "../components/common/ConfirmDialog";

import { useContactStore } from "../store/contactStore";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ContactDetailPage = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [open, setOpen] = useState(false);

  const contact = useContactStore((state) =>
    state.contacts.find((contact) => contact.id === id),
  );

  const deleteContact = useContactStore((state) => state.deleteContact);

  if (!contact) {
    return <Typography>Contact not found</Typography>;
  }

  const handleDelete = () => {
    deleteContact(contact.id);

    navigate("/");
  };

  return (
    <Container maxWidth="md">
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate("/")}
        sx={{ mt: 2 }}
      >
        Back
      </Button>
      <Paper sx={{ p: 4, mt: 4 }}>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            alignItems: "center",
            mb: 3,
          }}
        >
          <Avatar
            sx={{
              width: 72,
              height: 72,
            }}
          >
            {contact.firstName[0]}
            {contact.lastName[0]}
          </Avatar>

          <div>
            <Typography variant="h4">
              {contact.firstName} {contact.lastName}
            </Typography>

            <Typography>{contact.company}</Typography>
          </div>
        </Box>

        <Typography>Email: {contact.email}</Typography>

        <Typography>Phone: {contact.phone}</Typography>

        <Typography>Notes: {contact.notes}</Typography>

        <Box
          sx={{
            mt: 2,
          }}
        >
          {contact.tags.map((tag) => (
            <Chip key={tag} label={tag} sx={{ mr: 1 }} />
          ))}
        </Box>

        <Box
          sx={{
            mt: 4,
            display: "flex",
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            onClick={() => navigate(`/edit/${contact.id}`)}
          >
            Edit
          </Button>

          <Button
            color="error"
            variant="outlined"
            onClick={() => setOpen(true)}
          >
            Delete
          </Button>
        </Box>
      </Paper>

      <ConfirmDialog
        open={open}
        title="Delete Contact"
        onClose={() => setOpen(false)}
        onConfirm={handleDelete}
      />
    </Container>
  );
};

export default ContactDetailPage;
