import Link from "next/link";

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
