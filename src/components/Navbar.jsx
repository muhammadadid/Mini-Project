import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ data }) => {
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };
  return (
    <div className="mt-[-1px] bg-burlywood flex flex-col items-start justify-start pt-10 pb-[451px] pr-[92px] pl-8 gap-[56px] mq450:gap-[28px] mq450:pt-5 mq450:pr-5 mq450:pb-[190px] mq450:box-border mq825:pt-[26px] mq825:pb-[293px] mq825:box-border">
      <div className="flex flex-row items-center justify-start">
        <b className="relative tracking-[0.15px] leading-[150%] font-bold inline-block min-w-[116px] mq450:text-base mq450:leading-[24px]">
          Polaris
        </b>
      </div>
      <div className="flex flex-col items-start justify-start gap-[64px] text-base text-white">
        <nav className="m-0 flex flex-col items-start justify-start gap-[32px] text-left text-base text-white font-body-1-regular">
          <div className="flex flex-row items-center justify-start gap-[15px] text-dodgerblue">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/src/assets/icon/dash.png"
            ></img>

            <b className="relative tracking-[0.5px] leading-[150%] font-semibold inline-block min-w-[90px]">
              {data[0]}
            </b>
          </div>
          <Link
            to={"/"}
            className="flex flex-row items-center justify-start gap-[16px]"
          >
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/src/assets/icon/users.png"
            ></img>

            <div className="relative tracking-[0.5px] leading-[150%] inline-block min-w-[45px] text-white">
              {data[1]}
            </div>
          </Link>
          <div className="flex flex-row items-center justify-start gap-[15px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              loading="lazy"
              alt=""
              src="/src/assets/icon/doc.png"
            ></img>

            <div className="relative tracking-[0.5px] leading-[150%] inline-block min-w-[91px]">
              {data[2]}
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[15px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              loading="lazy"
              alt=""
              src="/src/assets/icon/galery.png"
            ></img>

            <div className="relative tracking-[0.5px] leading-[150%] inline-block min-w-[56px]">
              {data[3]}
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[16px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/src/assets/icon/herarchy.png"
            ></img>

            <div className="relative tracking-[0.5px] leading-[150%] inline-block min-w-[77px]">
              {data[4]}
            </div>
          </div>
        </nav>
        <div className="flex flex-col items-start justify-start gap-[32px]">
          <div className="flex flex-row items-center justify-start gap-[16px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/src/assets/icon/pesan1.png"
            ></img>

            <div className="relative tracking-[0.5px] leading-[150%] inline-block min-w-[69px]">
              {data[5]}
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[16px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/src/assets/icon/help1.png"
            ></img>

            <div className="relative tracking-[0.5px] leading-[150%] inline-block min-w-[37px]">
              {data[6]}
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[15px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/src/assets/icon/setting.png"
            ></img>

            <div className="relative tracking-[0.5px] leading-[150%] inline-block min-w-[56px]">
              {data[7]}
            </div>
          </div>
          {token && (
            <Link
              className="flex flex-row items-center justify-start gap-[15px] bg-burlywood text-white "
              onClick={handleLogout}
            >
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/src/assets/icon/logOut.png"
              ></img>

              <div className="relative tracking-[0.5px] leading-[150%] inline-block min-w-[56px]">
                {data[8]}
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
