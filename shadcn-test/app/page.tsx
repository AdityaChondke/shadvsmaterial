import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex gap-[20px] flex-col items-center justify-between p-10">
      <div className="flex flex-row w-[650px] items-center justify-between   ">
         <Button variant="default">Primary</Button>
         <code>{`<Button variant="default">Primary</Button>`}</code>
      </div>
      <div className="flex flex-row w-[650px] items-center justify-between   ">
       
         <Button variant="secondary">Secondary</Button>
         <code>{`       <Button variant="secondary">Secondary</Button>`}</code>
         </div>
         <div className="flex flex-row w-[650px] items-center justify-between   ">
       
         <Button variant="ternary" >Ternary</Button>
         <code>{`<Button variant="ternary" >Secondary</Button>`}</code>
         </div>
    </main>
  )
}
