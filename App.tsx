
import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  ChevronDown, 
  Zap, 
  TrendingUp,
  Lock,
  RefreshCw,
  Terminal,
  DollarSign,
  MessageSquare,
  Quote,
  User,
  Star,
  Layers
} from 'lucide-react';

// --- Helper Components ---

const BrutalistButton: React.FC<{ 
  children: React.ReactNode; 
  className?: string; 
  primary?: boolean;
}> = ({ children, className = "", primary = false }) => (
  <button className={`brutalist-button px-6 py-4 text-lg font-bold uppercase tracking-tight ${primary ? 'bg-black text-white' : 'bg-white text-black'} ${className}`}>
    {children}
  </button>
);

const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = "", id }) => (
  <section id={id} className={`py-16 md:py-24 px-6 md:px-0 max-w-1160 mx-auto ${className}`}>
    {children}
  </section>
);

const ModuleCard: React.FC<{ title: string; description: string; index: number }> = ({ title, description, index }) => (
  <div className="brutalist-border bg-white p-8 flex flex-col gap-4 min-h-[200px]">
    <div className="text-xs font-bold opacity-30 uppercase tracking-widest">ETAPA 0{index + 1}</div>
    <h4 className="text-xl font-bold leading-tight uppercase underline decoration-2 underline-offset-4">
      {title}
    </h4>
    <p className="text-sm md:text-base opacity-70 leading-relaxed font-medium">{description}</p>
  </div>
);

const StuckCard: React.FC<{ num: string; title: string; desc: string }> = ({ num, title, desc }) => (
  <div className="brutalist-border bg-white p-8 space-y-6 flex flex-col items-start min-h-[220px]">
    <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-bold text-lg">{num}</div>
    <h4 className="font-bold text-xl uppercase leading-none tracking-tight">{title}</h4>
    <p className="text-sm md:text-base opacity-60 leading-relaxed font-medium">{desc}</p>
  </div>
);

const SystemStepCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="brutalist-border bg-white p-8 space-y-6 flex flex-col items-start min-h-[220px]">
    <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-bold">{icon}</div>
    <h4 className="font-bold text-xl uppercase leading-none tracking-tight">{title}</h4>
    <p className="text-sm md:text-base opacity-60 leading-relaxed font-medium">{desc}</p>
  </div>
);

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b-2 border-black">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:bg-black/5 transition-colors"
      >
        <span className="font-bold text-lg md:text-xl uppercase tracking-tighter pr-4">{question}</span>
        <ChevronDown className={`w-6 h-6 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} strokeWidth={3} />
      </button>
      {isOpen && (
        <div className="pb-6 pr-8 text-base md:text-lg text-black/70 leading-relaxed font-medium">
          {answer}
        </div>
      )}
    </div>
  );
};

const TestimonialCard: React.FC<{ text: string; author: string }> = ({ text, author }) => (
  <div className="brutalist-border bg-white p-6 flex flex-col gap-4 h-full border-l-8 border-l-green-500">
    <Quote className="text-black/10" size={32} />
    <p className="text-base font-bold italic leading-relaxed text-black/80">"{text}"</p>
    <div className="mt-auto pt-4 border-t border-black/10">
      <div className="flex items-center gap-1 mb-1">
        {Array.from({length: 5}).map((_, i) => <Star key={i} size={12} className="fill-green-600 text-green-600"/>)}
      </div>
      <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">{author}</span>
    </div>
  </div>
);

const App: React.FC = () => {
  const checkoutUrl = "https://pay.hub.la/Ui8fsItYY02ZeNtjc0Dl";

  return (
    <div className="min-h-screen selection:bg-black selection:text-white overflow-x-hidden paper-bg">
      
      {/* Hero Section - CENTRALIZADO COM VÍDEO */}
      <Section className="text-center pt-24 md:pt-32 pb-16 border-b border-black/10 flex flex-col items-center">
        <div className="mb-8 inline-block px-4 py-2 border-2 border-black font-bold uppercase tracking-widest text-xs bg-black text-white shadow-[4px_4px_0px_#ff0000]">
          SISTEMA COMPLETO DE VENDAS
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-10 tracking-tighter uppercase text-black mx-auto">
          Transforme sua <br/>
          <span className="highlighter-red">base em dinheiro</span> agora. <br/>
          E atraia compradores <br/>
          novos todos os dias.
        </h1>
        <div className="space-y-8 max-w-4xl mx-auto mb-16">
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-tight leading-tight px-4 border-y-2 border-black py-6 md:py-8">
            O sistema que te faz vender com consistência — sem esperar crescer, sem depender de alcance, sem parecer vendedor.
          </h2>
          <p className="text-lg md:text-xl text-black/60 font-bold leading-relaxed">
            Monetize os seguidores que você já tem hoje + crie um sistema que traz clientes qualificados de forma constante. <br/>
            <span className="text-black italic underline decoration-green-500 decoration-4 underline-offset-8">Vendas agora. Vendas sempre.</span>
          </p>
        </div>

        {/* VSL - Panda Video */}
        <div className="w-full max-w-[400px] mx-auto brutalist-border overflow-hidden bg-black shadow-[12px_12px_0px_#ff0000]">
          <div style={{ position: 'relative', paddingTop: '177.77777777777777%' }}>
            <iframe 
              id="panda-8bea72f2-caac-4f8c-9631-1e5375d9ea7a" 
              src="https://player-vz-3ce101f1-cb3.tv.pandavideo.com.br/embed/?v=8bea72f2-caac-4f8c-9631-1e5375d9ea7a" 
              style={{ border: 'none', position: 'absolute', top: 0, left: 0 }} 
              allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" 
              allowFullScreen={true} 
              width="100%" 
              height="100%" 
              fetchPriority="high"
            ></iframe>
          </div>
        </div>
      </Section>

      {/* Intro Pain */}
      <Section className="bg-white border-y-4 border-black !max-w-none px-6 md:px-0 shadow-inner">
        <div className="max-w-1160 mx-auto py-16">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                Você tem gente olhando. <br/>
                <span className="text-red-600 italic">Mas não vende.</span>
              </h2>
              <div className="space-y-4 text-lg md:text-xl opacity-80 italic leading-snug">
                <p>Pessoas veem seus stories.</p>
                <p>Acompanham o que você posta.</p>
                <p>Até interagem de vez em quando.</p>
                <p className="font-bold text-black not-italic">Mas não compram.</p>
                <p className="text-base opacity-60">E você pensa: "Quando eu tiver mais seguidores, eu vou vender mais."</p>
                <p className="font-black text-red-600 uppercase not-italic text-3xl tracking-tighter mt-6">NÃO VAI.</p>
              </div>
            </div>
            <div className="brutalist-border p-10 bg-zinc-50 rotate-1 shadow-[8px_8px_0px_#000]">
              <h3 className="font-bold mb-6 text-xl uppercase tracking-tighter border-b-2 border-black pb-4">A parte que ninguém quer admitir</h3>
              <p className="mb-6 text-lg font-medium opacity-70 italic leading-relaxed">
                A maioria não está tentando vender. Está <span className="text-red-600 font-bold uppercase">torcendo</span>.
              </p>
              <ul className="space-y-3 text-base md:text-lg font-bold uppercase opacity-60">
                <li>– o story engajar</li>
                <li>– alguém responder</li>
                <li>– o direct aparecer</li>
                <li>– a venda "acontecer"</li>
              </ul>
              <div className="mt-8 pt-6 border-t-2 border-dashed border-black/20 text-lg font-bold italic">
                Isso não é estratégia. <br/> É <span className="underline">esperança</span> disfarçada de marketing.
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* The Lie Section */}
      <Section>
        <div className="max-w-3xl space-y-10">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">A mentira que te prende</h2>
          <p className="text-2xl md:text-3xl font-bold italic border-l-8 border-black pl-8 py-2">"Preciso crescer primeiro. Depois eu vendo."</p>
          <div className="space-y-8 text-base md:text-lg leading-relaxed font-medium">
            <p>Essa frase é confortável. E por isso ela destrói você devagar.</p>
            <p>Porque ela te coloca num ciclo:</p>
            <div className="flex flex-col gap-3 font-bold uppercase tracking-widest text-sm md:text-base text-black/50">
              <span className="flex items-center gap-4"><ArrowRight className="text-red-600" size={18}/> tenta ganhar mais seguidores</span>
              <span className="flex items-center gap-4"><ArrowRight className="text-red-600" size={18}/> corre atrás de alcance</span>
              <span className="flex items-center gap-4"><ArrowRight className="text-red-600" size={18}/> tenta viralizar</span>
              <span className="flex items-center gap-4 text-black italic underline">contínua sem vender</span>
            </div>
            <p className="font-bold text-xl md:text-2xl tracking-tighter mt-8 leading-snug">
              Tem gente com 50 mil seguidores que não vende nada. E gente com 800 que fatura todo mês.
            </p>
            <p className="text-xl highlighter-yellow font-bold inline-block mt-2 uppercase">O problema nunca foi tamanho.</p>
          </div>
        </div>
      </Section>

      {/* Fabio Fe Bio - ATUALIZADO COM IMAGEM */}
      <Section className="relative border-t border-black/10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-12">
            <div className="inline-block bg-black text-white px-6 py-3 font-bold text-xl uppercase tracking-tighter">
              Quem é o Fábio Fe?
            </div>
            <div className="space-y-8 text-lg md:text-xl font-medium leading-relaxed">
              <p>Sou estrategista da <span className="font-bold underline decoration-green-500 decoration-4 underline-offset-4">maior comunidade focada em stories</span> do Brasil.</p>
              <p>Mais de <span className="font-bold">38 mil assinantes ativos</span> e mais de <span className="font-bold underline">100 mil vendas realizadas</span> usando Instagram como canal principal.</p>
              <div className="brutalist-border bg-white p-8 md:p-10 mt-8 space-y-4">
                <p className="font-bold italic">"Isso não aconteceu porque eu 'sei criar conteúdo'. Aconteceu porque eu entendi algo simples — e ignorado pela maioria:"</p>
                <p className="text-2xl md:text-4xl font-black uppercase leading-tight tracking-tighter highlighter-red inline-block">Stories não vendem. Sistema vende.</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative">
               <div className="absolute inset-0 bg-green-500 translate-x-4 translate-y-4 -z-10"></div>
               <img 
                src="http://fabiofe.com.br/wp-content/uploads/2026/01/fabio-apresentacao.png" 
                alt="Fábio Fe" 
                className="brutalist-border max-w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* The System: Funil Invisível */}
      <Section className="relative bg-zinc-50 border-y border-black/10 !max-w-none">
        <div className="max-w-1160 mx-auto py-16">
          <div className="space-y-16">
            <div className="inline-block bg-black text-white px-8 py-4 font-bold text-2xl uppercase tracking-tighter shadow-[6px_6px_0px_#00ff00]">
              O Funil Invisível
            </div>
            <p className="text-3xl md:text-5xl font-bold max-w-4xl leading-tight tracking-tighter uppercase italic">
              Atenção → Conversa → Venda. <br/> Um fluxo contínuo que você controla.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <SystemStepCard 
                icon={<DollarSign size={32} strokeWidth={3}/>} 
                title="1. Monetizar sua base atual" 
                desc="Ativar quem já está ali para comprar — mesmo que sejam poucos." 
              />
              <SystemStepCard 
                icon={<TrendingUp size={32} strokeWidth={3}/>} 
                title="2. Atrair compradores diários" 
                desc="Criar um sistema que traz clientes qualificados com constância." 
              />
              <SystemStepCard 
                icon={<MessageSquare size={32} strokeWidth={3}/>} 
                title="3. Conduzir até a venda" 
                desc="Transformar attention em conversa. E conversa em dinheiro sem parecer vendedor." 
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Where Stucked */}
      <Section>
        <div className="space-y-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-left leading-none">Onde você está <br/> travado (de verdade)</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StuckCard 
              num="1" 
              title="Atenção em conversa" 
              desc="Fazer quem está só olhando começar a te procurar no DM." 
            />
            <StuckCard 
              num="2" 
              title="Conversa em decisão" 
              desc="Conduzir quem te procurou até o 'eu quero comprar'." 
            />
            <StuckCard 
              num="3" 
              title="Fechar sem ser vendedor" 
              desc="Converter a conversa em pagamento de forma natural." 
            />
            <StuckCard 
              num="4" 
              title="Atrair compradores" 
              desc="Sistema de aquisição que traz gente qualificada (não curiosos)." 
            />
          </div>
          <p className="text-xl md:text-2xl font-bold italic max-w-3xl leading-tight border-t-4 border-black pt-8">
            Sem sistema, toda venda vira sorte. <br/> <span className="highlighter-red mt-4 inline-block">E sorte não escala.</span>
          </p>
        </div>
      </Section>

      {/* Modules - ATUALIZADO PARA ETAPAS */}
      <Section className="border-t border-black/10">
        <div className="mb-16 text-left">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">O que você recebe</h2>
          <p className="text-xl text-black/40 italic font-bold uppercase tracking-tighter">A Trilha Invisível: 6 etapas diretas.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ModuleCard index={0} title="O Jogo Invisível" description="Por que você não vende (mesmo tendo attention) e como inverter isso." />
          <ModuleCard index={1} title="Atenção Certa" description="Como atrair compradores (não curiosos) através do seu posicionamento." />
          <ModuleCard index={2} title="Zona de Conversão" description="Os momentos exatos onde a decisão acontece (e como criar)." />
          <ModuleCard index={3} title="Engenharia dos Stories" description="Sequências exatas que levam da atenção até a conversa no DM." />
          <ModuleCard index={4} title="Sistema de Aquisição" description="Como trazer compradores novos todos os dias (crescimento real)." />
          <ModuleCard index={5} title="Conversa que Converte" description="Como conduzir o DM até o fechamento sem parecer vendedor." />
        </div>
      </Section>

      {/* AI Tool: Arquiteto Invisível - ATUALIZADO */}
      <Section className="bg-black text-white !max-w-none px-6 md:px-0">
        <div className="max-w-1160 mx-auto grid md:grid-cols-2 gap-16 items-start py-20 relative z-10">
          <div className="space-y-12">
            <div className="inline-flex items-center gap-4 bg-green-600 text-white px-6 py-3 font-bold text-lg uppercase shadow-[4px_4px_0px_#fff]">
              <Layers size={24} strokeWidth={3} /> Arquiteto Invisível
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.9] tracking-tighter">
                IA TREINADA PARA <br/> <span className="text-green-500 underline decoration-white decoration-4 underline-offset-8">PROTEGER</span> O <br/> MÉTODO.
              </h2>
              <div className="space-y-6 text-lg md:text-xl font-medium leading-relaxed border-l-8 border-white/20 pl-8 py-2">
                <p>Entender o sistema é uma coisa. <span className="text-green-500 font-bold">Executar sem erro é outra.</span></p>
                <p className="opacity-60 italic text-base">A maioria entende… e quebra na execução: improvisa, mistura método, distorce a estrutura.</p>
                <p className="font-bold">Por isso você recebe o <span className="highlighter-green px-2">Arquiteto Invisível</span>.</p>
                <p className="text-base opacity-80">Uma IA treinada exclusivamente no Funil Invisível. Ela não "te ajuda". Ela protege o método.</p>
              </div>
            </div>
          </div>

          <div className="brutalist-border border-white bg-zinc-900 p-8 font-mono text-sm md:text-base relative shadow-[10px_10px_0px_#22c55e] self-center">
            <div className="absolute top-0 left-0 w-full h-2 bg-green-500"></div>
            <div className="space-y-8">
              <div className="flex justify-between items-center text-green-500 font-bold text-[10px] tracking-widest bg-black/40 p-2 border border-green-500/20">
                <span>SYSTEM: ARQUITETO_INV_V4</span>
                <span className="animate-pulse">● ACTIVE</span>
              </div>
              <p className="text-green-400 font-bold leading-tight">[{'>'}] Você entrega o contexto (produto, público, oferta).<br/>[{'>'}] Ele devolve a execução certa:</p>
              
              <div className="bg-black/60 p-6 border-2 border-white/10 space-y-4">
                <div className="space-y-3 text-sm font-medium">
                   <p className="flex items-start gap-3"><CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={16}/> Posicionamento que atrai comprador</p>
                   <p className="flex items-start gap-3"><CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={16}/> Sequências de stories que conduzem</p>
                   <p className="flex items-start gap-3"><CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={16}/> Gatilhos de conversa no momento certo</p>
                   <p className="flex items-start gap-3"><CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={16}/> Roteiros de DM para fechar sem pressão</p>
                   <p className="flex items-start gap-3"><CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={16}/> Aquisição para trazer compradores diários</p>
                   <p className="flex items-start gap-3"><CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={16}/> Carrosséis + narrativa que vendem</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs italic opacity-50">
                Você decide. A IA garante que você execute certo.
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <div className="mb-16 text-left">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">Resultados Reais</h2>
          <p className="text-lg text-black/40 italic font-bold">Pessoas que pararam de esperar.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard text="Tinha 400 seguidores. Apliquei e fiz 3 vendas na primeira semana. Hoje vendo todo mês." author="Aluna Verificada"/>
          <TestimonialCard text="Parei de correr atrás de alcance. Comecei a conduzir. Direct cheio." author="Estrategista"/>
          <TestimonialCard text="O Arquiteto criou minhas sequências em 10 min. Só adaptei e postei. Funcionou." author="Infoprodutor"/>
          <TestimonialCard text="Primeira venda em 5 dias. Sem anúncio. Só aplicando o sistema." author="Consultora"/>
          <TestimonialCard text="Passei de 0 para 8 vendas no mês. Com 600 seguidores." author="Social Media"/>
          <div className="brutalist-border bg-black text-white p-8 flex flex-col justify-center items-center text-center gap-4 hover:bg-green-600 hover:text-white transition-colors cursor-pointer">
             <TrendingUp size={48} strokeWidth={2}/>
             <span className="text-lg font-black uppercase">SUA VEZ</span>
          </div>
        </div>
      </Section>

      {/* Offer / Pricing - COMPACTO */}
      <Section className="bg-black text-white !max-w-none px-6 md:px-0">
        <div className="max-w-1160 mx-auto space-y-8 py-10 md:py-12">
          <div className="space-y-3">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">Funil <br/> Invisível</h2>
            <p className="text-lg md:text-xl uppercase tracking-[0.3em] text-green-500 font-bold italic">SISTEMA + IA ARQUITETO</p>
          </div>

          <div className="brutalist-border border-white bg-zinc-900 p-6 md:p-8 space-y-6 shadow-[8px_8px_0px_#22c55e]">
            <div className="space-y-4 text-left border-b border-white/10 pb-5">
              <div className="flex items-center gap-3 text-base md:text-lg font-bold uppercase tracking-tight">
                <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" strokeWidth={3} />
                <span>Trilha Invisível (6 Etapas)</span>
              </div>
              <div className="flex items-center gap-3 text-base md:text-lg font-bold uppercase tracking-tight">
                <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" strokeWidth={3} />
                <span>Arquiteto Invisível (IA Treinada)</span>
              </div>
              <div className="flex items-center gap-3 text-base md:text-lg font-bold uppercase tracking-tight">
                <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" strokeWidth={3} />
                <span>Acesso Vitalício</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-lg md:text-xl line-through opacity-30 font-bold italic">DE R$ 497</div>
              <div className="text-5xl md:text-7xl font-black text-green-500 leading-none tracking-tighter">R$ 147</div>
              <div className="text-sm md:text-base uppercase tracking-[0.4em] font-bold opacity-50 pt-2">PAGAMENTO ÚNICO</div>
            </div>

            <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
              <BrutalistButton primary className="w-full text-xl md:text-2xl bg-green-500 text-black border-none py-6 uppercase tracking-tighter font-black shadow-[4px_4px_0px_#fff]">
                QUERO ACESSAR AGORA
              </BrutalistButton>
            </a>

            <div className="flex flex-wrap items-center justify-start gap-6 text-xs font-bold uppercase opacity-60 border-t border-white/10 pt-5">
              <div className="flex items-center gap-2"><Lock size={16} strokeWidth={2}/> Compra Segura</div>
              <div className="flex items-center gap-2"><RefreshCw size={16} strokeWidth={2}/> 7 Dias de Garantia</div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="mb-16 text-left">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">Dúvidas?</h2>
        </div>
        <div className="space-y-0 max-w-4xl">
          <FAQItem question="Vou crescer com esse sistema?" answer="Sim. Mas você vai crescer COM COMPRADORES, não com curiosos. O crescimento é consequência da sua estratégia." />
          <FAQItem question="Preciso de muitos seguidores?" answer="Não. O sistema funciona com a base que você tem agora. Monetiza HOJE e atrai novos compradores." />
          <FAQItem question="Funciona para qualquer nicho?" answer="Sim. É sobre conduzir pessoas até a compra. Funciona para infoproduto, serviço, consultoria." />
          <FAQItem question="A IA realmente cria tudo?" answer="Sim. Você dá o contexto e ela executa: posicionamento, sequências, roteiros. Você adapta e posta." />
          <FAQItem question="Preciso saber criar conteúdo?" answer="Não. O Arquiteto Invisível cria as sequências e narrativas por você." />
        </div>
      </Section>

      {/* Final Decision */}
      <Section className="bg-black text-white !max-w-none text-left px-6 md:px-0">
        <div className="max-w-1160 mx-auto space-y-24 py-24">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none italic">A ESCOLHA.</h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8 opacity-30 border-l-[10px] border-white/10 pl-12">
              <p className="font-bold uppercase tracking-widest text-lg underline decoration-red-600 decoration-2 underline-offset-8">Continuar:</p>
              <ul className="space-y-6 text-xl md:text-3xl font-bold uppercase leading-none">
                <li>✗ Esperando</li>
                <li>✗ Torcendo</li>
                <li>✗ Sem sistema</li>
              </ul>
            </div>
            <div className="space-y-8 border-l-[16px] border-green-600 pl-16 bg-zinc-900 p-16 shadow-[16px_16px_0px_#fff]">
              <p className="font-bold uppercase tracking-widest text-lg underline decoration-green-600 decoration-2 underline-offset-8 text-green-500">Ou ter:</p>
              <ul className="space-y-6 text-xl md:text-4xl font-black uppercase tracking-tighter leading-none">
                <li className="flex items-center gap-6"><ArrowRight className="text-green-500" strokeWidth={4}/> Vendas HOJE</li>
                <li className="flex items-center gap-6"><ArrowRight className="text-green-500" strokeWidth={4}/> Compradores</li>
                <li className="flex items-center gap-6"><ArrowRight className="text-green-500" strokeWidth={4}/> Controle</li>
              </ul>
            </div>
          </div>

          <div className="pt-20">
            <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
              <BrutalistButton primary className="text-3xl md:text-6xl bg-green-500 text-black border-none w-full py-16 font-black tracking-tighter uppercase leading-none">
                QUERO O FUNIL AGORA
              </BrutalistButton>
            </a>
            <p className="mt-16 text-xl md:text-3xl italic opacity-50 font-bold leading-none max-w-4xl tracking-tighter uppercase">
              Você não precisa crescer para vender. <br/> <span className="text-white">Você precisa de sistema.</span>
            </p>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-black/10 text-left text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 font-mono max-w-1160 mx-auto space-y-12">
        <div className="tracking-[0.4em]">© {new Date().getFullYear()} FUNIL INVISÍVEL - MÉTODO FÁBIO FE.</div>
        <div className="space-y-6 max-w-5xl leading-relaxed">
          <p>O Funil Invisível é um produto independente. Este site não possui qualquer vínculo, endosso ou parceria com TikTok, Google ou META. Essas plataformas são utilizadas apenas como meios de veiculação de conteúdo e tráfego. Todo o material, estratégia e responsabilidade sobre o produto são exclusivamente da Comunidade da Camys.</p>
          <p>Os resultados apresentados foram alcançados por pessoas reais que colocaram o método em prática com disciplina e execução correta. Ainda assim, não existe promessa de ganhos ou resultados garantidos, uma vez que cada pessoa aplica o método de forma diferente, com níveis variados de esforço, constância e comprometimento.</p>
        </div>
      </footer>

    </div>
  );
};

export default App;
