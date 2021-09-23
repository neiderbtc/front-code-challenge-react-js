import Home from './components/pages/Home';
import GameState from './context/GameState';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Questions from './components/pages/Questions';
const App = () => {
  return (
    <GameState>
      <Router>
        <Switch>
          <Route path="/questions" component={Questions} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </GameState>

  );
}

export default App;
