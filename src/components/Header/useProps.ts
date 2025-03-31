import { useEffect, useState } from "react";

export const useProps = () => {
  const [bgShow, setBgShow] = useState<any>(false);

  useEffect(() => {
    const verticalScroll = () => {
      setBgShow(window.scrollY > 100);
    };
    window.addEventListener("scroll", verticalScroll);
    return () => {
      window.removeEventListener("scroll", verticalScroll);
    };
  }, []);

  return { bgShow };
};
