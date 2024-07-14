import { useLoaderData } from "react-router-dom";

export default function ExpandCard() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div
      //   className="flex items-center justify-center w-screen h-screen"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        background: "red",
      }}
    >
      Expand Card
    </div>
  );
}
