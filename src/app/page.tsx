import { db } from "@/lib/db";

export default async function Home() {
   await db.set("hello", "world");
   
  return (
    <h1> {data} </h1>
  );
}
