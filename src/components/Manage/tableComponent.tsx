import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../shadcn/ui/table";
import { letter } from "../../lib/types";
import { Button } from "../../shadcn/ui/button";

export default function TableComponent({
  headsState,
  letterDataState,
  pageName,
}:{
    headsState: string[] ;
    letterDataState: letter[];
    pageName: string;
}) {
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
