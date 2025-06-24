const PricingTopBar = ({ title, src, bg, border, textColor }) => {
  return (
    <div
      className={`w-fit h-fit flex items-center border justify-center !pt-[1.5px]  !pl-1.5 !pr-2 rounded-[8px] gap-1 ${bg} ${border}`}
    >
      <img src={src} alt="icon" className="w-4 h-4" />
      <p className={`text-base ${textColor}`}>{title}</p>
    </div>
  );
};

export default PricingTopBar;