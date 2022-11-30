import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider, QueryClient } from 'react-query';
import preset from '@rebass/preset';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={preset}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
