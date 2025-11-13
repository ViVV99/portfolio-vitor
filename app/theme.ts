"use client";
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const theme = createTheme({
  cssVariables: true,
  
  palette: {
    mode: 'dark',
    
    primary: {
      main: '#00e676', // Verde neon tecnológico
      light: '#66ffa6',
      dark: '#00b248',
      contrastText: '#000000',
    },
    
    secondary: {
      main: '#ffd700', // Dourado vibrante
      light: '#ffed4e',
      dark: '#c7a600',
      contrastText: '#000000',
    },
    
    background: {
      default: '#0a0e1a', // Azul escuro quase preto
      paper: '#131826',   // Levemente mais claro para cards
    },
    
    text: {
      primary: '#e8f5e9',   // Verde muito claro
      secondary: '#a5d6a7', // Verde médio
    },
    
    success: {
      main: '#00e676',
      light: '#66ffa6',
      dark: '#00b248',
    },
    
    info: {
      main: '#00e5ff', // Ciano tecnológico
      light: '#6effff',
      dark: '#00b2cc',
    },
    
    warning: {
      main: '#ffd700',
      light: '#ffed4e',
      dark: '#c7a600',
    },
    
    error: {
      main: '#ff1744',
      light: '#ff616f',
      dark: '#c4001d',
    },
  },
  
  typography: {
    fontFamily: roboto.style.fontFamily,
    
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
      WebkitBackgroundClip: 'text',
    },
    
    h2: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    
    h3: {
      fontWeight: 600,
    },
    
    button: {
      fontWeight: 500,
      textTransform: 'none', // Mais moderno sem uppercase
      letterSpacing: '0.02em',
    },
  },
  
  components: {
   

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        elevation1: {
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
        },
        elevation2: {
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
        },
      },
    },
  },
  
  shape: {
    borderRadius: 8,
  },
  
  shadows: [
    'none',
    '0 2px 4px rgba(0, 230, 118, 0.1)',
    '0 4px 8px rgba(0, 230, 118, 0.15)',
    '0 6px 12px rgba(0, 230, 118, 0.2)',
    '0 8px 16px rgba(0, 230, 118, 0.25)',
    '0 10px 20px rgba(0, 230, 118, 0.3)',
    '0 12px 24px rgba(0, 230, 118, 0.35)',
    '0 14px 28px rgba(0, 230, 118, 0.4)',
    '0 16px 32px rgba(0, 230, 118, 0.45)',
    '0 18px 36px rgba(0, 230, 118, 0.5)',
    '0 20px 40px rgba(0, 230, 118, 0.55)',
    '0 22px 44px rgba(0, 230, 118, 0.6)',
    '0 24px 48px rgba(0, 230, 118, 0.65)',
    '0 26px 52px rgba(0, 230, 118, 0.7)',
    '0 28px 56px rgba(0, 230, 118, 0.75)',
    '0 30px 60px rgba(0, 230, 118, 0.8)',
    '0 32px 64px rgba(0, 230, 118, 0.85)',
    '0 34px 68px rgba(0, 230, 118, 0.9)',
    '0 36px 72px rgba(0, 230, 118, 0.95)',
    '0 38px 76px rgba(0, 230, 118, 1)',
    '0 40px 80px rgba(0, 230, 118, 1)',
    '0 42px 84px rgba(0, 230, 118, 1)',
    '0 44px 88px rgba(0, 230, 118, 1)',
    '0 46px 92px rgba(0, 230, 118, 1)',
    '0 48px 96px rgba(0, 230, 118, 1)',
  ],
});

export default theme;