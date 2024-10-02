import { BrowserRouter, Routes, Route } from "react-router-dom";
import SanaAdmin from "./components/SanaAdmin";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Layout />}></Route>
          <Route path="/admin" element={<SanaAdmin />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
