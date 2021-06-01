import React, { Component } from 'react'
import {BackToHome, ContainerCourseSection} from '../../styled/PagesStyle'
import { Link } from 'react-router-dom'
import Header from '../../Header/Header'
import CoursesList from './CoursesList'
import CourseListPage from './CourseListPage'
import NotFound from '../../NotFound'
import axios from 'axios'
import LodingPage from '../../Loding'
require('dotenv').config()
//fetch Data
export default class Course extends Component{
    state = { TitleSections : [], dataFromDataBase : [], Loding : false}
    componentDidMount(){
        this.setState({Loding : true})
        axios.get(`https://server-se-academy.herokuapp.com/courses`)
        .then(Items => {
            this.setState({dataFromDataBase : Items.data})
            const SectionsTitles = this.state.dataFromDataBase.map(item => item.title_section)
            this.setState({TitleSections : SectionsTitles, Loding : false})
        })
        .catch(err => console.log(err))
    }
    render(){
       const backPage = () => {
            this.props.history.goBack()
        }
        const Section = this.props.match.params.nameCourses;
        const thisLink = this.props.location.pathname
        const Data = this.state.dataFromDataBase
        function Page(){
        const infoDataArray =  Data.filter(item => item.title_section == Section)
        const infoDataComponent = infoDataArray.map(item =>{
        const {course, title, colorThem, Date, number_oF_Video, logo_Channle, image_video, Channle, _id} = item
            return (
                <ContainerCourseSection>
                    <CoursesList
                        key={_id}
                        colorThem={colorThem}
                        imageContent={image_video} 
                        date={Date}
                        logoChannel={logo_Channle} 
                        nameChannel={Channle}
                        CountVid={number_oF_Video} 
                        course={course} 
                        title={title}
                        thisLink={thisLink}/>
                </ContainerCourseSection>
               )
           })
           const {colorThem} = infoDataArray[0]
           return (
               <>
                <Header colo={colorThem}/>
                <BackToHome onClick={ ()=> backPage()}> <i class="fas fa-arrow-right"></i> العودة للخلف</BackToHome>
               <CourseListPage component={infoDataComponent}/>
               </>
            )
    }
    const Content =  this.state.Loding ? <LodingPage/> : this.state.TitleSections.includes(Section) ?<Page/> : <NotFound/>
        return (
            <div>

                    {Content}
            </div>
    )
}
}

