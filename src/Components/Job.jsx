import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

function Job(props) {
  const { id, title, company, dates, duties } = props.job[0];

  return (
    <section key={id} className="md:px-32 max-md:mt-8 max-md:mx-2">
      <h1 className="text-3xl">{title}</h1>
      <h4 className="text-[15px] bg-gray-300 w-max rounded-md px-2 text-gray-600 py-0.5 my-2">
        {company}
      </h4>
      <h5 className="text-sm text-gray-500 my-2">{dates}</h5>
      {duties.map((duty, index) => {
        return (
          <article
            className="grid grid-cols-[0.1fr_0.9fr] leading mt-4 text-left"
            key={index}
          >
            <FaAngleDoubleRight className="text-cyan-500 md:mr-8 md:text-[30px] max-md:text-[18px]" />
            <p>{duty}</p>
          </article>
        );
      })}
    </section>
  );
}

export default Job;
