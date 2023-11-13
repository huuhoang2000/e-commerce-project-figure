import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { routes } from "./routers/index";

const App = () => {
  let element = useRoutes(routes);

  return (
    <Router>
      {element}
    </Router>
  )
}
  
export default App;
