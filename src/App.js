//route
import { Routes, Route, Link, NavLink } from "react-router-dom";
//navagation
import { Navigation } from "./components/Navigation";
//views
import { Calls } from "./views/Calls";


function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/calls" element={<Calls />} />
      </Routes>
    </div>
  );
}

export default App;
