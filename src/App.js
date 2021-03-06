import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import HeroFooter from "./components/HeroFooter/HeroFooter";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import Warehouses from "./components/Warehouses/Warehouses";
import AddEditWarehouse from "./components/AddEditWarehouse/AddEditWarehouse.jsx";
import InventoryList from "./components/InventoryList/InventoryList.jsx";
import InventoryItemDetails from "./components/InventoryItemDetails/InventoryItemDetails.jsx";
import AddEditInventory from "./components/AddEditInventory/AddEditInventory";
import "./App.scss";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />

        <Switch>  
          <Redirect exact from="/" to="/warehouses" />

          <Route
            exact
            path="/warehouses"
            render={(routerProps) => <Warehouses {...routerProps} />}
          />

          <Route
            path="/warehouses/:id"
            render={(routerProps) => <WarehouseDetails {...routerProps} />}
          />

          <Route
            path="/add/warehouses"
            render={(routerProps) => <AddEditWarehouse {...routerProps} />}
          />

          <Route
            path="/edit/warehouses/:id"
            render={(routerProps) => <AddEditWarehouse {...routerProps} />}
          />

          <Route
            path="/inventory"
            exact
            render={(routerProps) => <InventoryList {...routerProps} />}
          />

          <Route
            path="/inventory/:id"
            render={(routerProps) => <InventoryItemDetails {...routerProps} />}
          />

          <Route
            path="/add/inventory"
            render={(routerProps) => <AddEditInventory {...routerProps} />}
          />
          <Route
            path="/edit/inventory/:id"
            render={(routerProps) => <AddEditInventory {...routerProps} />}
          />
        </Switch>
        <HeroFooter />
      </BrowserRouter>
    );
  }
}
