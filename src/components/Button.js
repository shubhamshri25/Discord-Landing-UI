function Button(prop) {
  return (
    <button
      className={`${prop.styleClass} rounded-full bg-white px-4 py-2 text-sm hover:text-[#5865f2] hover:drop-shadow-xl w-100%`}
    >
      {prop.icon}
      {prop.buttonText}
    </button>
  );
}

export default Button;
