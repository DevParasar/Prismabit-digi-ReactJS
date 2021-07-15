import React from "react";
import Adata from "./Adata";
import Card from "./Card";

const About = () => {
  return (
    <>
    <div className="my-5">
        <h1 className="text-center"> About Us </h1>
        <div className="text-center col-10 mx-auto"> <h6>Established in 2019, Prismabit team has evolved to be an pioneer in customized portal development for Office Management in both Govt. and Semi Govt Organization. We keep looking to your requirements and compiled to your vision of work and aspiration. Prismbait is a growing startup , mainly focusing on building capacity of organization by enebling IT enbled mechansim in day-to-day activity. </h6> </div>
    </div>
      <div className="my-5">
        <h1 className="text-center"> Our Works </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Adata.map((val, ind) => {
                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} link={val.link}/>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;