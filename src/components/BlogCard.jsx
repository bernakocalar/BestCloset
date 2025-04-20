import { Clock, GitGraphIcon } from "lucide-react";

export default function BlogCard() {
  const image = "/assets/blogcard.png";
  return (
    <div className="border rounded-lg shadow-md flex flex-col text-left">
      <img
        src={image}
        alt=""
        className="w-full h-auto object-cover rounded-t-md"
      />

      <div className="px-4 md:px-6 py-4 space-y-2">
        <p className="font-semibold text-sm md:text-base">
          Google Trending New
        </p>
        <h3 className="text-lg md:text-xl font-semibold">
          Koudetat à la Maison #1 (L'intégrale)
        </h3>
        <p className="text-[#737373] text-sm md:text-base">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 py-2 border-t gap-2 text-sm md:text-base">
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4 text-blue-500" />
          <p>20 April 2025</p>
        </div>
        <div className="flex items-center space-x-2">
          <GitGraphIcon className="w-4 h-4 text-gray-500" />
          <p>10 comments</p>
        </div>
      </div>

      <p className="px-4 py-2 text-[#23A6F0] font-medium text-sm md:text-base">
        Learn More
      </p>
    </div>
  );
}
