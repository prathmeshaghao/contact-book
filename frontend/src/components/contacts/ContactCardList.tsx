import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import type { Contact } from "../../types/contact";

interface Props {
  contacts: Contact[];
}

const ContactCardList = ({ contacts }: Props) => {
  const navigate = useNavigate();

  return (
    <Stack spacing={2} sx={{ mt: 2 }}>
      {contacts.map((contact) => (
        <Card
          key={contact.id}
          elevation={2}
          sx={{
            borderRadius: 2,
          }}
        >
          <CardActionArea onClick={() => navigate(`/contact/${contact.id}`)}>
            <CardContent>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{ mb: 2 }}
              >
                <Avatar>
                  {contact.firstName[0]}
                  {contact.lastName[0]}
                </Avatar>

                <div>
                  <Typography variant="h6">
                    {contact.firstName} {contact.lastName}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {contact.company}
                  </Typography>
                </div>
              </Stack>

              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>Email:</strong> {contact.email}
              </Typography>

              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>Phone:</strong> {contact.phone}
              </Typography>

              {contact.notes && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {contact.notes}
                </Typography>
              )}

              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {contact.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Stack>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Stack>
  );
};

export default ContactCardList;
