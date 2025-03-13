import { useEffect, useState } from "react";
import { urlFor, client } from "../client";
import LoaderSpinner from "./LoaderSpinner";

const MyContent = () => {
  const [myContent, setMyContent] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const query = '*[_type == "contents"]';

    client.fetch(query).then((data) => {
      setMyContent(data);
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

        {loading && <LoaderSpinner />}

        <article className="flex flex-col gap-10 md:gap-3 md:flex-row mx-10 mt-8">
          {myContent.map(({ _id, link, icon, techStack, date, text }) => (
            <div key={_id} className="rounded-3xl border-2 border-custom-green">
              <a href={link} target="_blank" rel="noreferrer">
                <div>
                  <img
                    className="bg-cover bg-no-repeat w-full rounded-3xl h-56"
                    src={urlFor(icon)}
                    loading="lazy"
                    alt="react content"
                  />
                  <div className="p-5">
                    <p className="text-center mb-3">
                      <span className="text-custom-green content-text">
                        {techStack}
                      </span>
                      <span className="content-date">{date}</span>
                    </p>
                    <p className="text-center content-text">{text}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
};

export default MyContent;
