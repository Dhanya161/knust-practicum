
// import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "../../shadcn/ui/label"

export function LabelComponent() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        {/* <Checkbox id="terms" /> */}
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  )
}

