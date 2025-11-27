'use client'

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [multipleDate, setMultipleDate] = useState<Date[] | undefined>([])

  const smallDate = date?.toLocaleDateString("es-ES", {
    weekday : "short",
    day: "numeric", 
    month : "short",

  })

  return (
    <div className = "flex-col sm:flex sm:flex-wrap sm:flex-row gap-4">
    <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md border shadow-sm"
    disabled = {(date) => date.getDay() == 0 || date.getDay() == 6 } //Domingo dia 0 
    captionLayout="dropdown"
    />
    <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md border shadow-sm"
    disabled = {(date) => date.getMonth() > 6 && date.getMonth() < 9} //Enero mes 0 
    captionLayout="dropdown"
    />
    <Calendar
    mode="multiple"
    selected={multipleDate}
    onSelect={setMultipleDate}
    className="rounded-md border shadow-sm"
    disabled = {(date) => date.getFullYear() < 2000} 
    captionLayout="dropdown"
    />

    <div>
      <h1 className = "text-3xl"> Información</h1>
      <div className="border-b"></div>
      <p> {smallDate}</p>
      
      <p>
        {multipleDate?.map( (date) => date.toLocaleDateString()).join(",")}
      </p>
    </div>
    </div>
  );
}