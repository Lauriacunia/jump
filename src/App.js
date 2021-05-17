import {
  BrowserRouter, 
  Route, 
  Link, 
  Switch, 
  } 
  from 'react-router-dom'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/blog">Blog</Link>
      
        <Switch>
          <Route exact path="/blog" component={Blog}/>
        </Switch>
      
      </BrowserRouter>

      
      
    </div>
  );
}

export default App;
