import './tailwind.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ProjectRouter } from './App';
import { BaseLayout } from './components/Layout';
import { createTheme, ThemeProvider } from '@mui/material/styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BaseLayout>
        <ProjectRouter />
    </BaseLayout>
   </React.StrictMode>
);
