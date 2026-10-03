import { Shell } from "@/components/Shell";
import { VisaoGeral } from "@/sections/VisaoGeral";
import { Trajetoria } from "@/sections/Trajetoria";
import { Projetos } from "@/sections/Projetos";
import { Stack } from "@/sections/Stack";
import { Formacao } from "@/sections/Formacao";
import { Contato } from "@/sections/Contato";
import { IdiomaProvider } from "@/utils/idioma";
import { useTema } from "@/utils/tema";

export default function App() {
  // Liga o tema ao aparelho desde o primeiro render; o script do index.html já
  // pintou o documento antes disso.
  useTema();

  return (
    <IdiomaProvider>
      <Shell>
        <VisaoGeral />
        <Trajetoria />
        <Projetos />
        <Stack />
        <Formacao />
        <Contato />
      </Shell>
    </IdiomaProvider>
  );
}
