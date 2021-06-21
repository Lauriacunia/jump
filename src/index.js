import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from "./ThemeConfig"
import { ThemeProvider } from '@material-ui/core/styles';

ReactDOM.render(
  <React.StrictMode>
  {/* Preferimos no modificar el index: App.js tendria que tener los estilos */}
    <ThemeProvider theme = {theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

