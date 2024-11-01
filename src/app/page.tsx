"use client"

import NAVBAR from "./landing-page/1.navigation-bar/page";
import SUPPORT from "./landing-page/10.supportCoaching/page";
import OURCOACHING from "./landing-page/11.ourCoaching/page";
import TESTIMONIAL from "./landing-page/12.testimonialSection/page";
import PROCESSOVER from "./landing-page/13.processOverview/page";
import RECENTBLOG from "./landing-page/14.recentBlogs/page";
import FOOTER from "./landing-page/15.footer/page";
import HERO from "./landing-page/2.heroSection/page";
import CARDSHOW from "./landing-page/3.cardShow/page";
import WHYCHOOSEUS from "./landing-page/4.whyChooseUs/page";
import SCROLCONT from "./landing-page/5.scrollingContainer/page";
import SCOLCONT from "./landing-page/5.scrollingContainer/page";
import OURCOUNTRY from "./landing-page/6.ourCountries/page";
import VISASEC from "./landing-page/7.visaSection/page";
import AVAILCOUNTR from "./landing-page/8.availableCountries/page";
import GETOURBEST from "./landing-page/9.getOurBEstOffers/page";


// export default function Home() {
//   return (

  
//   );
// }


export default function Home() {
  return (

    //  Full Body after cover grey color 
    <div className="bg-[#F1F5EB] w-full">

  

      <NAVBAR />
      <HERO />
      <CARDSHOW />
      <WHYCHOOSEUS />
      <SCROLCONT />
      <OURCOUNTRY />
      <VISASEC />
      <AVAILCOUNTR />
      <GETOURBEST />
      <SUPPORT />
      <OURCOACHING />
      <TESTIMONIAL />
      <PROCESSOVER />
      <RECENTBLOG />
      <FOOTER />

    </div>
  );
}




