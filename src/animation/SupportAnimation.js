import lottie from "lottie-web";
import { useEffect, useRef } from "react";

const SupportAniation = () => {
  const container = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/animation/supportAni.json",
    });

    return () => anim.destroy();
  }, []);

  return <div ref={container} style={{ width: 500, height: 500 }} />;
};

export default SupportAniation;
