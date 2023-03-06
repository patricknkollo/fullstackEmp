import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Count from "./components/Count";
import Header from "./containers/components/Header";
import ProductDetail from "./containers/components/ProductDetail";
import ProductListing from "./containers/components/ProductListing";

function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <Routes>
          <Route path="/welcome" element={<ProductListing />}></Route>
          <Route path="/product/:productId" element={<ProductDetail />}></Route>
          <Route path="/count" element={<Count />}></Route>
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
