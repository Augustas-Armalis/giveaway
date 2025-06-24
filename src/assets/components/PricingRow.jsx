const PricingTopBar = ({ title, src }) => {
  return (
    <div className="flex w-fit gap-2 items-center">
      <img src={src} alt="icon" className="w-4 h-4 opacity-70" />
      <p className="text-base">{title}</p>
    </div>
  );
};

export default PricingTopBar;