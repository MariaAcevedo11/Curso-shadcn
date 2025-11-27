
import { Badge } from "@/components/ui/badge"; 

export default function Page() {
  return (
    <div className = "grid grid-cols-4 gap-4">

      <Badge variant = 'destructive'>Destructive</Badge>
      <Badge variant = 'secondary'>Secondary</Badge>
      <Badge variant = 'default'>Default</Badge>
      <Badge variant = 'outline'>Outline</Badge>
      <Badge capitalize variant = 'info'>info</Badge>
      <Badge capitalize variant = 'success'>success</Badge>
      
    </div>
  );
}