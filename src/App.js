import './App.css';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
    <Route>
      <Switch exact path='/'>
        <Navbar />
      </Switch>
    </Route>    
      
  );
}

export default App;
