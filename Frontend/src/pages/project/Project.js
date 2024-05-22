import React, { useEffect, useState } from "react";
import axios from "axios";
import "./project.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Project = () => {
  const [proj, setProj] = useState([]);
  const navigate = useNavigate();

  async function getData() {
    try {
      const response = await axios.get("http://localhost:4000/api/project/");
      if (response.status === 200) {
        const data = response.data;
        console.log("Projects data:", data);
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
              My <span style={{ color: "rgba(0,239,254,255)" }}>Project</span>
            </h3>
          </div>

          {proj.length > 0 &&
            proj.map((each) => (
              <div className="col-md-4 proshow" key={each._id}>
                <img
                  src={`http://localhost:4000/uploads/${each.image}`}
                  style={{ width: "100%" }}
                  alt="project"
                  className="projectimg"
                />
                <Button
                  onClick={() =>
                    navigate(`/projectexp/${each._id}`, {
                      state: { desc: each.desc, link: each.link },
                    })
                  }
                >
                  Click Here
                </Button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
