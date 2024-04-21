
function header() {
  return <div className="bg-[#FFF7E2] justify-center pt-[0.7rem] px-[1rem]  pb-[0.5rem] sticky  top-[0rem] flex">
    
    <div className="flex justify-between  w-[1232px]  ">
        <div className="flex  space-x-[5rem]">
        <img src="logo.png" className=" h-[49px] w-[249px]"></img>
        <div className="items-center justify-center ">
            <ol className="flex text-[#474747] font-bold  items-center space-x-[1rem] h-full">
                <li>
                    Home
                </li>
                <li className="text-[#3A643B] text-[1.19rem]">
                Find doctors
                </li>
                <li>
                About us
                </li>
            </ol>
        </div>
        </div>
        <div className="space-x-[10px] text-white">
            <button className="border border-[#3A643B] h-[3rem] w-[188] pb-[16px] pl-[37px] pr-[37px] pt-[11px] rounded-md font-bold text-[#3A643B]">Login</button>
            <button className="border border-[#3A643B] h-[3rem] w-[188] pb-[16px] pl-[37px] pr-[37px] pt-[11px] rounded-md font-bold bg-[#3A643B]">Sign-Up</button>
        </div>
    </div>
    </div>;
}

export default header;
