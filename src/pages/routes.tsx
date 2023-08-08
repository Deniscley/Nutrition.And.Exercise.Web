import Link from "next/link";
import About from "./about";
import Contact from "./contact";
import Gallery from "./gallery";
import HomePage from "./homePage";
import NotFound from "./notFound";
import Plans from "./plans";
import Trainers from "./trainers";

export default function Routes() {
  return (
    <ul>
      <li>
        <Link href="/homePage">Home Page</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
      <li>
        <Link href="/gallery">Gallery</Link>
      </li>
      <li>
        <Link href="/plans">Plans</Link>
      </li>
      <li>
        <Link href="/trainers">Trainers</Link>
      </li>
      <li>
        <Link href="/notFound">NotFound</Link>
      </li>
    </ul>
  );
}
