import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./component/Header";
import Footer from "./component/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/Product";
import CartScreen from "./screens/CartScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to proShop</h1>
          <Switch>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/product/:id" component={ProductScreen} exact />
            <Route path="/cart/:id?" component={CartScreen} exact />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
