const CaseButton = ({ title }) => {

    return (
  
      <>
  
        <div className="select-none circle-none bg-[var(--gray4)] border border-[var(--gray3)] flex items-center justify-center rounded-[10px] w-fit h-fit !py-[5px] !px-[12px] transition-bg transition-border ease-out duration-300 hover:bg-[var(--gray3)]/80 hover:border-[var(--gray2)]/60">
          <p className="smif text-[16px] alt leading-[115%] z-20 !pt-[2px]">{title}</p>
        </div>
  
      </>
  
    );
  
  };
  
export default CaseButton;