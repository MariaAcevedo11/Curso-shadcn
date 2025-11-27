import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Page() {
  return (
    <div>
      <Avatar className = "flex justify-center items-center">
        <AvatarImage src = "https://th.bing.com/th/id/R.9f1b21faeb6b6596004f31d92cd4bbd8?rik=sKXlYft%2f5r0gHg&riu=http%3a%2f%2fimages2.fanpop.com%2fimages%2fphotos%2f8400000%2fHannah-Montana-Season-1-Promotional-Photos-HQ-3-hannah-montana-8435551-1365-2048.jpg&ehk=83iajJNvxOysqzLcAdBpzMYhpPeIXgkZB6Ov6jJvYR8%3d&risl=&pid=ImgRaw&r=0"></AvatarImage>
        <AvatarFallback>404</AvatarFallback>     
      </Avatar>


      <p className = "m-2">@shadcn</p>
    </div>
  );
}