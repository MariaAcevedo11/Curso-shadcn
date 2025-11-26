import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const items = [
  {
    id: "item-1",
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: "item-2",
    question: "How do I get started?",
    answer: "You can start by reading the documentation.",
  },
  {
    id: "item-3",
    question: "Can I use it on multiple projects?",
    answer: "Yes. It's licensed under the MIT license.",
  },
  {
    id: "item-4",
    question: "Can I use it on multiple projects?",
    answer: "Yes. It's licensed under the MIT license.",
  },
];

export default function Page() {
  return (
    <div>
      <Accordion
      type="single" 
      /*Para cambiar si 
      se abren varios o solo uno reemplazar multiple por single and if single then add collapsible after "single" */
      className="w-full"
      defaultValue="item-1"
      
    >

      <p>Iterando sobre los items por clave valor</p>
      {
        items.map( item => (

      <AccordionItem value={ item.id } key = { item.id }>
        <AccordionTrigger>{ item.question }</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance"> 
          { item.answer }
        </AccordionContent>
      </AccordionItem>

        ))
      }
    </Accordion>
  
    </div>
  );
}