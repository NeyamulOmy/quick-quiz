import Blog from './components/Blog/Blog';
import './App.css';
import Home from './components/Home/Home';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Main from './components/layout/navbar/Main';
import TopicDetails from './components/TopicDetails/TopicDetails';
import { ToastContainer } from 'react-toastify';

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
        {
          path: 'blog',
          element: <Blog></Blog>
        },
        {
          path: 'topic/:topicId',
          loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`),
          element: <TopicDetails></TopicDetails>
        },
        {
          path: '*',
          element: <h1> Error 404! Not Found</h1>
        }
      ]

    }
  ])
  return (
    <div className="App">
      <Outlet></Outlet>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
