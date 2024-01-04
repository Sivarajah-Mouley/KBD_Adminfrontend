import React from "react";
import Landing_page from "./pages/login_signup";
import Products from "./pages/products";
//mport AddEmployee from "./pages/addEmployee";
import AddProduct from "./pages/addProduct";
import AddNotice from "./pages/addNotice";
import EditProduct from "./pages/updateProduct";
import Formpage from "./components/form/form";
//import Promotion from "./pages/promotion"
//import ViewEmployee from './pages/viewEmployee'
import viewSuggestions from './pages/viewSuggestions'



import Single_Product from "./pages/Single_item";
import {
  BrowserRouter,
  Route,
  Switch,
  Router,
  Routes,
  NavLink,
} from "react-router-dom";
//import viewEmployee from "./pages/viewEmployee";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Dashboard} />
          <Route path="/products" exact component={Products} />
          {/* <Route path="/addEmployee" exact component={AddEmployee} />
          <Route path="/viewEmployee" exact component={ViewEmployee} /> */}

          <Route path="/form" exact component={Formpage} />
          <Route path="/addProduct" exact component={AddProduct} />
          {/* <Route path="/promotion" exact component={Promotion} /> */}
          <Route path="/suggestions" exact component={viewSuggestions} />


          <Route path="/products/:id" exact component={Single_Product} />
          <Route
            path="/products/editproduct/:id"
            exact
            component={EditProduct}
          />
          <Route path="/addNotice" exact component={AddNotice} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
