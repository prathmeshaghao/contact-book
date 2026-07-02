import Avatar from "@mui/material/Avatar";

interface Props {
  firstName: string;
  lastName: string;
}

const ContactAvatar = ({ firstName, lastName }: Props) => {
  const initials = firstName[0] + lastName[0];

  return <Avatar>{initials.toUpperCase()}</Avatar>;
};

export default ContactAvatar;
