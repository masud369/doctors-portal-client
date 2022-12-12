import React from "react";
import './BlogDetails.css'

const BlogDetails = ({ blog }) => {
  return (
    <div className="col-md-4">
      <div className="card m-auto border-0 box-shadow blog-hover" style={{ width: "18rem" }}>
        <div className="card-body p-5">
          <div className="py-4 d-flex justify-content-left">
            <img
              className="img-fluid mr-5"
              style={{ width: "60px", marginRight: " 15px" }}
              src={blog.img}
              alt=""
            />
            <div className="">
              <h6>{blog.name}</h6>
              <small>{blog.city}</small>
            </div>
          </div>
          <div className="">
            <h6 className="text-left">{blog.title}</h6>
            <p className="card-text text-left py-3">{blog.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
