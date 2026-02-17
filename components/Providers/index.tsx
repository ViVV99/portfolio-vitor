"use client";

import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import theme from "@/app/theme";
import ToasterProvider from './ToasterProvider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: false }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ToasterProvider />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}