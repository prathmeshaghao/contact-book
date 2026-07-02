import { Button, Container, Paper, Typography } from "@mui/material";

import { useNavigate, useParams } from "react-router-dom";

import ContactForm from "../components/contacts/ContactForm";

import { useContactStore } from "../store/contactStore";

import type { ContactFormData } from "../utils/validation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const ContactFormPage = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const contacts = useContactStore((state) => state.contacts);

  const addContact = useContactStore((state) => state.addContact);

  const updateContact = useContactStore((state) => state.updateContact);

  const existingContact = contacts.find((contact) => contact.id === id);

  const emailExists = useContactStore((state) => state.emailExists);
  if (id && !existingContact) {
    return (
      <Container maxWidth="sm">
        <Paper sx={{ p: 4, mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Contact not found
          </Typography>

          <Button variant="contained" onClick={() => navigate("/")}>
            Back to Contacts
          </Button>
        </Paper>
      </Container>
    );
  }
  const handleSubmit = (data: ContactFormData) => {
    if (emailExists(data.email, existingContact?.id)) {
      alert("Email already exists");
      return;
    }

    if (existingContact) {
      updateContact(existingContact.id, {
        ...existingContact,
        ...data,
      });
    } else {
      addContact({
        id: crypto.randomUUID(),
        ...data,
        createdAt: new Date().toISOString(),
      });
    }

    navigate("/");
  };

  return (
    <Container maxWidth="md">
      <Paper
        sx={{
          p: 4,
          mt: 4,
        }}
      >
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate("/")}
          sx={{ mt: 2 }}
        >
          Back
        </Button>
        <Typography
          variant="h4"
          sx={{
            mb: 3,
          }}
        >
          {existingContact ? "Edit Contact" : "Create Contact"}
        </Typography>

        <ContactForm
          defaultValues={
            existingContact
              ? {
                  firstName: existingContact.firstName,
                  lastName: existingContact.lastName,
                  email: existingContact.email,
                  phone: existingContact.phone,
                  company: existingContact.company,
                  notes: existingContact.notes,
                  tags: existingContact.tags,
                }
              : undefined
          }
          onSubmit={handleSubmit}
        />
      </Paper>
    </Container>
  );
};

export default ContactFormPage;
