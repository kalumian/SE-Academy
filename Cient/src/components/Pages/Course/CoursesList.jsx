import React from "react";
import { Link } from "react-router-dom";
import {
  CourseSection,
  Image_course,
  SpanBoxHover,
  Image_Logo,
  TextBoxHover,
  ButtonBoxHover,
  CourseTitle,
  CourseSectionLogo,
} from "../../styled/PagesStyle";

function CoursesList({
  colorThem,
  imageContent,
  date,
  course,
  title,
  CountVid,
  nameChannel,
  logoChannel,
  thisLink,
}) {
  return (
    <>
      <CourseSection>
        <Image_course color={colorThem} src={imageContent} alt={course} />
        <SpanBoxHover>
          <TextBoxHover color={colorThem}>{title}</TextBoxHover>
          <TextBoxHover color={colorThem}>{date}</TextBoxHover>
          <TextBoxHover color={colorThem}>
            عدد مقاطع الفيديو : {CountVid}
          </TextBoxHover>
          <Link to={`${thisLink}/${course}`}>
            <ButtonBoxHover color={colorThem}>تصفح الدورة</ButtonBoxHover>
          </Link>
        </SpanBoxHover>
        <CourseTitle color={colorThem}>{nameChannel}</CourseTitle>
      </CourseSection>
      <CourseSectionLogo>
        <Image_Logo src={logoChannel} alt={course} color={colorThem} />
      </CourseSectionLogo>
    </>
  );
}

export default CoursesList;
