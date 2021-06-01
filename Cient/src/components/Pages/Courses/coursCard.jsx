import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {BtnCourses, ReadMoreCourses, CoursesCard, CoursesCardIcon, TitleCoursesCard, PCoursesCard } from '../../styled/PagesStyle'

class CoursCard extends Component{
    state = {stateParagraf: true}
    render(){
        const  readMore = () => {
            this.state.stateParagraf ? this.setState({stateParagraf:false}) : this.setState({stateParagraf:true})
        }
        const readMoreReadLet = this.state.stateParagraf ? "اقرأ المزيد" : "تفاصيل أقل"
        const {Icon, Title, colorThem, beforPath, SectionTitle} = this.props
    return (
    <CoursesCard>
        <CoursesCardIcon color={colorThem} className={Icon} ></CoursesCardIcon>
        <TitleCoursesCard>{Title}</TitleCoursesCard>
        <PCoursesCard state={this.state.stateParagraf} >{this.props.Description}</PCoursesCard>
        <ReadMoreCourses color={colorThem} onClick={() => readMore()}>{readMoreReadLet}</ReadMoreCourses>
       <Link to={`${beforPath}/${SectionTitle}`}><BtnCourses color={colorThem} >تصفح الدورات</BtnCourses></Link>
    </CoursesCard>
    )
}
}
export default CoursCard
