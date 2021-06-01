import React from "react";
import { Title_Home_Page } from "../../styled/PagesStyle";
import Header from "../../Header/Header";
import Paragraf from "./Paragraf";
function AboutWebSite() {
  return (
    <>
      <Header />
      <section className="Section-About">
        <Title_Home_Page>عن الاكاديمية</Title_Home_Page>
        <Paragraf
          title={"الفكرة الرئيسية"}
          paragraf={`اليوتيوب بحرٌ غنيٌّ بالمعلومات ولكن طريقة الوصول الى تلك المقاطع التعليمية تلاقي صعوبات احياناً من المتعلم او من خوارزميات البحث لليوتيوب وهذا ما يؤدي الى خفض اقبال الناس على زيادة التحصيل العلمي ولا احد ينكر كفاءة صانعين المحتوى العلمي الموجود على منصة اليوتيوب مقدمين محتواهم بشكل مجاني , فلهذا وُجدت اكاديمية تعلم ذاتياً ,لتسهل عناء البحث وتوفر تلك المقاطع التعليمية وتعرضها للمتعلم على شكل مجالات ومسارات ودورات يسهل التنقل والتصفح بينها `}
          title2={"اهدافنا"}
          paragraf2={
            "اساس فكرة الموقع لم تكن ربحية بتاتاً , فهدفنا الأول والأساسي هو توفير وتسهيل الوصول الى تلك الكنوز المدفونة في عدم القدرة على البحث بشكل صحيح وفي صعوبة البحث على منصة الوتيوب"
          }
          title3={"تطوير الموقع (مهم)"}
          paragraf3={
            "بلا شك قدمنا كل ما نستطيع ولكن بلا شك هناك الكثير من الاخطاء مع إمكانية توفير الكثير من الاضافات المتاحة ولذلك تخضع الاكاديمية لعمليات تجريبية وبحثية وعلماً بأن اطلاق الموقع إطلاق تجريبي"
          }
        />
        <h2 className="About-title">عن منشئ الاكاديمية</h2>
        <ul className="About-list">
          <li className="About-ltem">
            <strong>الاسم:</strong> محمد حسن كالو
          </li>
          <li className="About-ltem">
            <strong>المهارات البرمجية: </strong>
            <strong>HTML5</strong> &<strong>CSS3</strong> &
            <strong>JavaScropt</strong> &<strong>NodeJs</strong> &
            <strong>ExpressJS</strong> &<strong>MongoDB</strong> &
            <strong>ReactJs</strong>
          </li>
          <li className="About-ltem">
            <strong>قنوات التواصل:</strong>
            <ol className="connect-List">
              <li className="connect">
                <a href="https://github.com/kalumian">https://github.com</a>{" "}
                <strong>:GitHub</strong>
              </li>
              <li className="connect">
                {" "}
                tradation12@gmail.com <strong>:Email</strong>
              </li>
              <li className="connect">
                <strong>Twitter: </strong>
              </li>
            </ol>
          </li>
        </ul>
      </section>
    </>
  );
}

export default AboutWebSite;
