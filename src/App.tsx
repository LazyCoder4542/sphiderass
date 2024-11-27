import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/landing/home';
// import Login from './pages/auth/Login';
// import Register from './pages/auth/Register';
import Layout from './layout';

interface Route {
  path: string;
  element: JSX.Element;
}

interface AppProps {
  routes: Route[];
}


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      {/* <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} /> */}
    </Route>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;