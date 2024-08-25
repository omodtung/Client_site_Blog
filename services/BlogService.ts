export interface paramsType {
  items_per_page?: string;
  page?: string;
  search?: string;
}

export const getAllBlog = async (params: paramsType={}) => {
  const urlParam = new URLSearchParams();
  if (params.items_per_page) {
    urlParam.set("items_per_page", params.items_per_page);
  }
  if (params.page) {
    urlParam.set("page", params.page);
  }

  if (params.search) {
    urlParam.set("items_per_page", params.search);
  }

  const blogs = await fetch(`${process.env.API_URL}/post?${urlParam}`,{cache:'no-store'});
  const blogData = await blogs.json();
  return blogData.data;
};
export const getDetailBlog = async (blogId: string) => {
  const res = await fetch(`${process.env.API_URL}/post/${blogId}`);
  console.log("res =>", res);
  return await res.json();
};
