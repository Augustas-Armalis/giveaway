const ButterflyBtn = ({ title }) => {

  return (

    <a
      className="circle-none select-none bg-black border border-[var(--gray2)] flex items-center justify-center rounded-[10px] w-fit h-fit !pt-[4px] !pb-[7px] !pl-[19px] !pr-[19px] transition-bg transition-border ease-out duration-300 hover:bg-[var(--gray4)] hover:border-[var(--gray1)]/60 cursor-pointer"
      data-cal-namespace="aweb"
      data-cal-link="augustas/aweb"
      data-cal-config='{"layout":"month_view"}'
    >
      <p className="smif text-[18px] leading-[115%] z-20 !pt-[4px]">{title}</p>
    </a>

  );

};

export default ButterflyBtn;