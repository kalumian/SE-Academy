import React, { Component } from "react";
import FieldComponent from "./FieldsComponents";
import FieldListPage from "./FieldListPage";
import axios from "axios";
import LodingPage from "../../Loding";

export default class FieldSection extends Component {
  state = {
    data: [],
    Loding: false,
  };
  componentDidMount() {
    this.setState({ Loding: true });
    axios
      .get(`https://server-se-academy.herokuapp.com/fields`)
      .then((fields) => this.setState({ data: fields.data, Loding: false }))
      .catch((err) => console.log(err));
  }
  render() {
    const DataFields = this.state.data;
    const listField = DataFields.map((field) => {
      const { colorThem, image, icon, title, description, _id } = field;
      return (
        <FieldComponent
          colorThem={colorThem}
          imageField={image}
          ClassIcon={icon}
          title={title}
          titlePath={title}
          description={description}
        />
      );
    });
    return (
      <FieldListPage
        listField={this.state.Loding ? <LodingPage /> : listField}
      />
    );
  }
}
