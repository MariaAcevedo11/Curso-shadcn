"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const; //Es más especifico que string porque si o si solo serán estos valores, como un arreglo normalito

export default function Page() {
  const [open, setOpen] = useState(false); //Para tener el sheet controlado por si necesito esa bandera para algo 

  return (
    <div className="grid grid-cols-2 gap-3">
      <Button onClick={() => setOpen(true)}>Open</Button>

      <Sheet open={open} onOpenChange={setOpen}> {/*Aquí se abre el sheet controlado*/}

        <SheetTrigger>Open</SheetTrigger> {/*Aquí se abre el boton con el sheet sin control */}
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              You are amazing bro 
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger>Open {side}</SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                Bro keep calm everything happens for a reason bruh
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}