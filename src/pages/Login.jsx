import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (event) => {
    console.log(event);
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    console.log(event);
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    const payload = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post("https://reqres.in/api/login", payload);
      setToken(response.data.token);
      console.log(response);
      const token = response.data.token;
      localStorage.setItem("access_token", token);
      alert("Login Berhasil");

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.log(error.response);
      setError(error.response.data.error);
      alert(`Login Gagal ${error.response.data.error}`);
    }
  };

  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start pt-[79px] pb-20 pr-[105px] pl-[440px] box-border leading-[normal] tracking-[normal] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[220px] mq750:pr-[52px] mq750:box-border">
      <section className="self-stretch h-[692px] w-[539px] shadow-[0px_4px_35px_rgba(0,_0,_0,_0.08)] rounded-21xl bg-white flex flex-col items-start justify-start pt-[52px] pb-[51px] pr-[34px] pl-11 box-border gap-[32.5px] max-w-full z-[2] text-left text-base text-black font-poppins mq450:h-auto mq675:gap-[16px] mq675:pl-[22px] mq675:box-border mq750:pt-[34px] mq750:pb-[33px] mq750:box-border">
        <div className="w-[539px] h-[741px] relative shadow-[0px_4px_35px_rgba(0,_0,_0,_0.08)] rounded-21xl bg-white hidden max-w-full"></div>
        <div className="w-[459px] flex flex-row items-start justify-between gap-[20px] max-w-full text-xl mq450:flex-wrap">
          <div className="w-[196px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
            <div className="flex flex-col items-start self-stretch justify-start">
              <a className="[text-decoration:none] relative text-[inherit] z-[1] mq450:text-base">
                Welcome to Polaris
              </a>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-2.5 text-[55px]">
                <h1 className="m-0 relative text-inherit font-medium font-inherit z-[3] mq450:text-[33px] mq750:text-[44px]">
                  Sign in
                </h1>
              </div>
            </div>
          </div>
          <div className="w-[124px] relative text-base inline-block shrink-0 z-[1] text-gray-200">
            <p className="m-0">No Account ?</p>
            <Link to={"/register"} className="m-0 text-darkgoldenrod">
              Sign up
            </Link>
          </div>
        </div>
        <div className="w-[451px] flex flex-col items-start justify-start gap-[38px] max-w-full mq450:gap-[19px]">
          <div className="self-stretch h-[92px] flex flex-col items-start justify-start pt-[35px] px-0 pb-0 box-border relative gap-[13px] z-[1]">
            <div className="mt-[-37px] relative shrink-0 [debug_commit:bf4bc93]">
              Enter your username or email address
            </div>
            <input
              className="[outline:none] bg-white self-stretch h-[57px] relative rounded-4xs box-border min-w-[250px] shrink-0 [debug_commit:bf4bc93] border-[1px] border-solid border-dodgerblue"
              type="text"
              placeholder="username or email address"
              onChange={handleEmailChange}
            ></input>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full">
            <div className="self-stretch h-[92px] relative max-w-full">
              <div className="absolute top-[0px] left-[0px] w-full h-full flex flex-col items-start justify-start pt-[54px] px-0 pb-[19px] box-border gap-[32px] max-w-full z-[1] mq450:gap-[16px]">
                <div className="mt-[-56px] relative">Enter your Password</div>
                <input
                  className="[outline:none] bg-white w-full h-[57px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px] rounded-4xs box-border border-[1px] border-solid border-darkgray-100"
                  type="password"
                  placeholder="Password"
                  onChange={handlePasswordChange}
                ></input>
              </div>
              <img
                className="absolute top-[55px] left-[410px] w-[22px] h-[19px] overflow-hidden z-[3]"
                loading="lazy"
                alt=""
                src="/src/assets/icon/eye.png"
              ></img>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end text-[13px] text-firebrick">
              <div className="relative inline-block min-w-[108px] z-[1]">
                Forgot Password
              </div>
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-[15px] pr-5 pl-[21px] bg-darkorange w-[451px] shadow-[0px_4px_19px_rgba(119,_147,_65,_0.3)] rounded-3xs flex flex-row items-start justify-center box-border whitespace-nowrap max-w-full z-[1] hover:bg-chocolate">
          <div className="h-[54px] w-[451px] relative shadow-[0px_4px_19px_rgba(119,_147,_65,_0.3)] rounded-3xs bg-darkorange hidden max-w-full"></div>
          <div
            className="relative text-base font-medium font-poppins text-white text-left inline-block min-w-[56px] z-[1]"
            onClick={handleLogin}
          >
            Sign in
          </div>
        </button>
        <div className="w-[473px] flex flex-row items-start justify-center max-w-full text-darkgray-200">
          <div className="relative inline-block min-w-[23px] z-[3]">OR</div>
        </div>
        {token && (
          <div className="items-center justify-center text-gray-200 ">
            {" "}
            <p className="items-center justify-center font-bold text-gray-200 font-poppins">
              Welcome
            </p>
          </div>
        )}
        {error && <div className="text-gray-200">{error}</div>}
        <div className="w-[471px] flex flex-row items-start justify-start py-0 px-2.5 box-border max-w-full">
          <div className="flex-1 flex flex-row flex-wrap items-end justify-center gap-[20px] max-w-full">
            <button className="cursor-pointer [border:none] pt-[15px] px-8 pb-3.5 bg-oldlace flex-1 rounded-4xs flex flex-row items-start justify-start box-border gap-[21px] min-w-[179px] whitespace-nowrap z-[3] hover:bg-antiquewhite">
              <div className="h-[55px] w-[298px] relative rounded-4xs bg-oldlace hidden"></div>
              <img
                className="h-[26px] w-[26px] relative overflow-hidden shrink-0 min-h-[26px] z-[1]"
                alt=""
                src="/src/assets/icon/google1.png"
              ></img>

              <div className="relative text-base font-poppins text-darkgoldenrod text-left z-[1] pt-1">
                Sign in with Google
              </div>
            </button>
            <div className="flex flex-row items-start justify-start gap-[13px]">
              <div className="flex flex-col items-start justify-start px-0 pt-px pb-0">
                <div className="bg-slate-200 w-[50px] h-[55px] rounded-xl">
                  <img
                    className="flex items-center justify-center pt-3.5 pl-3"
                    loading="lazy"
                    alt=""
                    src="/src/assets/icon/Fb.png"
                  ></img>
                </div>
              </div>
              <div className="bg-slate-200 w-[50px] h-[55px] rounded-xl">
                <img
                  className="flex items-center justify-center pt-3.5 pl-3"
                  loading="lazy"
                  alt=""
                  src="/src/assets/icon/appl.png"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[905px] h-[900px] !m-[0] absolute top-[0px] left-[0px] flex flex-row items-start justify-start max-w-full text-left text-xl text-indianred font-poppins">
        <div className="self-stretch w-[731px] bg-burlywood flex flex-col items-start justify-start pt-[31px] px-[42px] pb-[451px] box-border gap-[132px] max-w-full">
          <div className="w-[731px] h-[900px] relative bg-burlywood hidden max-w-full"></div>
          <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[100px] z-[1] mq450:text-base">
            Polaris
          </a>
          <div className="w-[547px] flex-1 max-w-full"></div>
        </div>
      </section>
    </div>
  );
};
export default Login;
