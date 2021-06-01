import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../styled/PagesStyle";
// import styled component
// import Style
import "../styled/styleLogin.css";
import "./headerStyle.css";

// -------------------------------- work

export default class Header extends Component {
  render() {
    const color = this.props.color;
    console.log(color);
    return (
      <header clsssName="Header-Section">
        <Navbar color={color}>
          <ul className="ListLink">
            <Link className="LinkBar" to="/">
              <i className="Link">الرئيسية</i>
            </Link>
            <Link className="LinkBar hidTab" to="/About-Academy">
              <i className="Link">عن الاكاديمية</i>
            </Link>
            <i className="Link dropdown active">
              سوشال ميديا
              <ul className="dropdown-menu">
                <Link className="DropDownItem">
                  <i className="itemlist">ديسكورد</i>
                </Link>
                <Link className="DropDownItem">
                  <i className="itemlist">تيليغرام</i>
                </Link>
                <Link className="DropDownItem">
                  <i className="itemlist">تويتر</i>
                </Link>
              </ul>
            </i>
          </ul>
        </Navbar>
      </header>
    );
  }
}
