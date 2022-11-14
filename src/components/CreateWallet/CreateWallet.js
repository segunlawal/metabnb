import { useRef } from "react";
import "./CreateWallet.css";
import x from "../../assets/x.png";
import metamask from "../../assets/metamask.png";
import next from "../../assets/next.png";
import walletconnect from "../../assets/walletconnect.png";

export default function Modal({ showModal, setShowModal }) {
  const modalMenu = useRef(null);
  const closeOpenMenus = (e) => {
    if (
      modalMenu.current &&
      showModal &&
      !modalMenu.current.contains(e.target)
    ) {
      setShowModal(false);
    }
  };
  document.addEventListener("mousedown", closeOpenMenus);
  return (
    <>
      {}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div
              ref={modalMenu}
              className="relative w-auto my-6 mx-auto max-w-3xl h-[326px] md:w-[600px] w-[350px]"
            >
              <div className="border-0 rounded-2xl relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between py-6 px-8 border-b border-[#CFD8DC]">
                  <h3 className="text-2xl font-bold text-[#333333]">
                    Connect Wallet
                  </h3>
                  <button
                    type="submit"
                    className="p-1 ml-auto border-0 float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block">
                      <img src={x} alt="x" className="w-6 h-6" />
                    </span>
                  </button>
                </div>
                <div className="relative pb-6 px-6 flex-auto">
                  <p className="mt-8 mb-4 text-[#333333] text-left">
                    Choose your preferred wallet
                  </p>
                  <div className="flex items-start justify-between py-3 px-8 border hover:bg-[#F8F9FA] active:bg-[#F8F9FA] cursor-pointer border-[#CFD8DC] rounded-xl">
                    <span className="flex gap-4">
                      <img
                        src={metamask}
                        alt="MM"
                        className="w-11 h-11 my-auto"
                      />
                      <h3 className="text-black sora-font my-auto text-lg font-semibold">
                        Metamask
                      </h3>
                    </span>
                    <button
                      type="submit"
                      className="p-1 ml-auto border-0 float-right"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="block">
                        <img
                          src={next}
                          alt=">"
                          className="w-[15px] h-[20px] mt-2"
                        />
                      </span>
                    </button>
                  </div>

                  <div className="flex items-start justify-between py-3 px-8 mt-4 border hover:bg-[#F8F9FA] active:bg-[#F8F9FA] cursor-pointer border-[#CFD8DC] rounded-xl">
                    <span className="flex gap-4">
                      <img
                        src={walletconnect}
                        alt="MM"
                        className="w-11 h-11 my-auto"
                      />
                      <h3 className="text-black sora-font my-auto text-lg font-semibold">
                        WalletConnect
                      </h3>
                    </span>
                    <button
                      type="submit"
                      className="p-1 ml-auto border-0 float-right"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="block">
                        <img
                          src={next}
                          alt=">"
                          className="w-[15px] h-[20px] mt-2"
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="backdrop fixed inset-0 z-40" />
        </>
      ) : null}
    </>
  );
}
