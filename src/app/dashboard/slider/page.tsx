'use client'
import { Slider } from "@/components/ui/slider";
import { useState } from "react";


export default function Page() {

  const [sliderValue, setSliderValue] = useState(10);
  const [rangeValue, setRangeValue] = useState([10,20]);

  return (
    <div className="grid grid-cols-1 gap-3">
      <span>Slider Value: {sliderValue}</span>
      <Slider
      defaultValue={[sliderValue]} //arreglo
      onValueChange = {(value) => setSliderValue(value[0])}
      max={100}
      step={1}
    />

      <span>Range Value: {rangeValue.join(',')}</span>
      <Slider
      defaultValue={rangeValue} //arreglo
      onValueChange = {setRangeValue}
      max={100}
      step={1}
    />

    
    </div>
  );
}