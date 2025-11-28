//load y tab para que se cree mas rapido 
//prc para lo mismo pero otra cosa 

import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";



//Copiar y pegar la tarjeta o lo que le vayamos a hacer el skeleton y empezar desde ahí
export default function Loading() {

 const data = '123456789'.split('');

 return (
     <div className = "grid grid-cols-1 sm:grid-cols-3 gap-2">

      {
        data.map(item => (

      <Card key = {item}>
        <CardHeader  className="flex-row">
          <Skeleton className="rounded-full mr-2 w-10 h-10"/>

           <div className="flex-col flex-grow">
            <Skeleton className="h-4 w-1/2 mb-2"></Skeleton>
            <Skeleton className="h-4 w-full mb-2"></Skeleton>
           </div>

        </CardHeader>
        <CardFooter  className = "flex justify-end">
          <Skeleton className="h-8 w-20"></Skeleton>
        </CardFooter>
      </Card>

        ) )
      }

    </div>
)
 }
