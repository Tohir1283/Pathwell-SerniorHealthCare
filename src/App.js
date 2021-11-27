import "./App.css";
import Header from "./components/Header/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./Pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Services from "./Pages/Services/Services";
import SignIn from "./Pages/SignIn/SignIn";
import Register from "./Pages/Register/Register";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import LivingOptions from "./Pages/LivingOptions/LivingOptions";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Profile from "./Pages/Profile/Profile";
import ServiceDescription from "./Pages/ServiceDescription/ServiceDescription";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            {/* Home */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            {/* Services */}
            <Route path="/services">
              <Services />
            </Route>
            {/* About us */}
            <Route path="/about">
              <About />
            </Route>
            {/* Living options */}
            <PrivateRoute path="/livingOptions">
              <LivingOptions />
            </PrivateRoute>
            {/* Contact */}
            <Route path="/contact">
              <Contact />
            </Route>
            {/* Register */}
            <Route path="/Register">
              <Register />
            </Route>
            {/* Sign In */}
            <Route path="/signIn">
              <SignIn />
            </Route>
            \{/* Profile */}
            <Route path="/profile">
              <Profile />
            </Route>
            {/* Dynamic Route */}
            <PrivateRoute path="/service/:serviceId">
              <ServiceDescription />
            </PrivateRoute>
            {/* Error page */}
            <Route path="*">
              <ErrorPage></ErrorPage>
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
