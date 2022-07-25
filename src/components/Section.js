const Section = (prop) => {
  return (
    <section className={`${prop.styleClass} py-20 px-10`}>
      <div className={`${prop.container} xl:container xl:mx-auto flex gap-6`}>
        <div className="h-auto w-auto flex-1">{prop.image}</div>
        <div className="flex-1">
          <h1 className="text-5xl font-bold leading-tight">{prop.heading}</h1>
          <p className="mt-6 text-xl leading-relaxed">{prop.text}</p>
        </div>
      </div>
    </section>
  );
};

export default Section;
