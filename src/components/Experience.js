import React from "react";

const ExperienceSection = () => {
  const internships = [
    {
      company: "Sky Goal",
      position: "Web Developer Intern",
      startDate: "April 01, 2022",
      endDate: "October 01, 2022",
      certificateLink:
        "https://drive.google.com/file/d/1-s6rwIvcqKISC_WDPcqAy428cLhTbUQu/view?usp=share_link",
    },
    {
      company: "Hajo",
      position: "Web Developer Intern",
      startDate: "January 01, 2022",
      endDate: "February 01, 2022",
      certificateLink:
        "https://drive.google.com/file/d/14Dpnhp-iCjdxUKDJX5EP1Hjd89ygvN2_/view?usp=share_link",
    },
    {
      company: "BYTEFIELDS LLP",
      position: "Web Developer Intern",
      startDate: "March 19, 2023",
      endDate: "May 19, 2023",
      certificateLink:
        "https://drive.google.com/file/d/120J0AJh7bwlpUTIm9UFfJc5pF3WX0FF4/view?usp=drive_link",
    },
  ];

  return (
    <section id="experience" className=" py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Experience</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {internships.map((internship, index) => (
            <div key={index} className="bg-white rounded-md shadow-md p-6">
              <h3 className="text-xl lg:text-2xl font-bold mb-2">
                {internship.company}
              </h3>
              <p className="text-lg text-gray-600 mb-2">
                {internship.position}
              </p>
              <p className="text-gray-600 mb-4">
                {internship.startDate} - {internship.endDate}
              </p>
              <a
                href={internship.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 hover:bg-gray-700 text-white px-6 py-3 rounded-lg block"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
