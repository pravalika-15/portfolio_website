import React from "react";

const CodingProfilesSection = () => {
  const profiles = [
    {
      platform: "GitHub",
      username: "pravalika-15",
      url: "https://github.com/pravalika-15",
    },
    {
      platform: "CodeChef",
      username: "jaanvi-15",
      url: "https://www.codechef.com/users/jaanvi_15#_=_",
    },
    {
      platform: "Geeksforgeeks",
      username: "pravalikaattada15",
      url: "https://auth.geeksforgeeks.org/user/pravalikaattada15/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user",
    },
    {
      platform: "LeetCode",
      username: "attadapravalika",
      url: "https://leetcode.com/attadapravalika/",
    },
  ];

  return (
    <section id="coding-profiles" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Coding Profiles</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {profiles.map((profile, index) => (
            <a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-2 transition duration-300"
            >
              <div className="bg-white rounded-md shadow-md p-6 h-full hover:bg-gray-300 ">
                <h3 className="text-xl font-bold mb-2">{profile.platform}</h3>
                <p className="text-gray-600">
                  Username:{" "}
                  <span className="font-semibold">{profile.username}</span>
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfilesSection;
