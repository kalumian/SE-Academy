import React from "react";
import {
  MT_25px,
  Container,
  Title_Home_Page,
  SmallLine,
  MidLine,
  ListCoursesSection,
} from "../../styled/PagesStyle";

function CourseListPage({ component }) {
  return (
    <Container>
      <Title_Home_Page>الدورات</Title_Home_Page>
      <SmallLine />
      <MidLine />
      <ListCoursesSection>{component}</ListCoursesSection>
    </Container>
  );
}

export default CourseListPage;
