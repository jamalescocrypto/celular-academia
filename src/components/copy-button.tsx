"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface CopyButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  textToCopy: string;
  label: string;
}

export function CopyButton({
  textToCopy,
  label,
  className,
  ...props
}: CopyButtonProps) {
  const [hasCopied, setHasCopied] = useState(false);
  const { toast } = useToast();

  const onCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }
      setHasCopied(true);
      toast({
        title: "Copiado!",
        description: "A chave PIX foi copiada para a área de transferência.",
      });
      setTimeout(() => {
        setHasCopied(false);
      }, 3000);
    } catch (err) {
      console.error("Erro ao copiar: ", err);
      toast({
        variant: "destructive",
        title: "Erro ao copiar",
        description: "A chave PIX é: " + textToCopy,
      });
    }
  };

  return (
    <div
      className={cn(
        "mt-6 flex flex-col items-center justify-center gap-3 rounded-lg border bg-card p-4",
        className
      )}
      {...props}
    >
      <div className="text-center p-0 m-0">
        <div className="mb-2">
          <p className="text-sm font-bold text-card-foreground">Valor:</p>
          <p className="text-[20px] font-bold text-primary">R$19,90</p>
        </div>
        <div>
          <p className="mb-1 text-sm font-bold text-card-foreground">{label}</p>
          <p className="text-[18px] font-semibold text-primary">{textToCopy}</p>
        </div>
      </div>
      <Button onClick={onCopy} className="text-[16px]">
        {hasCopied ? <Check /> : <Copy />}
        {hasCopied ? "Copiado!" : "Copiar Chave PIX"}
      </Button>
    </div>
  );
}
