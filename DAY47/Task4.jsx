
import React from "react";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";


const Home = () => <h2>Home Page</h2>;

const About = () => <h2>About Page</h2>;


const User = () => {
  const { id } = useParams(); 
  return <h2>User ID: {id}</h2>;
};

const App = () => {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/about" style={{ marginRight: "10px" }}>About</Link>
        <Link to="/user/1" style={{ marginRight: "10px" }}>User 1</Link>
        <Link to="/user/42">User 42</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;