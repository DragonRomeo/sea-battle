import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from "react-redux";
import {BrowserRouter} from 'react-router-dom';

import {App} from './App.tsx';
import {store} from "./core/store/store.ts";

createRoot(document.getElementById('root') as HTMLInputElement).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);