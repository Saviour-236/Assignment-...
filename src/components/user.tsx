function user() {
  return (
    <>
      <div className="text-black px-[4.5rem] pt-[2rem]">
        <div className="bg-[url('userbg.png')] h-[6rem] rounded"></div>
        <div className="bg-[#FFF7E2] items-center px-[3rem] h-fit flex justify-between h-[7.1rem]   mt-[-2px]">
          <span className="flex space-x-[1rem]">
            <img
              src="userpic.png"
              className="relative mt-[-3rem] h-[8rem] ml-[3rem]"
            ></img>
            <span>
              <div>
                <p className="font-bold">Dr. Bruce Willis</p>
              </div>
              <p className="text-[#3A643B] font-bold">Gynecologist</p>
              <div className="flex">
                <p>4.2</p>
                <img src="stars.png"></img>
                <img src="stars.png"></img>
                <img src="stars.png"></img>
                <img src="stars.png"></img>
                <img src="stars.png"></img>
              </div>
            </span>
          </span>
          <span className="justify-between flex space-x-[3rem]">
            <span className="text-center ">
              <p className="text-[#3A643B] text-[0.8rem] font-bold">
                Followers
              </p>
              <p className="font-bold">850</p>
            </span>
            <span className="text-center ">
              <p className="text-[#3A643B] text-[0.8rem]  font-bold">
                Following
              </p>
              <p className="font-bold">18k</p>
            </span>
            <span className="text-center ">
              <p className="text-[#3A643B] text-[0.8rem]  font-bold">Posts</p>
              <p className="font-bold">250</p>
            </span>
          </span>
          <span>
            <button className="border text-white border-[#3A643B] h-[3rem] w-[188] pb-[16px] pl-[37px] pr-[37px] pt-[11px] rounded-md font-bold bg-[#3A643B]">
              Book an Appointment
            </button>
          </span>
        </div>
      </div>
    </>
  );
}

export default user;
