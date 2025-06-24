import React from 'react';

const TestimonialButton = ({ title, src, isActive = false, onClick }) => {

  const hasTitle = Boolean(title?.trim());

  return (

    <div
      className={`select-none cursor-pointer circle-none flex flex-shrink-0 items-center justify-center gap-1.5 rounded-[10px] w-fit h-fit transition-all duration-300 ease-out
        ${hasTitle ? "!py-[5px] !pr-[12px] !pl-[8px]" : "!p-[8px]"}
        ${isActive
          ? "bg-[var(--gray4)] border border-[var(--gray3)] hover:bg-[var(--gray3)]/80 hover:border-[var(--gray2)]/60"
          : "bg-black border border-[var(--gray3)] hover:bg-[var(--gray4)] hover:border-[var(--gray2)]"}`}
      onClick={onClick}
      role="button"
      aria-pressed={isActive}
    >

      <img
        src={src}
        alt={title || "control"}
        className={`w-4 h-4 circle-none ${isActive ? "" : "opacity-70"} transition-opacity duration-200`}
      />

      {hasTitle && (
        <p className={`smif text-[18px] ${isActive ? "" : "alt"} leading-[115%] z-20 h-4 !mb-[5px] !mt-[1px]`}>
          {title}
        </p>
      )}

    </div>

  );

};

export default React.memo(TestimonialButton);