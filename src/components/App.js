
import './styles.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
// import Sidebar from './shared/Sidebar/index';

import HomePage from './pages/homePage/home';
import SigninPage from './pages/signinPage/signin';


function App() {
  return (
    <Router>
      {/* <Sidebar/> */}
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/signin" component={SigninPage}/>
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
}

export default App;
