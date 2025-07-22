import React from "react";
import CategoryItem from "../component/CategoryItem";
import Box from "../component/Boxes";

const JobDetail = () => {
  return (
    <div className=" border flex justify-around max-w-[1250px] mx-auto">
      <div className="border w-[70%]">
        <Box>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            repellat enim, quasi quod officia ullam accusamus eveniet sapiente
            odio quidem nam, illo ipsa repellendus laudantium earum incidunt
            nisi laboriosam dolorum.
          </p>
        </Box>
      </div>
      <div>
        <div>
          <h2>About</h2>
          <div className="shrink-0 flex">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5709/5709755.png"
              className="w-10 h-10"
            />
            <div>
              <p>Posted On</p>
              <p className="">Jul 10, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
