"use client";

import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { contactSchema } from "@/components/Forms/schemas/contact.schema";
import { ContactType } from "../Forms/ContactType";
import Input from "@/components/Input";
import { Button, Grid } from "@mui/material";
import toast from "react-hot-toast";

const GridHalfCol = ({ children }: React.PropsWithChildren) => {
  return (
    <Grid
      size={{
        xs: 12,
        md: 'grow',
      }}
    >
      {children}
    </Grid>
  );
};

function ContactForm() {
  const formMethods = useForm<ContactType>({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      message: "",
      email: "",
      name: "",
    },
  });

  const onSubmit = (data: ContactType) => {
    toast.error("Message sent successfully");
  };

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <GridHalfCol>
            <Input name="name" label="Your name *" />
          </GridHalfCol>
          <GridHalfCol>
            <Input name="email" label="Your email *" />
          </GridHalfCol>
          <Input name="message" multiline minRows={4} label="Message *" />
          <Button color="primary" variant="contained" size="large" type="submit">Submit</Button>
        </Grid>
      </form>
    </FormProvider>
  );
}

export default ContactForm;
