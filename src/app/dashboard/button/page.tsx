
'use Client'

import { Button } from "@/components/ui/button";
import { ArrowUpIcon, CircleFadingArrowUpIcon, GitBranch } from "lucide-react";

export default function Page() {
  return (
    <div className="grid grid-cols-4 gap-2">
      
      <Button variant="ghost">Ghost bro</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="default">Default</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant = "getCrazyBro">getCrazyBro (Blue)</Button>
      <Button disabled>Disabled</Button>
      <Button capitalize = {true}>capitalizado bro</Button>
      <Button variant="outline"> 
      <Button variant="lolipop">
      <GitBranch /> From Lucide 
      </Button>
      <Button variant="lolipop">
      <CircleFadingArrowUpIcon /> What is this bro 
      </Button>
      </Button>
      <ArrowUpIcon />
    </div>
  );
}