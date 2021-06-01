import React, { Component } from "react";
// import component
import { MT_25px, BackToHome } from "../../styled/PagesStyle";
import ShowVideoSection from "./ShowVideoSection";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import NotFound from "../../NotFound";
import { PathNextEp, PathBackEp, Path_Back_One_Unit } from "../../Functions";
import axios from "axios";
import "./style.css";
import LodingPage from "../../Loding";
//fetch Data
export default class ShowVideo extends Component {
  state = {
    TitleCoursesAndEpisode: [],
    dataFromDataBase: [],
    StateSpanEndVideo: false,
    Loding: false,
  };
  componentDidMount() {
    this.setState({ Loding: true });
    axios
      .get(`https://server-se-academy.herokuapp.com/videos`)
      .then((Items) => {
        this.setState({ dataFromDataBase: Items.data });
        const CourseTitle = this.state.dataFromDataBase.map((item) => [
          item.course_title,
          item.episode,
        ]);
        this.setState({ TitleCoursesAndEpisode: CourseTitle, Loding: false });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const backPage = () => {
      this.props.history.goBack();
    };
    // Link & Path
    const PathName = this.props.location.pathname;
    const episode = this.props.match.params.episode;
    const PathNextEps = PathNextEp(episode, PathName);
    const PathBackEps = PathBackEp(episode, PathName);
    const Path_Back_One_Units = Path_Back_One_Unit(PathName);
    const Data = this.state.dataFromDataBase;
    // change mode span after video
    const changeStateSpanEndVideo = () => {
        this.setState({ StateSpanEndVideo: true });
      },
      replayVideo = () => {
        this.setState({ StateSpanEndVideo: false });
      },
      StateSpanEndVideo = this.state.StateSpanEndVideo;
    // function Page
    const CourseEpisode = this.state.TitleCoursesAndEpisode;
    function Page() {
      const infoDataArray = Data.filter(
        (item) =>
          CourseEpisode[arr2][0] === item.course_title &&
          CourseEpisode[arr2][1] === item.episode
      );
      const infoDataComponent = infoDataArray.map((item) => {
        const { episode, link_videos, colorThem, video_title, _id } = item;
        return (
          <>
            <ShowVideoSection
              key="_id"
              color={colorThem}
              title={video_title}
              episode={episode}
              PathNextEps={PathNextEps}
              PathName={PathName}
              LinkVideo={link_videos}
              Path_Back_One_Units={Path_Back_One_Units}
              PathBackEps={PathBackEps}
              changeStateSpanEndVideo={changeStateSpanEndVideo}
              replayVideo={replayVideo}
              StateSpanEndVideo={StateSpanEndVideo}
            />
          </>
        );
      });
      const { colorThem } = infoDataArray[0];
      return (
        <>
          <Header color={colorThem} />
          <BackToHome onClick={() => backPage()}>
            {" "}
            <i class="fas fa-arrow-right"></i> العودة للخلف
          </BackToHome>
          {infoDataComponent}
          <MT_25px />
        </>
      );
    }
    // تاكيد صحة الرابط.
    const data = this.state.TitleCoursesAndEpisode;
    const CourseInPath = this.props.match.params.nameCourse;
    const EpisodeInPath = this.props.match.params.episode;
    const arr = [];
    for (let i = 0; i < data.length; i++) {
      arr.push(
        this.state.TitleCoursesAndEpisode[i][0] === CourseInPath &&
          this.state.TitleCoursesAndEpisode[i][1] === Number(EpisodeInPath)
      );
    }
    const arr2 = arr.indexOf(true);
    const Content = this.state.Loding ? (
      <LodingPage />
    ) : arr.includes(true) ? (
      <Page />
    ) : (
      <NotFound />
    );
    return <>{Content}</>;
  }
}
