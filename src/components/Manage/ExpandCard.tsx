import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../shadcn/ui/table";

import { letter, internship, training } from "../../lib/types";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "../../shadcn/ui/button";
import TableComponent from "./tableComponent";
import ListComponent from "./ListComponent";

const usesTable = ["Today", "Rejected", "Approved"];

async function getCharts(destination: string) {
  const chartsData = await fetch(`http://localhost:5000/${destination}`);
  const data = await chartsData.text();
  return data;
}

export default function ExpandCard() {
  const data = useLoaderData() as { params: { name: string } };
  const pageName = data.params.name && data.params.name;
  const [letterDataState, setLetterDataState] = useState<letter[]>();
  const [internshipDataState, setInternshipDataState] = useState<internship[]>();
  const [trainingDataState, setTrainingDataState] = useState<training[]>();
  const [headsState, setHeads] = useState<string[]>([]);


  const componentsMap : Record<string, JSX.Element> = {
    "Today": <TableComponent headsState={headsState} letterDataState={letterDataState as letter[]} pageName={pageName} />,
    "Rejected": <TableComponent headsState={headsState} letterDataState={letterDataState as letter[]} pageName={pageName} />,
    "Approved": <TableComponent headsState={headsState} letterDataState={letterDataState as letter[]} pageName={pageName} />,
    "internships" : <ListComponent pageName={pageName} internshipDataState={internshipDataState as internship[]} />,
    "trainings" : <ListComponent pageName={pageName} internshipDataState={trainingDataState as training[]} />,

  }

  useEffect(() => {
    getCharts(pageName)
      .then((data) => data)
      .then((data) => {
        const parsedData = JSON.parse(data);
        console.log(parsedData, "parsedData", pageName);
        if (pageName == "internships") {
          setInternshipDataState(parsedData as internship[]);
          console.log(internshipDataState, "internshipDataState");
          return;
        }else if (pageName == "trainings") {
          setTrainingDataState(parsedData as training[]);
          console.log(trainingDataState, "trainingDataState");
          return;
        }
        setLetterDataState(parsedData);
      });
  }, []);

  useEffect(() => {
    const heads = letterDataState && Object.keys(letterDataState[0]);
    setHeads(heads as unknown as string[]);
    console.log(heads, "heads");
  }, [letterDataState]);

  console.log(data);

  return (
    <div className="min-h-screen w-full">
      {componentsMap[pageName]}
    </div>
  );
}
