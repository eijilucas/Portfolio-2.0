import { About } from "./sections/about/about";
import { Header } from "./components/header/header";
import { Start } from "./sections/start/start";

import './components/styles/home.scss'
import { Projects } from "./sections/project/projects";

export default function Home() {
  return (
   <main className='container'>
    <Header />
    <Start/>
    <About/>
    <Projects/>
   </main>
  )
}
