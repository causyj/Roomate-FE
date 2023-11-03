import './tailwind.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ProjectRouter } from './App';
import { BaseLayout } from './components/layout/Layout';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const customTheme = createTheme({
  typography: {
    fontFamily: "'100','200','300','400','500','600','700','800','900'",
  },
});
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <ThemeProvider theme={customTheme}>
    <BaseLayout>
        <ProjectRouter />
    </BaseLayout>
    </ThemeProvider>
   </React.StrictMode>
);
