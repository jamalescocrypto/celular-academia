import { LessonList } from "@/components/lesson-list";
import { lessons } from "@/lib/lessons";
import { CopyButton } from "@/components/copy-button";
import { Smartphone, AlertTriangle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <header className="w-full border-b bg-secondary shadow-md">
        <div className="container flex h-16 items-center px-4">
          <div className="flex items-center gap-2">
            <Smartphone className="h-6 w-6 text-primary" />
            <h1 className="text-[17px] font-bold tracking-tight text-primary">
              Curso Completo - Área do Aluno
            </h1>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-8 md:py-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[26px] font-bold tracking-tighter">
              Bem-vindo à área do aluno.
            </h2>
            <p className="mt-4 text-center text-foreground md:text-xl">
              Agora é hora de transformar conhecimento em renda extra! Assista às aulas abaixo e avance no Curso completo de Manutenção de Celulares.
            </p>
            <Alert
              variant="destructive"
              className="mt-6 bg-card text-left"
            >
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle className="font-bold">Atenção</AlertTitle>
              <AlertDescription className="font-bold">
                Faça o pagamento em até 2 horas para não perder o acesso às aulas
                abaixo.
              </AlertDescription>
            </Alert>
            <CopyButton
              textToCopy="11922048814"
              label="Chave PIX (Celular):"
              className="mt-4"
            />
          </div>

          <div className="mx-auto mt-8 max-w-4xl md:mt-12">
            <LessonList lessons={lessons} />
          </div>

          <div className="mx-auto mt-8 max-w-3xl text-center md:mt-12">
            <Alert
              variant="destructive"
              className="mt-6 bg-card text-left"
            >
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle className="font-bold">Atenção</AlertTitle>
              <AlertDescription className="font-bold">
                Faça o pagamento em até 2 horas para não perder o acesso às aulas
                acima.
              </AlertDescription>
            </Alert>
            <CopyButton
              textToCopy="11922048814"
              label="Chave PIX (Celular):"
              className="mt-4"
            />
          </div>
        </div>
      </main>
      <footer className="border-t">
        <div className="container flex h-16 items-center justify-center px-4">
          <p className="text-sm text-foreground">
            © 2026 Academia do Celular. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
