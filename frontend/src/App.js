import React from "react";
import CreateProduct from "./components/createProduct";
import ProductList from "./components/productList";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import EditProduct from "./components/editProduct";

function App() {
  return (
    <Router>
      <div className="container p-5">
        <Switch>
          <Route exact path="/">
            <ProductList />
          </Route>
          <Route path="/create">
            <CreateProduct />
          </Route>
          <Route path="/edit/:id">
            <EditProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
