import React, { Component } from "react";
import NavBar from "./NavBar";
const Home = () => {
    return (
    <>
    <NavBar/>

    <div classname="">
        <div>
        <img src="./assets/images/img2.jpg" className=" mt-20 h-[512px] w-full  fixed " />
        </div>
        
        <div className=" border-spacing-x-8 m lg:flex fixed mt-[512px] md:flex sm:inline-block lg:h-32 lg:w-full   justify-evenly align-middle">
          <div className=" sm:mb-10 lg:mb-0 box-content bg-white drop-shadow-md  h-64 w-3/5 p-4 border-4 bo rounded-xl">
            {/* <div className="circle rounded-full ml-28 top-1 w-11 h-11 bg-cyan-400">
              <i className="fa-solid relative ml-3 text-xl top-3 fa-briefcase"></i>
            </div> */}
            <h1 className="border-spacing-14 bg-slate-200 rounded-s-full lg:text-4xl sm:font-bold text-center  border-blue-500"><br/>
            Re-Home and Adopt a Pet in India
            </h1>
            <br />
            <p className=" sm:font-bold text-center lg:w-[90%] ">
              You will get 200+ Marketing Post for your Business Categories
            </p>
      
          </div>
    </div>
</div>
    </>
    )
}
export default Home;