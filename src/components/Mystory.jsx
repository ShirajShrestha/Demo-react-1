import iconStory from "./../assets/images/icon-story.png";
import longArrow from "./../assets/images/long-arrow-right.png";

const Mystory = () => {
  const Posts = [
    {
      id: "1",
      cat: ["category"],
      title: "Quis hendrerit dolor magna eget est lorem ipsum dolor sit",
      date: "July 19, 2020",
      time: "4 min read",
    },
    {
      id: "2",
      cat: ["category", "category"],
      title: "QSenectus et netus et malesuada fames ac turpis egestas integer",
      date: "June 30, 2020",
      time: "5 min read",
    },
    {
      id: "3",
      cat: ["category"],
      title:
        "Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies",
      date: "June 26, 2020",
      time: "3 min read",
    },
  ];

  return (
    <>
      <div className="container mx-auto">
        <div className="py-16 lg:py-20">
          <div className="flex items-center pb-6">
            <img src={iconStory} alt="icon story" />
            <h3 className="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">
              My Story
            </h3>
            <a
              href="/blog"
              className="flex items-center pl-10 font-body italic text-green transition-colors hover:text-secondary dark:text-green-light dark:hover:text-secondary"
            >
              All posts
              <img src={longArrow} className="ml-3" alt="arrow right" />
            </a>
          </div>
          <div className="pt-8">
            {Posts.map((post) => (
              <div key={post.id}>
                <div className="border-b border-grey-lighter pb-8">
                  {post.cat.map((number, index) => (
                    <span
                      key={index}
                      className="mb-4 inline-block rounded-full bg-green-light px-2 py-1 font-body text-sm text-green"
                    >
                      <span>{number}</span>
                    </span>
                  ))}
                  <a
                    href="/post"
                    className="block font-body text-lg font-semibold text-primary transition-colors hover:text-green dark:text-white dark:hover:text-secondary"
                  >
                    {post.title}
                  </a>
                  <div className="flex items-center pt-4">
                    <p className="pr-2 font-body font-light text-primary dark:text-white">
                      {post.date}
                    </p>
                    <span className="font-body text-grey dark:text-white">
                      {"//"}
                    </span>
                    <p className="pl-2 font-body font-light text-primary dark:text-white">
                      {post.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Mystory;
