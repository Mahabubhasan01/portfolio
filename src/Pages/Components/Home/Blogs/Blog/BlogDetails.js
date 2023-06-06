import React, { useEffect, useRef, useState } from "react";
import "./BlogDetail.css";
import { useParams, useNavigation } from "react-router-dom";
const BlogDetails = () => {
  const indicatorRef = useRef(null);
  const { id } = useParams();
  const [blog, setBlog] = useState();

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [id]);
  const title = blog?.title;
  const body = blog?.body;

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
  return (
    <>
      {blog ? (
        <div class="wrapper">
          <div class="scroll-indicator" ref={indicatorRef}></div>
          <div class="content-wrapper">
            <div class="content">
              <div class="poster">
                <div class="poster-title">
                  <h1> Article template </h1>
                  <div class="line"></div>
                  <p>{title}</p>
                </div>
                <div class="poster-buttons">
                  <div>
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="css-i6dzq1"
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
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="css-i6dzq1"
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
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="css-i6dzq1"
                    >
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="info">
                <div class="block published">
                  <div class="mini-title">Published</div>
                  12.09.2022
                </div>
                <div class="block published">
                  <div class="mini-title">Views</div>3 251
                </div>
                <div class="block published">
                  <div class="mini-title">Likes</div>
                  156
                </div>
                <div class="block published">
                  <div class="mini-title">Reading</div>
                  12 min
                </div>
              </div>
              <div class="words">
                <p>
                  <font class="letter">L</font>
                  hello
                </p>
                <p>
                  <font class="letter">D</font>
                  Dolor sit amet, consectetur adipisicing elit. Rem dolorem
                  possimus delectus officia aspernatur rerum repellendus quos
                  necessitatibus sed! Deserunt dolor maxime accusantium, vero
                  nostrum ipsam iure hic repellendus, eum numquam fugiat quo
                  fuga ducimus minima veritatis. Deserunt dolor maxime
                  accusantium, vero nostrum ipsam iure hic repellendus, eum
                  numquam fugiat quo fuga ducimus minima veritatis.
                </p>
                <p>
                  <font class="letter">S</font>
                  Sit amet, consectetur adipisicing elit. Rem dolorem possimus
                  delectus officia aspernatur rerum repellendus quos
                  necessitatibus sed! Deserunt dolor maxime accusantium, vero
                  nostrum ipsam iure hic repellendus, eum numquam fugiat quo
                  fuga ducimus minima veritatis. Deserunt dolor maxime
                  accusantium, vero nostrum ipsam iure hic repellendus, eum
                  numquam fugiat quo fuga ducimus minima veritatis. Dolor sit
                  amet, consectetur adipisicing elit. Rem dolorem possimus
                  delectus officia aspernatur rerum repellendus quos
                  necessitatibus sed! Deserunt dolor maxime accusantium.
                </p>
                <div class="buttons">
                  <div>
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="css-i6dzq1"
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
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="css-i6dzq1"
                    >
                      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="quote">
                <p>
                  {" "}
                  <font class="letter">“</font>
                  Nothing could be worse than the fear that one had given up too
                  soon, and left one unexpended effort that might have saved the
                  world.
                </p>
                <p class="author">Jane Addams</p>
              </div>
              <div class="words">
                <p>
                  <font class="letter">S</font>
                  Sit amet, consectetur adipisicing elit. Rem dolorem possimus
                  delectus officia aspernatur rerum repellendus quos
                  necessitatibus sed! Deserunt dolor maxime accusantium, vero
                  nostrum ipsam iure hic repellendus, eum numquam fugiat quo
                  fuga ducimus minima veritatis. Deserunt dolor maxime
                  accusantium, vero nostrum ipsam iure hic repellendus, eum
                  numquam fugiat quo fuga ducimus minima veritatis. Dolor sit
                  amet, consectetur adipisicing elit. Rem dolorem possimus
                  delectus officia aspernatur rerum repellendus quos
                  necessitatibus sed! Deserunt dolor maxime accusantium,
                </p>
                <div class="buttons">
                  <div>
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="css-i6dzq1"
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
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="css-i6dzq1"
                    >
                      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="author">
                <div class="image"></div>
              </div>
            </div>
          </div>
          <div class="footer">
            <div class="content">
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
