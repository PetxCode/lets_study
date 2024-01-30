import Typewriter from "typewriter-effect";

const HomeScreen = () => {
  return (
    <div className="w-full h-[calc(100vh-70px)] bg-slate-100 flex flex-col justify-center items-center">
      <div className=" w-[300px] sm:w-[400px] md:w-[700px] text-center text-[20px] sm:text-[25px] font-bold leading-tight">
        This App makes Learning
      </div>
      <div className="text-[100px]">
        <Typewriter
          options={{
            strings: ["Fun", "Easy", "Good"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
};

export default HomeScreen;
