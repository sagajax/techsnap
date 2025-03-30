import { FaFile } from "react-icons/fa";
import { PiCodeFill } from "react-icons/pi";

function Banner({ data }) {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover m-2 h-auto p-8 relative text-white rounded-lg flex flex-col "
      style={{
        backgroundImage: `
      linear-gradient(152deg, rgba(16, 21, 35, 0.8) 9.38%, rgba(16, 21, 35, 0) 38.76%),
      linear-gradient(69deg, rgba(16, 21, 35, 0.8) 22.12%, rgba(16, 21, 35, 0) 64.79%),
      linear-gradient(341deg, rgba(16, 21, 35, 0.8) 17.77%, rgba(16, 21, 35, 0) 65.07%),
      linear-gradient(34deg, rgba(16, 21, 35, 0.8) 37.95%, rgba(16, 21, 35, 0) 71.79%),
      url('https://t3.ftcdn.net/jpg/07/18/35/84/240_F_718358499_Lu4hqzCIOZ5H0MJ2jZgmm5buOJVDgPDU.jpg')
    `,
      }}
    >
      <div className=" flex gap-16 mb-10">
        <div className="lessons flex gap-2 items-center">
          <FaFile />
          <p>23 lessons</p>
        </div>
        <div className="practice flex gap-2 items-center">
        <PiCodeFill />
          <p>33 practices</p>
        </div>
      </div>
      <div className="course-language flex gap-8 mb-6">
        <div className="subtitle flex gap-2">
          <img
            className="w-6"
            src="https://d3dq4v2xxejk8c.cloudfront.net/uploads/SkPf73mCwpi4P6DCP_html.svg"
            alt=""
          />

          <p>HTML</p>
        </div>
        <div className="subtitle flex gap-2">
          <img
            className="w-6"
            src="	https://d3dq4v2xxejk8c.cloudfront.net/uploads/XmDm72Y3eQcbFkvih_JS.svg"
            alt=""
          />

          <p>JavaScript</p>
        </div>
      </div>

      <h1 className="text-2xl lg:text-4xl font-semibold mb-4">
        {data.title}
      </h1>
      <p className="text-lg mb-5 text-justify line-clamp-3 md:line-clamp-none 1200:w-[60%]">
        {data.description}
      </p>
      <div class="flex gap-8 items-center">
        <button className="bg-blue-700 p-2 rounded-md ">Continue Course</button>
        <div className="progress-box">
          <p>Progress: 50%</p>
        </div>
      </div>
      <div class="absolute hidden md:bottom-4 right-4   bg-neutral-800 md:flex gap-4  p-4 rounded-xl">
							<img class="course-logo w-6 h-6 flex-col self-center" src="https://d3dq4v2xxejk8c.cloudfront.net/uploads/XmDm72Y3eQcbFkvih_JS.svg" alt="Logo"/>
							<div>
                <p class="bg-gray-300 text-black inline-block px-4 rounded-full text-sm mb-2">
                  Intermediate
                </p>
                <p>{data.units[0].unitName}</p>
							</div>
						</div>
    </div>
  );
}

export default Banner;
