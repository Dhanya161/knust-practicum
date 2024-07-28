import BlueWave from "../../images/blue-wave-haikei";
import ChartIcon from "../../images/chart"
import GeneralIcon from "../../images/general";
import "./manage.css";

function ManageCard({
  title,
  description,
  imageClass,
  link,
  icon,
}: {
  title: string;
  description: string;
  imageClass: string;
  link: string;
  icon?: JSX.Element;
}) {
  return (
    <a
    href={link}
      className={`flex flex-col  relative items-center justify- w-[15rem] p-2 m-2 h-[10rem] text-white white rounded-lg shadow-lg bg-contain ${imageClass}`}
    >
      <div className="text font-bold w-full h-[3rem]  flex items-center justify-between p-2">
        {title}
        <i className="bi bi-plus-circle w-[20px] h-[20px]"></i>
      </div>
      <div className="w-full flex flex-col items-center justify-center h-[4rem] absolute bottom-3 ">
        <div className="absolute flex-col h-[4.5rem] w-[4.5rem] bg-white rounded-lg flex items-center justify-center">
          <div className="h-full w-full flex items-center justify-center">{icon}</div>
          <div className="text-black text-[10px] w-full flex items-center justify-center">view all</div>
        </div>
      </div>
    </a>
  );
}

export default function Manage() {
  return (
    <div className="w-full min-h-screen mt-[4rem] overflow-x-hidden font-normal">
      <div className="flex flex-wrap justify-start">
        <ManageCard
          title="Internships"
          description="Manage users"
          imageClass="boxOne"
          link="/manage/internships"
          icon={<ChartIcon />}
        />
        <ManageCard
          title="Training Programs"
          description="Manage products"
          imageClass="boxTwo"
          link="/manage/trainings"
          icon={<BlueWave />}
        />
        <ManageCard
          title="General"
          description="Manage orders"
          imageClass="boxThree"
          link="/manage/general"
          icon={<GeneralIcon />}
        />
      </div>
    </div>
  );
}
