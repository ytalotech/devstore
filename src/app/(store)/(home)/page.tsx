import { resolve } from "path";

export default async function Home() {

  await new Promise(resolve => setInterval(resolve, 2000))

  return (
    <h1>Hello world</h1>
  );
}
