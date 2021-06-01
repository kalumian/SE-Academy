import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Styled All Pages

// syzing
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1250px",
  desktop: "1440px",
};
// --------------------- Login Page ----------------------------
export const Wrapper_Lg = styled.div`
  background: ${(props) => (props.Mode === true ? "#012733" : "#ffffff")};
  height: 100%;
  min-height: 100vh;
`;
export const CenterItems = styled.section`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// Header
export const Figure_lg = styled.figure`
  display: flex;
  justify-content: center;
  color: ${(props) => (props.Mode === true ? "#fff" : "#012733")};
  font-size: 28px;
  font-weight: bold;
  @media only screen and (min-width: ${size.mobileS}) and (max-width: ${size.tablet}) {
    font-size: 20px;
  }
  @media only screen and (min-width: ${size.tablet}) and (max-width: ${size.laptopL}) {
    font-size: 24px;
  }
`;
export const SpanHead_lg = styled.span`
  color: ${(props) => (props.Mode === true ? "#fff" : "#012733")};
  font-size: 16px;
  display: inline-block;
  text-align: right;
  font-weight: bold;
  margin: 0 0px 15px 87px;
  align-self: center;
  width: 14rem;

  @media only screen and (min-width: ${size.mobileS}) and (max-width: ${size.tablet}) {
    font-size: 13px;
    margin: 0 auto 10px 0px;
    width: 14rem;
  }
  @media only screen and (min-width: ${size.tablet}) and (max-width: ${size.laptopL}) {
    font-size: 16px;
    width: 9rem;
    margin-left: 8rem;
  }
`;
export const Icon_lg = styled.img`
  width: 12%;
  @media only screen and (min-width: ${size.mobileS}) and (max-width: ${size.tablet}) {
    width: 4rem;
  }
  @media only screen and (min-width: ${size.tablet}) and (max-width: ${size.laptopL}) {
    width: 5rem;
  }
`;
// body
export const MainLg = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;
  background: #fff;
  width: 25rem;
  height: 20rem;
  border-radius: 4px;
  align-items: center;
  margin: 0 auto;
  border: 1px solid #c6c6c6;
  @media only screen and (min-width: ${size.mobileS}) and (max-width: ${size.tablet}) {
    width: 18rem;
    height: 15rem;
  }
  @media only screen and (min-width: ${size.tablet}) and (max-width: ${size.laptopL}) {
    width: 22rem;
    height: 17rem;
  }
`;
export const Input_Lg = styled.input`
  border-radius: 5px;
  margin: 0 auto;
  width: 72%;
  padding: 14px;
  height: 13%;
  border: solid 1px #999;
  font-size: 16px;
  &:hover {
    border: black solid 1px;
    transition: border 1s;
  }
`;
export const Lable_Lg = styled.label`
  font-size: 14px;
  margin-top: 6%;
  text-align: right;
  width: 72%;
  margin-bottom: 5px;
  color: #484848;
  font-weight: bolder;
  @media only screen and (min-width: ${size.mobileS}) and (max-width: ${size.tablet}) {
    font-size: 13px;
  }
`;
export const Btn_Lg = styled.button`
  border: 1px solid;
  margin-top: 5%;
  width: 72%;
  height: 16%;
  background: #4ba1ff;
  color: #fff;
  font-size: 14px;
  border-radius: 6px;
  font-weight: bolder;
  cursor: pointer;
  &:hover {
    background: #3f91e9;
  }
`;
// footer
export const UnderStyled_lg = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  align-items: center;
`;
export const Link_Lg = styled(Link)`
  color: ${(props) => (props.Mode === true ? "#999" : "#5a5a5a")};
  font-weight: 600;
  text-decoration: none;
  font-size: 14px;
  &:hover {
    color: ${(props) => (props.Mode === true ? "#7e7e7e" : "black")};
  }
`;
// pm
export const Social_under_lg = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 40rem;
  // media query
  @media only screen and (min-width: ${size.mobileS}) and (max-width: ${size.tablet}) {
    width: 18rem;
  }
  @media only screen and (min-width: ${size.tablet}) and (max-width: ${size.laptopL}) {
    width: 30rem;
    padding-bottom: 10px;
  }
`;
export const Social_under_li_lg = styled.li`
  width: 130px;
  margin-top: ${(props) => props.pd};
  margin-bottom: ${(props) => (props.pd == "50px" ? "15px" : "0px")};

  @media only screen and (min-width: ${size.mobileS}) and (max-width: ${size.tablet}) {
    width: 80px;
    margin-top: ${(props) => (props.pd == "50px" ? "20px" : "0px")};
  }
  @media only screen and (min-width: ${size.tablet}) and (max-width: ${size.laptopL}) {
    margin-top: ${(props) => (props.pd == "50px" ? "15px" : "0px")};
    margin-bottom: ${(props) => (props.pd == "50px" ? "15px" : "0px")};
    width: 100px;
  }
`;
export const Social_Link = styled(Link)`
  color: ${(props) => (props.Mode === true ? "#fff" : "#012733")};
  text-decoration: auto;
  font-size: 14px;
  font-weight: bolder;
  &:hover {
    color: ${(props) => (props.Mode === true ? "#dbdbdb" : "#4b4b4b")};
  }
  @media only screen and (min-width: ${size.mobileS}) and (max-width: ${size.tablet}) {
    font-size: 11px;
  }
  @media only screen and (min-width: ${size.tablet}) and (max-width: ${size.laptopL}) {
    font-size: 13px;
  }
`;
export const Social_Link_span = styled.span`
  display: block;
  text-align: center;
`;
export const Switch_continer = styled.div`
  margin: 0 5px 10px 0;
  padding: 10px 0 0 0;
  color: #fff;
  display: flex;
  align-items: center;
  width: 110px;
  justify-content: space-around;
  @media only screen and (min-width: ${size.mobileS}) and (max-width: ${size.tablet}) {
    width: 70px;
  }
  @media only screen and (min-width: ${size.tablet}) and (max-width: ${size.laptopL}) {
    width: 80px;
    padding: 15px 15px 0 0;
  }
`;
//-------------------- -------------------------
//Span Switch Light & Dark Mode

export const Squer_switch = styled.span`
  background: ${(props) => (props.Mode === true ? "#fff" : "#012733")};
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 1px;
  cursor: pointer;
  @media only screen and (min-width: ${size.mobileS}) and (max-width: ${size.tablet}) {
    width: 8px;
    height: 8px;
  }
  @media only screen and (min-width: ${size.tablet}) and (max-width: ${size.laptopL}) {
    width: 8px;
    height: 8px;
  }
`;
const Title_switch = styled.span`
  color: ${(props) => (props.Mode === true ? "#fff" : "#012733")};
  cursor: pointer;
  font-weight: bold;

  @media only screen and (min-width: ${size.mobileS}) and (max-width: ${size.tablet}) {
    font-size: 10px;
  }
  @media only screen and (min-width: ${size.tablet}) and (max-width: ${size.laptopL}) {
    font-size: 10px;
  }
`;
export default class Switch_Them extends Component {
  render() {
    return (
      <Switch_continer>
        <Squer_switch
          Mode={this.props.Mode}
          onClick={() => this.props.Switch()}
        />{" "}
        <Title_switch
          Mode={this.props.Mode}
          onClick={() => this.props.Switch()}
        >
          {this.props.Mode === true ? "Light Mode" : "Dark Mode"}
        </Title_switch>
      </Switch_continer>
    );
  }
}
// --------------------- Register Page -------------------------

export const Wrapper_Rp = styled(Wrapper_Lg)`
  height: 100%;
  min-height: 100vh;

  @media only screen and (min-width: ${size.mobileS}) and (max-width: ${size.tablet}) {
    height: 100%;
    min-height: 100vh;
    padding-bottom: 4rem;
  }
  @media only screen and (min-width: ${size.tablet}) and (max-width: ${size.laptopL}) {
    height: 100%;
    min-height: 100vh;
  }
`;
export const CenterItems_Rp = styled(CenterItems)`
  top: 50%;
  @media only screen and (min-width: ${size.mobileS}) and (max-width: ${size.tablet}) {
  }
  @media only screen and (min-width: ${size.tablet}) and (max-width: ${size.laptopL}) {
  }
`;
// body
export const MainRp = styled(MainLg)`
  height: 37rem;
  @media only screen and (min-width: ${size.mobileS}) and (max-width: ${size.tablet}) {
    width: 18rem;
    height: 30rem;
  }
  @media only screen and (min-width: ${size.tablet}) and (max-width: ${size.laptopL}) {
    width: 23rem;
    height: 33rem;
  }
`;
export const Input_Rp = styled(Input_Lg)`
  height: 42px;
  @media only screen and (min-width: ${size.mobileS}) and (max-width: ${size.tablet}) {
    width: 210px;
    height: 34px;
  }
  @media only screen and (min-width: ${size.tablet}) and (max-width: ${size.laptopL}) {
    width: 270px;
    height: 34px;
  }
`;
export const Btn_Rp = styled(Btn_Lg)`
  height: 55px;
  width: 18rem;

  @media only screen and (min-width: ${size.mobileS}) and (max-width: ${size.tablet}) {
    height: 46px;
    width: 13rem;
  }
  @media only screen and (min-width: ${size.tablet}) and (max-width: ${size.laptopL}) {
    height: 46px;
    width: 17rem;
  }
`;
// footer

export const UnderStyled_Rp = styled(UnderStyled_lg)`
  margin: 10px 0 10px 0;
`;
export const Social_under_Rp = styled(Social_under_lg)`
  align-items: center;
  height: 20rem;
  flex-direction: column;
  width: 32rem;
  margin: 12rem 7rem 0px 0px;
  position: absolute;

  @media only screen and (min-width: ${size.mobileS}) and (max-width: ${size.tablet}) {
    width: 20rem;
    height: 3rem;
    flex-direction: row;
    width: 100%;
    margin: 39rem auto;
  }
  @media only screen and (min-width: ${size.tablet}) and (max-width: ${size.laptopL}) {
    height: 24rem;
    width: 34rem;
    flex-direction: column;
    margin: 12rem 4rem 0px 0px;
    align-items: start;
  }
`;
export const Social_under_li_Rp = styled(Social_under_li_lg)`
  @media only screen and (min-width: ${size.mobileS}) and (max-width: ${size.tablet}) {
    width: 100px;
  }
  @media only screen and (min-width: ${size.tablet}) and (max-width: ${size.laptopL}) {
    width: 100px;
  }
`;
// --------------------- Header Page-------------------------
//  -------------------------------------         Home        --------------------------------------------
// *
export const Container = styled.div`
  width: 80%;
  margin: auto;
`;
export const SmallLine = styled.span`
  width: 10%;
  height: 3px;
  background: black;
  display: block;
  margin: auto;
  margin-top: 1%;
  transition: width 0.5s;
`;
export const MidLine = styled(SmallLine)`
  width: 0px;
  height: 4px;
  margin-top: 3px;
  transition: width 0.8s 0.4s;
  margin-bottom: 3%;
`;
// header
export const Fields_Section = styled.div`
  &:hover ${SmallLine} {
    width: 17%;
  }
  &:hover ${MidLine} {
    width: 75%;
  }
`;
export const Title_Home_Page = styled.h2`
  text-align: center;
  font-size: 2.2rem;
`;
// Body
export const Fields = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 1%;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: end;
  }
`;
export const Field = styled.main`
  display: flex;
  height: ${(props) => (props.state ? "40rem" : "25rem")};
  width: ${(props) => (props.state ? "48%" : "37%")};
  transition: border-bottom 0.00001s 1s, width 0.5s 0.5s, height 0.5s 1s;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 5%;
  border-radius: ${(props) => (props.state ? "8px" : "0px")};
  border-bottom: ${(props) => (props.state ? "1px solid black" : "0")};
  @media only screen and (max-width: 1024px) {
    html {
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 768px) {
    width: ${(props) => (props.state ? "75%" : "50%")};
    height: ${(props) => (props.state ? "100%" : "55%")};
    justify-content: space-around;
  }
  @media only screen and (max-width: 425px) {
    width: ${(props) => (props.state ? "100%" : "60%")};
    height: ${(props) => (props.state ? "45rem" : "25rem")};
    html {
      font-size: 10px;
    }
  }
`;
export const Header_Field = styled.header`
  font-size: ${(props) => (props.state ? "2rem" : "1.6rem")};
  text-align: center;
  padding: 1%;
  border-radius: 3px;
  color: ${(props) => props.color};
  transition: color 0.5s 1s, font-size 0.5s 1s;
  @media only screen and (max-width: 1024px) {
    html {
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 425px) {
    html {
      font-size: 10px;
    }
  } ;
`;
export const Icon_Field = styled.i`
  font-size: ${(props) => (props.state ? "0rem" : "3rem")};
  color: ${(props) => props.color};
  margin-bottom: 1%;
  opacity: ${(props) => (props.state ? "0" : "1")};
  visibility: ${(props) => (props.state ? "hidden" : "visible")};
  transition: opacity 0.3s 1s, visibility 0.3s 1s, font-size 0.3s 1s;
  @media only screen and (max-width: 1024px) {
    html {
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 425px) {
    html {
      font-size: 10px;
    }
    margin-bottom: ${(props) => (props.state ? "4%" : "-6%")};
    margin-top: 1%;
  }
  padding-bottom: 1%;
`;
export const Content_Field = styled.p`
  line-height: ${(props) => (props.state ? "2.4" : "2")};
  overflow: ${(props) => (props.state ? "scroll" : "hidden")};
  padding: 0 10% 0% 10%;
  text-align: center;
  border-left: solid 1px black;
  border-right: solid 1px black;
  text-overflow: ellipsis;
  transition: font-weight 0.5s 1s, overflow 1s 1s;
  font-weight: ${(props) => (props.state ? "700" : "400")};
`;
export const Image_p = styled.img`
  width: ${(props) => (props.state ? "100%" : "0%")};
  height: ${(props) => (props.state ? "50%" : "0%")};
  transition: width 0.5s 1s, height 0.5s 1s;
  @media only screen and (max-width: 425px) {
    width: ${(props) => (props.state ? "80%" : "0%")};
    height: ${(props) => (props.state ? "20%" : "0%")};
  }
`;
export const ReaderMore = styled.span`
  width: 100%;
  text-decoration: underline;
  padding: 3%;
  color: ${(props) => props.color};
  opacity: ${(props) => (props.state ? "0" : "1")};
  visibility: ${(props) => (props.state ? "hidden" : "visible")};
  transition: opacity 0.5s 1s, visibility 0.5s 1s;
  background: #0110201f;
  text-align: center;
  border-left: solid 1px black;
  border-right: solid 1px black;
  cursor: pointer;
  font-weight: bold;
`;
export const ButtonField = styled.button`
  font-size: 1rem;
  color: white;
  background: ${(props) => props.color};
  visibility: ${(props) => (props.state ? "visible" : "hidden")};
  opacity: ${(props) => (props.state ? "1" : "0")};
  transition: opacity 0.5s 1s, visibility 0.5s 1s, width 0.5s 1s, height 0.5s 1s;
  margin-bottom: 5%;
  width: ${(props) => (props.state ? "12rem" : "0")};
  height: ${(props) => (props.state ? "4rem" : "0")};
  border: 2px solid ${(props) => props.color};
  border-radius: 3px;
  cursor: pointer;
  font-weight: 700;
  &:hover {
    background-color: #ffffff;
    color: black;
  }
`;
export const ReadLit = styled.span`
  font-weight: 600;
  text-decoration: underline ${(props) => props.color};
  margin-bottom: 2%;
  text-align: center;
  cursor: pointer;
  visibility: ${(props) => (props.state ? "visible" : "hidden")};
  opacity: ${(props) => (props.state ? "1" : "0")};
  transition: opacity 0.5s 1s, visibility 0.5s 1s;
`;
export const MT_25px = styled.div`
  margin-top: 8%;
`;
export const Navbar = styled.nav`
  border-right: 4px solid;
  border-left: 4px solid;
  text-align: right;
  padding: 2%;
  background: ${(props) => (props.color ? props.color : "#00bcd4")};
`;
// ------------------------------------------ Slider Conainer --------------------------------------------- //
export const SliderContiner = styled.div`
  display: flex;
  justify-content: center;
  margin: 4% 0 0 0;
  height: 50vh;
`;
// ------------------------------------------- Courses Page ------------------------------------------------//
export const BackToHome = styled(Link)`
  color: #012733;
  display: inline-block;
  margin: 3%;
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 600;
`;
export const CoursesSection = styled(Fields)`
  @media only screen and (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media only screen and (max-width: 561px) {
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: normal;
  }
`;
export const CoursesCard = styled.article`
  height: 60%;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1% 0 1%;
  @media only screen and (max-width: 772px) {
    height: 60%;
    width: 45%;
  }
  @media only screen and (max-width: 450px) {
    height: 60%;
    width: 80%;
    margin-bottom: 10%;
  }
`;
export const CoursesCardIcon = styled.i`
  margin: 1% 0;
  font-size: 3.5rem;
  color: ${(props) => props.color};
`;
export const TitleCoursesCard = styled.h4`
  font-weight: 600;
  font-size: 1.5rem;
  text-align: center;
`;
export const PCoursesCard = styled.p`
  line-height: ${(props) => (props.state ? "2" : "2.3")};
  color: ${(props) => (props.state ? "#444444e0;" : "black")};
  font-size: ${(props) => (props.state ? "0.8rem" : "0.9rem")};
  overflow: ${(props) => (props.state ? "hidden" : "scroll")};
  margin: 5% 0 5% 0;
  text-align: center;
  width: ${(props) => (props.state ? "90%" : "100%")};
  height: ${(props) => (props.state ? "30%" : "50%")};
  padding: ${(props) => (props.state ? "0% 10%" : "0% 2%")};
  font-weight: ${(props) => (props.state ? "600" : "700")};
  transition: height 0.5s 0.5s, width 0.5s, padding 0.5s, font-size 0.5s 0.7s,
    color 0.5s 0.7s, font-weight 0.5s 0.7s;
  @media only screen and (max-width: 450px) {
    width: ${(props) => (props.state ? "85%" : "86%")};
  }
`;
export const ReadMoreCourses = styled.span`
  cursor: pointer;
  font-size: 0.8rem;
  margin: 2% 0 3% 0;
  text-decoration: underline ${(props) => props.color};
`;
export const BtnCourses = styled.button`
  margin-top: 7%;
  font-weight: 700;
  border-radius: 3px;
  color: #fff;
  border: 1px solid;
  background: ${(props) => props.color};
  width: 8rem;
  height: 2.4rem;
  font-size: 0.9rem;
  cursor: pointer;
`;
// ------------------------------------ List Courses Page -------------------------------------------
export const ListCoursesSection = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 1%;
  @media only screen and (max-width: 626px) {
    flex-direction: column;
    align-items: center;
  }
`;
// Body
export const ContainerCourseSection = styled.div`
  flex-direction: row-reverse;
  display: flex;
  height: 32%;
  width: 30%;
  margin: 3% 0%;
  @media only screen and (max-width: 822px) {
    width: 40%;
    margin: 3% 3%;
  }
  @media only screen and (max-width: 626px) {
    width: 70%;
    margin: 5% 0%;
  }
`;
export const CourseSectionLogo = styled.div`
  display: flex;
  flex-direction: column;
  width: 1%;
  justify-content: flex-end;
`;
export const SpanBoxHover = styled.span`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: flex;
  width: 100%;
  height: 0%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #000000c2;
  transition: height 0.5s;
`;
export const TextBoxHover = styled.h4`
  color: #ffffff;
  margin-bottom: 2%;
  text-shadow: 0 0px 2px ${(props) => props.color};
  overflow: hidden;
  opacity: 0;
  transition: overflow 0.5s 0.5s, opacity 0.5s 0.5s;
`;
export const ButtonBoxHover = styled.button`
  color: #fff;
  margin-top: 1%;
  border: 1px solid black;
  width: 0;
  font-size: 1rem;
  height: 2.6rem;
  outline: none;
  border-radius: 3px;
  background-color: ${(props) => props.color};
  font-weight: 700;
  cursor: pointer;
  overflow: hidden;
  opacity: 0;
  transition: overflow 0.5s 0.5s, opacity 0.5s 0.5s;
`;
// footer
export const CourseTitle = styled.div`
  border-bottom: solid 2px ${(props) => props.color};
  font-weight: bold;
  text-align: left;
  font-size: 1.4rem;
  padding-left: 3%;
  text-shadow: 0 0 1px ${(props) => props.color};
  border-left: solid 2px ${(props) => props.color};
  @media only screen and (max-width: 626px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 455px) {
    font-size: 1.7rem;
  }
`;
export const Image_course = styled.img`
  border-top: 3px solid ${(props) => props.color};
  border-left: 3px solid ${(props) => props.color};
  width: 100%;
  border-radius: 3% 1% 0% 0%;
  border-right: 3px solid ${(props) => props.color};
`;
export const Image_Logo = styled.img`
  border: 3px solid ${(props) => props.color};
  width: 5.3rem;
  border-radius: 50%;
  transform: translate(25%, -10%);
`;
export const CourseSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  &:hover ${SpanBoxHover} {
    height: 100%;
  }
  &:hover ${TextBoxHover} {
    overflow: visible;
    opacity: 1;
  }
  &:hover ${ButtonBoxHover} {
    overflow: visible;
    opacity: 1;
    width: 8rem;
  }
`;
// ----------------------------------------------- Videos List Section ---------------------------------------------
// Header
export const TitleChannelUnderTitle = styled.h2`
  text-decoration: underline;
  text-align: center;
  margin: 10px 0;
  text-shadow: 0 0 2px ${(props) => props.color};
  color: #000000;
`;
export const FormsVideosList = styled.form`
  display: flex;
  justify-content: space-evenly;
  margin: 2% auto;
`;
export const InputSearch = styled.input`
  font-weight: 700;
  width: 90%;
  border-radius: 3px;
  padding: 0 15px;
  font-size: 1.2rem;
  border: 2px solid ${(props) => props.color};
  text-shadow: 0 0 1px ${(props) => props.color};
`;
export const InputNumber = styled.input`
  font-weight: 700;
  width: 90%;
  border: 1px solid;
  border-radius: 3px;
  padding: 0px 39% 0 2%;
  font-size: 1.4rem;
  border: 2px solid ${(props) => props.color};
  text-shadow: 0 0 1px ${(props) => props.color};
`;
export const LableFormListVideos = styled.label`
  text-shadow: 0 0 2px ${(props) => props.color};
  font-size: 1rem;
  margin-bottom: 1%;
  font-weight: 600;
`;
export const SearchSection = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
`;
export const NumberSection = styled.label`
  display: flex;
  width: 10%;
  flex-direction: column;
  @media only screen and (max-width: 530px) {
    font-size: 0.3rem;
  }

  @media only screen and (max-width: 380px) {
    font-size: 0.1rem;
  }
`;
export const LineHeader = styled.hr`
  margin: 3% auto 0 auto;
  width: 90%;
  border: 2px solid;
  border-radius: 40%;
  border: 2px solid ${(props) => props.color};
`;
export const IconSubscribe = styled.i`
  color: white;
  font-size: 1.7rem;
`;
export const ButtonSubscribe = styled.button`
  cursor: pointer;
  width: 13rem;
  height: 4rem;
  font-weight: 700;
  color: #fff;
  background: ${(props) => props.color};
  border: 3px solid ${(props) => props.color};
  border-radius: 6px;
  align-self: flex-end;
  font-size: 1rem;
  &:hover {
    background: rgba(214, 138, 138, 0);
    color: black;
  }
  &:hover ${IconSubscribe} {
    color: black;
  }
`;

// Body
export const ListVideo = styled.section`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;
export const ListVideosItemImage = styled.img`
  width: 100%;
  border: 4px solid ${(props) => props.color};
  @media only screen and (max-width: 740px) {
    border: 2px solid ${(props) => props.color};
  }
`;
export const ListVideosItemNumber = styled.span`
  font-size: 2rem;
  margin-bottom: -3%;
  text-shadow: 0 0 3px "${(props) => props.color}";
  transition: text-shadow 0.5s;
  display: block;
  text-align: center;
`;
export const ListVideosItemName = styled.h3`
  font-size: 1.2rem;
  height: 75px;
  text-shadow: 0 0 1px ${(props) => props.color};
  text-decoration: underline;
  cursor: pointer;
  transition: text-shadow 0.5s;
  overflow: hidden;
  @media only screen and (max-width: 1080px) {
    font-size: 1rem;
    height: 60px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    height: 50px;
  }
  @media only screen and (max-width: 425px) {
    font-size: 1rem;
    height: 40px;
  }
`;
export const ListVideosItemLink = styled(Link)`
  color: black;
  text-shadow: 0 0 3px ${(props) => props.color};
  text-align: center;
`;
export const ListVideosItem = styled.article`
  width: 20%;
  margin: 2% 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover ${ListVideosItemName} {
    text-shadow: 0 0 7px ${(props) => props.color};
  }
  &:hover ${ListVideosItemNumber} {
    text-shadow: 0 0 7px ${(props) => props.color};
  }
`;

// Footer
// ----------------------------------   Show Video   --------------------------------
//body
export const VideoSection = styled.section`
  margin: 5% auto;
  width: 46%;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 355px;
  position: relative;
  width: 60%;
  @media only screen and (max-width: 1300px) {
    height: 324px;
    width: 47%;
  }
  @media only screen and (max-width: 1200px) {
    height: 304px;
    width: 47%;
  }
  @media only screen and (max-width: 100px) {
    height: 268px;
    width: 50%;
  }
  @media only screen and (max-width: 900px) {
    height: 290px;
    width: 60%;
  }
  @media only screen and (max-width: 800px) {
    height: 257px;
    width: 60%;
  }
  @media only screen and (max-width: 700px) {
    height: 223px;
    width: 60%;
  }
  @media only screen and (max-width: 600px) {
    height: 174px;
    width: 55%;
  }
  @media only screen and (max-width: 500px) {
    height: 194px;
    width: 74%;
  }
  @media only screen and (max-width: 400px) {
    height: 147px;
    width: 71%;
  }
  @media only screen and (max-width: 350px) {
    height: 127px;
    width: 71%;
  }
`;
export const SpanEndVidBox = styled.span`
  flex-direction: column;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: #0000008a;
  visibility: ${(props) => (props.mode ? "visible" : "hidden")};
  opacity: ${(props) => (props.mode ? "1" : "0")};
  transition: visibility 0.5s, opacity 0.5s;
`;
export const LinkinSpanEndVidBox = styled.span`
  border: 2px solid ${(props) => props.color};
  height: 4rem;
  font-size: 1.2rem;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  display: block;
  background-color: ${(props) => props.color};
  width: 12rem;
  text-align: center;
  border-radius: 5px;
  text-decoration: underline;
  cursor: pointer;
  padding: 5%;
  margin: 2%;
  transition: color 0.3s, background-color 0.3;
  &:hover {
    background-color: rgba(0, 0, 0, 0);
  }
`;
//footer
export const BtnSection = styled.div`
  height: 12vh;
  width: 75%;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding: 0 4%;
  @media only screen and (max-width: 742px) {
    width: 90%;
  }
  @media only screen and (max-width: 457px) {
    width: 100%;
  }
`;
export const ArrowIcon = styled.i`
  text-shadow: 0 0 5px ${(props) => props.color};
  font-size: 3rem;
  color: ${(props) => props.color};
  transition: text-shadow 0.4s;
`;
export const NextVid = styled(Link)`
  margin: 0 5%;
  text-shadow: 0 0 2px rgb(75 161 255);
  font-size: 1.3rem;
  font-weight: 700;
  transition: text-shadow 0.4s;
  color: ${(props) => props.color};
  text-decoration: none;
  @media only screen and (max-width: 742px) {
    font-size: 1rem;
  }
  @media only screen and (max-width: 742px) {
    font-size: 0.9rem;
  }
`;
export const Arrow = styled.div`
  display: flex;
  width: 28%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover ${ArrowIcon} {
    text-shadow: 0 0 10px ${(props) => props.color};
  }
  &:hover ${NextVid} {
    text-shadow: 0 0 5px ${(props) => props.color};
  }
`;
export const ButtonInButtonSectionLink = styled.a`
  font-size: 1rem;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
`;
export const ButtonInButtonSection = styled.button`
  border: 2px solid ${(props) => props.color};
  display: flex;
  margin: 0 1%;
  width: 13rem;
  height: 4.6rem;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
  font-weight: 700;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.144);
  }
  &:hover ${ButtonInButtonSectionLink} {
    color: rgb(0, 0, 0);
  }
  @media only screen and (max-width: 457px) {
    width: 12rem;
    height: 4rem;
  }
  @media only screen and (max-width: 400px) {
    width: 12rem;
    height: 4rem;
  }
`;
export const ButtonInButtonSectionIcon = styled.i`
  font-size: 2rem;
`;
export const ButtonInButtonSectionTitle = styled.span`
  font-size: 1rem;
  @media only screen and (max-width: 1108px) {
    font-size: 0.9rem;
  }
  @media only screen and (max-width: 742px) {
    font-size: 0.7rem;
  }
`;
