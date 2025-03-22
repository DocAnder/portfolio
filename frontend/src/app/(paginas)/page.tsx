import Curriculo from "@/components/curriculo";
import Principal from "@/components/landing/Principal";
import Projetos from "@/components/projetos/Projetos";
import Cabecalho from "@/components/shared/Cabecalho";
import Container from "@/components/shared/Container";
import { getProjetos } from "@/functions/projetos";
import { getTecnologias } from "@/functions/tecnologias";


export default async function Home() {

  const tecnologias = await getTecnologias();
  const projetos = await getProjetos();

  return (
    <div>
      <Principal tecnologias={tecnologias.destaques} />
      <Container className="py-15 flex flex-col items-center gap-10">
        <Projetos titulo="Destaques" projetos={projetos.destaque} />
        <Projetos titulo="Web" projetos={projetos.web} />
        <Projetos titulo="Mobile" projetos={projetos.mobile} />
        <Projetos titulo="Jogos" projetos={projetos.jogos} />
        <Curriculo tecnologias={tecnologias.todas} />
      </Container>
    </div> 
  )
}
