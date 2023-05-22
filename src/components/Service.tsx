"use client";
import React from "react";
import ServiceCard from "./ServiceCard";
import Consulting from "../../img/consulting.png";
import Mentorship from "../../img/mentorship.png";
import Advocacy from "../../img/advocacy.png";
import Foundation from "../../img/foundation.png";
import Agrolearn from "../../img/agrolearn.png";

const descriptions: string[] = [
  "As a seasoned consultant with years of experience working with business in the Agriculture, social and commercial sectors, I provide customized solutions to help you achieve your goals. Whether you need assistance with strategy development, process improvement, or team management.",
  "My approach to mentorship is rooted in empathy, compassion, and collaboration. I believe that everyone has unique strengths and challenges, and that the best way to achieve success is to build on those strengths while addressing areas for growth. ",
  "Welcome to my advocacy services! If you're looking to make a difference in your community or beyond, you've come to the right place. As an advocate, I work to promote social and political change through awareness-raising, community organizing, and policy reform. ",
  "As a foundation and philanthropy consultant, I help individuals and organizations develop effective strategies for social impact. With my experience and expertise, I can help you maximize the effectiveness of your philanthropic efforts and make a meaningful difference in the world.",
  "Online learning is a cost-effective and flexible way to equip the next generation of agrarian leaders with the knowledge and skills needed to address challenges in the agricultural industry. It offers practical and experiential learning opportunities, access to the latest research and technologies, and can help bridge the gap between traditional education and emerging technologies. Online learning can also help address the shortage of skilled agricultural workers and foster collaboration and innovation among agricultural professionals. As such, investing in online learning is essential to prepare the agricultural leaders of tomorrow.",
];
function Service() {
  function handleOnclick(): void {
    window.location.href = "https://agrolearn.org";
  }

  return (
    <div className="flex flex-col bg-service pb-8 items-center">
      <div className="lg:max-w-[1127px]  m-auto">
        <h3 className="h3 text-center m-6 pt-[90px] mb-[33px]">SERVICES</h3>
        <div className="flex items-center justify-center">
          <p className="p justify-center text-center items-center w-[70%] mb-[80px]">
            Get organized and increase productivity with my professional virtual
            assistant services. Contact me today to learn more!
          </p>
        </div>
        <div className="grid grid-cols-1 px-8 lg:grid-cols-2 gap-9">
          <ServiceCard
            icon={Consulting}
            title={"Consulting"}
            className="bg-ta-purple text-taWhite"
            description={descriptions[0]}
          />
          <ServiceCard
            icon={Mentorship}
            className="bg-ta-red text-taWhite"
            title={"Mentorship"}
            description={descriptions[1]}
          />
          <ServiceCard
            icon={Advocacy}
            className="bg-ta-cyan text-taWhite"
            title={"Advocacy"}
            description={descriptions[2]}
          />
          <ServiceCard
            icon={Foundation}
            className="bg-ta-cream "
            title={"Foundation"}
            isTextBlack={true}
            description={descriptions[3]}
          />
          <div className="lg:col-span-2">
            <ServiceCard
              icon={Agrolearn}
              className="bg-ta-green gap-0 lg:gap-7 text-taWhite"
              full={true}
              title={"Agrolearn"}
              description={descriptions[4]}
              onClick={handleOnclick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
