import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  Container,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import SearchBar from "../components/common/SearchBar";
import TagFilter from "../components/contacts/TagFilter";
import ContactTable from "../components/contacts/ContactTable";
import EmptyState from "../components/common/EmptyState";

import { useContactStore } from "../store/contactStore";
import { useContactFilter } from "../hooks/useContactFilter";
import ContactCardList from "../components/contacts/ContactCardList";

const ContactListPage = () => {
  const navigate = useNavigate();

  const contacts = useContactStore((state) => state.contacts);

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const [sortBy, setSortBy] = useState<"nameAsc" | "nameDesc" | "date">(
    "nameAsc",
  );

  const filteredContacts = useContactFilter(contacts, {
    searchTerm,
    selectedTags,
    sortBy,
  });
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          py: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
            mb: 3,
          }}
        >
          <div>
            <Typography variant="h4">Contacts Book</Typography>

            <Typography variant="body2" color="text.secondary">
              Manage your contacts efficiently
            </Typography>
          </div>

          <Button
            fullWidth={isMobile}
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => navigate("/create")}
          >
            Add Contact
          </Button>
        </Box>

        <Stack spacing={2} sx={{ mb: 3 }}>
          <SearchBar value={searchTerm} onChange={setSearchTerm} />

          <TagFilter value={selectedTags} onChange={setSelectedTags} />

          <Select
            fullWidth
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <MenuItem value="nameAsc">Name A-Z</MenuItem>

            <MenuItem value="nameDesc">Name Z-A</MenuItem>

            <MenuItem value="date">Date Added</MenuItem>
          </Select>
        </Stack>

        {filteredContacts.length === 0 ? (
          <EmptyState />
        ) : (
          <Paper elevation={2}>
            {isMobile ? (
              <ContactCardList contacts={filteredContacts} />
            ) : (
              <ContactTable contacts={filteredContacts} />
            )}
          </Paper>
        )}
      </Box>
    </Container>
  );
};

export default ContactListPage;
