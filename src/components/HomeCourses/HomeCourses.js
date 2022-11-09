import React, { useEffect, useState } from "react";
import HomeCard from "./HomeCard";

const HomeCourses = () => {
  const [services, setServices] = useState();

  useEffect(() => {
    fetch("https://tuition-me-server.vercel.app/home")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="row row-cols-lg-3 row-cols-1 w-auto">
      {services?.map((service) => (
        <HomeCard key={service?._id} service={service}></HomeCard>
      ))}
    </div>
  );
};

export default HomeCourses;
