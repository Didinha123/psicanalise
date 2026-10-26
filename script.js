/* ==========================================================================
   script.js — Site de Psicanalista
   1) CONFIG: dados editáveis (nome, WhatsApp, Instagram, mensagens)
   2) ARTIGOS: conteúdo demonstrativo do blog
   3) Funcionalidades: cabeçalho/rodapé, menu, animações, FAQ, formulário...
   ========================================================================== */

/* ---------------------------------------------------------------------------
   1) CONFIGURAÇÃO — edite aqui
   --------------------------------------------------------------------------- */
const CONFIG = {
  nome: "Wellington Aparecido",        
  subtitulo: "Psicanálise",
  // Número com DDI + DDD, só dígitos. Ex.: "5511999999999". Vazio = botão avisa que falta configurar.
  whatsapp: "5511956178269",
  // Usuário do Instagram, sem @. Vazio = o link não aparece no rodapé.
  instagram: "",
  mensagemPadrao:
    "Olá! Conheci seu site e gostaria de saber mais sobre os atendimentos e a disponibilidade de horários.",
};

/* ---------------------------------------------------------------------------
   2) ARTIGOS (demonstrativos — edite título, resumo e texto livremente)
   Cada parágrafo é um item do array "texto".
   --------------------------------------------------------------------------- */
const ARTIGOS = [
  {
    id: "autoconhecimento-no-dia-a-dia",
    tema: "Autoconhecimento",
    titulo: "Autoconhecimento na vida cotidiana",
    resumo: "Pequenos momentos de pausa e atenção podem revelar muito sobre a forma como vivemos.",
    imagem: "artigo-1.jpg",
    texto: [
      "Autoconhecimento costuma ser imaginado como algo grandioso, reservado a momentos de crise ou grandes decisões. Na prática, ele começa em situações simples: perceber o que nos irrita num dia comum, o que nos cansa, o que nos alegra sem que saibamos bem por quê.",
      "Prestar atenção às próprias reações, sem pressa de julgá-las, é um primeiro passo. Muitas vezes agimos no automático, repetindo respostas que aprendemos há muito tempo. Notar essa repetição já abre espaço para pensar sobre ela.",
      "Isso não significa encontrar respostas rápidas ou definitivas. Conhecer-se é um movimento contínuo, feito de perguntas, hesitações e descobertas que mudam ao longo da vida.",
      "Um espaço de escuta, como o da psicanálise, é uma das formas de sustentar essas perguntas. Mas pequenos gestos do cotidiano — como escrever, conversar com calma ou simplesmente parar por alguns minutos — também contribuem.",
    ],
  },
  {
    id: "relacoes-e-vinculos-afetivos",
    tema: "Relações",
    titulo: "Relações e vínculos afetivos",
    resumo: "Como nos ligamos aos outros diz algo sobre nossa história — e pode ser pensado com cuidado.",
    imagem: "artigo-2.jpg",
    texto: [
      "Desde cedo, aprendemos o que é se relacionar: como pedir, como esperar, como lidar com a presença e com a ausência de quem importa para nós. Essas experiências deixam marcas na maneira como construímos vínculos na vida adulta.",
      "Por isso, é comum que algumas situações se repitam: escolhas parecidas, conflitos semelhantes, dificuldades em dizer o que sentimos. Reconhecer essa recorrência não é buscar culpados, mas compreender de que modo cada pessoa se coloca nas relações.",
      "Pensar sobre os próprios vínculos pode ampliar a liberdade de escolha: perceber o que desejamos de fato, o que nos faz bem e o que fazemos por hábito ou medo.",
      "Cada história é única. Por isso, este texto não oferece avaliações individuais: apenas convida à reflexão.",
    ],
  },
  {
    id: "emocoes-e-conflitos-internos",
    tema: "Emoções",
    titulo: "Emoções e conflitos internos",
    resumo: "Sentir coisas contraditórias é humano. Escutar esses conflitos pode ser um caminho de compreensão.",
    imagem: "artigo-3.jpg",
    texto: [
      "É possível desejar uma mudança e, ao mesmo tempo, temê-la. Sentir carinho e raiva pela mesma pessoa. Querer algo e se atrapalhar para alcançá-lo. Esses conflitos fazem parte da experiência humana e nem sempre têm explicação imediata.",
      "Na tradição psicanalítica, esses impasses não são vistos como falhas a serem eliminadas, mas como expressões de nossa história e de nossos desejos, que merecem ser escutadas com atenção.",
      "Dar nome ao que sentimos já é uma forma de elaboração. Quando conseguimos falar sobre uma emoção, ela deixa de ser apenas uma sensação difusa e passa a ser algo sobre o qual podemos pensar.",
      "Se o sofrimento estiver intenso ou interferindo muito no seu dia a dia, procure uma avaliação profissional individual. Textos informativos não substituem esse cuidado.",
    ],
  },
  {
    id: "a-importancia-da-escuta",
    tema: "Escuta",
    titulo: "A importância da escuta",
    resumo: "Ser ouvido, sem pressa nem julgamento, é uma experiência que transforma a forma de falar de si.",
    imagem: "artigo-4.jpg",
    texto: [
      "Vivemos cercados de conselhos, opiniões e respostas rápidas. Raramente encontramos alguém que escute sem querer corrigir, consolar às pressas ou dar um veredito.",
      "Na psicanálise, a escuta tem um lugar central. Escutar não é apenas ouvir palavras: é atentar para hesitações, repetições, silêncios e para aquilo que surge de modo inesperado no que é dito.",
      "Quando alguém se sente escutado, pode começar a ouvir a si mesmo de outra maneira. Frases ditas muitas vezes ganham novos sentidos ao serem pronunciadas em um espaço seguro.",
      "É por isso que o processo não se baseia em receitas, mas na construção, ao longo do tempo, de um modo próprio de pensar a própria história.",
    ],
  },
  {
    id: "reflexoes-sobre-o-comportamento-humano",
    tema: "Reflexões",
    titulo: "Reflexões sobre o comportamento humano",
    resumo: "Por que fazemos o que fazemos? Algumas perguntas que a psicanálise ajuda a formular.",
    imagem: "artigo-5.jpg",
    texto: [
      "Por que repetimos escolhas que sabemos que não nos fazem bem? Por que esquecemos o que era importante ou nos emocionamos com algo aparentemente pequeno? Perguntas como essas acompanham a humanidade há muito tempo.",
      "A psicanálise parte da ideia de que nem tudo o que move nosso comportamento é plenamente consciente. Isso não significa que sejamos reféns do desconhecido, mas que há dimensões de nós mesmos que se revelam aos poucos.",
      "Observar o comportamento com curiosidade, em vez de severidade, é um exercício valioso. A pergunta \"o que isso quer dizer para mim?\" costuma ser mais fértil do que \"o que há de errado comigo?\".",
      "Este conteúdo é educativo e não faz diagnósticos. Cada pessoa tem um percurso singular que só pode ser compreendido no encontro individual.",
    ],
  },
];

/* ---------------------------------------------------------------------------
   3) FUNCIONALIDADES
   --------------------------------------------------------------------------- */
document.documentElement.classList.add("js");

// Site de página única: seções são âncoras (#sobre) e telas internas usam rotas (#/artigos, #/artigo/id, #/privacidade).

/* ---- Ícones reutilizáveis ---- */
const ICONE_WA =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.3L3 20.5l1.8-5.4A8.5 8.5 0 1 1 21 11.5Z"/><path d="M9 9.5c0 3 2.500 5.500 5.500 5.500l1.200-1.300-1.800-1-.8.7a4 4 0 0 1-1.800-1.800l.7-.8-1-1.800L9 9.500Z"/></svg>';
const ICONE_SETA =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const ICONE_TOPO =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';

/* ---- Utilitários ---- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ---- Toast (feedback visual) ---- */
let toastTimer;
function mostrarToast(msg) {
  let t = $(".toast");
  if (!t) {
    t = document.createElement("div");
    t.className = "toast";
    t.setAttribute("role", "status");
    t.setAttribute("aria-live", "polite");
    document.body.appendChild(t);
  }
  t.textContent = msg;
  requestAnimationFrame(() => t.classList.add("is-visible"));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("is-visible"), 4200);
}

/* ---- WhatsApp ---- */
function foneFormatado() {
  const m = /^55(\d{2})(\d{5})(\d{4})$/.exec(CONFIG.whatsapp);
  return m ? `(${m[1]}) ${m[2]}-${m[3]}` : "";
}

const waConfigurado = () => /^\d{10,15}$/.test(CONFIG.whatsapp);
const waLink = (msg) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg || CONFIG.mensagemPadrao)}`;

function iniciarWhatsApp(raiz = document) {
  $$("[data-wa]:not([data-wa-ok])", raiz).forEach((el) => {
    el.setAttribute("data-wa-ok", "");
    const msg = el.dataset.waMsg || CONFIG.mensagemPadrao;
    if (waConfigurado()) {
      el.href = waLink(msg);
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    } else {
      // Sem número: não abre nada; avisa quem está editando o site.
      el.addEventListener("click", (e) => {
        e.preventDefault();
        mostrarToast("WhatsApp ainda não configurado. Defina o número em CONFIG.whatsapp no arquivo script.js.");
      });
    }
  });
}

/* ---- Cabeçalho e rodapé (gerados a partir da CONFIG) ---- */
const SECOES = [
  ["sobre", "Sobre"],
  ["psicanalise", "A psicanálise"],
  ["atendimento", "Atendimento"],
  ["artigos", "Artigos"],
  ["faq", "Dúvidas"],
];

function montarCabecalho() {
  const alvo = $("#site-header");
  if (!alvo) return;
  const links = SECOES.map(([id, nome]) => {
    const href = id === "artigos" ? "#/artigos" : `#${id}`;
    return `<li><a class="nav__link" data-rota="${id}" href="${href}">${nome}</a></li>`;
  }).join("");
  alvo.className = "site-header";
  alvo.innerHTML = `
    <div class="container site-header__inner">
      <a class="logo" href="#inicio" aria-label="${esc(CONFIG.nome)} — página inicial">${esc(CONFIG.nome)}<small>${esc(CONFIG.subtitulo)}</small></a>
      <button class="nav-toggle" aria-expanded="false" aria-controls="nav" aria-label="Abrir menu"><span></span></button>
      <nav class="nav" id="nav" aria-label="Principal">
        <ul class="nav__list">
          ${links}
          <li><a class="btn btn--primario nav__cta" href="#contato">Agendar uma conversa</a></li>
        </ul>
      </nav>
    </div>`;
}

function montarRodape() {
  const alvo = $("#site-footer");
  if (!alvo) return;
  const insta = CONFIG.instagram
    ? `<li><a href="https://instagram.com/${esc(CONFIG.instagram)}" target="_blank" rel="noopener noreferrer">Instagram @${esc(CONFIG.instagram)}</a></li>`
    : "";
  alvo.className = "site-footer";
  alvo.innerHTML = `
    <div class="container">
      <div class="footer__grid">
        <div>
          <h4>${esc(CONFIG.nome)}</h4>
          <p>Um espaço de escuta cuidadosa, com respeito e sigilo.</p>
          <p>Atendimento exclusivamente online, por videochamada. Consulte os horários pelo WhatsApp.</p>
        </div>
        <div>
          <h4>Navegue</h4>
          <ul class="footer__lista">
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#psicanalise">A psicanálise</a></li>
            <li><a href="#atendimento">Atendimento</a></li>
            <li><a href="#/artigos">Artigos</a></li>
            <li><a href="#faq">Dúvidas frequentes</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>
        <div>
          <h4>Contato</h4>
          <ul class="footer__lista">
            <li><a href="#" data-wa data-wa-msg="${esc(CONFIG.mensagemPadrao)}">WhatsApp ${foneFormatado()}</a></li>
            ${insta}
            <li><a href="#/privacidade">Política de privacidade</a></li>
          </ul>
        </div>
        <div>
          <h4>Aviso importante</h4>
          <p style="font-size:.92rem">Os conteúdos deste site são informativos e não substituem uma avaliação profissional individual. Em situações de urgência ou risco, procure um serviço de emergência (SAMU 192) ou o CVV (188).</p>
        </div>
      </div>
      <p class="footer__base">© <span id="ano"></span> ${esc(CONFIG.nome)}. Todos os direitos reservados.</p>
    </div>`;
  $("#ano", alvo).textContent = new Date().getFullYear();
}

/* ---- Menu responsivo ---- */
function iniciarMenu() {
  const botao = $(".nav-toggle");
  const nav = $("#nav");
  if (!botao || !nav) return;
  const alternar = (abrir) => {
    nav.classList.toggle("is-open", abrir);
    botao.setAttribute("aria-expanded", String(abrir));
    botao.setAttribute("aria-label", abrir ? "Fechar menu" : "Abrir menu");
  };
  botao.addEventListener("click", () => alternar(botao.getAttribute("aria-expanded") !== "true"));
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) alternar(false); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) { alternar(false); botao.focus(); }
  });

  const header = $("#site-header");
  const aoRolar = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  aoRolar();
  window.addEventListener("scroll", aoRolar, { passive: true });
}

/* ---- Animações de entrada ao rolar ---- */
let obsReveal;
function iniciarAnimacoes(raiz = document) {
  const itens = $$(".reveal:not([data-rv])", raiz);
  if (!("IntersectionObserver" in window)) { itens.forEach((i) => i.classList.add("is-visible")); return; }
  obsReveal = obsReveal || new IntersectionObserver((entradas) => {
    entradas.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("is-visible"); obsReveal.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  const obs = obsReveal;
  itens.forEach((el) => {
    el.setAttribute("data-rv", "");
    // Escalonamento sutil entre irmãos de uma mesma grade
    const irmaos = el.parentElement ? [...el.parentElement.children].filter((c) => c.classList.contains("reveal")) : [];
    el.style.setProperty("--delay", `${Math.min(irmaos.indexOf(el), 4) * 0.1}s`);
    obs.observe(el);
  });
}

/* ---- FAQ expansível ---- */
function iniciarFAQ() {
  $$(".faq__pergunta").forEach((btn) => {
    btn.addEventListener("click", () => {
      const aberto = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!aberto));
      $("#" + btn.getAttribute("aria-controls")).classList.toggle("is-open", !aberto);
    });
  });
}

/* ---- Botão voltar ao topo ---- */
function iniciarTopo() {
  const b = document.createElement("button");
  b.className = "topo-btn";
  b.type = "button";
  b.setAttribute("aria-label", "Voltar ao topo");
  b.innerHTML = ICONE_TOPO;
  document.body.appendChild(b);
  window.addEventListener("scroll", () => b.classList.toggle("is-visible", window.scrollY > 600), { passive: true });
  b.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ---- Botão flutuante do WhatsApp ---- */
function iniciarWhatsAppFlutuante() {
  const a = document.createElement("a");
  a.className = "wa-flutuante";
  a.href = "#";
  a.setAttribute("data-wa", "");
  a.setAttribute("aria-label", "Conversar pelo WhatsApp");
  a.innerHTML = `${ICONE_WA}<span>WhatsApp</span><span class="wa-balao" aria-hidden="true">Vamos conversar?</span>`;
  document.body.appendChild(a);
}

/* ---- Cards de artigos ---- */
function cardArtigo(a) {
  return `
    <article class="card artigo-card reveal">
      <a class="artigo-card__img" href="#/artigo/${a.id}" tabindex="-1" aria-hidden="true">
        <img src="${a.imagem}" alt="" loading="lazy" width="800" height="500">
      </a>
      <div class="artigo-card__corpo">
        <span class="artigo-card__tag">${esc(a.tema)}</span>
        <h3>${esc(a.titulo)}</h3>
        <p>${esc(a.resumo)}</p>
        <a class="link-seta" href="#/artigo/${a.id}" aria-label="Ler artigo: ${esc(a.titulo)}">Ler artigo</a>
      </div>
    </article>`;
}

/* ---- Telas internas (roteador por hash) ---- */
const TITULO_HOME = document.title;

function telaArtigos() {
  return `
    <section class="pagina-topo"><div class="container">
      <div class="section__head reveal">
        <span class="eyebrow">Conteúdos</span>
        <h1>Reflexões e artigos</h1>
        <p class="lead">Textos educativos e demonstrativos — edite-os em <code>ARTIGOS</code>, no script.js. Não representam diagnóstico individual.</p>
      </div>
    </div></section>
    <section class="section" style="padding-top:1rem"><div class="container">
      <div class="grade grade--3">${ARTIGOS.map(cardArtigo).join("")}</div>
    </div></section>`;
}

function telaPrivacidade() {
  return `
    <section class="section" style="padding-top:3rem"><div class="container texto-legal">
      <span class="eyebrow">Privacidade</span>
      <h1>Política de Privacidade</h1>
      <p class="aviso" style="margin-top:0">Modelo demonstrativo. Revise com um(a) profissional jurídico(a) e adapte à sua realidade (LGPD) antes de publicar.</p>
      <h2>Dados que este site coleta</h2>
      <p>Este é um site estático. O formulário de contato <strong>não armazena nem envia dados a nenhum servidor</strong>. Ao enviar, o navegador apenas abre o WhatsApp com uma mensagem preenchida, que você revisa e decide se envia.</p>
      <h2>Informações que não devem ser enviadas</h2>
      <p>Não informe diagnósticos, relatos clínicos ou detalhes íntimos pelo formulário ou nas primeiras mensagens. Esses assuntos devem ser tratados nas sessões.</p>
      <h2>WhatsApp e serviços de terceiros</h2>
      <p>Ao usar o WhatsApp, suas informações passam a ser tratadas conforme os termos e a política de privacidade do próprio aplicativo. O site também carrega fontes do Google Fonts, o que pode envolver o envio do seu endereço IP ao provedor. [Se necessário, hospede as fontes localmente.]</p>
      <h2>Cookies e análise de acesso</h2>
      <p>[Informe aqui se utiliza cookies ou ferramentas de análise. Na versão atual, o site não utiliza.]</p>
      <h2>Sigilo profissional</h2>
      <p>As informações compartilhadas durante o atendimento seguem o sigilo profissional previsto no código de ética aplicável.</p>
      <h2>Seus direitos</h2>
      <p>Você pode solicitar informações, correção ou exclusão de dados eventualmente tratados pelo profissional, entrando em contato pelos canais indicados neste site.</p>
      <h2>Natureza do conteúdo</h2>
      <p>Os conteúdos deste site são informativos e não substituem uma avaliação profissional individual.</p>
      <p style="margin-top:2.5rem"><a class="btn btn--secundario" href="#inicio">Voltar ao início</a></p>
    </div></section>`;
}

function telaArtigo(id) {
  const i = ARTIGOS.findIndex((a) => a.id === id);
  const destino = { innerHTML: "" };
  let titulo = "";
  if (i === -1) {
    destino.innerHTML = `<h1>Artigo não encontrado</h1><p>O artigo que você procura não existe ou foi movido.</p><a class="btn btn--primario" href="#/artigos">Ver todos os artigos</a>`;
  } else {
    const a = ARTIGOS[i];
    titulo = a.titulo;
    const ant = ARTIGOS[i - 1], prox = ARTIGOS[i + 1];
    destino.innerHTML = `
      <a class="voltar" href="#/artigos">← Todos os artigos</a>
      <p class="eyebrow" style="margin-top:2rem">${esc(a.tema)}</p>
      <h1>${esc(a.titulo)}</h1>
      <p class="lead">${esc(a.resumo)}</p>
      <img class="artigo__capa" src="${a.imagem}" alt="" width="800" height="500">
      <div class="artigo__texto">${a.texto.map((p) => `<p>${esc(p)}</p>`).join("")}</div>
      <div class="aviso">Conteúdo educativo e informativo. Não representa diagnóstico individual nem substitui uma avaliação profissional.</div>
      <p style="margin-top:2rem"><a class="btn btn--primario" href="#" data-wa data-wa-msg="Olá! Li o artigo “${esc(a.titulo)}” e gostaria de saber mais sobre os atendimentos.">Agendar uma conversa ${ICONE_SETA}</a></p>
      <div class="artigo__nav">
        ${ant ? `<a class="voltar" href="#/artigo/${ant.id}">← ${esc(ant.titulo)}</a>` : "<span></span>"}
        ${prox ? `<a class="voltar" href="#/artigo/${prox.id}">${esc(prox.titulo)} →</a>` : ""}
      </div>`;
  }
  telaArtigo.titulo = titulo;
  return `<section class="section" style="padding-top:3rem"><div class="container artigo">${destino.innerHTML}</div></section>`;
}

function renderizarHome() {
  const lista = $("#lista-artigos");
  if (lista) lista.innerHTML = ARTIGOS.slice(0, Number(lista.dataset.limite) || ARTIGOS.length).map(cardArtigo).join("");
}

let estavaEmTela = false;
function rotear() {
  const home = $("#home"), tela = $("#view");
  const partes = location.hash.split("/"); // "#/artigo/id" -> ["#", "artigo", "id"]
  const rota = location.hash.startsWith("#/") ? partes[1] : "";
  const telas = { artigos: telaArtigos, artigo: () => telaArtigo(partes[2]), privacidade: telaPrivacidade };

  if (telas[rota]) {
    tela.innerHTML = telas[rota]();
    tela.hidden = false;
    home.hidden = true;
    document.title = rota === "artigo" && telaArtigo.titulo ? `${telaArtigo.titulo} — ${CONFIG.nome}` : `${rota === "artigos" ? "Artigos" : "Privacidade"} — ${CONFIG.nome}`;
    iniciarWhatsApp(tela);
    iniciarAnimacoes(tela);
    window.scrollTo({ top: 0, behavior: "auto" });
    estavaEmTela = true;
  } else {
    tela.hidden = true;
    home.hidden = false;
    document.title = TITULO_HOME;
    if (estavaEmTela) {
      const alvo = location.hash.length > 1 && $(location.hash);
      requestAnimationFrame(() => alvo ? alvo.scrollIntoView() : window.scrollTo(0, 0));
    }
    estavaEmTela = false;
  }
  $$(".nav__link").forEach((a) => {
    if (a.dataset.rota === "artigos" && (rota === "artigos" || rota === "artigo")) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
}

/* ---- Imagens embutidas (data-img) e nome configurado (data-nome) ---- */
function preencherDados() {
  $$("[data-nome]").forEach((el) => { el.textContent = CONFIG.nome; });
  $$("[data-fone]").forEach((el) => { el.textContent = foneFormatado(); });
}

/* ---- Formulário com validação ---- */
function iniciarFormulario() {
  const form = $("#form-contato");
  if (!form) return;

  const regras = {
    nome: (v) => (v.trim().length >= 3 ? "" : "Informe seu nome (mínimo 3 caracteres)."),
    contato: (v) => {
      const t = v.trim();
      const email = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(t);
      const tel = /^\d{10,13}$/.test(t.replace(/[\s()+-]/g, ""));
      return email || tel ? "" : "Informe um e-mail válido ou telefone com DDD.";
    },
    horario: (v) => (v ? "" : "Escolha uma preferência de horário."),
    consentimento: (_, el) => (el.checked ? "" : "É necessário concordar para continuar."),
  };

  const validarCampo = (el) => {
    const campo = el.closest(".campo");
    const msg = regras[el.name](el.value, el);
    campo.classList.toggle("tem-erro", !!msg);
    $(".campo__erro", campo).textContent = msg;
    el.setAttribute("aria-invalid", msg ? "true" : "false");
    return !msg;
  };

  const campos = $$("input, select", form).filter((el) => regras[el.name]);
  campos.forEach((el) => {
    el.addEventListener("blur", () => validarCampo(el));
    el.addEventListener("input", () => { if (el.closest(".campo").classList.contains("tem-erro")) validarCampo(el); });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const validos = campos.map(validarCampo);
    if (validos.includes(false)) {
      campos.find((el) => el.getAttribute("aria-invalid") === "true")?.focus();
      mostrarToast("Revise os campos destacados.");
      return;
    }
    if (!waConfigurado()) {
      mostrarToast("Dados válidos! Para enviar pelo WhatsApp, defina o número em CONFIG.whatsapp (script.js).");
      return;
    }
    // Nenhum dado é armazenado: apenas montamos uma mensagem e abrimos o WhatsApp.
    const d = new FormData(form);
    const msg = `Olá! Meu nome é ${d.get("nome").trim()}. Gostaria de saber sobre os atendimentos e a disponibilidade de horários.\nPreferência de horário: ${d.get("horario")}.\nContato: ${d.get("contato").trim()}.`;
    window.open(waLink(msg), "_blank", "noopener");
    mostrarToast("Abrindo o WhatsApp com sua mensagem. Revise antes de enviar.");
    form.reset();
  });
}

/* ---- Inicialização ---- */
document.addEventListener("DOMContentLoaded", () => {
  montarCabecalho();
  montarRodape();
  preencherDados();
  renderizarHome();
  iniciarWhatsAppFlutuante();
  iniciarWhatsApp();      // depois de montar tudo que contém [data-wa]
  iniciarMenu();
  iniciarFAQ();
  iniciarFormulario();
  iniciarTopo();
  iniciarAnimacoes();     // por último, para incluir itens gerados dinamicamente
  window.addEventListener("hashchange", rotear);
  rotear();
});
