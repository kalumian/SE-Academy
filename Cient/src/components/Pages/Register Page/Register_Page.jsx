// import Style and Component-------------|
import { UnderStyled_Rp, Wrapper_Rp, CenterItems_Rp, MainRp, Input_Rp, Lable_Lg, Btn_Rp, Link_Lg, Icon_lg, Figure_lg, SpanHead_lg, Social_under_Rp, } from '../../styled/PagesStyle'
import Switch_Them from '../../styled/PagesStyle'
import IconLink from '../../../images/icon3.png' 
import Social from './social'
// import Library------------|
import React,{Component} from 'react'
import { Link } from 'react-router-dom'

//import Pages-------------|

class Register_Page extends Component{

    render(){
        const Switch = this.props.Switch 
        const Mode = this.props.mode
        console.log(Mode)
        return(
            <Wrapper_Rp Mode={Mode}>
                <Switch_Them Switch={Switch}  Mode={Mode}/>
                {/* --------------- Social Section  --------------- */}
                    <Social_under_Rp>
                        <Social Mode={Mode} icon="fab fa-telegram-plane fa-lg" title="انضم لقناتنا على التيليجرام "/>
                        <Social Mode={Mode} icon="fab fa-twitter fa-lg" title="تابع آخر الاخبار على تويتر " />
                        <Social Mode={Mode} icon="fab fa-discord fa-lg" title="تابع قناتنا على الديسكورد " />
                    </Social_under_Rp>
                <CenterItems_Rp>
               {/* --------------- Header Sections --------------- */}
                    <header className="header-LP">
                        <Figure_lg Mode={Mode}>
                            <figcaption><h1>SE Academy</h1></figcaption>
                            <Icon_lg src={IconLink} alt="Logo"/>
                        </Figure_lg>
                        <SpanHead_lg  Mode={Mode} >اكاديمية تعلّم ذاتياً</SpanHead_lg>
                    </header>
               {/* --------------- Main Sections ---------------*/}
                    <MainRp>
                        <Lable_Lg htmlFor="nameRp">اسم المستخدم</Lable_Lg>
                        <Input_Rp id="nameRp" type="text"/>

                        <Lable_Lg htmlFor="emailRp">البريد الإلكتروني</Lable_Lg>
                        <Input_Rp id="emailRp" type="email"/>

                        <Lable_Lg htmlFor="passwordRp">كلمة المرور</Lable_Lg>
                        <Input_Rp type="password"   id=" passwordRp"/>

                        <Lable_Lg htmlFor="repasswordRp">كلمة المرور</Lable_Lg>
                        <Input_Rp type="password"   id="repasswordRp"/>

                        <Lable_Lg htmlFor="dateRp">كلمة المرور</Lable_Lg>
                        <Input_Rp type="date"   id="dateRp"/>

                        <Link to="/"><Btn_Rp>انشاء حساب</Btn_Rp></Link>

            
                    </MainRp>
                    {/* --------------- Under Sections ---------------*/}
                    <UnderStyled_Rp >
                            <span><Link_Lg  Mode={Mode} to="/login">تسجيل الدخول</Link_Lg></span>
                    </UnderStyled_Rp>
                </CenterItems_Rp>
            </Wrapper_Rp>
        )
    }

}
export default Register_Page;
