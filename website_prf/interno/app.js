const $ = (id) => document.getElementById(id);

const el = {
  titulo: $("titulo"),
  unidade: $("unidade"),
  equipe: $("equipe"),
  motorista: $("motorista"),
  chefe: $("chefe"),
  terceiro: $("terceiro"),
  quarto: $("quarto"),
  nomeAcusado: $("nomeAcusado"),
  rgAcusado: $("rgAcusado"),
  natureza: $("natureza"),
  nomeAcusado2: $("nomeAcusado2"),
  rgAcusado2: $("rgAcusado2"),
  natureza2: $("natureza2"),
  datahora: $("datahora"),
  local: $("local"),
  relato: $("relato"),
  envolvidos: $("envolvidos"),
  acoes: $("acoes"),
  desacato: $("desacato"),
  resultado: $("resultado"),
  material: $("material"),
  veiculo: $("veiculo"),
  corVeiculo: $("corVeiculo"),
  assinatura: $("assinatura"),

  saida: $("saidaFormatada"),
  status: $("status"),

  btnGerar: $("btnGerar"),
  btnCopiar: $("btnCopiar"),
  btnLimparSaida: $("btnLimparSaida"),
  btnLimparCampos: $("btnLimparCampos"),
  btnChatgpt: $("btnChatgpt"),
  btnToggleAcusado2: $("btnToggleAcusado2"),
  acusadoExtra: $("acusadoExtra"),
};

function setStatus(msg) {
  el.status.textContent = msg;
}

function v(inputEl, fallback = "N/A") {
  const val = (inputEl.value || "").trim();
  return val.length ? val : fallback;
}

function addOptionalLine(lines, label, inputEl) {
  const val = (inputEl && inputEl.value ? inputEl.value : "").trim();
  if (val) {
    lines.push(`${label}: ${val}`);
  }
}

function setExtraOpen(isOpen) {
  if (!el.acusadoExtra || !el.btnToggleAcusado2) return;
  el.acusadoExtra.hidden = !isOpen;
  el.acusadoExtra.classList.toggle("is-open", isOpen);
  el.btnToggleAcusado2.setAttribute("aria-expanded", String(isOpen));
  el.btnToggleAcusado2.textContent = isOpen ? "Ocultar segundo acusado" : "Adicionar segundo acusado";
}

const INSTRUCOES_PREFIXO = [
  "Revise e aprimore o relat\u00f3rio policial a seguir, mantendo total fidelidade aos fatos descritos.",
  "O texto deve adotar linguagem t\u00e9cnica e formal, seguindo o padr\u00e3o da Pol\u00edcia Civil, sem express\u00f5es t\u00edpicas da Pol\u00edcia Rodovi\u00e1ria Federal.",
  "Mantenha o foco no autor do delito, sempre tratado como \"indiv\u00edduo\" ou \"autor\", evitando termos como \"suspeito\". Use termos t\u00e9cnicos, jur\u00eddicos e formais.",
  "",
  "Evite ju\u00edzos de valor, conjecturas ou men\u00e7\u00f5es \u00e0 renda, condi\u00e7\u00e3o social ou supostos motivos do crime.",
  "Organize o texto de forma coesa e profissional, com uso moderado de **negrito** para destacar crimes e artigos."
].join("\n");

function gerarTexto() {
  const titulo = v(el.titulo, "[ BOU ______/____ ____ ]");

  const texto = [
    "TÍTULO DO BOU / BO:",
    "",
    `${titulo}`,
    "",
    "Dados da Unidade",
    "",
    `Unidade: ${v(el.unidade)}`,
    "",
    "Dados da Equipe",
    "",
    `Equipe: ${v(el.equipe)}`,
    `Motorista: ${v(el.motorista)}`,
    `Chefe de viatura: ${v(el.chefe)}`,
    `Terceiro Homem: ${v(el.terceiro)}`,
    `Quarto Homem: ${v(el.quarto)}`,
    "",
    "Dados do Acusado",
    "",
    `Nome do acusado: ${v(el.nomeAcusado)}`,
    `RG do acusado: ${v(el.rgAcusado)}`,
    `Natureza da Ocorrência: ${v(el.natureza)}`,
  ];

  addOptionalLine(texto, "Nome do acusado (2)", el.nomeAcusado2);
  addOptionalLine(texto, "RG do acusado (2)", el.rgAcusado2);
  addOptionalLine(texto, "Natureza da Ocorrência (2)", el.natureza2);

  texto.push(
    "",
    `Relato dos Fatos: ${v(el.relato, "")}`,
    "",
    `Data e horário aproximado: ${v(el.datahora)}`,
    "",
    `Local exato: ${v(el.local)}`,
    "",
    `Pessoas envolvidas: ${v(el.envolvidos)}`,
    "",
    `Ações dos policiais e do indivíduo: ${v(el.acoes, "")}`,
    "",
    "Em casos de desacato/ameaça (palavras literais):",
    `${v(el.desacato)}`,
    "",
    `Resultado da abordagem: ${v(el.resultado)}`,
    "",
    `Material Apreendido: ${v(el.material, "NIHIL")}`,
    "",
    `Veiculo Apreendido: ${v(el.veiculo)}`,
    `Coloração: ${v(el.corVeiculo)}`,
    "",
    "Assinatura do responsável:",
    `${v(el.assinatura)}`,
    "",
  );

  return texto.join("\n").trim() + "\n";
}

function gerarRelatorio() {
  // ✅ NÃO deixar relatórios anteriores na saída:
  el.saida.value = "";

  el.saida.value = `${INSTRUCOES_PREFIXO}\n\n${gerarTexto()}`;
  el.saida.scrollTop = 0;
  setStatus("Gerado");
}

async function copiarSaida() {
  const texto = (el.saida.value || "").trim();
  if (!texto) {
    setStatus("Nada para copiar");
    return;
  }

  try {
    await navigator.clipboard.writeText(texto);
    setStatus("Copiado!");
    const original = el.btnCopiar.textContent;
    el.btnCopiar.textContent = "Copiado!";
    setTimeout(() => (el.btnCopiar.textContent = original), 1200);
  } catch (err) {
    // Fallback
    el.saida.focus();
    el.saida.select();
    document.execCommand("copy");
    setStatus("Copiado!");
  }
}

function limparSaida() {
  el.saida.value = "";
  setStatus("Saída limpa");
}

function limparCampos() {
  const ids = [
    "titulo","unidade","equipe","motorista","chefe","terceiro","quarto",
    "nomeAcusado","rgAcusado","natureza","nomeAcusado2","rgAcusado2",
    "natureza2","datahora","local","relato","envolvidos","acoes",
    "desacato","resultado","material","veiculo","corVeiculo",
    "assinatura"
  ];

  ids.forEach((id) => {
    const node = $(id);
    if (!node) return;
    node.value = "";
  });

  // re-popular defaults úteis
  el.terceiro.value = "N/A";
  el.quarto.value = "N/A";
  el.material.value = "NIHIL";

  setExtraOpen(false);
  setStatus("Campos limpos");
}

el.btnGerar.addEventListener("click", gerarRelatorio);
el.btnCopiar.addEventListener("click", copiarSaida);
el.btnLimparSaida.addEventListener("click", limparSaida);
el.btnLimparCampos.addEventListener("click", limparCampos);
el.btnChatgpt.addEventListener("click", () => {
  window.open("https://chatgpt.com/", "_blank", "noopener");
});
if (el.btnToggleAcusado2) {
  el.btnToggleAcusado2.addEventListener("click", () => {
    const willOpen = el.acusadoExtra ? el.acusadoExtra.hidden : false;
    setExtraOpen(willOpen);
  });
}

// Status inicial
setStatus("Pronto");
setExtraOpen(false);
