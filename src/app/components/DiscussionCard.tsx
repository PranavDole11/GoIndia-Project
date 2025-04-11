import { ThumbsUp, MessageCircle, Eye, Share2 } from "lucide-react";

const DiscussionCard = (
  {name, sector, profilePic, content, views, likes, comments, time} :
  {name: string, sector: string, profilePic: string, content: string, likes: number, comments: number, views: number, time: string}
  ) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 mb-4 w-full">
      {/*first line with pic, name and time*/}
      <div className="flex items-center mb-2 relative">
        <img
          src={profilePic} 
          alt="Profile"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div className="flex flex-col">
          <span className="font-bold text-sm text-black">{name}</span>
          <span className="text-xs text-gray-500">
            <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium">
              {sector}
            </span>
          </span>
        </div>
        <div className="absolute right-5">
            <span className="text-blue-400">
              {time}
            </span>
        </div>
      </div>
      
      {/*second line with content*/}
      <p className="text-sm text-gray-800 mb-3 line-clamp-2">{content}
      </p>

      {/*last line with interactions*/}
      <div className="flex items-center text-gray-500 text-sm gap-6">
        <div className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
          <ThumbsUp size={16} /> <span>{likes}</span>
        </div>
        <div className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
          <Eye size={16} /> <span>{views}</span>
        </div>
        <div className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
          <MessageCircle size={16} /> <span>{comments}</span>
        </div>
        <div className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
          <Share2 size={16} />
        </div>
      </div>
    </div>
  );
};

export default DiscussionCard;
