import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
       <main className="w-screen">
        <section className="w-full px-20 pt-20 pb-8">
          <h1 className="font-questrial text-9xl">BPO em Marketing</h1>
          <h2 className="w-3/5 font-questrial text-5xl">Se o seu marketing não vende, não é marketing, é Hobbie!</h2>
        </section>

        <section className="w-full">
          <div className="flex gap-5 flex-wrap">
            <div className="bg-impulse_green rounded-tr-3xl border py-24 px-14 flex flex-col gap-5">
              <h2 className="font-questrial text-4xl w-fit">Branding</h2>
              <p className="font-questrial text-base w-2/3">Não se trata de criar uma marca. Se trata de construir memórias e conectar corações. E nós fazemos isso por você</p>
              <Link href={""} className="px-10 py-2 border border-black rounded-t-3xl rounded-br-3xl w-fit hover:bg-black hover:text-impulse_green transition">fale com a gente</Link>
            </div>
            <div className="py-14 px-32 h-fit rounded-3xl bg-gray-200 mt-auto">
              <div className="w-16 h-32 relative animate-bounce">
                <Image src="/down_arrow.svg" alt="Seta indicando para baixo" fill/>
              </div>
            </div>
            <div className="bg-black rounded-tl-3xl border py-24 px-14 flex flex-col gap-5">
              <h2 className="font-questrial text-4xl text-white w -fit">Gestão de Tráfego</h2>
              <p className="font-questrial text-base text-white w-2/3">Transformamos a complexidade digital em solução para seu negócio</p>
              <Link href={""} className="px-10 py-2 border text-white border-white rounded-t-3xl rounded-br-3xl w-fit hover:bg-white hover:text-black transition">alavanque sua marca!</Link>
            </div>
            <div className="w-10 h-10 relative">
              <Image src={"/empresarios_passando.jpg"} alt="Imagem ilustrativa de negócios" fill/>
            </div>
            <div className="bg-black rounded-3xl border py-24 px-14 flex flex-col gap-5 text-impulse_green">
              <h2>Social Media</h2>
              <p>Cativamos e conectamos pessoas através de conteúdos realmente relevantes.</p>
              <Link href={""} className="px-10 py-2 border border-impulse_green rounded-t-3xl rounded-br-3xl w-fit hover:bg-impulse_green hover:text-black transition">confira nossa solução</Link>
            </div>
            <div className="py-10 px-24 h-fit rounded-3xl bg-gray-200">
              <div className="w-40 h-40 relative fill-impulse_purple">
                <Image src="/star.svg" alt="" fill/>
              </div>
            </div>
          </div>
        </section>

        {/* <section>
          <h1>Nossa história</h1>
          <div>
            <h2>Somos especialistas em moldar o futuro de negócios.</h2>
            <p>Em 2020, com a chegada da pandemia ao Brasil, tornou-se evidente que as marcas que não se adaptassem e se reposicionassem no mercado enfrentariam severas consequências dessa crise sanitária global. Antecipando esta realidade, agimos proativamente. Nossas estratégias permitiram impulsionar significativamente negócios que, contra todas as expectativas, não só se mantiveram firmes como também prosperaram em um cenário extremamente desafiador. Hoje, munidos de uma vasta expertise acumulada, especializamo-nos em encurtar o caminho para o sucesso de inúmeras empresas por todo o Brasil. Através de nossa metodologia inovadora de BPO em Marketing, nosso foco é capacitar as empresas a se concentrarem em suas competências centrais, enquanto nossos especialistas dedicam-se aos aspectos cruciais do marketing. Este modelo tem se mostrado eficaz, resultando em maior eficiência operacional, redução significativa de custos, acesso a tecnologias de ponta e expertise especializada, além da flexibilidade para escalar as operações de marketing de acordo com as necessidades dinâmicas do mercado.</p>
            <Link href={""}>Saiba mais</Link>
          </div>
        </section>

        <section>
          <h1>Serviços</h1>
          <div>
            <div>
              <div className="w-10 h-10 relative">
                <Image src="/logo_arrow.svg" alt="Logo Impulse BPO" fill/>
              </div>
              <h2>Estratégia de comunicação</h2>
              <p>Implementamos uma estratégia de comunicação que é um plano coordenado para entregar uma mensagem consistente e eficaz ao seu público-alvo, utilizando diferentes canais e ferramentas de mídia.</p>
            </div>
            <div>
              <div className="w-10 h-10 relative">
                <Image src="/logo_arrow.svg" alt="Logo Impulse BPO" fill/>
              </div>
              <h2>Transmitir a mensagem da marca</h2>
              <p>Nós transmitimos a mensagem da sua marca ao comunicar de forma clara e eficaz os valores, missão e características únicas da sua empresa, utilizando diversos canais e métodos de comunicação.</p>
            </div>
            <div>
              <div className="w-10 h-10 relative">
                <Image src="/logo_arrow.svg" alt="Logo Impulse BPO" fill/>
              </div>
              <h2>Estratégia de Tráfego Pago</h2>
              <p>Nós desenvolvemos uma estratégia de tráfego pago ao planejar e executar campanhas de publicidade online pagas, visando aumentar a visibilidade e atrair mais visitantes e leads qualificados para seu site ou plataforma digital.</p>
            </div>
            <div>
              <div className="w-10 h-10 relative">
                <Image src="/logo_arrow.svg" alt="Logo Impulse BPO" fill/>
              </div>
              <h2>Identidade de marca</h2>
              <p>Criaremos a identidade da  marca, que  é o conjunto único de elementos visuais e verbais que usamos para diferenciar e comunicar nossa mensagem, incluindo logo, cores, tipografia e tom de voz.</p>
            </div>
          </div>
        </section> */}
      </main>

      <footer>

      </footer>
    </>
  );
}
