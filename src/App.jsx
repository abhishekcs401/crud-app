import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import EditPost from "./component/EditPost";
import Home from "./component/Home";
import NavBar from "./component/NavBar";
import PostForm from "./component/PostForm";
import PostList from "./component/PostList";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="contact" element={<Contact />} />

          <Route path="postlist" element={<PostList />} />
          <Route path="postform" element={<PostForm />} />
          <Route path="editpost/:id" element={<EditPost />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
