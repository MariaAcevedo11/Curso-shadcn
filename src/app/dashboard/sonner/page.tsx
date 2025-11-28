
'use client'

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Page() {
  return (
    <div className="grid grid-cols-4 gap-4">
     <Button
      variant="lolipop"
      onClick={() =>
        toast("Event has been created", {
          className : "bg-red", //Todas las configuraciones están en la documentación  https://sonner.emilkowal.ski/
          position: "top-right", 
          duration: 1000,
          description: 'Sunday, December ${new Date().getFullYear()}, 2023 at 9:00 AM',
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Show Toast
    </Button>

    <Button
      variant="lolipop"
      onClick={() =>
        toast.success("Event has been created", { 
          className : "bg-green",//Todas las configuraciones están en la documentación 
          position: "top-right", 
          duration: 3000,
          description: "Sunday, December ${new Date().getFullYear()}, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Show Toast
    </Button>
    </div>
  );
}