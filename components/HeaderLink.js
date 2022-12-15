
const HeaderLink = ({Icon, text, avatar, feed}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center cursor-pointer ${
        feed
          ? "text-black/60 hover:text-black dark:text-white/75 dark:hover:text-white lg:-mb-1.5 space-y-1"
          : "text-gray-500 hover:text-gray-700"
      }`}
    >
      {/* if the icon is a avatar, then use specifiec styling, otherwise normal */}
      {avatar ? <Icon classname="!h-7 !w-7 lg:!-mb-1 " /> : <Icon />}
      <h4 className="text-sm"> {text} </h4>
    </div>
  );
}

export default HeaderLink