"use client";

import React from "react";
import toast from "react-hot-toast";
import { Button, Grid } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "@/components/Input";
import { ContactType } from "../Forms/ContactType";
import { contactSchema } from "@/components/Forms/schemas/contact.schema";
import { sendContactAction } from "@/app/actions/contact";

const GridHalfCol = ({ children }: React.PropsWithChildren) => {
  return (
    <Grid
      size={{
        xs: 12,
        md: "grow",
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

  const onSubmit = async (data: ContactType) => {
    try {
      // toast.loading("Sending message...", { id: "contact" });

      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("message", data.message);

      await sendContactAction(null, formData);

      toast.success("Message sent successfully", { id: "contact" });
      formMethods.reset();
    } catch {
      toast.error("Failed to send message", { id: "contact" });
    }
  };

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)} id="contact-section">
        <Grid mt={5} container spacing={2}>
          <GridHalfCol>
            <Input name="name" label="Your name *" />
          </GridHalfCol>
          <GridHalfCol>
            <Input name="email" label="Your email *" />
          </GridHalfCol>
          <Input name="message" multiline minRows={4} label="Message *" />
          {/* TODO - Loading btn is with wrong style */}
          <Button
            color="primary"
            variant="contained"
            size="large"
            type="submit"
            loading={formMethods.formState.isSubmitting}
          >
            Submit
          </Button>
        </Grid>
      </form>
    </FormProvider>
  );
}

export default ContactForm;
