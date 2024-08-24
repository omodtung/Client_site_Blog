import React from "react";
import { Metadata } from "next";
import { getAllBlog, getDetailBlog } from "@/services/BlogService";
import { blogType } from "@/types";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Blog-Page-Detail",
  description: "BLogDetailPage",
};

interface Props {
  params: {
    blogId: string;
  };
}
export async function generateMetaData({ params }: Props): Promise<Metadata> {
  const blog: blogType = await getDetailBlog(params.blogId);

  return {
    title: blog.title,
    description: blog.summary,
  };
}
const BlogDetail = async ({ params }: Props) => {
  console.log("blogId = >", params.blogId);
  const blog = await getDetailBlog(params.blogId);
  const latestBlogs:blogType[]=await getAllBlog({items_per_page:'5'});
  return (
    <section className="blog-wrapper sect-pt4" id="blog">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="post-box">
              <div className="post-meta">
                <h1 className="article-title"> {blog.title}</h1>
                <ul>
                  <li>
                    <i className="fa fa-tags" aria-hidden="true"></i>{" "}
                    <label>
                      {blog.category.name}
                      {/* fix This CateGory  */}
                    </label>
                  </li>
                </ul>
                <p className="mt-3">
                  <strong>
                    <i>{blog.summary}</i>
                  </strong>
                </p>
              </div>
              <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: blog.description }}
              ></div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="widget-sidebar">
              <h5 className="sidebar-title">Latest Post</h5>
              <div className="sidebar-content">
                <ul className="list-sidebar">
                  {latestBlogs.map((item) => {
                    return (
                      <li>
                        <Link href={`/blog/${item.id}`}>{item.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
