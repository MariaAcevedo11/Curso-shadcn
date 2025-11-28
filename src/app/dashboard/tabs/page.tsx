
'use client'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Tab1 from "./ui/tab1"
import Tab2 from "./ui/tab2"
import Tab3 from "./ui/tab3";




export default function Page() {
  return (
   <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="user">User</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
        <Tab1/>
        </TabsContent>
        <TabsContent value="password">
        <Tab2/>
        </TabsContent>
        <TabsContent value="user">
        <Tab3/>
        </TabsContent>
      </Tabs>
    </div>
  );
}