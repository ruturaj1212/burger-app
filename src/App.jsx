import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home"

function App() {
  return (
    <BrowserRouter basename="/burger-app">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
