import React from "react";
import {  Routes, Route } from "react-router-dom";
import CustomNavbar from "./Pages/Components/Home/Navbar/CustomNavbar";
import Home from "./Pages/Components/Home/Home";
import Profile from "./Pages/Components/Home/Profile/Profile";
import CustomBlogs from "./Pages/Components/Home/Blogs/CustomBlogs";
import Skills from "./Pages/Components/Home/Skills/Skills";
import AllProjects from "./Pages/Components/Home/Portfolio/AllProjects";
import Contact from "./Pages/Components/Home/Contact/Contact";
import BlogDetails from "./Pages/Components/Home/Blogs/Blog/BlogDetails";
import ScrollToTop from "./Pages/Shared/ScrollToTop";

function App() {
  const routeConfigurations = [
    { path: "/", element: <Home /> },
    { path: "/profile", element: <Profile /> },
    { path: "/blogs", element: <CustomBlogs /> },
    { path: "/blog/:id", element: <BlogDetails /> },
    { path: "/skills", element: <Skills /> },
    { path: "/all-projects", element: <AllProjects /> },
    { path: "/contact", element: <Contact /> },
  ];

  return (
    <div className="bg-black">
      <CustomNavbar />
      <Routes>
        <Route>
          {routeConfigurations.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Route>
      </Routes>
      <ScrollToTop/>
    </div>
  );
}

export default App;
