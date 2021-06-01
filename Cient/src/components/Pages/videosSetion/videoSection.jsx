import React, { Component } from 'react'
import {ListVideosItem, BackToHome} from '../../styled/PagesStyle'
import { Link } from 'react-router-dom'
import Header from '../../Header/Header'
import ListVideosItemComponent  from './ListVideosItem'
import NotFound from '../../NotFound'
import PageListVideos  from './PageListVideos'
import axios from 'axios'
import './style.css'
import LodingPage from '../../Loding'
//fetch Data
export default class ListVideos extends Component{
    state = { TitleCourses : [], dataFromDataBase : [] , Loding : true}
    componentDidMount(){
        this.setState({Loding : true})
        axios.get(`https://server-se-academy.herokuapp.com/videos`)
        .then(Items => {
            this.setState({dataFromDataBase : Items.data})
            const CourseTitles = this.state.dataFromDataBase.map(item => item.course_title)
            this.setState({TitleCourses : CourseTitles, Loding:false})})
            .catch(err => console.log(err))
 }
    render(){
        const backPage = () => {
            this.props.history.goBack()
        }
        const LinkThisPage = this.props.location.pathname
        const Data = this.state.dataFromDataBase
        function Page(){
         const infoDataArray =  Data.filter(item => item.course_title == data)
        const infoDataComponentSort = infoDataArray.sort((e,a)=> e.episode > a.episode ? 1 : -1)
        const infoDataComponent = infoDataComponentSort.map(item =>{
         const { episode,  image_video, colorThem, video_title, _id} = item
            return (
                <ListVideosItem color={colorThem} >
                <ListVideosItemComponent
                key={_id}
                 color={colorThem}
                  episode={episode}
                   title={video_title}
                    BefforLink={LinkThisPage}
                     image={image_video}/>
                </ListVideosItem>
               )
           })
           const ColorThem = infoDataArray[0].colorThem
           const nameChannel = infoDataArray[0].name_Channel
           const nameCourse = infoDataArray[0].course_name
           const colorThem = infoDataArray[0].colorThem
           const link_video = infoDataArray[0].link_videos
           return (
            <>
                    <Header color={colorThem}/>
                    <BackToHome onClick={ ()=> backPage()}> <i class="fas fa-arrow-right"></i> العودة للخلف</BackToHome>
                    <PageListVideos
                     color={ColorThem}
                     link={link_video}
                    nameChannel={nameChannel}
                    nameCourse={nameCourse}
                    Component={infoDataComponent}/>
            </>
            )
    }
    // تاكيد صحة الرابط
        const data = this.props.match.params.nameCourse;
        const Content = this.state.Loding ? <LodingPage/> : this.state.TitleCourses.includes(data) ? <Page/> : <NotFound/>
        return (
            <>
                    {Content}
            </>
    )
}
}

