import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

import './styles/Main.css';

import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Route>
));
  
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);