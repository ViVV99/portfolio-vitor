'use client';

import { Toaster } from "react-hot-toast";
import { useTheme } from "@mui/material"

export default function ToasterProvider() {

  const theme = useTheme();

  return (
    <Toaster 
    position="top-right" 
     toastOptions={{
        style: {
          background: theme.palette.background.paper,
          color: theme.palette.text.primary,
          borderRadius: 8,
          boxShadow: theme.shadows[4]
        },
        success: {
          iconTheme: {
            primary: theme.palette.success.main,
            secondary: theme.palette.success.contrastText
          },
          style: {
            border: `1px solid ${theme.palette.success.main}`
          }

        },
        error: {
          iconTheme: {
            primary: theme.palette.error.main,
            secondary: theme.palette.error.contrastText
          },
          style: {
            border: `1px solid ${theme.palette.error.main}`,
            boxShadow: `0px 10px 50px ${theme.palette.error.main}`
          }
        }
      }}
    />
  )
}
