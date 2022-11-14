import flipcards from "../../assets/flip-cards.png";

function HomePageLearnMore() {
  return (
    <div className="lg:flex gap-[122px] bg-[#A02279] text-white border-[1px] border-black lg:px-[100px] md:px-20 px-5">
      <div className="lg:w-[40%] lg:mt-[186px] md:mt-20 mt-10">
        <p className="font-bold text-left sm:text-5xl text-4xl">Metabnb NFTs</p>
        <p className="sm:text-lg text-left leading-[35px] my-[35px]">
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our customer
          access to loads of our exclusive services.
        </p>
        <button
          type="submit"
          className="float-left rounded-lg bg-white h-12 w-[156px] text-[#A02279] md:mb-20"
        >
          Learn more
        </button>
      </div>
      <div className="lg:w-[60%] lg:my-[100px] mt-28 mb-10 md:my-40 mx-auto w-fit">
        <img src={flipcards} alt="NFTs" className=" mx-auto" />
      </div>
    </div>
  );
}

export default HomePageLearnMore;
