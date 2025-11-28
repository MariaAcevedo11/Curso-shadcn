'use client'

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Page() {

  const [progress, setProgress] = useState(3)  //Valor incial 
  
  
  useEffect(() => {

    const interval = setInterval(() => { //Una función que si el anterior es igual o mayor a 100 entonces q pare
      setProgress((prev) => {
        if (prev >= 100){
          clearInterval(interval);
          return 100; 
        }
        return prev + 1; 
      });
    }, 100); 

    return () => {

      clearInterval(interval);

    };
  }, []); 


  return <Progress value={progress} color = {  //ya aquí el color está como propiedad cn todavía no entiendo que es pero supongo que es para darle varios valores
    cn({
      "bg-red-500": progress < 50,
    "bg-yellow-500": progress >= 50 && progress < 80,
    "bg-green-500": progress >= 80
    })
  } className="w-[80%]" /> //Para el largo de la barra
}