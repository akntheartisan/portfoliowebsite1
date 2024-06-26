import React, { useState } from "react";
import axios from "axios";

const Projectform = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [desc, setDesc] = useState("");

  async function postdata(formData) {
    try {
      let post = await axios.post(
        "http://localhost:4000/api/project/",
        formData
      );
      alert("form submitted");
    } catch (error) {
      console.log(error);
    }
  }

  function submit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("link", link);
    formData.append("desc", desc);

    console.log(formData);
    postdata(formData);
  }

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6 form-group">
          <h4>Image</h4>
          <input
            className="form-control"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <div className="col-md-6 form-group">
          <h4>Project Title</h4>
          <input
            className="form-control"
            type="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="col-md-6 form-group">
          <h4>Link</h4>
          <input
            className="form-control"
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        <div className="col-md-6 form-group">
          <h4>Description</h4>
          <textarea
            className="form-control"
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            rows="5"
          />
        </div>

        <div
          className="col-md-12 mt-5"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <button type="submit" className="btn btn-primary" onClick={submit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projectform;
