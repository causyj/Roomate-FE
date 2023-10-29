import './tailwind.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ProjectRouter } from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='base-font-color'>
        <ProjectRouter />
    </div>
   </React.StrictMode>
);
