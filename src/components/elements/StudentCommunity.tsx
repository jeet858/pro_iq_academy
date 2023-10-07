import React, { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import StudentBox from "./StudentBox";
import { api } from "~/utils/api";

const StudentCommunity: React.FC = () => {
  const { data: reviews, isError, isLoading } = api.review.all.useQuery();
  const [data, setData] = useState({ name: "", email: "", review: "" });

  if (isError) {
    return (
      <div
        className=" w-full items-center justify-center bg-[length:100%_100%]   bg-no-repeat sm:h-fit sm:p-8 md:h-fit md:p-8 lg:h-full lg:p-32"
        style={{ backgroundImage: 'url("./images/community_background.png") ' }}
      >
        <div className="h-44">
          <SectionHeader title="Student Community" subtitle="Feedback" />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3"></div>
      </div>
    );
  } else if (isLoading) {
    return (
      <div
        className=" w-full items-center justify-center bg-[length:100%_100%]   bg-no-repeat sm:h-fit sm:p-8 md:h-fit md:p-8 lg:h-full lg:p-32"
        style={{ backgroundImage: 'url("./images/community_background.png") ' }}
      >
        <div className="h-44">
          <SectionHeader title="Student Community" subtitle="Feedback" />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3"></div>
      </div>
    );
  }
  return (
    <div
      className=" w-full items-center justify-center bg-[length:100%_100%]   bg-no-repeat sm:h-fit sm:p-8 md:h-fit md:p-8 lg:h-full lg:p-32"
      style={{ backgroundImage: 'url("./images/community_background.png") ' }}
    >
      <div className="h-44">
        <SectionHeader title="Student Community" subtitle="Feedback" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => {
          return (
            <StudentBox
              name={review.name}
              email={review.email}
              imageSrc="/images/image-3.jpg"
              description={review.review}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StudentCommunity;
