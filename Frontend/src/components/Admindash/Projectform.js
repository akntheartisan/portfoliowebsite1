import React, { useState } from "react";

const Projectform = () => {
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [desc, setDesc] = useState("");

  function submit() {
    const formData = {
      image: image,
      link: link,
      desc: desc,
    };
    console.log(formData);

    async function postdata() {
      try {
      } catch (error) {}
    }
  }

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-4 form-group offset-md-2">
          <h4>Image</h4>
          <input
            className="form-control"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <div className="col-md-4 form-group">
          <h4>Link</h4>
          <input
            className="form-control"
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        <div className="col-md-6 form-group offset-md-3">
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
          <button className="btn btn-primary" onClick={submit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projectform;
