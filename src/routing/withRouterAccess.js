import { BrowserRouter as Router } from 'react-router-dom';

const withRouterAccess = Component => ({ ...props }) => (
  <Router>  
    <Component {...props} />
  </Router>
);

export default withRouterAccess;