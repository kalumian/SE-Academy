import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Field,
  Header_Field,
  Icon_Field,
  Content_Field,
  Image_p,
  ReaderMore,
  ButtonField,
  ReadLit,
} from "../../styled/PagesStyle";

class FieldComponent extends Component {
  state = {
    stateElements: false,
  };
  render() {
    //Function
    const ClickChange = () => {
      this.state.stateElements
        ? this.setState({ stateElements: false })
        : this.setState({ stateElements: true });
    };
    const color = this.props.colorThem;
    const img = this.props.imageField;
    const stateElement = this.state.stateElements;
    const FieldCoursePath = this.props.titlePath;
    return (
      <Field state={stateElement}>
        <Header_Field state={stateElement} color={color}>
          <h3>{this.props.title}</h3>
        </Header_Field>
        <Icon_Field
          state={stateElement}
          color={color}
          className={this.props.ClassIcon}
        ></Icon_Field>
        <Content_Field state={stateElement}>
          <Image_p src={img} alt="img" state={stateElement} />
          <br />
          {this.props.description}
        </Content_Field>
        <ReaderMore state={stateElement} color={color}>
          <span onClick={() => ClickChange()} style={{ cursor: "pointer" }}>
            قراءة المزيد
          </span>
        </ReaderMore>
        <Link to={`/courses/${this.props.titlePath}`}>
          <ButtonField state={stateElement} color={color}>
            الانتقال الى المسارات
          </ButtonField>
        </Link>
        <ReadLit
          state={stateElement}
          color={color}
          onClick={() => ClickChange()}
        >
          معلومات أقل
        </ReadLit>
      </Field>
    );
  }
}

export default FieldComponent;
