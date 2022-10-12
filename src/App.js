import Navbar from './components/layout/navbar/Navbar';

import './App.css';
import Home from './components/Home/Home';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Main from './components/layout/navbar/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
      ]

    }
  ])
  return (
    <div className="App">
      <Outlet></Outlet>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
