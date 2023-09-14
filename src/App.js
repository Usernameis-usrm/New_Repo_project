import { BrowserRouter, Routes, Route } from "react-router-dom";

import AllFeedback from "./Admin/AllFeedback";
import AllOrders from "./Admin/AllOrders";
import Admin from "./Admin/Admin";
import AdminMenu from "./Admin/AdminMenu";
import ShowMenu from "./Admin/ShowMenu";
import AddMenu from "./Admin/AddMenu";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/AdminMenu" element={<AdminMenu />} />
          <Route path="/ShowMenu" element={<ShowMenu />} />
          <Route path="/AddMenu" element={<AddMenu />} />
          <Route path="/allFeedback"element={<AllFeedback/>}></Route>
          <Route path="/allOrders"element={<AllOrders/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
