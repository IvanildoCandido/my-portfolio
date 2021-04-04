import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/about'>
        <Home />
      </Route>
      <Route exact path='/services'>
        <Home />
      </Route>
      <Route exact path='/projects'>
        <Home />
      </Route>
      <Route exact path='/blog'>
        <Home />
      </Route>
      <Route exact path='/contact'>
        <Home />
      </Route>
    </Switch>
  );
};
export default Routes;
