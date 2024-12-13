import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/landing/home';
import About from './pages/landing/about';
import Services from './pages/landing/services';
import Portfolio from './pages/landing/portfoilio';
import Blogs from './pages/blogs';
import Blog from './pages/blog';
import Team from './pages/team';
import Work from './pages/work';
import Page404 from './pages/404';
// import Login from './pages/auth/Login';
// import Register from './pages/auth/Register';
import Layout from './layout';

interface Route {
  path: string;
  element: JSX.Element;
}


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="blog/*" element={<Blog />} />
      <Route path="team" element={<Team />} />
      <Route path="jobs" element={<Work />} />
      <Route path="*" element={<Page404 />} />
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