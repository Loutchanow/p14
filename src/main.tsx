import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home.tsx';
import Current from './components/pages/Current.tsx';
import Header from './components/Header.tsx';
import GlobalStyles from './components/GlobalStyle.tsx';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  
});



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalStyles />
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/current" element={<Current />} />
        </Routes>
        </ThemeProvider>
    </BrowserRouter>

  </React.StrictMode>,
);


