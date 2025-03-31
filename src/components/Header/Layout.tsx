import { useProps } from "./useProps";

export const Layout = () => {
  const { bgShow } = useProps();

  return (
    <div
      className={`w-full fixed top-0 left-0 h-16 p-5 z-10 ${
        bgShow ? "bg-black" : ""
      }`}
    >
      <img
        className="fixed left-5 w-20 object-contain"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <img
        className="fixed right-5 w-8 object-contain"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      />
    </div>
  );
};
