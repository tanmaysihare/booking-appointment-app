import './App.css';
import {Route,Switch} from 'react-router-dom';
import Navbar from './navigation/Navbar';
import UserForm from './pages/UserForm';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="">
      <Navbar/>
      <Switch>
        <Route path="/" exact><Homepage/></Route> 
        <Route path="/form"><UserForm/></Route> 
      </Switch>      
    </div>
  );
}

export default App;
