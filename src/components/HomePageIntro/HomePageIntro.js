import React from "react";
import "./HomePageIntro.css";
import imageone from "../../assets/image-1.png";
import imagetwo from "../../assets/image-2.png";
import imagethree from "../../assets/image-3.png";
import imagefour from "../../assets/image-4.png";

function HomePageIntro() {
  return (
    <div className="lg:mt-[125px] xl:mx-[100px] lg:mx-[68px] md:mx-[50px] sm:mx-[20px] mx-[10px] mb-16">
      <div className="lg:flex gap-x-24">
        <div className="mt-7 lg:w-[52%]">
          <h1 className="text-left text-[50px] sm:leading-[78px] leading-[60px] tracking-[-0.02em] xl:w-[646px]">
            Rent a <span className="meta-color font-bold">Place </span> away
            from
            <span className="meta-color font-bold"> Home </span>in the
            <span className="meta-color font-bold"> Metaverse</span>
          </h1>
          <p className="text-left lg:my-12 my-7 text-2xl xl:w-[636px]">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className="input-box text-left lg:width-[646px]">
            <input
              type="text"
              className="placeholder:text-[#B8B8B8] placeholder:text-sm border-[1px] border-[#A3A3A3] rounded-tl-lg rounded-bl-lg xl:w-[360px] lg:w-[280px] sm:w-[400px] w-[230px] h-[54px] pl-4"
              placeholder="Search for location"
            />
            <span>
              <button
                type="submit"
                className="btn-gradient text-white rounded-tr-lg rounded-br-lg xl:w-48 md:w-[123px] w-[120px] h-[54px]"
              >
                Search
              </button>
            </span>
          </div>
        </div>
        <div className="lg:w-[48%] flex gap-x-2 lg:mt-0 mt-10 justify-center">
          <div className="flex  flex-col gap-y-2 mt-[99px]">
            <img src={imageone} className="w-[234px]" alt="pic-one" />
            <img src={imagethree} className="w-[234px]" alt="pic-three" />
          </div>
          <div className="flex flex-col gap-y-2">
            <img src={imagetwo} className="w-[234px]" alt="pic-two" />
            <img src={imagefour} className="w-[234px]" alt="pic-four" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageIntro;
