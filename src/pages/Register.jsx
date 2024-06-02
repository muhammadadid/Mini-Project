import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    console.log(event);
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    console.log(event);
    setPassword(event.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        "https://reqres.in/api/register",
        payload
      );
      setToken(response.data.token);
      console.log(response);
      const token = response.data.token;
      localStorage.setItem("access_token", token);
      alert("Registrasi Berhasil");

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.log(error.response);
      setError(error.response.data.error);
      alert(`Registrasi Gagal ${error.response.data.error}`);
    }
  };
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start pt-20 pb-[79px] pr-[61px] pl-[451px] box-border leading-[normal] tracking-[normal] mq450:pl-5 mq450:box-border mq750:pl-[225px] mq750:pr-[30px] mq750:box-border">
      <section className="w-[905px] h-[900px] !m-[0] absolute top-[0px] left-[0px] flex flex-row items-start justify-start max-w-full text-left text-xl text-indianred font-poppins">
        <div className="self-stretch w-[731px] bg-burlywood flex flex-col items-start justify-start pt-[31px] px-[42px] pb-[451px] box-border gap-[132px] max-w-full">
          <div className="w-[731px] h-[900px] relative bg-burlywood hidden max-w-full"></div>
          <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[100px] z-[1] mq450:text-base">
            Polaris
          </a>
          <div className="w-[547px] flex-1 max-w-full"></div>
        </div>
      </section>
      <div className="self-stretch flex flex-row items-start justify-start max-w-full max-h-[90%] overflow-auto">
        <form className="m-0 w-[539px] shadow-[0px_4px_35px_rgba(0,_0,_0,_0.08)] rounded-21xl bg-white flex flex-col items-start justify-start pt-[49px] px-11 pb-[79px] box-border gap-[45px] max-w-full z-[2] mq675:gap-[22px] mq675:pl-[22px] mq675:pr-[22px] mq675:box-border mq750:pt-8 mq750:pb-[51px] mq750:box-border">
          <div className="w-[539px] h-[741px] relative shadow-[0px_4px_35px_rgba(0,_0,_0,_0.08)] rounded-21xl bg-white hidden max-w-full"></div>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
            <div className="w-[209px] flex flex-col items-start justify-start min-w-[209px] mq450:flex-1">
              <a className="[text-decoration:none] relative text-xl font-poppins text-black text-left shrink-0 [debug_commit:bf4bc93] z-[3] mq450:text-base">
                Welcome to Polaris
              </a>
              <div className="self-stretch h-[81px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
                <h1 className="mt-[-2px] m-0 relative text-[55px] font-medium font-poppins text-black text-left shrink-0 [debug_commit:bf4bc93] whitespace-nowrap z-[1] mq450:text-[33px] mq750:text-[44px]">
                  Sign up
                </h1>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start px-0 pt-px pb-0">
              <div className="relative text-[13px] font-poppins text-left z-[1]">
                <p className="m-0 text-gray-200">Have an Account ?</p>
                <Link to={"/login"} className="m-0 text-darkgoldenrod">
                  Sign in
                </Link>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[18px] box-border gap-[35px] max-w-full mq450:gap-[17px]">
            <div className="self-stretch h-[92px] flex flex-col items-start justify-start pt-[35px] px-0 pb-0 box-border relative gap-[13px] z-[1]">
              <div className="mt-[-37px] relative text-base font-poppins text-black text-left shrink-0 [debug_commit:bf4bc93]">
                Enter your username or email address
              </div>
              <input
                className="[outline:none] bg-white self-stretch h-[57px] relative rounded-4xs box-border min-w-[250px] shrink-0 [debug_commit:bf4bc93] border-[1px] border-solid border-dodgerblue"
                type="text"
                placeholder="Username or email address"
                onChange={handleEmailChange}
              ></input>
            </div>
            <div className="w-[402px] flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
              <div className="h-[86px] w-[167px] flex flex-col items-start justify-start relative z-[1]">
                <p className="[text-decoration:none] w-[216px] absolute !m-[0] top-[0px] right-[-49px] text-base font-poppins text-black text-left inline-block">
                  User name
                </p>
                <input
                  className="[outline:none] bg-white w-[216px] h-[57px] absolute !m-[0] right-[-49px] bottom-[0px] rounded-4xs box-border border-[1px] border-solid border-darkgray"
                  type="text"
                  placeholder="Enter your name"
                ></input>
              </div>
              <div className="h-[86px] w-[167px] flex flex-col items-start justify-start relative z-[1]">
                <div className="w-[216px] absolute !m-[0] top-[0px] right-[-49px] text-base font-poppins text-black text-left inline-block">
                  Contact Number
                </div>
                <input
                  className="[outline:none] bg-white w-[216px] h-[57px] absolute !m-[0] right-[-49px] bottom-[0px] rounded-4xs box-border border-[1px] border-solid border-darkgray"
                  type="text"
                  placeholder="Enter your number"
                ></input>
              </div>
            </div>
            <div className="self-stretch h-[92px] flex flex-col items-start justify-start pt-[35px] px-0 pb-0 box-border relative gap-[13px] z-[1]">
              <div className="mt-[-37px] relative text-base font-poppins text-black text-left shrink-0 [debug_commit:bf4bc93]">
                Enter your Password
              </div>
              <input
                className="[outline:none] bg-white self-stretch h-[57px] relative rounded-4xs box-border min-w-[250px] shrink-0 [debug_commit:bf4bc93] border-[1px] border-solid border-darkgray"
                type="password"
                placeholder="Enter your password"
                onChange={handlePasswordChange}
              ></input>
            </div>
          </div>
          <button
            className="cursor-pointer [border:none] py-[15px] pr-5 pl-[39px] bg-darkorange self-stretch shadow-[0px_4px_19px_rgba(119,_147,_65,_0.3)] rounded-3xs flex flex-row items-start justify-center box-border whitespace-nowrap max-w-full z-[1] hover:bg-chocolate "
            onClick={handleRegister}
          >
            <div className="h-[54px] w-[451px] relative shadow-[0px_4px_19px_rgba(119,_147,_65,_0.3)] rounded-3xs bg-darkorange hidden max-w-full"></div>
            <div className="w-[74px] relative text-base font-medium font-poppins text-white text-left inline-block shrink-0 z-[1]">
              Sign up
            </div>
          </button>

          {token && (
            <div className="text-gray-200">
              {" "}
              <p className="font-bold text-gray-200 font-poppins">Welcome </p>
            </div>
          )}
          {error && <div className="text-red-500">{error}</div>}
        </form>
      </div>
    </div>
  );
};
export default Register;
