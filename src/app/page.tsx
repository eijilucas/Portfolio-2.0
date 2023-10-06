import { About } from "./sections/about/about";
import { Header } from "./components/header/header";
import { Start } from "./sections/start/start";

import './components/styles/home.scss'
import { Projects } from "./sections/project/projects";
import { Certificate } from "./sections/certificate/certificate";
import { Abilities } from "./sections/abitities/abilities";

export default function Home() {
  return (
   <main className='container'>
    <Header />
    <Start/>
    <About/>
    <Projects/>
    <Certificate/>
    <Abilities/>
   </main>
  )
}
