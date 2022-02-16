//route
import { Routes, Route, Link, NavLink } from "react-router-dom";
//navagation
import { Navigation } from "./components/Navigation";
//views
import { CallsView } from "./views/CallsView";
//components
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <Header />
      <Navigation style={{ position: "absolute", top: 0, left: 0 }} />
      <Routes>
        <Route path="/calls" element={<CallsView />} />
      </Routes>
    </div>
  );
}

export default App;
