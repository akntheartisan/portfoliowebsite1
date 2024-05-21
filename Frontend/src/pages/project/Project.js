import React, { useEffect, useState } from "react";
import axios from "axios";
import "./project.css";
 
const Project = () => {
  const [proj, setProj] = useState("");

  async function getData() {
    try {
      const response = await axios.get("http://localhost:4000/api/project/");
      if (response.status === 200) {
        const data = response.data;
        console.log(data);
        setProj(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3
                style={{
                  textAlign: "center",
                  color: "white",
                  marginTop: "50px",
                  marginBottom: "50px",
                }}
              >
                My <span style={{color:'rgba(0,239,254,255)'}}>Project</span>
              </h3>
            </div>

            {proj &&
              proj.map((each) => (
                <div className="col-md-4 proshow" key={each._id}>
                  <img
                    src={`http://localhost:4000/uploads/${each.image}`}
                    style={{ width: "100%" }}
                    alt="project"
                    className="projectimg"
                  />
                  {/* <p style={{ color: "white" }}>{each.desc}</p> */}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
