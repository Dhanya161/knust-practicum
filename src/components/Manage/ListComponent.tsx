import { internship, training } from "../../lib/types";
import { Edit, Trash } from "lucide-react";
import Delete from "../../images/delete";

function ListItem({ internship }: { internship: internship | training }) {
  return (
    <div className="w-full bg h-[7rem]  bg-gray-100 rounded-md flex justify-between p-[5px]">
      <div className="text-[0.9rem]">
        <div className="font-semibold text-[0.9rem]">
          {internship.role.toUpperCase()}
        </div>
        <div>{internship.company}</div>
        <div>{internship.date}</div>
      </div>
      <div className="w-[10rem] h-full  flex justify-between">
        <button className="h-[2rem] w-[5rem] flex items-center justify-center text-[0.8rem]">
          <Trash height={"15px"} color="red" />
          <div>DELETE</div>
        </button>
        <button className="h-[2rem] w-[5rem] flex items-center justify-center text-[0.8rem]">
          <Edit height={"15px"} color="red" />
          <div>EDIT</div>
        </button>
      </div>
    </div>
  );
}

export default function ListComponent({
  pageName,
  internshipDataState,
}: {
  pageName: string;
  internshipDataState: internship[] | training[];
}) {
  console.log(internshipDataState, "internshipDataStateList");
  return (
    <div className="full min-h-screen flex items-center justify-center mt-5">
      <div className="w-[30rem] items-center justify-center min-h-screen pt-[5rem] shadow-sm p-4 gap-4 flex flex-col">
        <div className="w-full font-bold">{pageName.toUpperCase()}</div>
        {internshipDataState &&
          internshipDataState.map((internship) => (
            <ListItem internship={internship} />
          ))}
      </div>
    </div>
  );
}
