import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { router } from "./routers/index";

const App = () => {
  let element = useRoutes(router);

  return (
    <Router>
      {element}
    </Router>
  )
}
  
export default App;
