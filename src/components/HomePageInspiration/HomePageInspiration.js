import frame5 from "../../assets/Frames/Frame-5.png";
import frame6 from "../../assets/Frames/Frame-6.png";
import frame7 from "../../assets/Frames/Frame-7.png";
import frame8 from "../../assets/Frames/Frame-8.png";
import frame1 from "../../assets/Frames/Frame-1.png";
import frame2 from "../../assets/Frames/Frame-2.png";
import frame3 from "../../assets/Frames/Frame-3.png";
import frame4 from "../../assets/Frames/Frame-4.png";
import fivestars from "../../assets/five-star.png";

function HomePageInspiration() {
  const frames = [
    { frame: frame5, id: 5 },
    { frame: frame6, id: 6 },
    { frame: frame7, id: 7 },
    { frame: frame8, id: 8 },
    { frame: frame1, id: 1 },
    { frame: frame2, id: 2 },
    { frame: frame3, id: 3 },
    { frame: frame4, id: 4 },
  ];

  const alltheframes = frames.map((oneframe) => (
    <div
      key={oneframe.id}
      className="border-[1px] border-[#D7D7D7] rounded-[15px] pt-4 w-[292px] h-[372px] "
    >
      <img
        src={oneframe.frame}
        alt="Place to visit"
        className="w-[260px] h-[265px] mx-auto"
      />
      <div className="flex justify-between mt-4 mx-4">
        <p className="text-xs">Desert king</p>
        <p className="text-xs font-bold">1MBT per night</p>
      </div>
      <div className="flex justify-between mt-[10px] mx-4">
        <p className="text-xs">2345km away</p>
        <p className="text-xs">available for 2weeks stay</p>
      </div>
      <img
        src={fivestars}
        alt="Five stars"
        className="h-3 w-[92px] my-[10px] ml-4"
      />
    </div>
  ));
  return (
    <div className="mb-[53px]">
      <p className="text-black font-bold text-5xl md:mx-5 mt-[58px] mb-[43px]">
        Inspiration for your next adventure
      </p>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mx-auto w-fit">
        {alltheframes}
      </div>
    </div>
  );
}

export default HomePageInspiration;
