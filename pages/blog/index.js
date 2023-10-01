import React, { useState } from 'react';
import styles from "./Blog.module.css"
import { BlogData } from './BlogData';
import Link from 'next/link'; // Import Link from Next.js

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  const offset = currentPage * itemsPerPage;
  const currentItems = BlogData.slice(offset, offset + itemsPerPage);

  const pageCount = Math.ceil(BlogData.length / itemsPerPage);

  const BlogDetail = (data) => {
    // Use the "as" prop in the Link component to specify the route
    return (
      <Link href="/blogdetail" as={`/blogdetail/${data.id}`}>
     
          {data.btn} <img src={data.btnicon} alt='icon' />
      
      </Link>
    );
  };

  return (
    <>
      <div className={styles.blog_section}>
        <div className={styles.blog_data}>
          <h6 className={styles.blog_heading}>Admission Application Process</h6>
          <p className={styles.blog_para}>
            Introducing an efficient way to organize your availability with
            people.
          </p>
          <div className={styles.blog_list}>
            {currentItems.map((data) => {
              return (
                <div className={styles.blog__list_data} key={data.id}>
                  <div className={styles.blog_list_text}>
                    <div className={styles._blogname_div}>
                      <p className={styles.blog_name}>{data.name}</p>
                      <img src={data.line} alt='line' />{' '}
                      <span>{data.date}</span>{' '}
                    </div>
                    <p className={styles.blog_title}>{data.title}</p>
                    <p className={styles.blog_para}>{data.para}</p>
                    <button className={styles.blog_btn}>{BlogDetail(data)}</button>
                  </div>
                  <div className={styles.blog_list_img}>
                    <img src={data.blogimg} alt='img' />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <OtherBlog /> */}
    </>
  );
};

export default Blog;
