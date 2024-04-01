import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img } from "../../components";

export default function Home1Page() {
  return (
    <>
      <Helmet>
        <title>Yogesh yavgesh poul patil's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="h-[935px] relative">
          <Img
            src="images/img_image_asset_1.png"
            alt="imageassetone"
            className="h-[935px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
          />
          <div className="flex flex-col w-full h-max gap-[601px] left-0 bottom-0 right-0 top-0 m-auto md:gap-[450px] md:p-5 sm:gap-[300px] absolute max-w-[1453px]">
            <header className="flex md:flex-col justify-between items-center ml-1 gap-5 md:ml-0">
              <div className="h-[67px] w-[33%] md:w-full relative">
                <Heading
                  size="md"
                  as="h1"
                  className="h-max left-[0.00px] bottom-0 top-0 my-auto !font-inter uppercase absolute"
                >
                  Gym & Fitness
                </Heading>
                <Heading
                  size="md"
                  as="h1"
                  className="h-max right-[0.00px] bottom-0 top-0 my-auto !font-inter uppercase absolute"
                >
                  Gym & Fitness
                </Heading>
              </div>
              <div className="flex flex-col items-center">
                <Heading size="xs" as="h3" className="!font-arial uppercase">
                  Home products gym offers pricing About us
                </Heading>
                <Heading size="xs" as="h3" className="mt-[-31px] !font-arial uppercase relative">
                  Home products BMI CAlculator pricing About us
                </Heading>
              </div>
            </header>
            <div className="flex md:flex-col items-center w-[44%] md:w-full">
              <Heading size="lg" as="h1" className="w-[48%] md:w-full !font-arial uppercase text-shadow-ts">
                <span className="text-white-A700 font-berlinsansfbdemi">DO</span>
                <span className="text-white-A700 font-berlinsansfbdemi line-through">
                  <>
                    N’T
                    <br />
                    Qu
                  </>
                </span>
                <span className="text-white-A700 font-berlinsansfbdemi">it</span>
              </Heading>
              <Img
                src="images/img_vector.svg"
                alt="vector_one"
                className="self-end h-[68px] md:w-full mb-[19px] rounded-[20px]"
              />
            </div>
          </div>
          <div className="flex md:flex-col items-end h-[935px] w-full md:h-auto left-0 bottom-0 right-0 top-0 p-[27px] m-auto md:p-5 bg-[url(/public/images/img_mask_group.png)] bg-cover bg-no-repeat absolute max-w-[1489px] md:relative">
            <Heading
              size="lg"
              as="h2"
              className="w-[48%] md:w-full mt-[665px] ml-7 md:ml-0 !font-arial uppercase text-shadow-ts"
            >
              <span className="text-white-A700 font-berlinsansfbdemi">DO</span>
              <span className="text-white-A700 font-berlinsansfbdemi line-through">
                <>
                  N’T
                  <br />
                  Qu
                </>
              </span>
              <span className="text-white-A700 font-berlinsansfbdemi">it</span>
            </Heading>
            <Img
              src="images/img_vector.svg"
              alt="vector_three"
              className="h-[68px] md:w-full mb-[19px] rounded-[20px]"
            />
          </div>
        </div>
        <div className="p-[55px] md:p-5 bg-black-900">
          <div className="flex flex-col items-center w-full mt-[18px] mb-[2164px] gap-[70px] mx-auto md:gap-[52px] sm:gap-[35px] max-w-[1374px]">
            <Heading size="md" as="h2" className="!font-inriaserif capitalize text-center !font-bold">
              what you get here
            </Heading>
            <div className="self-stretch justify-center gap-[190px] grid-cols-[repeat(auto-fill,_minmax(337px_,_1fr))] grid">
              <div className="flex flex-col items-center w-full">
                <Img
                  src="images/img_rectangle_3.png"
                  alt="workout_one"
                  className="h-[223px] w-full md:h-auto z-[1] object-cover rounded-[30px]"
                />
                <Heading as="h3" className="lowercase text-center">
                  WORKOUT
                </Heading>
              </div>
              <div className="flex flex-col items-start w-full gap-[9px]">
                <Img
                  src="images/img_rectangle_4.png"
                  alt="image"
                  className="h-[223px] w-full md:h-auto object-cover rounded-[30px]"
                />
                <Heading as="h4" className="ml-[55px] md:ml-0 capitalize text-center">
                  Gym Wear
                </Heading>
              </div>
              <div className="flex flex-col items-center w-full gap-1">
                <Img
                  src="images/img_rectangle_5.png"
                  alt="image"
                  className="h-[223px] w-full md:h-auto object-cover rounded-[30px]"
                />
                <Heading as="h5" className="capitalize text-center">
                  Nutrition
                </Heading>
              </div>
              <div className="flex flex-col items-start w-full gap-[5px]">
                <Img
                  src="images/img_rectangle_4_223x337.png"
                  alt="image"
                  className="h-[223px] w-full md:h-auto object-cover rounded-[30px]"
                />
                <Heading as="h6" className="ml-[33px] md:ml-0 capitalize text-center">
                  Steam Room
                </Heading>
              </div>
              <div className="flex flex-col items-center w-full gap-2">
                <Img
                  src="images/img_rectangle_4_1.png"
                  alt="image"
                  className="h-[223px] w-full md:h-auto object-cover rounded-[30px]"
                />
                <Heading as="h1" className="capitalize text-center">
                  Suppliments
                </Heading>
              </div>
              <div className="flex flex-col items-center w-full gap-2">
                <Img
                  src="images/img_rectangle_4_2.png"
                  alt="image"
                  className="h-[223px] w-full md:h-auto object-cover rounded-[30px]"
                />
                <Heading as="h1" className="capitalize text-center">
                  Gym Trainers
                </Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
