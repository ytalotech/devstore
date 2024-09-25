import { resolve } from "path";

export default async function Search() {

  await new Promise(resolve => setInterval(resolve, 2000))

  return (
    <h1>Search</h1>
  );
}
