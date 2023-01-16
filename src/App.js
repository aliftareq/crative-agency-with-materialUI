import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Component/Layout';
import Home from './Pages/Home/Home';
import { theme } from './theme/theme';



//routers
const router = createBrowserRouter([
  {
    element: <Layout />,
    path: '/',
    children: [{
      element: <Home />,
      path: '/'
    }]
  }
])

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
