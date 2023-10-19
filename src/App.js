import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Help from './pages/Help';
import FindStore from './pages/FindStore';
import JoinUs from './pages/JoinUs';
import SignIn from './pages/SignIn';
import Land from "./pages/Home/index";
import Topbar from './components/Topbar';
import Shoes from "./pages/Shoe/index";
import Cards from './components/Cards';
import Cart from './pages/Cart';
import Favourite from './pages/Favourite';
function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/"><Land/></Route>
          <Route path="/findstore"><FindStore/></Route>
          <Route path="/shoes/:id"><Shoes/></Route>
          <Route path="/joinus"><JoinUs/></Route>
          <Route path="/help"><Help/></Route>
          <Route path="/signin"><SignIn/></Route>
          <Route path="/cart"><Cart/></Route>
          <Route path="/fav"><Favourite/></Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
