const MarketStoryCard = ({image, title, summary}:{image: string, title: string, summary: string }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/*Market stories cards with pic, title and lines*/}
            <img src={image} alt={title} className="w-full h-32 object-cover" />
            <div className="p-3">
                <h3 className="text-sm font-semibold text-gray-800 mb-1">{title}</h3>
                <p className="text-xs text-gray-600">{summary}</p>
            </div>
        </div>
    );
};

export default MarketStoryCard;