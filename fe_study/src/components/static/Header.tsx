import { Button } from "flowbite-react";

const Header = () => {
  return (
    <div className="w-full h-[70px] flex justify-center py-4 border-b">
      <div className="w-[95%] flex justify-between items-center">
        <p className="w-[150px] border bg-green-500 flex justify-center items-center h-[46px] text-white rounded-md ">
          Study App
        </p>
        <div>
          <Button className="rounded-md py-1 hover:bg-red-600 transition-all duration-300 bg-red-500 group-hover:bg-red-600 text-[12px]">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
