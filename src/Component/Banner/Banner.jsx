import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="w-11/12 mx-auto">
      <div className="hero rounded-b-xl bg-[#9538E2] text-white pt-16 md:pb-32 pb-16">
        <div className="hero-content text-center px-4 py-12">
          <div>
            <h1 className="text-3xl font-bold">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="py-4 sm:py-6 text-lg">
              Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
            </p>
            <Link className="btn bg-white text-[#9538E2] font-bold text-base rounded-full ">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Banner;