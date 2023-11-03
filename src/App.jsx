import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout, Home, Collections, Men } from "./components/exports";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="collections" element={<Collections />} />
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Home />} />
          <Route path="about" element={<Home />} />
          <Route path="contact" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
