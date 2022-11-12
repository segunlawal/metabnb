import location from "../../assets/setting-5.png";

function Filter() {
  return (
    <div className="mt-[115px] flex w-fit lg:ml-[100px] gap-[65px]">
      <div className="flex lg:gap-12">
        <p className="text-xl">Resturant</p>
        <p className="text-xl">Cottage</p>
        <p className="text-xl">Castle</p>
        <p className="text-xl">fantasy city</p>
        <p className="text-xl">beach</p>
        <p className="text-xl">Carbins</p>
        <p className="text-xl">Off-grid</p>
        <p className="text-xl">Farm</p>
      </div>
      <div className="flex gap-[42px] w-[161px] pl-[13px] py-[15px] -mt-[12.5px] border-[1px] border-[#B4B4B4] rounded-lg">
        <p className="">Location</p>
        <img src={location} alt="location" className="w-6 h-6" />
      </div>
    </div>
  );
}

export default Filter;
