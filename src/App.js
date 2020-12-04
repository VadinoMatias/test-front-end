import { 
  BrowserRouter as Router, 
  Route, 
  Switch,
  Redirect 
} from "react-router-dom";
import history from "./history";

import './styles/styles.sass';

//Routing
import {
  ERROR_URL,
  DETAIL_ITEM_URL
} from './configs/routing';

//Pages
import MainPage from './pages';
import ResultsPage from './pages/ResultsPage';
import DetailsPage from './pages/DetailsPage';
import NotFoundedPage from "./pages/404";

function App() {
  var detailItemUrl = DETAIL_ITEM_URL+'/:id';

  return (
    <Router history={history}>
      <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path={DETAIL_ITEM_URL} component={ResultsPage} />
      <Route exact path={detailItemUrl} component={DetailsPage} />
      <Route exact path={ERROR_URL} component={NotFoundedPage} />
      <Redirect to={ERROR_URL} />
      </Switch>
    </Router>
  );
}

export default App;
