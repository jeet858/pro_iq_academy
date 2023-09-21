import React from "react";
import Image from "next/image";

const GallerySection = () => {
  return (
    <div className="h-fit">
      <div className="relative h-80 bg-cover bg-center bg-no-repeat">
        <div>
          <Image
            src="/images/bi.jpg"
            alt="About Us"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p className="relative ml-32 pt-32 text-2xl font-bold text-white">
          Gallery
        </p>
      </div>
      <div className="pt-24 h-fit w-full">
        <div className="flex h-[35rem] w-full flex-col space-y-4 px-32">
          <div className="flex flex-row space-x-4 basis-2/3">
            <div
              className="bg-cover bg-center bg-no-repeat basis-1/3"
              style={{backgroundImage:
                'url("./images/woman-attending-online-class.jpg")'
              }}
            >
              {/* <Image
                src="/images/woman-attending-online-class.jpg"
                alt=""
                className="w-full"
              /> */}
            </div>
            <div className="flex flex-col space-y-4 basis-2/3">
              <div className="flex flex-row space-x-4 basis-1/2">
                <div
                  className="bg-center bg-cover bg-no-repeat basis-1/2"
                  style={{backgroundImage:
                    'url("./images/teacher-talking-with-her-students-online.jpg")'
                  }}
                ></div>
                <div
                  className="bg-center bg-cover bg-no-repeat basis-1/2"
                  style={{backgroundImage:
                    'url("./images/close-up-woman-class.jpg")'
                  }}
                ></div>
              </div>
              <div
                className="bg-center bg-cover bg-no-repeat basis-1/2"
                style={{backgroundImage:
                  'url("./images/medium-shot-woman-working-desk.jpg")'
                }}
              ></div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 basis-1/3">
            <div
              className="bg-cover bg-center bg-no-repeat basis-2/3"
              style={{backgroundImage:
                'url("./images/english-teacher-doing-her-class-with-whiteboard.jpg")'
              }}
            ></div>
            <div
              className="bg-cover bg-center bg-no-repeat basis-1/3"
              style={{backgroundImage:
                'url("./images/young-female-student-listening-her-english-teacher.jpg")'
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="container flex w-full items-center justify-around p-10 sm:h-fit sm:flex-col lg:h-[30rem] lg:flex-row">
        <h1 className="flex flex-col text-5xl font-semibold">
          <span>Start Your Education Career</span>
          <span>With proIQ</span>
        </h1>
        <div>
          <button className="h-[4rem] w-[12rem] rounded-xl bg-[#FF6E65]  text-2xl  font-semibold text-white hover:bg-[#0d369f]  focus:outline-none">
            discover more
          </button>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
