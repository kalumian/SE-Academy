// import Style-------------|
import "./App.css";
// import Library------------|
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import Pages-------------|
import Login_Page from "./components/Pages/Login Page/LoginPage";
import Register_Page from "./components/Pages/Register Page/Register_Page";
import Home from "./components/Pages/Home Page/Home";
import Courses from "./components/Pages/Courses/courses";
import Course from "./components/Pages/Course/Course";
import ListVideos from "./components/Pages/videosSetion/videoSection";
import ShowVideos from "./components/Pages/ShowVideo/ShowVideo";
import NotFound from "./components/NotFound";
import AboutWebSite from "./components/Pages/AboutWebSite/AboutWebSite";
//---------------------------------------|
class App extends Component {
  state = {
    SwitchMode: true,
  };
  render() {
    // Functions-----------------------------
    const Switchs = () => {
      this.state.SwitchMode
        ? this.setState({ SwitchMode: false })
        : this.setState({ SwitchMode: true });
    };
    return (
      <>
        <Router>
          <Switch>
            <Route path="/login" exact>
              <NotFound Switch={Switchs} mode={this.state.SwitchMode} />
            </Route>
            <Route path="/register" exact>
              <NotFound Switch={Switchs} mode={this.state.SwitchMode} />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/About-Academy" exact>
              <AboutWebSite />
            </Route>
            <Route
              path="/courses/:nameField/:nameCourses/:nameCourse/:episode"
              component={ShowVideos}
            />
            <Route
              path="/courses/:nameField/:nameCourses/:nameCourse"
              component={ListVideos}
            />
            <Route path="/courses/:nameField/:nameCourses" component={Course} />
            <Route path="/courses/:nameField" component={Courses} />
          </Switch>
        </Router>
      </>

      //-----------------------------------------
    );
  }
}

export default App;
