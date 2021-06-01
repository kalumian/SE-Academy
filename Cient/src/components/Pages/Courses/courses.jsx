import React, { Component } from "react";
import { BackToHome } from "../../styled/PagesStyle";
import NotFound from "../../NotFound";
import ListCoursesPage from "./ListCoursesPage";
import CoursCard from "./coursCard";
import Header from "../../Header/Header";
import axios from "axios";
import LodingPage from "../../Loding";
require("dotenv").config();

export default class Courses extends Component {
  state = { TitleSections: [], dataFromDataBase: [], Loading: false };
  componentDidMount() {
    this.setState({ Loading: true });
    axios
      .get(`https://server-se-academy.herokuapp.com/section`)
      .then((Items) => {
        this.setState({ dataFromDataBase: Items.data });
        const SectionsTitles = this.state.dataFromDataBase.map(
          (item) => item.field
        );
        this.setState({ TitleSections: SectionsTitles, Loading: false });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const backPage = () => {
      this.props.history.goBack();
    };
    const thisLink = this.props.location.pathname;
    const dataFromDataBase = this.state.dataFromDataBase;
    function Page() {
      const infoDataArray = dataFromDataBase.filter(
        (item) => item.field == data
      );
      const infoDataComponent = infoDataArray.map((item) => {
        const {
          title,
          icon,
          colorThem,
          field,
          description,
          SectionTitle,
          _id,
        } = item;
        return (
          <CoursCard
            key={_id}
            Icon={icon}
            Title={title}
            Description={description}
            colorThem={colorThem}
            SectionTitle={SectionTitle}
            beforPath={thisLink}
          />
        );
      });
      return (
        <>
          <Header color={0} />
          <BackToHome onClick={() => backPage()}>
            {" "}
            <i class="fas fa-arrow-right"></i> العودة للخلف
          </BackToHome>
          <ListCoursesPage component={infoDataComponent} />
        </>
      );
    }
    const data = this.props.match.params.nameField;
    const Content = this.state.Loading ? (
      <LodingPage />
    ) : this.state.TitleSections.includes(data) ? (
      <Page />
    ) : (
      <NotFound />
    );

    return <div>{Content}</div>;
  }
}
