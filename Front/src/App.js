import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import GetGadget from "./pages/GetGadget";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/getGadget" element={<GetGadget/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
