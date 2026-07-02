import {
  Avatar,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import type { Contact } from "../../types/contact";

import TableContainer from "@mui/material/TableContainer";

interface Props {
  contacts: Contact[];
}

const ContactTable = ({ contacts }: Props) => {
  const navigate = useNavigate();

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Contact</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Tags</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {contacts.map((contact) => (
            <TableRow
              hover
              key={contact.id}
              sx={{
                cursor: "pointer",
              }}
              onClick={() => navigate(`/contact/${contact.id}`)}
            >
              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Avatar>
                    {contact.firstName[0]}
                    {contact.lastName[0]}
                  </Avatar>

                  <span>
                    {contact.firstName} {contact.lastName}
                  </span>
                </Box>
              </TableCell>

              <TableCell>{contact.email}</TableCell>

              <TableCell>{contact.phone}</TableCell>

              <TableCell>{contact.company}</TableCell>

              <TableCell>
                {contact.tags.map((tag) => (
                  <Chip key={tag} label={tag} size="small" sx={{ mr: 1 }} />
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactTable;
