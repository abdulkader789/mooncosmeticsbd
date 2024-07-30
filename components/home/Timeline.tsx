import React from "react";

const Timeline = () => {
  return (
    <section className="container bg-white mx-auto ">
      {/* Container */}
      <div className="w-full px-5 py-12 md:px-10 md:py-16 lg:py-20 ">
        {/* Component */}
        <div className="flex flex-col items-center">
          {/* Item */}
          <div className="relative">
            <div className="absolute w-1 md:w-2 bg-black h-full left-1/2 transform -translate-x-1/2"></div>
            {/* Static Event Entry */}
            <div className="mb-20 mt-20 flex items-center w-full">
              <div className="w-1/2 text-right pr-5 md:pr-12">
                <h5 className="text-lg md:text-2xl font-semibold">
                  August 2014
                </h5>
              </div>
              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-black"></div>
              <div className="w-1/2 pl-5 md:pl-12">
                <h6 className="text-md md:text-xl font-semibold mb-3">
                  Started the company
                </h6>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus.
                </p>
              </div>
            </div>
            {/* Another Static Event Entry */}
            <div className="mb-20 mt-20 flex items-center w-full">
              <div className="w-1/2 text-right pr-5 md:pr-12">
                <h5 className="text-lg md:text-2xl font-semibold">
                  September 2016
                </h5>
              </div>
              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-black"></div>
              <div className="w-1/2 pl-5 md:pl-12">
                <h6 className="text-md md:text-xl font-semibold mb-3">
                  First Client
                </h6>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus.
                </p>
              </div>
            </div>
          </div>
          {/* Item */}
          <div className="relative">
            <div className="absolute w-1 md:w-2 bg-black h-full left-1/2 transform -translate-x-1/2"></div>
            {/* More Static Entries */}
            <div className="mb-20 mt-20 flex items-center w-full">
              <div className="w-1/2 text-right pr-5 md:pr-12">
                <h5 className="text-lg md:text-2xl font-semibold text-gray-600">
                  January 2017
                </h5>
              </div>
              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-black"></div>
              <div className="w-1/2 pl-5 md:pl-12">
                <h6 className="text-md md:text-xl font-semibold text-gray-600 mb-3">
                  Hired our first Dev
                </h6>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus.
                </p>
              </div>
            </div>
            {/* And another one */}
            <div className="mb-20 mt-20 flex items-center w-full">
              <div className="w-1/2 text-right pr-5 md:pr-12">
                <h5 className="text-lg md:text-2xl font-semibold text-gray-600">
                  May 2017
                </h5>
              </div>
              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-black"></div>
              <div className="w-1/2 pl-5 md:pl-12">
                <h6 className="text-md md:text-xl font-semibold text-gray-600 mb-3">
                  Raised $5M
                </h6>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
