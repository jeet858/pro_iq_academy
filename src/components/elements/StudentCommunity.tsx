import React from "react";
import SectionHeader from "./SectionHeader";
import StudentBox from "./StudentBox";

const StudentCommunity: React.FC = () => {
  return (
    <div
      className=" w-full items-center justify-center bg-[length:100%_100%]   bg-no-repeat sm:h-fit sm:p-8 md:h-fit md:p-8 lg:h-full lg:p-32"
      style={{ backgroundImage: 'url("./images/community_background.png") ' }}
    >
      <div className="h-44">
        <SectionHeader title="Student Community" subtitle="Feedback" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
        <StudentBox
          name="Mohan Singh"
          role="Parent"
          imageSrc="/images/image-3.jpg"
          description="PRO IQ Academy has transformed my child's abilities with their mental math and skill development program. The instructors are experienced and the small batches ensure personalized attention. Affordable fees and online/offline classes make it convenient."
        />
        <StudentBox
          name="Shalini Sharma"
          role="Parent"
          imageSrc="/images/image-3.jpg"
          description="Choosing PRO IQ Academy was the best decision for my child's education. Their focus on reading, writing, and observation skills has improved overall intelligence. The instructors are skilled and the evaluations are fun and engaging."
        />
        <StudentBox
          name="Tarun Shrivastava"
          role="Parent"
          imageSrc="/images/image-3.jpg"
          description="PRO IQ Academy offers an excellent learning experience. My child's numerical ability and critical thinking skills have improved significantly. The academy's emphasis on clean handwriting and English communication has boosted confidence. Highly recommended!."
        />
      </div>
    </div>
  );
};

export default StudentCommunity;
