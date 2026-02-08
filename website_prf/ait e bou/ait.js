const $ = (id) => document.getElementById(id);

const el = {
  numeroAit: $("numeroAit"),
  nomeInfrator: $("nomeInfrator"),
  rgInfrator: $("rgInfrator"),
  infracao: $("infracao"),
  valorMulta: $("valorMulta"),
  apreensao: $("apreensao"),
  policial: $("policial"),
  datahora: $("datahora"),
  local: $("local"),
  marcaModelo: $("marcaModelo"),
  emplacamento: $("emplacamento"),

  saida: $("saidaFormatada"),
  status: $("status"),

  btnGerar: $("btnGerar"),
  btnCopiar: $("btnCopiar"),
  btnLimparSaida: $("btnLimparSaida"),
  btnLimparCampos: $("btnLimparCampos"),
};

function setStatus(msg) {
  el.status.textContent = msg;
}

function v(inputEl, fallback = "N/A") {
  const val = (inputEl.value || "").trim();
  return val.length ? val : fallback;
}

function gerarTexto() {
  const texto = [
    "Numero do AIT",
    "",
    `Numero: ${v(el.numeroAit, "xxx/2026")}`,
    "",
    "Dados do infrator",
    "",
    `Nome do Infrator: ${v(el.nomeInfrator)}`,
    `RG do Infrator: ${v(el.rgInfrator)}`,
    "",
    "Dados da infracao",
    "",
    `Infracao cometida: ${v(el.infracao, "")}`,
    `Valor da multa: ${v(el.valorMulta)}`,
    `Houve apreensao do veiculo: ${v(el.apreensao)}`,
    "",
    "Dados da ocorrencia",
    "",
    `Policial Responsavel: ${v(el.policial)}`,
    `Data e horario: ${v(el.datahora)}`,
    `Local da autuacao: ${v(el.local)}`,
    `Marca e Modelo: ${v(el.marcaModelo)}`,
    `Emplacamento: ${v(el.emplacamento)}`,
    "",
  ].join("\n");

  return texto.trim() + "\n";
}

function gerarRelatorio() {
  el.saida.value = "";
  el.saida.value = gerarTexto();
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
    el.saida.focus();
    el.saida.select();
    document.execCommand("copy");
    setStatus("Copiado!");
  }
}

function limparSaida() {
  el.saida.value = "";
  setStatus("Saida limpa");
}

function limparCampos() {
  const ids = [
    "numeroAit","nomeInfrator","rgInfrator","infracao","valorMulta",
    "apreensao","policial","datahora","local","marcaModelo","emplacamento"
  ];

  ids.forEach((id) => {
    const node = $(id);
    if (!node) return;
    node.value = "";
  });

  setStatus("Campos limpos");
}

el.btnGerar.addEventListener("click", gerarRelatorio);
el.btnCopiar.addEventListener("click", copiarSaida);
el.btnLimparSaida.addEventListener("click", limparSaida);
el.btnLimparCampos.addEventListener("click", limparCampos);

setStatus("Pronto");
