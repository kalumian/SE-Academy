// import Style and Component-------------|
import {
  Wrapper_Lg,
  CenterItems,
  MainLg,
  Input_Lg,
  Lable_Lg,
  Btn_Lg,
  UnderStyled_lg,
  Link_Lg,
  Icon_lg,
  Figure_lg,
  SpanHead_lg,
  Social_under_lg,
} from "../../styled/PagesStyle";
import Switch_Them from "../../styled/PagesStyle";
import IconLink from "../../../images/icon3.png";
import Social from "./social";
// import Library------------|
import React, { Component } from "react";
import { Link } from "react-router-dom";
//import Pages-------------|
class Login_Page extends Component {
  render() {
    const Switch = this.props.Switch;
    const Mode = this.props.mode;
    return (
      <Wrapper_Lg Mode={Mode}>
        <Switch_Them Switch={Switch} Mode={Mode} />
        <CenterItems>
          {/* --------------- Header Sections --------------- */}
          <header className="header-LP">
            <Figure_lg Mode={Mode}>
              <figcaption>
                <h1>SE Academy</h1>
              </figcaption>
              <Icon_lg src={IconLink} alt="Logo" />
            </Figure_lg>
            <SpanHead_lg Mode={Mode}>اكاديمية تعلّم ذاتياً</SpanHead_lg>
          </header>
          {/* --------------- Main Sections ---------------*/}
          <MainLg>
            <Lable_Lg htmlFor="nameLp">
              اسم المستخدم او البريد الإلكتروني
            </Lable_Lg>
            <Input_Lg id="nameLp" type="text" />
            <Lable_Lg htmlFor="passwordLp">كلمة المرور</Lable_Lg>
            <Input_Lg type="password" id=" passwordLp" />
            <Btn_Lg>
              <Link to="/home">تسجيل الدخول</Link>
            </Btn_Lg>
          </MainLg>
          {/* --------------- Under Sections ---------------*/}
          <UnderStyled_lg>
            <span>
              <Link_Lg Mode={Mode} to="#">
                نسيت كلمة المرور
              </Link_Lg>
            </span>
            <span>
              <Link_Lg Mode={Mode} to="/register">
                تسجيل مستخم جديد
              </Link_Lg>
            </span>
          </UnderStyled_lg>
          {/* --------------- Social Section  ---------------*/}
          <div>
            <Social_under_lg>
              <Social
                Mode={Mode}
                icon="fab fa-telegram-plane fa-lg"
                title="انضم لقناتنا على التيليجرام "
              />
              <Social
                Mode={Mode}
                icon="fab fa-twitter fa-lg"
                title="تابع آخر الاخبار على تويتر"
                pd="50px"
              />
              <Social
                Mode={Mode}
                icon="fab fa-discord fa-lg"
                title="تابع قناتنا على الديسكورد "
              />
            </Social_under_lg>
          </div>
        </CenterItems>
      </Wrapper_Lg>
    );
  }
}
export default Login_Page;
