const timelineData = {
  1964: {
    title: "1964 — Golpe, intervenção e ataque à organização sindical",
    text: "Com o início da ditadura militar, sindicatos passaram a ser vistos como espaços perigosos de mobilização política. Intervenções, prisões, destruição de sedes e controle de entidades reduziram a autonomia dos trabalhadores.",
    evidence: "Fonte 2: a fotografia da sede de sindicato destruída ajuda a visualizar a violência contra a organização coletiva."
  },
  1970: {
    title: "Anos 1970 — Vigilância, fichamento e controle das greves",
    text: "A repressão também funcionava por meio da coleta de informações. Listas com nomes, endereços, empresas e setores de trabalho permitiam identificar grevistas e lideranças, criando medo e dificultando a mobilização.",
    evidence: "Fonte 1: lista com 438 trabalhadores grevistas, com destaque para empresas do ABC Paulista como a Volkswagen."
  },
  1978: {
    title: "1978-1980 — Greves do ABC e reação estatal",
    text: "No final dos anos 1970, greves por reajuste salarial e melhores condições de trabalho ganharam força no ABC Paulista. O Estado respondeu com vigilância, repressão policial e tentativas de desarticular sindicatos.",
    evidence: "Citação do texto: o regime buscava enfraquecer a organização dos trabalhadores e reduzir sua capacidade de mobilização."
  },
  1980: {
    title: "Anos 1980 — Memória, redemocratização e disputa de narrativas",
    text: "A abertura política ampliou a circulação de jornais, documentos e memórias sobre a repressão. Preservar essas fontes é importante para compreender como a democracia foi atacada e como trabalhadores resistiram.",
    evidence: "Jornais sindicais e informes oficiais ajudam a cruzar diferentes pontos de vista sobre o mesmo período."
  }
};

const galleryItems = [
  { src: "assets/imagens/fonte-01.jpeg", type: "documento", caption: "Informe do Serviço Nacional de Informações sobre encontro de professores." },
  { src: "assets/imagens/fonte-02.jpeg", type: "documento", caption: "Documento de informação com carimbos e campos de classificação." },
  { src: "assets/imagens/fonte-03.jpeg", type: "documento", caption: "Continuação de documento oficial com referência a entidades e participantes." },
  { src: "assets/imagens/fonte-04.jpeg", type: "documento", caption: "Documento oficial com marcações de cópia e classificação." },
  { src: "assets/imagens/fonte-05.jpeg", type: "documento", caption: "Informe sobre encontro estadual e organização docente." },
  { src: "assets/imagens/fonte-06.jpeg", type: "jornal", caption: "Jornal O Aliscão: professores unificam entidades a nível estadual." },
  { src: "assets/imagens/fonte-07.jpeg", type: "jornal", caption: "Página de jornal sindical com direitos dos professores e ata de reunião." },
  { src: "assets/imagens/fonte-08.jpeg", type: "jornal", caption: "Jornal O Aliscão: crítica ao Estado e defesa de direitos trabalhistas." },
  { src: "assets/imagens/fonte-09.jpeg", type: "jornal", caption: "Jornal O Aliscão: memória, denúncias e debate político." },
  { src: "assets/imagens/fonte-10.jpeg", type: "jornal", caption: "Jornal O Aliscão: fala do presidente e organização regional." },
  { src: "assets/imagens/fonte-11.jpeg", type: "jornal", caption: "Jornal O Aliscão: concurso de ingresso e caso de polícia." },
  { src: "assets/imagens/fonte-12.jpeg", type: "jornal", caption: "Jornal O Aliscão: secundaristas, educação e luta política." },
  { src: "assets/imagens/fonte-13.jpeg", type: "documento", caption: "Fonte 1: lista de grevistas da Volkswagen do Brasil (ABC Paulista), com nomes, endereços e setores, registrada pelo DOPS." },
  { src: "assets/imagens/fonte-14.jpeg", type: "jornal", caption: "Charge política e crítica social em publicação sindical." },
  { src: "assets/imagens/fonte-15.jpeg", type: "jornal", caption: "Conjunto de charges e falas críticas sobre direitos e organização." },
  { src: "assets/imagens/fonte-16.jpeg", type: "jornal", caption: "Charges sobre professor, direitos e participação coletiva." },
  { src: "assets/imagens/fonte-17.jpeg", type: "foto", caption: "Fonte 2: fotografia da sede sindical revistada e destruída." },
  { src: "assets/imagens/fonte-18.jpeg", type: "documento", caption: "Documento confidencial de informação do SNI." },
  { src: "assets/imagens/fonte-19.jpeg", type: "documento", caption: "Continuação de documento confidencial." },
  { src: "assets/imagens/fonte-20.jpeg", type: "documento", caption: "Prontuário com histórico individual e carimbo de remessa." },
  { src: "assets/imagens/fonte-21.jpeg", type: "documento", caption: "Continuação de prontuário e registros oficiais." },
  { src: "assets/imagens/fonte-22.jpeg", type: "documento", caption: "Anexo com boletim oficial usado como evidência documental." },
  { src: "assets/imagens/fonte-23.jpeg", type: "documento", caption: "Guia de lote para difusão de documento de informação." },
  { src: "assets/imagens/fonte-24.jpeg", type: "documento", caption: "Documento de Informação de órgão de segurança (Estado de Santa Catarina)." },
  { src: "assets/imagens/fonte-25.jpeg", type: "ficha", caption: "Página com texto explicativo e QR code sobre a Fonte 1." },
  { src: "assets/imagens/fonte-26.jpeg", type: "ficha", caption: "Ficha de análise: conclusão para o pôster (Instituto Federal de Santa Catarina)." },
  { src: "assets/imagens/fonte-27.jpeg", type: "ficha", caption: "Página com texto explicativo e QR code sobre a Fonte 2." },
  { src: "assets/imagens/fonte-28.jpeg", type: "ficha", caption: "Ficha de análise de fontes históricas: identificação e primeira leitura." },
  { src: "assets/imagens/fonte-29.jpeg", type: "documento", caption: "Fonte 1 (continuação): lista de trabalhadores grevistas registrada pelo DOPS." },
  { src: "assets/imagens/fonte-30.jpeg", type: "documento", caption: "Anexo: boletim oficial (DOE) com demissões de professores por suposto 'atentado ao regime', 1964." },
  { src: "assets/imagens/fonte-31.jpeg", type: "documento", caption: "Documento confidencial do SNI com informações de vigilância." }
];

const worksheetSections = [
  {
    title: "1. Identificação da fonte",
    items: [
      "Tipo de fonte: documento oficial, lei/decreto, jornal, propaganda, música, depoimento, relatório, imagem ou outra.",
      "Título ou descrição da fonte.",
      "Autoria ou instituição responsável pela produção.",
      "Data e local de produção.",
      "Acervo e link de onde a fonte foi retirada."
    ]
  },
  {
    title: "2. Primeira leitura: o que a fonte diz ou mostra?",
    items: [
      "Resumo: explique em poucas palavras o conteúdo principal da fonte.",
      "Elementos importantes: palavras, imagens, dados, nomes, símbolos ou expressões que chamam atenção."
    ]
  },
  {
    title: "3. Contexto de produção",
    items: [
      "Quando foi produzida?",
      "Quem produziu e para quê?",
      "Em que contexto político e social a fonte apareceu?",
      "Que acontecimentos do período ajudam a compreender essa fonte?"
    ]
  },
  {
    title: "4. Evidências e linguagem",
    items: [
      "Para quem se dirige?",
      "Que elementos ou trechos da fonte merecem destaque?",
      "Que linguagem a fonte usa: oficial, jornalística, militante, crítica, irônica, visual?",
      "A fonte tenta convencer, denunciar, registrar, controlar ou justificar algo?"
    ]
  },
  {
    title: "5. Perguntas às fontes",
    items: [
      "O que a fonte revela?",
      "O que a fonte silencia?",
      "É confiável? Por quê?",
      "A fonte tem intenção política? Pode exagerar, ocultar ou justificar algo? Como confirmar?"
    ]
  },
  {
    title: "6. Cruzamento com outras fontes",
    items: [
      "Fonte para comparar: indique outra fonte, relato, jornal, depoimento, música ou documento oficial.",
      "O que as fontes têm em comum?",
      "O que elas mostram de forma diferente?",
      "Como uma fonte ajuda a confirmar, questionar ou ampliar a outra?"
    ]
  },
  {
    title: "7. Conclusão para o pôster ou site",
    items: [
      "Ideia central: qual interpretação histórica a fonte permite construir?",
      "Trecho ou elemento que entrará no pôster/site.",
      "QR code e provocação ao visitante: crie uma pergunta crítica para o público.",
      "Assinatura ou fonte confiável: confirme autoria, instituição e acervo.",
      "Evite apenas copiar o que a fonte diz: explique para quem, o que revela e o que silencia."
    ]
  }
];

const quiz = [
  {
    q: "Por que o Estado produzia listas de trabalhadores grevistas?",
    options: [
      "Para premiar trabalhadores que participavam de greves.",
      "Para monitorar, intimidar e controlar mobilizações trabalhistas.",
      "Para organizar eleições sindicais livres.",
      "Para divulgar campanhas de valorização salarial."
    ],
    answer: 1,
    feedback: "Listas com nomes, endereços e empresas permitiam identificar pessoas consideradas politicamente perigosas."
  },
  {
    q: "O que a fotografia da sede sindical destruída ajuda a evidenciar?",
    options: [
      "A violência contra a organização coletiva dos trabalhadores.",
      "A ausência de conflitos durante a ditadura.",
      "A neutralidade do Estado diante dos sindicatos.",
      "A inexistência de perseguição política."
    ],
    answer: 0,
    feedback: "A destruição física de uma sede sindical indica ataque à atuação organizada dos trabalhadores."
  },
  {
    q: "Qual é uma pergunta crítica importante ao analisar uma fonte oficial da repressão?",
    options: [
      "A fonte sempre diz toda a verdade?",
      "O que a fonte revela e o que ela silencia?",
      "Como decorar o documento inteiro?",
      "Como ignorar o contexto histórico?"
    ],
    answer: 1,
    feedback: "Toda fonte tem intenção, contexto e limites; por isso, precisa ser comparada com outras evidências."
  }
];

const nav = document.querySelector("#mainNav");
document.querySelector("#menuBtn").addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const timelineDetail = document.querySelector("#timelineDetail");
function renderTimeline(year) {
  const item = timelineData[year];
  timelineDetail.innerHTML = `<h3>${item.title}</h3><p>${item.text}</p><blockquote>${item.evidence}<cite>Evidência relacionada</cite></blockquote>`;
}
renderTimeline("1964");

document.querySelectorAll(".time-item").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".time-item").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    renderTimeline(button.dataset.year);
  });
});

const galleryGrid = document.querySelector("#galleryGrid");
function renderGallery(filter = "todas") {
  galleryGrid.innerHTML = "";
  galleryItems
    .filter(item => filter === "todas" || item.type === filter)
    .forEach((item, index) => {
      const figure = document.createElement("figure");
      figure.className = "gallery-item reveal visible";
      figure.dataset.type = item.type;
      figure.innerHTML = `<img src="${item.src}" alt="${item.caption}"><figcaption>${item.caption}</figcaption>`;
      figure.addEventListener("click", () => openModal(item.src, item.caption));
      galleryGrid.appendChild(figure);
    });
}
renderGallery();

document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    renderGallery(button.dataset.filter);
  });
});

const modal = document.querySelector("#imageModal");
const modalImg = document.querySelector("#modalImg");
const modalCaption = document.querySelector("#modalCaption");
function openModal(src, caption) {
  modalImg.src = src;
  modalCaption.textContent = caption;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}
function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  modalImg.src = "";
}
document.querySelector("#modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", event => {
  if (event.target === modal) closeModal();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
});

const accordion = document.querySelector("#worksheetAccordion");
worksheetSections.forEach((section, index) => {
  const article = document.createElement("article");
  article.className = `accordion-item reveal ${index === 0 ? "open" : ""}`;
  article.innerHTML = `
    <button class="accordion-trigger" type="button">
      <span>${section.title}</span>
      <span>${index === 0 ? "−" : "+"}</span>
    </button>
    <div class="accordion-content">
      <ul>${section.items.map(item => `<li>${item}</li>`).join("")}</ul>
    </div>
  `;
  accordion.appendChild(article);
});

document.querySelectorAll(".accordion-trigger").forEach(trigger => {
  trigger.addEventListener("click", () => {
    const item = trigger.closest(".accordion-item");
    const sign = trigger.querySelector("span:last-child");
    item.classList.toggle("open");
    sign.textContent = item.classList.contains("open") ? "−" : "+";
  });
});

const output = document.querySelector("#analysisOutput");
document.querySelector("#generateAnalysis").addEventListener("click", () => {
  const source = document.querySelector("#sourceSelect").value;
  const shows = document.querySelector("#shows").value.trim() || "mostra elementos visuais e/ou textuais que precisam ser descritos com atenção";
  const reveals = document.querySelector("#reveals").value.trim() || "revela aspectos da repressão, da vigilância e da disputa política sobre direitos trabalhistas";
  const silences = document.querySelector("#silences").value.trim() || "silencia partes da experiência dos trabalhadores e precisa ser comparada com outras fontes";
  const compare = document.querySelector("#compare").value.trim() || "comparar com jornais sindicais, documentos oficiais, fotografias e depoimentos";
  const text = `A fonte escolhida foi ${source}. Ela ${shows}. Historicamente, essa fonte ${reveals}. Porém, ela também ${silences}. Para confirmar a interpretação, é importante ${compare}. Assim, a fonte ajuda a compreender como a repressão aos trabalhadores ocorreu por meio de vigilância, intimidação e ataque à organização sindical.`;
  output.innerHTML = `<h3>Texto gerado</h3><p id="generatedText">${text}</p><button class="btn ghost copy-btn" type="button" id="copyText">Copiar texto</button>`;
  document.querySelector("#copyText").addEventListener("click", async () => {
    await navigator.clipboard.writeText(text);
    document.querySelector("#copyText").textContent = "Copiado";
  });
});

const quizBox = document.querySelector("#quizBox");
quiz.forEach((question, qIndex) => {
  const block = document.createElement("article");
  block.className = "quiz-question";
  block.innerHTML = `<h3>${qIndex + 1}. ${question.q}</h3><div class="quiz-options"></div><p class="feedback" aria-live="polite"></p>`;
  const optionsBox = block.querySelector(".quiz-options");
  const feedback = block.querySelector(".feedback");
  question.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => {
      optionsBox.querySelectorAll("button").forEach(btn => {
        btn.disabled = true;
        btn.classList.remove("correct", "wrong");
      });
      button.classList.add(optionIndex === question.answer ? "correct" : "wrong");
      optionsBox.children[question.answer].classList.add("correct");
      feedback.textContent = question.feedback;
    });
    optionsBox.appendChild(button);
  });
  quizBox.appendChild(block);
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(item => revealObserver.observe(item));

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll("nav a")];
const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
  });
}, { rootMargin: "-40% 0px -55% 0px" });
sections.forEach(section => navObserver.observe(section));
