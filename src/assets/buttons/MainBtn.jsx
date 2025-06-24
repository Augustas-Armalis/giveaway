const MainBtn = ({ title, targetId }) => {

  const handleClick = (e) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

    <a
      className="circle-none select-none bg-white border border-black flex items-center justify-center rounded-[10px] w-fit h-fit !pt-[4px] !pb-[7px] !pl-[19px] !pr-[19px] transition-opacity ease-out duration-500 hover:opacity-70"
      href="/"
      onClick={handleClick}
    >
      <p className="smif text-black text-[18px] leading-[115%] !pt-[4px]">{title}</p>
    </a>

  );

};

export default MainBtn;