//route
import { Routes, Route } from "react-router-dom";
//navagation
import { Navigation } from "./components/Navigation";
//views
import { CallsView, NoFound } from "./views";
//components
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation style={{ position: "absolute", top: 0, left: 0 }} />
      <Routes>
        <Route path="/calls" element={<CallsView />} />
        <Route path="*" element={<NoFound />} />
      </Routes>
    </div>
  );
}

export default App;
