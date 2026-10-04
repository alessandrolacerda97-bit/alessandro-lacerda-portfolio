const projectData = {
  estagios: {
    category: "Sistema de gestão",
    title: "Estagium — Gestão de Estágios",
    summary: "Uma plataforma completa para acompanhar o ciclo do estágio, dos cadastros e contratos aos documentos, vencimentos e rotinas financeiras.",
    problem: "Empresas, estagiários, instituições, documentos e vencimentos eram difíceis de acompanhar quando distribuídos em controles separados.",
    audience: "Agentes de integração e equipes que administram contratos de estágio, com acessos específicos para empresas, supervisores, instituições e estagiários.",
    solution: "Desenvolvi uma plataforma responsiva com painel geral, perfis de acesso, cadastros conectados e geração de documentos contratuais.",
    features: ["Dashboard de contratos e vencimentos", "Cadastros de estagiários, empresas e instituições", "Contratos, aditivos e encerramentos", "Documentos, versões e acompanhamento de assinaturas", "Avaliações, recessos e frequências", "Tarefas, solicitações e permissões por perfil"],
    media: [
      { type: "mock", label: "Interface real reconstruída", title: "Painel geral de estágios e contratos", caption: "Indicadores, vencimentos e situação dos contratos em uma única visão.", className: "gallery-estagium", markup: `<div class="screen-app"><aside><img src="assets/estagium-logo.png" alt=""><span class="on">Visão geral</span><span>Estagiários</span><span>Contratos</span><span>Documentos</span><span>Empresas</span></aside><main><small>PAINEL GERAL</small><h4>Visão geral</h4><div class="screen-kpis"><b>24<em>Estagiários ativos</em></b><b>19<em>Contratos vigentes</em></b><b>05<em>Vencimentos</em></b></div><div class="screen-chart"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></main></div>` },
      { type: "mock", label: "Módulo do sistema", title: "Contratos e documentos", caption: "Vigência, valores, geração de documentos e acompanhamento do fluxo.", className: "gallery-estagium", markup: `<div class="screen-table"><div><img src="assets/estagium-logo.png" alt=""><span>CONTRATOS</span><button>+ Novo contrato</button></div><table><thead><tr><th>CONTRATO</th><th>ESTAGIÁRIO</th><th>DATA FINAL</th><th>SITUAÇÃO</th></tr></thead><tbody><tr><td>2026-024</td><td>Estagiário 024</td><td>18/12/2026</td><td><b>Vigente</b></td></tr><tr><td>2026-019</td><td>Estagiário 019</td><td>30/11/2026</td><td><b>Vigente</b></td></tr><tr><td>2026-011</td><td>Estagiário 011</td><td>14/10/2026</td><td><em>Renovação</em></td></tr></tbody></table></div>` },
      { type: "image", src: "assets/estagium-logo.png", label: "Identidade do produto", title: "Estagium", caption: "Marca utilizada no sistema de gestão de estágios." }
    ]
  },
  talaska: {
    category: "Site, agendamento e administração",
    title: "Talaska Barber Shop",
    summary: "Uma presença digital completa que conecta apresentação da barbearia, equipe, serviços, disponibilidade e agendamento.",
    problem: "Centralizar a apresentação da marca e permitir que clientes encontrem horários disponíveis sem depender de uma troca manual de mensagens.",
    audience: "Clientes da Talaska Barber Shop e a equipe responsável pela agenda, serviços e atendimento.",
    solution: "Desenvolvi o site responsivo, o fluxo público de agendamento e um painel administrativo conectado a uma API e banco de dados.",
    features: ["Catálogo de serviços e equipe", "Consulta de disponibilidade", "Agendamento e cancelamento", "Painel de agenda, clientes e barbeiros", "Histórico de status e exportação CSV", "Galeria e configurações públicas"],
    media: [
      { type: "image", src: "assets/talaska-hero.jpg", label: "Site público", title: "Experiência e posicionamento", caption: "Fotografia real utilizada na apresentação da Talaska Barber Shop." },
      { type: "mock", label: "Fluxo do produto", title: "Agendamento em etapas", caption: "Serviço, profissional, data, horário e confirmação dentro do mesmo fluxo.", className: "gallery-talaska", markup: `<div class="booking-screen"><img src="assets/talaska-logo.png" alt="Talaska"><small>AGENDAMENTO ONLINE</small><h4>Escolha seu serviço</h4><div><span><b>Corte</b><em>45 min</em></span><span><b>Barba</b><em>30 min</em></span><span class="selected"><b>Corte + Barba</b><em>60 min</em></span></div><button>Continuar →</button></div>` },
      { type: "people", label: "Equipe real", title: "Profissionais da Talaska", caption: "Imagens utilizadas no site público.", images: ["assets/talaska-wilian.jpg", "assets/talaska-moises.jpg", "assets/talaska-herick.jpg"] }
    ]
  },
  inventario: {
    category: "WMS e automação operacional",
    title: "LacerdaFlux & Inventário",
    summary: "Um WMS responsivo que aproxima a tecnologia do chão da operação e transforma movimentações e contagens em informação visível.",
    problem: "Contagens lentas, informações espalhadas e pouca clareza sobre divergências, produtividade e desempenho.",
    audience: "Pequenas empresas e equipes de estoque que realizam recebimentos, movimentações, conferências e inventários.",
    solution: "Desenvolvi dashboard operacional, cadastros de produtos e endereços, movimentações de estoque e inventário com leitura por câmera.",
    features: ["Dashboard de estoque e divergências", "Cadastro de produtos e endereços", "Entradas, saídas e ajustes", "Inventário com divergência automática", "Leitura de posição e SKU pela câmera", "Interface responsiva para celular"],
    media: [
      { type: "mock", label: "Interface real reconstruída", title: "Central de operações", caption: "Indicadores de estoque, SKUs, alertas e movimentações recentes.", className: "gallery-flux", markup: `<div class="screen-app flux"><aside><div><img src="assets/lacerdaflux-mark.svg" alt=""><b>LacerdaFlux</b></div><span class="on">Visão geral</span><span>Produtos</span><span>Endereços</span><span>Movimentações</span><span>Inventário</span></aside><main><small>CENTRAL DE OPERAÇÕES</small><h4>Visão geral</h4><div class="screen-kpis"><b>12.458<em>Estoque total</em></b><b>1.284<em>SKUs ativos</em></b><b>14<em>Divergências</em></b></div><div class="screen-list"><span>Entrada · SKU 78945 <b>+120</b></span><span>Ajuste · SKU 48312 <b>−2</b></span><span>Saída · SKU 70118 <b>−18</b></span></div></main></div>` },
      { type: "mock", label: "Uso no celular", title: "Contagem por câmera", caption: "Leitura de posição e SKU com comparação automática entre sistema e físico.", className: "gallery-flux", markup: `<div class="inventory-phone"><div><img src="assets/lacerdaflux-mark.svg" alt=""><b>Inventário</b></div><small>1. POSIÇÃO / ENDEREÇO</small><span class="scan-field">A-01-02-03 <i>⌗</i></span><small>2. PRODUTO / SKU</small><span class="scan-field">78945 <i>⌗</i></span><div class="count-compare"><b>Sistema <strong>120</strong></b><b>Contado <strong>118</strong></b></div><em>Diferença −2</em><button>Confirmar contagem</button></div>` },
      { type: "image", src: "assets/lacerdaflux-brand.png", label: "Identidade do produto", title: "LacerdaFlux", caption: "Identidade visual criada para o WMS." }
    ]
  }
};

const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const dialog = document.querySelector("[data-dialog]");
const gallery = document.querySelector("[data-gallery]");
const galleryDots = document.querySelector("[data-gallery-dots]");
let galleryIndex = 0;
let activeProject = null;

document.querySelector("[data-year]").textContent = new Date().getFullYear();

window.addEventListener("scroll", () => header.classList.toggle("is-scrolled", window.scrollY > 24), { passive: true });

menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!open));
  menuToggle.querySelector(".sr-only").textContent = open ? "Abrir menu" : "Fechar menu";
  nav.classList.toggle("is-open", !open);
});

nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.querySelector(".sr-only").textContent = "Abrir menu";
  nav.classList.remove("is-open");
}));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .13 });
document.querySelectorAll(".reveal:not(.is-visible)").forEach(el => revealObserver.observe(el));

function renderGallery() {
  const slides = gallery.querySelectorAll(".gallery-slide");
  gallery.querySelector(".gallery-track").style.transform = `translateX(-${galleryIndex * gallery.clientWidth}px)`;
  galleryDots.querySelectorAll("button").forEach((dot, index) => {
    dot.classList.toggle("is-active", index === galleryIndex);
    dot.setAttribute("aria-current", index === galleryIndex ? "true" : "false");
  });
  document.querySelector("[data-gallery-count]").textContent = `${String(galleryIndex + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
}

function openProject(key) {
  activeProject = projectData[key];
  galleryIndex = 0;
  dialog.querySelector("[data-dialog-category]").textContent = activeProject.category;
  dialog.querySelector("[data-dialog-title]").textContent = activeProject.title;
  dialog.querySelector("[data-dialog-summary]").textContent = activeProject.summary;
  dialog.querySelector("[data-dialog-problem]").textContent = activeProject.problem;
  dialog.querySelector("[data-dialog-audience]").textContent = activeProject.audience;
  dialog.querySelector("[data-dialog-solution]").textContent = activeProject.solution;
  dialog.querySelector("[data-dialog-features]").innerHTML = activeProject.features.map(item => `<li>${item}</li>`).join("");
  gallery.innerHTML = `<div class="gallery-track">${activeProject.media.map((item) => {
    let visual = "";
    if (item.type === "image") visual = `<img class="gallery-image" src="${item.src}" alt="${item.title}">`;
    if (item.type === "people") visual = `<div class="gallery-people">${item.images.map((src, index) => `<img src="${src}" alt="Profissional da Talaska ${index + 1}">`).join("")}</div>`;
    if (item.type === "mock") visual = item.markup;
    return `<div class="gallery-slide ${item.className || ""}"><div class="gallery-visual">${visual}</div><div class="gallery-caption"><span>${item.label}</span><strong>${item.title}</strong><small>${item.caption}</small></div></div>`;
  }).join("")}</div>`;
  galleryDots.innerHTML = activeProject.media.map((_, i) => `<button type="button" aria-label="Ir para imagem ${i + 1}" data-dot="${i}"></button>`).join("");
  galleryDots.querySelectorAll("button").forEach(dot => dot.addEventListener("click", () => { galleryIndex = Number(dot.dataset.dot); renderGallery(); }));
  renderGallery();
  dialog.showModal();
  document.body.style.overflow = "hidden";
}

document.querySelectorAll("[data-project]").forEach(button => button.addEventListener("click", () => openProject(button.dataset.project)));
document.querySelector("[data-dialog-close]").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener("close", () => { document.body.style.overflow = ""; activeProject = null; });
document.querySelector("[data-gallery-prev]").addEventListener("click", () => { galleryIndex = (galleryIndex - 1 + activeProject.media.length) % activeProject.media.length; renderGallery(); });
document.querySelector("[data-gallery-next]").addEventListener("click", () => { galleryIndex = (galleryIndex + 1) % activeProject.media.length; renderGallery(); });

let touchStartX = 0;
gallery.addEventListener("touchstart", event => { touchStartX = event.changedTouches[0].clientX; }, { passive: true });
gallery.addEventListener("touchend", event => {
  if (!activeProject) return;
  const delta = event.changedTouches[0].clientX - touchStartX;
  if (Math.abs(delta) < 45) return;
  galleryIndex = delta < 0 ? (galleryIndex + 1) % activeProject.media.length : (galleryIndex - 1 + activeProject.media.length) % activeProject.media.length;
  renderGallery();
}, { passive: true });
window.addEventListener("resize", () => { if (activeProject) renderGallery(); });
