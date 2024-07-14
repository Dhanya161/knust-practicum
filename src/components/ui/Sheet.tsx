import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../shadcn/ui/sheet";
import Logo from "../Logo";

export default function SheetComponent() {
  return (
    <div style={{width:"200px", height:"100%", background:""}} className="cursor-pointer " 
    onClick={() => console.log("clicked")}
    >
      <Sheet >
        <SheetTrigger className="w-full h-full">
            <Logo />
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            {/* <SheetTitle>Sheet title</SheetTitle> */}
            {/* <SheetDescription>Sheet description</SheetDescription> */}
          </SheetHeader>
          <div className="p-4 bg-gray-100">
            <p>Sheet content</p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
