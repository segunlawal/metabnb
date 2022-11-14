import location from "../../assets/setting-5.png";

function Filter() {
  return (
    <div className="lg:mt-[115px] sm:mt-[50px] mt-10 flex w-fit mx-auto xl:gap-[65px] lg:gap-[30px] md:gap-10">
      <div className="text-center flex xl:gap-12 lg:flex lg:gap-5 md:grid md:grid-cols-4 md:gap-5 grid grid-cols-3 gap-y-3">
        <p className="text-xl cursor-pointer">Restaurant</p>
        <p className="text-xl cursor-pointer">Cottage</p>
        <p className="text-xl cursor-pointer">Castle</p>
        <p className="text-xl cursor-pointer">fantasy city</p>
        <p className="text-xl cursor-pointer">beach</p>
        <p className="text-xl cursor-pointer">Carbins</p>
        <p className="text-xl cursor-pointer">Off-grid</p>
        <p className="text-xl cursor-pointer">Farm</p>
        <div className="flex justify-center md:hidden w-[65px] ml-6 py-[5px] border-[1px] border-[#B4B4B4] rounded-lg">
          <img src={location} alt="location" className="w-6 h-6" />
        </div>
      </div>
      <div className="cursor-pointer hidden md:flex gap-[42px] w-[161px] pl-[13px] lg:py-[15px] md:pt-[25px] lg:-mt-[12.5px] border-[1px] border-[#B4B4B4] rounded-lg">
        <p className="">Location</p>
        <img src={location} alt="location" className="w-6 h-6" />
      </div>
    </div>
  );
}

export default Filter;
