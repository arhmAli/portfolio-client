import Image from "next/image";
import Link from "next/link";
import About from "./about";
import './main.css'
export default function Home() {
  return (
    <div className="Parent-div-home">
      <div className="intro">
        <div className="name">
        <h1 >Hello ...</h1>
        <h3 className="typewriter">My name is <strong >Omar Alzeyara</strong> and Im a mechanical Engineer</h3>
        <h3>Colorado State University Mechanical Enginnering</h3>
        </div>
        <div className="person-img">

        </div>
      </div>
      <About/>
      <div className="home-page-links">
        <Link href="/clock">
        <span>Clock Project</span>
        </Link>
        <Link href="/therivet">
        <span>the rivet Project</span>
        </Link>
        <Link href="/screwdriver">
        <span>screwdriver Project</span>
        </Link>
      </div>
    </div>
  );
}