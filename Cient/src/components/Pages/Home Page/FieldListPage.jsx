import React from "react";
import {
  MT_25px,
  Container,
  Title_Home_Page,
  SmallLine,
  MidLine,
  Fields_Section,
  Fields,
} from "../../styled/PagesStyle";

function FieldListPage({ listField }) {
  return (
    <Container>
      <MT_25px />
      <Fields_Section>
        <Title_Home_Page id="Section-Field">قائمة المجالات</Title_Home_Page>
        <SmallLine />
        <MidLine />
        <Fields>{listField}</Fields>
      </Fields_Section>
    </Container>
  );
}

export default FieldListPage;
