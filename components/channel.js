import ReactDOM from "react-dom";
import Image from "next/image";
import Timer from "./timer";

export default function Channel({ name }) {
  return (
    <div className="flex relative">
      {name}

      <div className="relative">
        <Image src={"/image.png"} width="597" height="460" />
        <div className="absolute" style={{ top: "35%", left: "15%" }}>
          <Timer />
        </div>
        <div className="absolute" style={{ top: "10%", left: "85%" }}>
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
        <div className="absolute" style={{ top: "58%", left: "48%" }}>
          <Timer />
        </div>
        <div className="absolute" style={{ top: "70%", left: "42%" }}>
          <Timer />
        </div>
        <div className="absolute" style={{ top: "80%", left: "52%" }}>
          <Timer />
        </div>
      </div>
    </div>
  );
}
