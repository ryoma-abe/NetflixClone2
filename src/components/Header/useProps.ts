import { useState } from "react";

export const useProps = () => {
  const [bgShow, setBgShow] = useState<any>(false);

  const verticalScroll = () => {
    setBgShow(window.scrollY > 100);
  };
  window.addEventListener("scroll", verticalScroll);

  return { bgShow };
};
