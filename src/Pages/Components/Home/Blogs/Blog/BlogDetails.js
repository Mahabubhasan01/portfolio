import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "./BlogDetail.css";

const BlogDetails = () => {
  const indicatorRef = useRef(null);
  const { id } = useParams();
  const [blog, setBlog] = useState();
  const [viewCount, setViewCount] = useState(1);

  useEffect(() => {
    const url = `http://localhost:5000/blogs/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
        setViewCount(data.viewCount);
      });
  }, [id]);

  const title = blog?.title;
  const content = blog?.content;
  const author = blog?.author;
  const date = blog?.date;

  useEffect(() => {
    const scroll = () => {
      const mx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const perc = (document.documentElement.scrollTop * 100) / mx;
      indicatorRef.current.style.width = perc + "%";
    };

    document.addEventListener("scroll", scroll);

    return () => {
      document.removeEventListener("scroll", scroll);
    };
  }, []);

  const calculateReadingTime = (text) => {
    const wordsPerMinute = 200; // Adjust this value based on average reading speed
    // Check if the text parameter is defined
    if (!text || typeof text !== "string") {
      return 0;
    }
    // Calculate the number of words in the text
    const wordCount = text.trim().split(/\s+/).length;

    // Calculate the reading time in minutes
    const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);

    return readingTimeMinutes;
  };

  const readingTime = calculateReadingTime(content);

  return (
    <>
      {blog ? (
        <div className="wrapper">
          <div className="scroll-indicator" ref={indicatorRef}></div>
          <div className="content-wrapper">
            <div className="content">
              <div className="poster">
                <div className="poster-title">
                  <h2>{title}</h2>
                  <div className="line"></div>
                </div>
                <div className="poster-buttons">
                  <div>
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="css-i6dzq1"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </div>
                  <div>
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="css-i6dzq1"
                    >
                      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                    </svg>
                  </div>
                  <div>
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="css-i6dzq1"
                    >
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="info">
                <div className="block published">
                  <div className="mini-title">Published</div>
                  {date}
                </div>
                <div className="block published">
                  <div className="mini-title">Views</div>
                  {viewCount}
                </div>
                <div className="block published">
                  <div className="mini-title">Likes</div>
                  156
                </div>
                <div className="block published">
                  <div className="mini-title">Reading</div>
                  {readingTime} min
                </div>
              </div>
              <div className="words">
                <p>
                  <font className="letter">D</font>
                  {content}
                </p>
                <div className="buttons">
                  <div>
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="css-i6dzq1"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </div>
                  <div>
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="css-i6dzq1"
                    >
                      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="quote">
                <p>
                  <font className="letter">“</font>
                  Nothing could be worse than the fear that one had given up too
                  soon, and left one unexpended effort that might have saved the
                  world.
                </p>
                <p className="author">{author}</p>
              </div>
              <div className="words">
                <div className="buttons">
                  <div>
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="css-i6dzq1"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </div>
                  <div>
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="css-i6dzq1"
                    >
                      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="author">
                <div className="image"></div>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="content">
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                voluptate, laboriosam sunt eveniet eius iure, sapiente in
                maiores quasi saepe quas quisquam obcaecati odio exercitationem
                rerum, molestias aliquid ipsa excepturi laborum quaerat! Tempora
                necessitatibus
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                voluptate, laboriosam sunt eveniet eius iure, sapiente in
                maiores quasi saepe quas quisquam obcaecati odio exercitationem
                rerum, molestias aliquid ipsa excepturi laborum quaerat! Tempora
                necessitatibus
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default BlogDetails;
