import React, { useEffect, useState } from "react";
import { urlFor, client } from "../client";
import LoaderSpinner from "./LoaderSpinner";

const MyContent = () => {
  const [myContent, setMyContent] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const query = '*[_type == "contents"]';

    client
      .fetch(query)
      .then((data) => {
        setMyContent(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching content:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-home-pg-bg-image bg-no-repeat bg-cover w-full">
      <div className="relative z-10 lg:px-20 text-white pb-8">
        <h3 className="my-skills px-5 pt-5">
          <span>My </span>
          <span className="text-custom-green">Content</span>
        </h3>
        <h3 className="what-i-use mx-5 mt-0">What I Share</h3>

        {loading ? (
          <LoaderSpinner />
        ) : (
          <article className="flex flex-col gap-10 md:gap-3 md:flex-row mx-10 mt-8">
            {myContent?.map((content) => (
              <a
                key={content._id}
                href={content.link}
                target="_blank"
                rel="noreferrer"
                className="zoom-out rounded-3xl border-2 border-custom-green"
              >
                <div>
                  <img
                    className="bg-cover bg-no-repeat w-full rounded-3xl h-56"
                    src={urlFor(content.icon)}
                    alt="content"
                  />
                  <div className="p-5">
                    <p className="text-center mb-3">
                      <span className="text-custom-green content-text">
                        {content.techStack}
                      </span>
                      <span className="content-date"> {content.date}</span>
                    </p>
                    <p className="text-center content-text">{content.text}</p>
                  </div>
                </div>
              </a>
            ))}
          </article>
        )}
      </div>
    </section>
  );
};

export default MyContent;
