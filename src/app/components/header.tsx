import Link from "next/link";

export function Header() {
  return (
    <header className="bg-blue-500 text-white py-5 flex justify-end md:justify-center">
      <nav className="hidden md:block">
        <ul className="flex gap-4 justify-center">
          <li>
            <Link href={"/"}> Home </Link>
          </li>
          <li>
            <Link href={"/cadastro"}> Cadastro </Link>
          </li>
          <li>Login</li>
        </ul>
      </nav>
      <span className="bg-red-500 md:hidden flex justify-end">Menu</span>
    </header>
  );
}
