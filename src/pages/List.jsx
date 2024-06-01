import { useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const List = () => {
  const [users, setUser] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1
  })

  const getUser = async () => {
    try {
      const response = await axios.get(`https://reqres.in/api/users?page=${pagination?.page}`);
      setUser(response.data?.data);
      console.log(response);
      
      const pagination2 = {
        total : response.data.total,
        per_page: response.data.per_page,
        page: response.data.page,
        total_pages: response.data.total_pages,
      };
      
      setPagination(pagination2);
      
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getUser();
  }, []);
  
  useEffect (() => {
    getUser()
  }, [pagination?.page]);

  const handleNext = () => {
    setPagination({
      ...pagination,
      page: pagination?.page + 1
    });
  };

  const handleBack = () => {
    setPagination({
      ...pagination,
      page: pagination?.page - 1
    });
  };
  
  return (
    <div className="w-full h-[1024px] relative bg-neutral-20 overflow-hidden flex flex-row items-start justify-start pt-0 pb-[29.4px] pr-[18px] pl-0 box-border gap-[24px] leading-[normal] tracking-[normal] text-left text-xl text-indianred font-body-2-regular mq825:pl-6 mq825:pr-6 mq825:box-border mq450:h-auto">
      <div className="w-[254px] flex flex-col items-start justify-start pt-0 px-0 pb-px box-border relative mq825:hidden">
        <Navbar />
        <div className="self-stretch h-[394px] bg-burlywood"></div>
      </div>
      <main className="flex-1 flex flex-col items-start justify-start pt-[31px] px-0 pb-0 box-border max-w-[calc(100%_-_278px)] mq825:max-w-full">
        <footer className="self-stretch flex flex-col items-end justify-start gap-[110px] max-w-full text-left text-xl text-neutral-100 font-body-2-regular mq675:gap-[27px]">
          <div className="self-stretch flex flex-col items-end justify-start gap-[24px] max-w-full">
            <div className="w-[1129px] flex flex-row items-start justify-end py-0 px-1 box-border max-w-full">
              <div className="flex-1 flex flex-row items-end justify-between py-0 pr-0 pl-px box-border max-w-full gap-[20px] mq450:flex-wrap">
                <div className="flex flex-col items-start justify-start">
                  <b className="relative tracking-[0.15px] leading-[150%] font-semibold inline-block min-w-[121px] mq450:text-base mq450:leading-[24px]">
                    Hello
                  </b>
                  <div className="relative text-sm tracking-[0.25px] leading-[150%] text-neutral-70 inline-block min-w-[106px] z-[1]">
                    Have a nice day
                  </div>
                </div>
                <div className="h-[49.3px] w-[291.1px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border">
                  <img
                    className="self-stretch flex-1 object-contain max-w-full max-h-full overflow-hidden"
                    alt=""
                    src="/public/profil--notification@2x.png"
                  ></img>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[11px] pl-0 box-border max-w-full text-5xl text-neutral-100">
              <div className="flex-1 flex flex-col items-start justify-start gap-[12.7px] max-w-full">
                <div className="flex flex-row items-start justify-start px-5 py-0">
                  <b className="relative font-bold mq450:text-[19px]">
                    Users Dashboard
                  </b>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[28px] max-w-full text-center text-[22px] text-white">
                  <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[2.6px] box-border min-w-[437px] max-w-full mq675:min-w-full">
                    <img
                      className="self-stretch h-[48.7px] rounded-2xl max-w-full overflow-hidden shrink-0 object-contain"
                      loading="lazy"
                      alt=""
                      src="/src/assets/icon/Search.png"
                    ></img>
                  </div>
                  <div className="h-[54.3px] w-[138px] relative">
                    <div className="absolute w-[calc(100%_-_4px)] top-[1.3px] right-[4px] left-[0px] rounded-2xl max-w-full h-[53px] flex items-center justify-center">
                      <img
                        className="w-full overflow-hidden h-full object-contain absolute left-[3px] top-[4px] [transform:scale(1.377)]"
                        loading="lazy"
                        alt=""
                        src="/src//assets/icon/BG.png"
                      ></img>
                    </div>
                    <h2 className="m-0 absolute top-[0px] left-[85px] text-inherit tracking-[0.44px] leading-[54px] font-extrabold font-inherit inline-block w-[46px] z-[1] mq450:text-lg mq450:leading-[43px]">
                      +
                    </h2>
                    <b className="absolute top-[18.3px] left-[23px] text-mid leading-[16px] font-semibold text-left inline-block min-w-[74px] z-[1]">
                      Add user
                    </b>
                  </div>
                  <div className="h-[35px] flex flex-col items-start justify-end pt-0 pb-[19px] pr-2.5 pl-0 box-border text-left text-mid text-darkslategray-200">
                    <div className="flex-1 flex flex-row items-start justify-start gap-[19px]">
                      <div className="flex flex-row items-start justify-start gap-[9px]">
                        <b className="relative leading-[16px] font-semibold inline-block min-w-[58px]">
                          Sort by
                        </b>
                        <img
                          className="h-4 w-4 relative min-h-[16px]"
                          alt=""
                          src="/src/assets/icon/arrow-down.png"
                        ></img>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-2.5 pl-0">
                        <b className="relative leading-[16px] font-semibold inline-block min-w-[108px] whitespace-nowrap">
                          Saved search
                        </b>

                        <img
                          className="h-4 w-4 relative min-h-[16px]"
                          loading="lazy"
                          alt=""
                          src="/src/assets/icon/arrow-down.png"
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-end px-0 pt-0 pb-4">
                    <img
                      className="w-[19px] h-[19px] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/src/assets/icon/3 garis.png"
                    ></img>
                  </div>
                </div>
              </div>
            </div>

            <div className="container box-border p-4 mx-auto shadow-md bg-slate-200 rounded-2xl">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-xl font-bold">List Users</h1>
              </div>

              <div className="flex flex-wrap justify-center gap-6">
                {users?.map((user) => (
                  <div key={user?.id} className="w-64 self-stretch rounded-2xl bg-aliceblue box-border overflow-hidden flex flex-col items-center justify-start pt-[18px] px-4 pb-[19px] relative gap-[10px] text-smi text-darkslategray-300 border-[1px] border-solid border-aliceblue ">
                  <div className="flex flex-col items-center w-full p-6 rounded-lg ">
                    <img
                      src={user?.avatar}
                      alt="Marie Walters"
                      className="w-20 h-20 mb-4 rounded-full"
                    ></img>
                    <h2 className="mb-2 text-lg font-medium">{`${user?.first_name} ${user?.last_name}`}</h2>
                    <p className="mb-4 text-gray-500">{user?.email}</p>
                    <div className="flex space-x-2">
                      <Link className="px-4 py-2 text-white rounded-lg bg-burlywood" to={`/profile/${user?.id}`} > 
                        View
                      </Link>
                    </div>
                  </div>
                </div>
                ))}
              </div>
              <div className="flex justify-between">
                <button onClick={handleBack} className="px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700" >
                  Back
                </button>
                <span className="px-4 py-2 font-bold underline text-decoration-line">{pagination?.page}</span>
                <button onClick={handleNext} className="px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700" >
                  Next
                </button>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default List;
