import { useEffect, useState } from "react";
import sanityClient from "../client";
import { Link } from "react-router-dom";
// import useVisibilityObserver from "../hooks/useVisibilityObserver";
// import { SanityClient } from "@sanity/client";

const Post = () => {
  // const [addToRef] = useVisibilityObserver();
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "post"]{
        title,
        slug,
        mainImage{
        asset-> {
        _id,
        url
        },
        alt
        }
        
        }`
    )
      .then((data) => setPost((data)))
      .catch(console.error);
  }, []);

  return (
    <section className="bg-home-pg-bg-image bg-no-repeat bg-cover w-full">
      <div className="relative z-10 lg:px-20 text-white pb-8">
        <h3 className="my-skills px-5 pt-5">
          <span>My </span>
          <span className="text-custom-green">Content</span>
        </h3>
        <h3 className="what-i-use mx-5 mt-0">What I Share</h3>

        {/* <article className="flex flex-col gap-10 md:gap-3 md:flex-row mx-10 mt-8">
          {posts.map((post) => (
            <a
              key={post._id}
              href={post.link}
              target="_blank"
              rel="noreferrer"
              ref={addToRef}
              className="zoom-out container rounded-3xl border-2 border-custom-green"
            >
              <div>
                <img
                  className="bg-cover bg-no-repeat w-full rounded-3xl h-56"
                  src={post.mainImage}
                  alt={post.title}
                />
                <div className="p-5">
                  <p className="text-center mb-3">
                    <span className="text-custom-green content-text">
                      {post.title}
                    </span>
                    <span className="content-date">
                      {" "}
                      {new Date(post.publishedAt).toDateString()}
                    </span>
                  </p>
                  <p className="text-center content-text">{post.description}</p>
                </div>
              </div>
            </a>
          ))}
        </article> */}
        {postData &&
          postData.map((post, index) => (
            <article>
              <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                <span>
                  <img
                    src={post.mainImage.asset.url}
                    alt={post.mainImage.alt}
                  />
                  <span>
                    <h3>{post.title}</h3>
                  </span>
                </span>
              </Link>
            </article>
          ))}
      </div>
    </section>
  );
};

export default Post;
