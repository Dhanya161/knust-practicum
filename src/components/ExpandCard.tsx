import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../src/shadcn/ui/table";

import { letter } from "../../src/lib/types";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "../shadcn/ui/button";

async function getCharts(destination: string) {
  const chartsData = await fetch(`http://localhost:5000/${destination}`);
  const data = await chartsData.text();
  return data;
}

export default function ExpandCard() {
  const data = useLoaderData() as { params: { name: string } };
  const pageName = data.params.name && data.params.name;
  const [letterDataState, setLetterDataState] = useState<letter[]>();
  const [headsState, setHeads] = useState<string[]>([]);

  useEffect(() => {
    getCharts(pageName)
      .then((data) => data)
      .then((data) => {
        const parsedData = JSON.parse(data);
        console.log(parsedData, "parsedData");
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
    <div className="pt-[20px]  comfortaa-normal ">
      <div className="w-full flex items-center justify-center comfortaa-bold text-red-600">
        {pageName.toUpperCase()}
      </div>
      <Table>
        <TableHeader className="">
          <TableRow>
            {headsState &&
              headsState.map((head) => <TableHead>{head}</TableHead>)}
          </TableRow>
        </TableHeader>
        <TableBody>
          {letterDataState &&
            letterDataState.map((object) => (
              <TableRow className="">
                <TableCell>{object.id}</TableCell>
                <TableCell>{object.name}</TableCell>
                <TableCell>{object.createdAt}</TableCell>
                <TableCell>{object.type}</TableCell>
                <TableCell className="h-[12px]">
                  <Button variant="outline" size="sm" className="flex gap-3">
                    <i className="bi bi-file-earmark-pdf-fill h-4"></i>
                    <div>open</div>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
