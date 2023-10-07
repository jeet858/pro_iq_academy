import React, { useEffect, useState } from "react";
import { api } from "~/utils/api";

const ReviewSection = () => {
  const [reviewData, setReviewData] = useState({
    name: "",
    email: "",
    review: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setReviewData({
      ...reviewData,
      [name]: value,
    });
  };
  const add = api.review.create.useMutation({
    onError: (err) => {
      alert(`An error occured }`);
    },
    onSuccess: () => {
      alert("Review is submitted succesfully");
    },
  });

  const create = () => {
    console.log(reviewData);
    if (
      reviewData.name != "" ||
      reviewData.email != "" ||
      reviewData.review == ""
    ) {
      add.mutate(reviewData);
    } else {
      alert("Be sure to fill all fields");
    }
  };

  return (
    <div className="flex w-full p-16 sm:flex-col md:flex-row">
      <div className=" flex w-full flex-col md:basis-1/2">
        <div className="w-full">
          <span className="text-6xl text-[#FF6E65]">WE NEED YOUR FEEDBACK</span>
        </div>
        <div className="pt-12 text-start">
          Thank you for choosing our course-selling app, where knowledge meets
          opportunity. Your feedback is invaluable in helping us enhance your
          learning experience. Please share your thoughts and suggestions with
          us, so we can continue to provide top-notch courses and services
          tailored to your needs. Together, we're building a brighter, more
          educated future. Start learning, start thriving
        </div>
      </div>
      <form className="w-full basis-1/2">
        <div className="w-full p-3">
          <input
            onChange={handleInputChange}
            name="name"
            value={reviewData.name}
            type="text"
            placeholder="Enter Your Name"
            className="w-full rounded-lg bg-gray-200 p-3"
          />
        </div>
        <div className="w-full p-3">
          <input
            onChange={handleInputChange}
            name="email"
            value={reviewData.email}
            type="email"
            placeholder="Enter Your Email"
            className="w-full rounded-lg bg-gray-200 p-3"
          />
        </div>
        <div className="w-full p-3">
          <textarea
            onChange={handleInputChange}
            name="review"
            value={reviewData.review}
            className="max-h-52 min-h-[13rem] w-full rounded-lg bg-gray-200 p-3"
            placeholder="Write Your review"
          />
        </div>
        <div className="w-48 p-3">
          <input
            type="button"
            value="Submit"
            className="flex h-[55px] w-[180px] items-center justify-center rounded-[20px] bg-[#FF6E65] text-xl text-white hover:bg-[#0d369f]"
            onClick={async () => {
              console.log(reviewData);
              create();
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default ReviewSection;
