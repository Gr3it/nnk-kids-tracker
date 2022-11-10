import ReactDOM from "react-dom";
import Image from "next/image";
import Timer from "./timer";

export default function Channel({ name }) {
  return (
    <div className="flex relative">
      {name}

      <div className="relative">
        <Image src={"/image.png"} width="597" height="460" />
        <div className="absolute" style={{ top: "37%", left: "17%" }}>
          <Timer />
        </div>
        <div className="absolute" style={{ top: "12%", left: "87%" }}>
          <Timer />
        </div>
        <div className="absolute" style={{ top: "45%", left: "75%" }}>
          <Timer />
        </div>
        <div className="absolute" style={{ top: "15%", left: "40%" }}>
          <Timer />
        </div>
        <div className="absolute" style={{ top: "25%", left: "50%" }}>
          <Timer />
        </div>
        <div className="absolute" style={{ top: "70%", left: "72%" }}>
          <Timer />
        </div>
        <div className="absolute" style={{ top: "58%", left: "50%" }}>
          <Timer />
        </div>
        <div className="absolute" style={{ top: "67%", left: "40%" }}>
          <Timer />
        </div>
        <div className="absolute" style={{ top: "70%", left: "45%" }}>
          <Timer />
        </div>
        <div className="absolute" style={{ top: "70%", left: "50%" }}>
          <Timer />
        </div>
        <div className="absolute" style={{ top: "80%", left: "45%" }}>
          <Timer />
        </div>
      </div>
    </div>
  );
}
