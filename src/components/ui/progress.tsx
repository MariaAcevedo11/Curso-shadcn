"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"


interface CustomProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root >{

  color? : string; //Creamos la interfaz y le añadimos la propiedad de el color 
}
const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  CustomProps
  //React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root > 
   
>(({ className, value, color = "bg-primary",...props }, ref) => ( //aquí lo definimos como primario
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-primary/20 blue-500",
      className
    ) }
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={
        cn("h-full w-full flex-1 transition-all", color) //Y aquí lo agregamos al view del componente, se sobrepone a cualquier color porque definimos arriba que era el primario 
      }
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
