import metabnblogo from "../../assets/metabnb-logo.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import copyright from "../../assets/copyright.png";

function Footer() {
  return (
    <div className="bg-[#1D1D1E] pb-[37px] ">
      <div className="md:flex justify-between text-white pt-[58px] text-left xl:pl-[113px] xl:pr-[209px] lg:pl-[57px] lg:pr-[104px] md:pl-[15px] md:pr-[27px] pl-10">
        <div>
          <img
            src={metabnblogo}
            alt="Metabnb"
            className="w-[233px] h-[40px] md:mb-24 mb-10"
          />
          <div className="flex gap-x-8 md:mb-[55px] mb-7">
            <img src={facebook} alt="facebook" className="w-[18px] h-[18px]" />
            <img
              src={instagram}
              alt="instagram"
              className="w-[18px] h-[18px]"
            />
            <img src={twitter} alt="twitter" className="w-[18px] h-[18px]" />
          </div>
        </div>
        <div className="md:mb-0 mb-7">
          <p className="text-lg font-bold md:mb-[23px]">Community</p>
          <p className="text-[#F1F3F9] text-sm md:mb-4 mb-2">NFT</p>
          <p className="text-[#F1F3F9] text-sm md:mb-4 mb-2">Tokens</p>
          <p className="text-[#F1F3F9] text-sm md:mb-4 mb-2">Landlords</p>
          <p className="text-[#F1F3F9] text-sm">Discord</p>
        </div>
        <div className="md:mb-0 mb-7">
          <p className="text-lg font-bold md:mb-[23px]">Places</p>
          <p className="text-[#F1F3F9] text-sm md:mb-4 mb-2">Castle</p>
          <p className="text-[#F1F3F9] text-sm md:mb-4 mb-2">Farms</p>
          <p className="text-[#F1F3F9] text-sm md:mb-4 mb-2">Beach</p>
          <p className="text-[#F1F3F9] text-sm">Learn more</p>
        </div>
        <div className="md:mb-0 mb-7">
          <p className="text-lg font-bold md:mb-[23px]">About us</p>
          <p className="text-[#F1F3F9] text-sm md:mb-4 mb-2">Road map</p>
          <p className="text-[#F1F3F9] text-sm md:mb-4 mb-2">Creators</p>
          <p className="text-[#F1F3F9] text-sm md:mb-4 mb-2">Career</p>
          <p className="text-[#F1F3F9] text-sm">Contact us</p>
        </div>
      </div>
      <img
        src={copyright}
        alt="twitter"
        className="w-[139px] h-[18px] xl:ml-[113px] lg:ml-[57px] md:ml-[15px] ml-10"
      />
    </div>
  );
}

export default Footer;
