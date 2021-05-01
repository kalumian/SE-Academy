import React from 'react'
import { Container, Title_Home_Page, SmallLine, MidLine, CoursesSection } from '../../styled/PagesStyle'

function ListCoursesPage({component}) {
    return (
        <Container>
         <Title_Home_Page>المسارات</Title_Home_Page>
        <SmallLine style={{marginBottom: '4%'}}/>
        <MidLine/>
            <CoursesSection>
                {component}
            </CoursesSection>
        </Container>
    )
}

export default ListCoursesPage
