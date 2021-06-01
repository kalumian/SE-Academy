import React from "react";
import {
  MT_25px,
  TitleChannelUnderTitle,
  Title_Home_Page,
  FormsVideosList,
  InputSearch,
  InputNumber,
  ListVideo,
  LableFormListVideos,
  SearchSection,
  NumberSection,
  LineHeader,
  ButtonSubscribe,
  IconSubscribe,
} from "../../styled/PagesStyle";

function PageListVideos({ color, nameChannel, Component, nameCourse, link }) {
  return (
    <>
      <div>
        <Title_Home_Page style={{ textShadow: `0 0 2px ${color}` }}>
          {nameCourse}
        </Title_Home_Page>
        <TitleChannelUnderTitle color={color}>
          {nameChannel}
        </TitleChannelUnderTitle>
      </div>
      <div>
        <MT_25px />
        <div className="goToChannle">
          <a className="link_videoList" href={link}>
            <ButtonSubscribe color={color}>
              زيارة القناة على اليوتيوب{" "}
              <IconSubscribe className="fab fa-youtube"></IconSubscribe>
            </ButtonSubscribe>
          </a>
        </div>
      </div>
      <LineHeader color={color} />
      <ListVideo color={color}>{Component}</ListVideo>
    </>
  );
}

export default PageListVideos;
