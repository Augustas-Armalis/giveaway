const TestimonialLink = ({ title, link, src }) => {

  return (

    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-[6px] w-fit circle-none"
      >

        <img
          src={src}
          className="w-4 h-4 opacity-40 group-hover:opacity-70 transition-opacity ease-out duration-300"
        />

        <p className="text-[var(--gray1)]/60 sf group-hover:text-[var(--gray1)] transition-colors ease-out duration-300">
          {title}
        </p>

      </a>
    </>

  );

};

export default TestimonialLink;