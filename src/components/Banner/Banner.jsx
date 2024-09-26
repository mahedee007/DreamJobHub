import banner from "../../assets/images/user.png"

const Banner = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center bg-[#f9f9ff] ">
            <div className="banner-centent pl-20 ">
                <h1 className="text-[80px] font-extrabold w-[90%]">One Step Closer To Your <span className="text-[#7E90FE]">Dream Job</span></h1>
                <p className="py-6">Explore thousands of job opportunities with all the information you need. <br /> Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn bg-[#7E90FE] text-white">Get Started</button>
            </div>
            <div>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;