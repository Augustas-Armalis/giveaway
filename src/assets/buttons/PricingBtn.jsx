const PricingBtn = ({ title, className, text, ...rest }) => {

  return (

    <button
      className={`circle-none cursor-pointer select-none ${className} flex items-center justify-center rounded-[10px] w-full h-fit !pt-[4px] !pb-[7px] !pl-[19px] !pr-[19px] transition-bg transition-border ease-out duration-300 !mt-3`}
      {...rest}
    >
      <p className={`smif text-[18px] ${text} leading-[115%] z-20 !pt-[4px]`}>{title}</p>
    </button>

  );

};

export default PricingBtn;