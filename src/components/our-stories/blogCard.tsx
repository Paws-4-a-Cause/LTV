interface BlogCardProps {
  title: string;
  date: string;
  readTime: number;
  description: string;
  imageUrl: string;
  redirect: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  date,
  readTime,
  description,
  imageUrl,
}) => {
  return (
    <div className="flex overflow-hidden cursor-pointer">
      <div className="w-1/2">
        {" "}
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-[430px] object-cover"
        />
      </div>

      <div className="flex flex-col w-1/2 py-6 ml-10">
        <div className="font-extralight mb-5">
          <p className="text-sm">
            {date} • {readTime} min read
          </p>
        </div>
        <div className="">
          <div className="mb-3">
            <h2 className="text-3xl font-bold">{title}</h2>
          </div>
          <p
            className="text-xl mt-2 font-light"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3, // Limit to 3 lines
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
