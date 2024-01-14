interface CardProps {
  title: string;
  content: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, content, imageUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 max-w-sm mx-auto">
      <img src={imageUrl} alt="Card Image" className="w-full h-auto object-cover mb-9 rounded-md" />
      <div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};

export default Card;
