import Home from "@/pages/Home";
import Provider from "./providers";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {

  return (
    <Provider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Provider>
  )
}

export default App
