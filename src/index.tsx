import './tailwind.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ProjectRouter } from './App';
<<<<<<< HEAD
import { BaseLayout } from './components/layout/Layout';
=======
import BaseLayout from './components/Layout/BaseLayout';
>>>>>>> 2725470 (Added BaseLayout.tsx)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BaseLayout>
<<<<<<< HEAD
        <ProjectRouter />
=======
      <ProjectRouter />
>>>>>>> 2725470 (Added BaseLayout.tsx)
    </BaseLayout>
   </React.StrictMode>
);
