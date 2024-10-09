import Image from "next/image";

export function CustomImagem() {
  return (
    <Image
      src="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Imagem"
      className="h-36 w-36 rounded-md"
      width={100}
      height={100}
    />
  );
}
