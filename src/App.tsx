import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamePage from "./pages/GamePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<GamePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}