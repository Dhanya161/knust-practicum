import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../shadcn/ui/sheet";
import Logo from "../Logo/Logo";
import { navItems, SideBarItem } from "../SideBar/SideBar";
import { Link,  } from "react-router-dom";



export default function SheetComponent() {
  return (
    <div
      style={{ width: "200px", height: "100%", background: "" }}
      className="cursor-pointer "
      onClick={() => console.log("clicked")}
    >
      <Sheet>
        <SheetTrigger className="w-full h-full">
          <Logo />
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            {/* <SheetTitle>Sheet title</SheetTitle> */}
            {/* <SheetDescription>Sheet description</SheetDescription> */}
          </SheetHeader>
          {navItems.map((item) => (
            <SideBarItem
              key={item.title}
              destination={item.destination}
              icon={item.icon}
              title={item.title}
            />
            // <div>{item.title}</div>
          ))}
        </SheetContent>
      </Sheet>
    </div>
  );
}
