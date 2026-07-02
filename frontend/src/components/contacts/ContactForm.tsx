import { useEffect } from "react";

import { Button, MenuItem, Stack, TextField } from "@mui/material";

import { useForm, Controller } from "react-hook-form";

import { contactSchema } from "../../utils/validation";

import type { ContactFormData } from "../../utils/validation";

import { zodResolver } from "@hookform/resolvers/zod";
import useUnsavedChanges from "../../hooks/useUnsavedChanges";

interface Props {
  defaultValues?: ContactFormData;
  onSubmit: (data: ContactFormData) => void;
}

const ContactForm = ({ defaultValues, onSubmit }: Props) => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),

    defaultValues,
  });
  useUnsavedChanges(isDirty);
  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <TextField
          label="First Name"
          {...register("firstName")}
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
        />

        <TextField
          label="Last Name"
          {...register("lastName")}
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
          slotProps={{
            htmlInput: {
              maxLength: 50,
            },
          }}
        />
        <TextField
          label="Email"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          label="Phone"
          {...register("phone")}
          error={!!errors.phone}
          helperText={errors.phone?.message}
          slotProps={{
            htmlInput: {
              maxLength: 10,
              inputMode: "numeric",
            },
          }}
        />
        <TextField
          label="Company"
          {...register("company")}
          error={!!errors.company}
          helperText={errors.company?.message}
        />

        <TextField
          label="Notes"
          multiline
          rows={4}
          {...register("notes")}
          error={!!errors.notes}
          helperText={errors.notes?.message}
        />

        <Controller
          control={control}
          name="tags"
          defaultValue={[]}
          render={({ field }) => (
            <TextField
              select
              slotProps={{
                select: {
                  multiple: true,
                },
              }}
              label="Tags"
              {...field}
            >
              <MenuItem value="Client">Client</MenuItem>

              <MenuItem value="Vendor">Vendor</MenuItem>

              <MenuItem value="Personal">Personal</MenuItem>
            </TextField>
          )}
        />

        <Button type="submit" variant="contained">
          Save Contact
        </Button>
      </Stack>
    </form>
  );
};

export default ContactForm;
