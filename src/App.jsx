import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Main from "./pages/Main/MainPage";
import StockList from "./pages/Main/StockList";
import StockListRising from "./pages/Main/StockListRising";
import StockListFalling from "./pages/Main/StockListFalling";
import NewsPage from "./pages/News/NewsPage";
import StockPage from "./pages/Stock/StockPage";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<StockList />} />
            <Route path="stock-sortby-marketcap" element={<StockList />} />
            <Route path="stock-sortby-rising" element={<StockListRising />} />
            <Route path="stock-sortby-falling" element={<StockListFalling />} />
          </Route>

          <Route path="/news" element={<NewsPage />} />
          <Route path="/stock" element={<StockPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
