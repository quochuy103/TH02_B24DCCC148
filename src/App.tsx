import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import StudentDetail from "./pages/bai2_Students/StudentDetail";
import StudentList from "./pages/bai2_Students/StudentList";
import NewsApp from "./pages/bai3_News/New";
import WeatherApp from "./pages/bai1_Weather/WeatherApp";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<WeatherApp />} />
          <Route path="/bai1" element={<WeatherApp />} />
          <Route path="/bai2" element={<StudentList />} />
          <Route path="/bai2/:id" element={<StudentDetail />} />
          <Route path="/bai3" element={<NewsApp />} />
        </Routes>
      </div>
    </Router>
  );
}
