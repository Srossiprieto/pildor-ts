import PersonWithHook from "../components/PersonWithHook";
import {Person} from "../components/types";
import "../app/globals.css";


const persons: Person[] = [
  {
      name:'Alberto',
      age: 19,
  },
  {
      name:'Maria',
      age: 20,
  }
]


export default function Home() {
  return (
    <main className="bg-black flex min-h-screen flex-col items-center justify-between p-24">
      <PersonWithHook  />
    </main>
  );
}
