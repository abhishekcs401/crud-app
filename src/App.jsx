import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import NavBar from "./component/NavBar";
import PostList from "./component/PostList";
import Posts from "./component/Posts";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="contact" element={<Contact />} />
          <Route exact path="posts" element={<Posts />}>
            <Route path="postlist" element={<PostList />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
