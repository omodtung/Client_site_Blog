import React from "react";
import { Metadata } from "next";
import { getAllBlog } from "@/services/BlogService";
import { NavItem } from "react-bootstrap";
import Link from "next/link";
import { blogType } from "@/types";
import moment from "moment";
export const metadata: Metadata = {
  title: "Blog Page General",
  description: " Blog-Page",
};
const Blog = async () => {
  const Blog :blogType[]= await getAllBlog();
  console.log(Blog);
 
  return (
    <section className="blog-wrapper sect-pt4" id="blog">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="widget-sidebar">
              <h5 className="sidebar-title">Present Post</h5>
              <div className="sidebar-content">
               
              </div>
            </div>
          </div>
          <div className="row">
        {/* clear data in browser it can work :>>> */}
{/*  profileData.avatar
                        ? profileData.avatar
                        : "../assets/images/default_pic_ava.png" */}
            {
                Blog.map(item=>
                    {
                        return (
                            <div className="col-md-4">
                            <div className="card card-blog">
                                <div className="card-img">
                                    <Link href={`/blog/${item.id}`}>
                                        <img src={`${process.env.API_URL}/${item.thumbnail}`} alt={item.title} className="img-fluid" />
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <div className="card-category-box">
                                        <div className="card-category">
                                            <h6 className="category">{item.category.name}</h6>
                                            {/* console.log ({item.category.name} ) */}
                                        </div>
                                    </div>
                                    <h3 className="card-title">
                                        <Link href={`/blog/${item.id}`}>{item.title}</Link>
                                    </h3>
                                    <p className="card-description">
                                        {/* lon hon 120 ki tu thi cat */}
                                        {item.summary.length > 120 ? `${item.summary.slice(0, 120)}...` : item.summary}
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <div className="post-author">
                                        <img src={`${process.env.API_URL}/${item.user.avatar}`} alt="" className="avatar rounded-circle" />
                                        <span className="author">{item.user.first_name}</span>
                                    </div>
                                    <div className="post-date">
                                        <span className="ion-ios-clock-outline"></span> <i className="fa fa-calendar" aria-hidden="true"></i> {moment(item.created_at).format("DD/MM/YYY")}
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
