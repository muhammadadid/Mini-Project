import Navbar from "../components/Navbar";

const Profile = () => {
  return (
    
     
      <div className="w-full relative bg-whitesmoke-100 overflow-hidden flex flex-row items-start justify-start py-0 pr-10 pl-0 box-border gap-[40px] leading-[normal] tracking-[normal] text-left text-sm text-text-3- font-hachi-maru-pop mq1050:gap-[20px] mq1050:pl-5 mq1050:box-border">
       <Navbar/>
        <div className="flex-1 flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border max-w-[calc(100%_-_118px)] mq1050:max-w-full">
          <section className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
            <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-5xl text-darkslategray-100 font-poppins">
              <div className="flex flex-col items-start justify-start gap-[12px]">
                <h3 className="relative m-0 font-medium text-inherit font-inherit whitespace-nowrap">
                  Welcome, Amanda
                </h3>
                <div className="relative text-base font-light text-darkgray-300 whitespace-nowrap mq1050:hidden">
                  Tue, 07 June 2022
                </div>
              </div>
              <div className="w-[498px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start gap-[20px] max-w-full">
                  <div className="flex-1 rounded-lg bg-white flex flex-row items-start justify-start py-3.5 px-5 box-border gap-[16px] max-w-full">
                    <div className="h-[52px] w-[354px] relative rounded-lg bg-white hidden max-w-full"></div>
                    <img
                      className="h-6 w-6 relative min-h-[24px] z-[1]"
                      alt=""
                      src="/public/vuesaxlinearsearchnormal.svg"
                    ></img>

                    <input
                      className="w-[57px] [border:none] [outline:none] font-poppins text-base bg-[transparent] h-6 relative text-darkgray-300 text-left inline-block p-0 z-[1]"
                      placeholder="Search"
                      type="text"
                    ></input>
                  </div>
                  <img
                    className="h-[52px] w-[52px] relative min-h-[52px]"
                    loading="lazy"
                    alt=""
                    src="/public/group-77.svg"
                  ></img>

                  <div className="h-[52px] w-[52px] relative rounded-3xs bg-[url('/public/search-icon@3x.png')] bg-cover bg-no-repeat bg-[top]">
                    <img
                      className="absolute top-[0px] left-[0px] rounded-3xs w-full h-full object-cover hidden"
                      alt=""
                      src="/public/rectangle-1072@2x.png"
                    ></img>

                    <div className="absolute top-[14px] left-[14px] w-6 h-6 hidden"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-3xs bg-white flex flex-col items-start justify-start pt-0 px-0 pb-[71px] box-border gap-[32px] max-w-full mq750:gap-[16px] mq1050:pb-[46px] mq1050:box-border mq450:pb-[30px] mq450:box-border">
              <div className="self-stretch h-[856px] relative rounded-3xs bg-white hidden"></div>
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/pulic/rectangle-6691@2x.png"
              ></img>

              <div className="box-border flex flex-row items-start self-stretch justify-start max-w-full px-8 py-0">
                <form className="m-0 flex-1 flex flex-col items-start justify-start gap-[12px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
                    <div className="flex flex-row items-start justify-start gap-[24px] max-w-full mq450:flex-wrap">
                      <div className="flex flex-col items-start justify-start gap-[32px] min-w-[100px] mq450:flex-1">
                        <img
                          className="w-[100px] h-[100px] relative rounded-[50%] object-cover z-[1]"
                          loading="lazy"
                          alt=""
                          src="/public/ellipse-11@2x.png"
                        ></img>

                        <div className="relative text-base font-poppins text-gray-400 text-left inline-block min-w-[79px] z-[1]">
                          Full Name
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start px-0 pt-5 pb-0">
                        <div className="flex flex-col items-start justify-start gap-[6px]">
                          <div className="relative text-xl font-medium font-poppins text-black text-left z-[1] mq450:text-base">
                            Alexa Rawles
                          </div>
                          <div className="relative text-base font-poppins text-gray-600 text-left whitespace-nowrap z-[1]">
                            alexarawles@gmail.com
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[197px] flex flex-col items-start justify-start pt-[132px] pb-0 pr-5 pl-0 box-border">
                      <div className="relative text-base font-poppins text-gray-400 text-left inline-block min-w-[86px] z-[1]">
                        Nick Name
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start px-0 pb-0 pt-7">
                      <button className="cursor-pointer [border:none] py-2.5 px-8 bg-burlywood rounded-lg flex flex-row items-start justify-start z-[1] hover:bg-peru">
                        <div className="h-11 w-[93px] relative rounded-lg bg-burlywood hidden"></div>
                        <div className="relative text-base font-poppins text-white text-left inline-block min-w-[29px] z-[1]">
                          Edit
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[385px] max-w-full mq750:min-w-full">
                      <input
                        className="w-full [border:none] [outline:none] bg-whitesmoke-100 self-stretch h-[52px] rounded-lg flex flex-row items-start justify-start py-3.5 px-5 box-border font-poppins text-base text-gray-500 min-w-[250px] z-[1]"
                        placeholder="Your First Name"
                        type="text"
                      ></input>

                      <div className="relative text-base font-poppins text-gray-400 text-left inline-block min-w-[60px] z-[1]">
                        Gender
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[385px] max-w-full mq750:min-w-full">
                      <input
                        className="w-full [border:none] [outline:none] bg-whitesmoke-100 self-stretch h-[52px] rounded-lg flex flex-row items-start justify-start py-3.5 px-5 box-border font-poppins text-base text-gray-500 min-w-[250px] z-[1]"
                        placeholder="Your First Name"
                        type="text"
                      ></input>

                      <div className="relative text-base font-poppins text-gray-400 text-left inline-block min-w-[64px] z-[1]">
                        Country
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[385px] max-w-full mq750:min-w-full">
                      <div className="self-stretch rounded-lg bg-whitesmoke-100 flex flex-row items-start justify-between py-3.5 px-5 box-border max-w-full gap-[20px] z-[1]">
                        <div className="h-[52px] w-[593px] relative rounded-lg bg-whitesmoke-100 hidden max-w-full"></div>
                        <div className="relative text-base font-poppins text-gray-500 text-left inline-block min-w-[125px] z-[2]">
                          Your First Name
                        </div>
                        <img
                          className="h-6 w-6 relative min-h-[24px] z-[2]"
                          alt=""
                          src="/public/vuesaxlineararrowdown.svg"
                        ></img>
                      </div>
                      <div className="relative text-base font-poppins text-gray-400 text-left inline-block min-w-[81px] z-[1]">
                        Language
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[385px] max-w-full mq750:min-w-full">
                      <div className="self-stretch rounded-lg bg-whitesmoke-100 flex flex-row items-start justify-between py-3.5 px-5 box-border max-w-full gap-[20px] z-[1]">
                        <div className="h-[52px] w-[593px] relative rounded-lg bg-whitesmoke-100 hidden max-w-full"></div>
                        <div className="relative text-base font-poppins text-gray-500 text-left inline-block min-w-[125px] z-[2]">
                          Your First Name
                        </div>
                        <img
                          className="h-6 w-6 relative min-h-[24px] z-[2]"
                          alt=""
                          src="/public/vuesaxlineararrowdown-1.svg"
                        ></img>
                      </div>
                      <div className="relative text-base font-poppins text-gray-400 text-left inline-block min-w-[83px] z-[1]">
                        Time Zone
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start pt-0 px-0 pb-5 box-border gap-[32px] max-w-full mq750:gap-[16px]">
                    <div className="flex-1 rounded-lg bg-whitesmoke-100 flex flex-row items-start justify-between py-3.5 px-5 box-border min-w-[385px] max-w-full gap-[20px] z-[1] mq750:min-w-full">
                      <div className="h-[52px] w-[593px] relative rounded-lg bg-whitesmoke-100 hidden max-w-full"></div>
                      <div className="relative text-base font-poppins text-gray-500 text-left inline-block min-w-[125px] z-[2]">
                        Your First Name
                      </div>
                      <img
                        className="h-6 w-6 relative min-h-[24px] z-[2]"
                        alt=""
                        src="/public/vuesaxlineararrowdown-2.svg"
                      ></img>
                    </div>
                    <div className="flex-1 rounded-lg bg-whitesmoke-100 flex flex-row items-start justify-between py-3.5 px-5 box-border min-w-[385px] max-w-full gap-[20px] z-[1] mq750:min-w-full">
                      <div className="h-[52px] w-[593px] relative rounded-lg bg-whitesmoke-100 hidden max-w-full"></div>
                      <div className="relative text-base font-poppins text-gray-500 text-left inline-block min-w-[125px] z-[2]">
                        Your First Name
                      </div>
                      <img
                        className="h-6 w-6 relative min-h-[24px] z-[2]"
                        alt=""
                        src="/public/vuesaxlineararrowdown-3.svg"
                      ></img>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start px-0 pt-0 pb-2">
                    <div className="relative text-lg font-medium font-poppins text-black text-left z-[1]">
                      My email Address
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start pt-0 px-0 pb-5 gap-[20px]">
                    <div className="relative w-12 h-12">
                      <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-dodgerblue-400 w-full h-full z-[1]"></div>
                      <img
                        className="absolute top-[12px] left-[12px] w-6 h-6 z-[2]"
                        loading="lazy"
                        alt=""
                        src="/src/assets/icon/sms.png"
                      ></img>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[6px]">
                      <div className="relative text-base font-poppins text-black text-left whitespace-nowrap z-[1]">
                        alexarawles@gmail.com
                      </div>
                      <div className="relative text-base font-poppins text-gray-600 text-left inline-block min-w-[99px] z-[1]">
                        1 month ago
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-2.5 px-6 relative whitespace-nowrap z-[1]">
                    <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg bg-dodgerblue-400"></div>
                    <div className="relative text-base font-poppins text-burlywood text-left z-[1]">
                      +Add Email Address
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    
  );
};

export default Profile;
