import React from 'react'
import { Title_Home_Page, VideoSection, ButtonInButtonSectionLink, SpanEndVidBox,LinkinSpanEndVidBox, BtnSection, Arrow, ArrowIcon, NextVid, ButtonInButtonSection, ButtonInButtonSectionTitle} from '../../styled/PagesStyle'
import ReactPlayer from 'react-player'
import {Link} from "react-router-dom"

function ShowVideoSection({ replayVideo ,color, title, episode, PathNextEps, PathName , LinkVideo, Path_Back_One_Units, PathBackEps, StateSpanEndVideo, changeStateSpanEndVideo }) {
    return (
        <>
                <Title_Home_Page style={{textShadow:` 0 0 4px ${color}`}}>{title}  ({episode}) </Title_Home_Page>
                    <VideoSection color={color}>
                    <ReactPlayer
                     controls
                      url={LinkVideo}
                        width="100%"
                         height="100%" 
                         style={{borderRight: `solid 12px ${color}`,borderLeft: `solid 12px ${color}`,borderRadius: '15px',boxShadow: '0 0 7px black'}}
                         onEnded={() => changeStateSpanEndVideo()}
                         
                         />
                        <SpanEndVidBox mode={StateSpanEndVideo}>
                            <Link to={PathNextEps}><LinkinSpanEndVidBox color={color}>الفيديو التالي</LinkinSpanEndVidBox></Link>
                            <Link href={PathName} onClick={() => replayVideo()}><LinkinSpanEndVidBox color={color}>إعادة الفيديو</LinkinSpanEndVidBox></Link>
                        </SpanEndVidBox>

                    </VideoSection>
                    
                <BtnSection>
                <Arrow>
                    <ArrowIcon color={color} className="fas fa-arrow-right"></ArrowIcon>
                    <NextVid  to={PathNextEps} color={color} >الحلقة التالية</NextVid>
                </Arrow>

                <ButtonInButtonSection color={color}>
                <ButtonInButtonSectionLink href={LinkVideo}><ButtonInButtonSectionTitle>مشاهدة الفيديو من اليوتيوب</ButtonInButtonSectionTitle></ButtonInButtonSectionLink>
                </ButtonInButtonSection>

                    <ButtonInButtonSection color={color}>
                        <ButtonInButtonSectionLink href={Path_Back_One_Units}><ButtonInButtonSectionTitle>العودة الى قائمة الدورات</ButtonInButtonSectionTitle></ButtonInButtonSectionLink>
                    </ButtonInButtonSection>

                    <Arrow>
                    <NextVid  to={PathBackEps}  color={color}>الحلقة السابقة</NextVid>
                        <ArrowIcon color={color} className="fas fa-arrow-left"></ArrowIcon>
                    </Arrow>
                    
                </BtnSection>
                </>
    )
}

export default ShowVideoSection
