import location from "../../assets/setting-5.png";

function Filter() {
  return (
    <div className="lg:mt-[115px] sm:mt-[50px] mt-10 flex w-fit mx-auto lg:gap-[65px] md:gap-10">
      <div className="text-center flex xl:gap-12 lg:flex lg:gap-5 md:grid md:grid-cols-4 md:gap-5 grid grid-cols-3 gap-y-3">
        <p className="text-xl">Restaurant</p>
        <p className="text-xl">Cottage</p>
        <p className="text-xl">Castle</p>
        <p className="text-xl">fantasy city</p>
        <p className="text-xl">beach</p>
        <p className="text-xl">Carbins</p>
        <p className="text-xl">Off-grid</p>
        <p className="text-xl">Farm</p>
        <div className="flex justify-center md:hidden sm:gap-[12px] w-[65px] ml-6 py-[10px] md:pt-[25px] lg:-mt-[12.5px] border-[1px] border-[#B4B4B4] rounded-lg">
          <img src={location} alt="location" className="w-6 h-6" />
        </div>
      </div>
      <div className="hidden md:flex gap-[42px] w-[161px] pl-[13px] lg:py-[15px] md:pt-[25px] lg:-mt-[12.5px] border-[1px] border-[#B4B4B4] rounded-lg">
        <p className="">Location</p>
        <img src={location} alt="location" className="w-6 h-6" />
      </div>
    </div>
  );
}

export default Filter;
