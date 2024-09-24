const ReviewCard = () => {
  return (
    <div className="border px-8 py-7 rounded-[20px] min-w-[360px]">
      <p className="text-yellow-500 md:text-sm text-xs">★★★★</p>
      <div>
        <h1 className="font-bold text-xl">Sarah M.</h1>
      </div>
      <p className="text-base mt-5">
        "I'm blown away by the quality and style of the clothes I received from
        Shop.co. From casual wear to elegant dresses, every piece I've bought
        has exceeded my expectations.”
      </p>
    </div>
  );
};

export default ReviewCard;
