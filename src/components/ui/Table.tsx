import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../shadcn/ui/table";

import { letter } from "../../../src/lib/types";

export default function TableComponent({
  heading,
  heads,
  objects,
}: {
  heading: string;
  heads: string[];
  objects: letter[];
}) {
  return (
    <Table>
      <TableCaption>{heading}</TableCaption>
      <TableHeader>
        <TableRow>
          {/* <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead> */}

          {heads.map((head) => (
            <TableHead>{head}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          {/* <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell> */}
          {objects.map((object) => (
            <TableRow>
              <TableCell>{object.id}</TableCell>
              <TableCell>{object.name}</TableCell>
              <TableCell>{object.createdAt}</TableCell>
              <TableCell>{object.type}</TableCell>
              <TableCell>{object.file}</TableCell>
              {Object.keys(object).map((key) => (
                <TableCell>{object[key as keyof letter]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
}
