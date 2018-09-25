import Link from "next/link";

export default () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>Index page</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>about page</a>
          </Link>
        </li>
      </ul>
      <h1>Goapl well done</h1>
    </div>
  );
};
