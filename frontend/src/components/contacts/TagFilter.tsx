import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import type { SelectChangeEvent } from "@mui/material";

interface Props {
  value: string[];
  onChange: (tags: string[]) => void;
}

const TagFilter = ({ value, onChange }: Props) => {
  const handleChange = (event: SelectChangeEvent<typeof value>) => {
    const {
      target: { value },
    } = event;

    onChange(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Tags</InputLabel>

      <Select<string[]>
        multiple
        value={value}
        label="Tags"
        onChange={handleChange}
      >
        <MenuItem value="Client">Client</MenuItem>

        <MenuItem value="Vendor">Vendor</MenuItem>

        <MenuItem value="Personal">Personal</MenuItem>
      </Select>
    </FormControl>
  );
};

export default TagFilter;
