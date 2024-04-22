import React from "react";

function Blog() {
  return (
    <>
      <main className="text-white bg-black md:mx-36">
        <div className="flex flex-col md:flex-row justify-between w-full mx-auto mt-10 ">
          <div className="text-5xl font-bold md:w-1/2">Our Blogs</div>
          <div className="w-full md:w-3/5 text-xl mt-4 md:mt-0">
            With Cobalt, managing your business finance is effortless,
            empowering, and anything but boring. Our intuitive platform brings
            clarity to your cash flow, simplifies your financial
            decision-making, and fingertips. Say no to spreadsheets and tools
            designed in the 80s.
          </div>
        </div>
        <div className="flex flex-wrap justify-between w-full mx-auto mt-16">
          <div className="w-full sm:w-1/2 md:w-1/3 mb-8">
            <img className="h-80 w-full" src="./left_image.png" alt="" />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 mb-8">
            <img className="h-80 w-full" src="./center_image.png" alt="" />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 mb-8">
            <img className="h-80 w-full" src="./right_image.png" alt="" />
          </div>
        </div>
        <div className="flex flex-wrap justify-between w-full mx-auto mt-16">
          <div className="w-full sm:w-1/2 md:w-1/3 mb-8">
            <p className="text-xl font-bold">Lorem ipsum dolor simple</p>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ex
              ratione, ad doloribus nesciunt sint?
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 mb-8">
            <p className="font-bold text-xl text-justify">
              Lorem ipsum dolor simple
            </p>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ex
              ratione, ad doloribus nesciunt sint?
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 mb-8">
            <p className="text-xl font-bold">Lorem ipsum dolor simple</p>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ex
              ratione, ad doloribus nesciunt sint?
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between w-full mx-auto mt-10">
          <div className="w-full sm:w-1/2 md:w-1/2 mb-8">
            <img className="h-96 w-full" src="./apps_image.png" alt="" />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2">
            <img className="h-96 w-full" src="./keyboard_image.png" alt="" />
          </div>
        </div>
        <div className="w-full flex justify-center mb-16">
          <div className="text-xl bg-white text-black p-2 rounded-xl">
            Explore More
          </div>
        </div>
      </main>
    </>
  );
}

export default Blog;
