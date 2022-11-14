import mbtokenlogo from "../../assets/mbtoken-logo.png";
import metamusklogo from "../../assets/metamusk-logo.png";
import opensealogo from "../../assets/opensea-logo.png";

function LogoBanner() {
  return (
    <div className="btn-gradient flex justify-between xl:px-[138px] lg:px-[100px] md:px-[35px] sm:px-[7px] py-[10px] lg:gap-[100px] md:gap-[45px] gap-[5px]">
      <img
        src={mbtokenlogo}
        alt="MB Token"
        className="md:w-[222px] md:h-[50px] w-[111px] h-[25px]"
      />
      <img
        src={metamusklogo}
        alt="METAMUSK"
        className="md:w-[214px] md:h-[38px] w-[107px] h-[19px] mt-1"
      />
      <img
        src={opensealogo}
        alt="OpenSea"
        className="md:w-[198px] md:h-[41px] w-[99px] h-[20.5px] mt-1"
      />
    </div>
  );
}

export default LogoBanner;
