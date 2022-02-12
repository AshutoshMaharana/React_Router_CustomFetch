
import './App.scss';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import CreateBlog from './Components/CreateBlog';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import BlogDetails from './Components/BlogDetails';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <div className='content'>
        <Routes>
          <Route exact path = "/" element = {<Home/>}>
           
          </Route>
          <Route path = "/create" element = {<CreateBlog/>}>
           
          </Route>
          <Route path = "/blogs/:id" element = {<BlogDetails/>}>
           
          </Route>
          <Route path = "*" element = {<NotFound/>}>


          </Route>
        </Routes>
      </div>
      </Router>
      
    </div>
  );
}

export default App;
