const TopDecoratorCard = ({ decorator }) => {
  return (
    <div className="card bg-base-100 shadow-md p-4">
      <div className="flex flex-col items-center text-center">
        <div className="avatar mb-3">
          <div className="w-20 h-20 rounded-full">
            <img
              src={`https://i.pravatar.cc/150?img=${decorator.id}`}
              alt={decorator.name}
            />
          </div>
        </div>
        <h3 className="text-xl font-bold">{decorator.name}</h3>
        <p className="text-sm text-gray-500">{decorator.specialty}</p>
        <p className="text-yellow-500 font-semibold">
          Rating: {decorator.rating}
        </p>
      </div>
    </div>
  );
};

export default TopDecoratorCard;
