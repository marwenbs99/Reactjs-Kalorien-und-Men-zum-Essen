import './App.css';
import Navbar from './navbar';
import Home from './home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Ajouter from './Ajouter';
import CommentDetail from './CommentDetaill';
import Login from './Login';
import Register from './Register';
import Calorie from './Calorie';
import RapportCalorie from './RapportCalorie';

function App() {
  
 
  return (
    <Router>
      <div className="App">
               
            <div className='contenu'>
              <Switch>


                <Route exact path={'/'}>
                <Navbar  />
                  <Home   /> 
                </Route>
                
                <Route exact path={'/rapportCalorie/:objet'}>
                <Navbar  />
                  <RapportCalorie   /> 
                </Route>


                <Route path={'/ajouter'}>
                <Navbar  />
                  <Ajouter />
                  </Route>


                  <Route path={'/detail/:id'}>
                  <Navbar  />
                  <CommentDetail />
                  </Route>


                  
                  <Route path={'/login'}>
                  <Navbar  />
                  <Login />
                  </Route>

                  <Route path={'/register'}>
                  <Navbar  />
                  <Register />
                  </Route>

                  <Route path={'/Calorie'}>
                  <Navbar  />
                  <Calorie  />
                  </Route>



              </Switch>       
            </div>
      </div>
    </Router>
     
  );
}

export default App;
