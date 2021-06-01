import React from 'react'
import FieldSection from './FieldSection'
import Slider from './slider'
import Header from '../../Header/Header'
import Paragraf from '../AboutWebSite/Paragraf'
import { Title_Home_Page , MT_25px} from '../../styled/PagesStyle'

const MoreForAcademy = <a>المزيد عن الاكاديمية</a>

function Home() {
    return (
        <>
            <Header/>
            <MT_25px/>
            <Title_Home_Page>أكاديمية التعليم الذاتي</Title_Home_Page>
            <div className="header-content">
            <Paragraf
                    paragraf={`اليوتيوب بحرٌ غنيٌّ بالمعلومات ولكن طريقة الوصول الى تلك المقاطع التعليمية تلاقي صعوبات احياناً من المتعلم او من خوارزميات البحث لليوتيوب وهذا ما يؤدي الى خفض اقبال الناس على زيادة التحصيل العلمي ولا احد ينكر كفاءة صانعين المحتوى العلمي الموجود على منصة اليوتيوب مقدمين محتواهم بشكل مجاني , فلهذا وُجدت اكاديمية تعلم ذاتياً ,لتسهل عناء البحث وتوفر تلك المقاطع التعليمية وتعرضها للمتعلم على شكل مجالات ومسارات ودورات يسهل التنقل والتصفح بينها `}
                    title_link={'المزيد عن الاكاديمية'}
                    link={'/About-Academy'}
                    title2={"المجالات"}
                    paragraf2={'(المجال المتاح حالياً هو مجال البرمجة)المجالات هي اول تقسيمات المحتوى العلمي في اكاديمية تعلم ذاتياً وتعنى بفصل جميع العلوم الى مواضيع عامة يسهل للمتعلم اختيار مجاله الذي يرغب بالخوض فيه'}
                    title_link2={'انقر لتصفّح المجالات'}
                    />
            </div>
            <FieldSection/>
        </>
    )
}

export default Home
