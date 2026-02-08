(() => {
  const byId = (id) => document.getElementById(id);

  const initTabs = () => {
    const tabs = Array.from(document.querySelectorAll(".bou-ait-tab"));
    const panels = Array.from(document.querySelectorAll(".bou-ait-panel"));
    if (!tabs.length || !panels.length) return;

    const activate = (tab) => {
      const targetId = tab.getAttribute("aria-controls");
      tabs.forEach((t) => {
        const isActive = t === tab;
        t.classList.toggle("is-active", isActive);
        t.setAttribute("aria-selected", isActive ? "true" : "false");
      });
      panels.forEach((panel) => {
        const isActive = panel.id === targetId;
        panel.classList.toggle("is-active", isActive);
        panel.hidden = !isActive;
      });
    };

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => activate(tab));
    });
  };

  const initBouForm = () => {
    const el = {
      titulo: byId("bou-titulo"),
      unidade: byId("bou-unidade"),
      equipe: byId("bou-equipe"),
      motorista: byId("bou-motorista"),
      chefe: byId("bou-chefe"),
      terceiro: byId("bou-terceiro"),
      quarto: byId("bou-quarto"),
      nomeAcusado: byId("bou-nomeAcusado"),
      rgAcusado: byId("bou-rgAcusado"),
      natureza: byId("bou-natureza"),
      nomeAcusado2: byId("bou-nomeAcusado2"),
      rgAcusado2: byId("bou-rgAcusado2"),
      natureza2: byId("bou-natureza2"),
      datahora: byId("bou-datahora"),
      local: byId("bou-local"),
      relato: byId("bou-relato"),
      envolvidos: byId("bou-envolvidos"),
      acoes: byId("bou-acoes"),
      desacato: byId("bou-desacato"),
      resultado: byId("bou-resultado"),
      material: byId("bou-material"),
      veiculo: byId("bou-veiculo"),
      corVeiculo: byId("bou-corVeiculo"),
      assinatura: byId("bou-assinatura"),
      saida: byId("bou-saida"),
      status: byId("bou-status"),
      btnGerar: byId("bou-btnGerar"),
      btnCopiar: byId("bou-btnCopiar"),
      btnLimparSaida: byId("bou-btnLimparSaida"),
      btnLimparCampos: byId("bou-btnLimparCampos"),
      btnChatgpt: byId("bou-btnChatgpt"),
      btnToggleAcusado2: byId("bou-btnToggleAcusado2"),
      acusadoExtra: byId("bou-acusadoExtra"),
    };

    if (!el.titulo) return;

    const setStatus = (msg) => {
      if (el.status) el.status.textContent = msg;
    };

    const v = (inputEl, fallback = "N/A") => {
      const val = (inputEl && inputEl.value ? inputEl.value : "").trim();
      return val.length ? val : fallback;
    };

    const addOptionalLine = (lines, label, inputEl) => {
      const val = (inputEl && inputEl.value ? inputEl.value : "").trim();
      if (val) lines.push(`${label}: ${val}`);
    };

    const setExtraOpen = (isOpen) => {
      if (!el.acusadoExtra || !el.btnToggleAcusado2) return;
      el.acusadoExtra.hidden = !isOpen;
      el.btnToggleAcusado2.setAttribute("aria-expanded", String(isOpen));
      el.btnToggleAcusado2.textContent = isOpen ? "Ocultar segundo acusado" : "Adicionar segundo acusado";
    };

    const INSTRUCOES_PREFIXO = [
      "Revise e aprimore o relatorio policial a seguir, mantendo total fidelidade aos fatos descritos.",
      "O texto deve adotar linguagem tecnica e formal, seguindo o padrao da Policia Civil, sem expressoes tipicas da Policia Rodoviaria Federal.",
      "Mantenha o foco no autor do delito, sempre tratado como \"individuo\" ou \"autor\", evitando termos como \"suspeito\". Use termos tecnicos, juridicos e formais.",
      "",
      "Evite juizos de valor, conjecturas ou mencoes a renda, condicao social ou supostos motivos do crime.",
      "Organize o texto de forma coesa e profissional, com uso moderado de **negrito** para destacar crimes e artigos."
    ].join("\n");

    const gerarTexto = () => {
      const titulo = v(el.titulo, "[ BOU ______/____ ____ ]");
      const texto = [
        "TITULO DO BOU / BO:",
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
        `Natureza da Ocorrencia: ${v(el.natureza)}`,
      ];

      addOptionalLine(texto, "Nome do acusado (2)", el.nomeAcusado2);
      addOptionalLine(texto, "RG do acusado (2)", el.rgAcusado2);
      addOptionalLine(texto, "Natureza da Ocorrencia (2)", el.natureza2);

      texto.push(
        "",
        `Relato dos Fatos: ${v(el.relato, "")}`,
        "",
        `Data e horario aproximado: ${v(el.datahora)}`,
        "",
        `Local exato: ${v(el.local)}`,
        "",
        `Pessoas envolvidas: ${v(el.envolvidos)}`,
        "",
        `Acoes dos policiais e do individuo: ${v(el.acoes, "")}`,
        "",
        "Em casos de desacato/ameaca (palavras literais):",
        `${v(el.desacato)}`,
        "",
        `Resultado da abordagem: ${v(el.resultado)}`,
        "",
        `Material Apreendido: ${v(el.material, "NIHIL")}`,
        "",
        `Veiculo Apreendido: ${v(el.veiculo)}`,
        `Coloracao: ${v(el.corVeiculo)}`,
        "",
        "Assinatura do responsavel:",
        `${v(el.assinatura)}`,
        ""
      );

      return texto.join("\n").trim() + "\n";
    };

    const gerarRelatorio = () => {
      el.saida.value = "";
      el.saida.value = `${INSTRUCOES_PREFIXO}\n\n${gerarTexto()}`;
      el.saida.scrollTop = 0;
      setStatus("Gerado");
    };

    const copiarSaida = async () => {
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
    };

    const limparSaida = () => {
      el.saida.value = "";
      setStatus("Saida limpa");
    };

    const limparCampos = () => {
      const ids = [
        "bou-titulo","bou-unidade","bou-equipe","bou-motorista","bou-chefe","bou-terceiro","bou-quarto",
        "bou-nomeAcusado","bou-rgAcusado","bou-natureza","bou-nomeAcusado2","bou-rgAcusado2",
        "bou-natureza2","bou-datahora","bou-local","bou-relato","bou-envolvidos","bou-acoes",
        "bou-desacato","bou-resultado","bou-material","bou-veiculo","bou-corVeiculo",
        "bou-assinatura"
      ];

      ids.forEach((id) => {
        const node = byId(id);
        if (!node) return;
        node.value = "";
      });

      if (el.terceiro) el.terceiro.value = "N/A";
      if (el.quarto) el.quarto.value = "N/A";
      if (el.material) el.material.value = "NIHIL";

      setExtraOpen(false);
      setStatus("Campos limpos");
    };

    el.btnGerar.addEventListener("click", gerarRelatorio);
    el.btnCopiar.addEventListener("click", copiarSaida);
    el.btnLimparSaida.addEventListener("click", limparSaida);
    el.btnLimparCampos.addEventListener("click", limparCampos);
    el.btnChatgpt.addEventListener("click", () => {
      window.open("https://chatgpt.com/", "_blank", "noopener");
    });
    el.btnToggleAcusado2.addEventListener("click", () => {
      const willOpen = el.acusadoExtra ? el.acusadoExtra.hidden : false;
      setExtraOpen(willOpen);
    });

    setStatus("Pronto");
    setExtraOpen(false);
  };

  const initAitForm = () => {
    const el = {
      numeroAit: byId("ait-numeroAit"),
      nomeInfrator: byId("ait-nomeInfrator"),
      rgInfrator: byId("ait-rgInfrator"),
      infracao: byId("ait-infracao"),
      valorMulta: byId("ait-valorMulta"),
      apreensao: byId("ait-apreensao"),
      policial: byId("ait-policial"),
      datahora: byId("ait-datahora"),
      local: byId("ait-local"),
      marcaModelo: byId("ait-marcaModelo"),
      emplacamento: byId("ait-emplacamento"),
      saida: byId("ait-saida"),
      status: byId("ait-status"),
      btnGerar: byId("ait-btnGerar"),
      btnCopiar: byId("ait-btnCopiar"),
      btnLimparSaida: byId("ait-btnLimparSaida"),
      btnLimparCampos: byId("ait-btnLimparCampos"),
    };

    if (!el.numeroAit) return;

    const setStatus = (msg) => {
      if (el.status) el.status.textContent = msg;
    };

    const v = (inputEl, fallback = "N/A") => {
      const val = (inputEl && inputEl.value ? inputEl.value : "").trim();
      return val.length ? val : fallback;
    };

    const gerarTexto = () => {
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
    };

    const gerarRelatorio = () => {
      el.saida.value = "";
      el.saida.value = gerarTexto();
      el.saida.scrollTop = 0;
      setStatus("Gerado");
    };

    const copiarSaida = async () => {
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
    };

    const limparSaida = () => {
      el.saida.value = "";
      setStatus("Saida limpa");
    };

    const limparCampos = () => {
      const ids = [
        "ait-numeroAit","ait-nomeInfrator","ait-rgInfrator","ait-infracao","ait-valorMulta",
        "ait-apreensao","ait-policial","ait-datahora","ait-local","ait-marcaModelo","ait-emplacamento"
      ];

      ids.forEach((id) => {
        const node = byId(id);
        if (!node) return;
        node.value = "";
      });

      setStatus("Campos limpos");
    };

    el.btnGerar.addEventListener("click", gerarRelatorio);
    el.btnCopiar.addEventListener("click", copiarSaida);
    el.btnLimparSaida.addEventListener("click", limparSaida);
    el.btnLimparCampos.addEventListener("click", limparCampos);

    setStatus("Pronto");
  };

  document.addEventListener("DOMContentLoaded", () => {
    initTabs();
    initBouForm();
    initAitForm();
  });
})();
