import Link from "next/link";

export function Header() {
  return (
    <header className="bg-blue-500 text-white py-5">
      <div>
        <ul className="flex gap-4 justify-center">
          <li>
            <Link href={"/"}> Home </Link>
          </li>
          <li>
            <Link href={"/cadastro"}> Cadastro </Link>
          </li>
          <li>Login</li>
        </ul>
      </div>
    </header>
  );
}
