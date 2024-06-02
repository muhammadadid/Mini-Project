import { data } from "autoprefixer";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";


const Profile = () => {
  const [user, setUser] = useState([]);
  const param = useParams();
  console.log(param?.id);

  const LinkList =["Dashboard", "Users", "Documents", "Photos", "Hierarchy", "Message","Help", "Settings", "Logout"]
  

  const getProfile = async () => {
    try {
      const response = await axios.get(
        `https://reqres.in/api/users/${param?.id}`
      );
      setUser(response.data?.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="w-full relative bg-whitesmoke-100 overflow-hidden flex flex-row items-start justify-start py-0 pr-10 pl-0 box-border gap-[40px] leading-[normal] tracking-[normal] text-left text-sm text-text-3- font-hachi-maru-pop mq1050:gap-[20px] mq1050:pl-5 mq1050:box-border">
      <Navbar data={LinkList} />
      <div className="flex-1 flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border max-w-[calc(100%_-_118px)] mq1050:max-w-full">
        <section className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-5xl text-darkslategray-100 font-poppins">
            <div className="flex flex-col items-start justify-start gap-[12px]">
              <h3 className="relative m-0 font-medium text-inherit font-inherit whitespace-nowrap">
                Welcome, {user?.first_name}
              </h3>
              <div className="relative text-base font-light text-darkgray-300 whitespace-nowrap mq1050:hidden">
                Have a nice day
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center bg-neutral-20 ">
            <div className="w-full max-w-sm overflow-hidden bg-white shadow-lg rounded-21xl">
              <div className="flex justify-center mt-4">
                <img
                  className="w-32 h-32 border-4 border-white rounded-full"
                  src={user?.avatar}
                  alt="Profile Picture"
                />
              </div>
              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-darkslategray-100">
                  {user?.first_name} {user?.last_name}
                </h2>
                <p className="mb-4 text-dimgray">{user?.email}</p>
                <p className="mb-6 text-gray-200">
                  John is a software engineer with over 10 years of experience
                  in web development, specializing in modern JavaScript
                  frameworks and responsive design.
                </p>
              </div>
            </div>
          </div>
          <Link to={"/"} className="px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700">
            Back        
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Profile;
