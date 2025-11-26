import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2Icon, PopcornIcon, AlertCircleIcon, Bug } from "lucide-react";


export default function Page() {
  return (
   <div className="grid w-full max-w-xl items-start gap-4">
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>Success! Your changes have been saved</AlertTitle>
        <AlertDescription>
          This is an alert with icon, title and description.
        </AlertDescription>
      </Alert>


      <Alert>
        <PopcornIcon />
        <AlertTitle>
          This Alert has a title and an icon. No description.
        </AlertTitle>
      </Alert>


      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>Unable to process your payment.</AlertTitle>
        <AlertDescription>
          <p>Please verify your billing information and try again.</p>
          <ul className="list-inside list-disc text-sm">
            <li>Check your card details</li>
            <li>Ensure sufficient funds</li>
            <li>Verify billing address</li>
          </ul>
        </AlertDescription>
      </Alert>


      <Alert variant = "theBestOfThemAll">
        <Bug />
        <AlertTitle>Bro the problem is between the screen and the chair, THEBESTOFTHEMALL</AlertTitle>
        <AlertDescription>
          The icon is lame 
          <ul>
            <li>Lol u are lame</li> 

          </ul>
        </AlertDescription>
      </Alert>


    </div>
  );
}