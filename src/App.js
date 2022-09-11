import "./styles.css";
import Welcome from "./Component/Welcome";
import Login from "./Component/Login";
import RankPage from "./Component/RankPage";
import { Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/rankpage" element={<RankPage />}></Route>

        <Route path="/" element={<Welcome />}></Route>
      </Routes>
    </div>
  );
}
