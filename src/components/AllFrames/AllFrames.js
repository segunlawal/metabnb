import frame1 from "../../assets/Frames/Frame-1.png";
import frame2 from "../../assets/Frames/Frame-2.png";
import frame3 from "../../assets/Frames/Frame-3.png";
import frame4 from "../../assets/Frames/Frame-4.png";
import frame5 from "../../assets/Frames/Frame-5.png";
import frame6 from "../../assets/Frames/Frame-6.png";
import frame7 from "../../assets/Frames/Frame-7.png";
import frame8 from "../../assets/Frames/Frame-8.png";
import frame9 from "../../assets/Frames/Frame-9.png";
import frame10 from "../../assets/Frames/Frame-10.png";
import frame11 from "../../assets/Frames/Frame-11.png";
import frame12 from "../../assets/Frames/Frame-12.png";
import frame13 from "../../assets/Frames/Frame-13.png";
import frame14 from "../../assets/Frames/Frame-14.png";
import frame15 from "../../assets/Frames/Frame-15.png";
import frame16 from "../../assets/Frames/Frame-16.png";
import fivestars from "../../assets/five-star.png";

function AllFrames() {
  const frames = [
    { frame: frame1, id: 1 },
    { frame: frame2, id: 2 },
    { frame: frame3, id: 3 },
    { frame: frame4, id: 4 },
    { frame: frame5, id: 5 },
    { frame: frame6, id: 6 },
    { frame: frame7, id: 7 },
    { frame: frame8, id: 8 },
    { frame: frame9, id: 9 },
    { frame: frame10, id: 10 },
    { frame: frame11, id: 11 },
    { frame: frame12, id: 12 },
    { frame: frame13, id: 13 },
    { frame: frame14, id: 14 },
    { frame: frame15, id: 15 },
    { frame: frame16, id: 16 },
  ];
  const alltheframes = frames.map((oneframe) => (
    <div
      key={oneframe.id}
      className="border-[1px] border-[#D7D7D7] rounded-[15px] pt-4 w-[292px] h-[372px] xl:w-[292px] xl:h-[372px] lg:w-[232px] lg:h-[310px] w-[292px] h-[372px]"
    >
      <img
        src={oneframe.frame}
        alt="Place to visit"
        className="w-[260px] h-[265px] lg:w-[187.5px] lg:h-[198.75px] xl:w-[260px] xl:h-[265px] mx-auto"
      />
      <div className="flex justify-between mt-4 mx-4">
        <p className="text-xs">Desert king</p>
        <p className="text-xs font-bold">1MBT per night</p>
      </div>
      <div className="flex justify-between mt-[10px] mx-4">
        <p className="xl:text-xs lg:text-[0.62rem] text-xs">2345km away</p>
        <p className="xl:text-xs lg:text-[0.62rem] text-xs">
          available for 2weeks stay
        </p>
      </div>
      <img
        src={fivestars}
        alt="Five stars"
        className="h-3 w-[92px] my-[10px] ml-4"
      />
    </div>
  ));
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:gap-6 gap-6 lg:gap-4 mt-14 mx-auto w-fit mb-[92px]">
      {alltheframes}
    </div>
  );
}

export default AllFrames;
