import { Smartphone } from "lucide-react";

export function Header() {
  return (
    <header className="w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-2">
          <Smartphone className="h-6 w-6 text-primary" />
          <h1 className="text-lg font-bold tracking-tight">
            Curso de Manutenção de Celulares – Área do Aluno
          </h1>
        </div>
      </div>
    </header>
  );
}
