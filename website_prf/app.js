(() => {
  'use strict';

  const data = {
    period: 'JANEIRO A DEZEMBRO DE 2026',
    numbers: [
      { value: '2.810', label: 'abordagens', description: 'Realizadas' },
      { value: '940', label: 'ocorrencias', description: 'Atendidas' },
      { value: '67', label: 'veículos', description: 'Recuperados' },
    ],
    news: [
      {
        title: 'Reforco no policiamento de bairro',
        summary: 'Rondas noturnas ampliadas e pontos-base ativos nas areas de maior fluxo.',
        date: '12/01/2026',
        image: 'assets/img/foto_relat_patrul.png'
      },
      {
        title: 'Operacao integrada na zona leste',
        summary: 'Acoes conjuntas com equipes de inteligencia e apoio comunitario.',
        date: '18/01/2026',
        image: 'assets/img/logo_inteligencia.png'
      },
      {
        title: 'Relatorio semanal de patrulhamento',
        summary: 'Resultados consolidados das principais ocorrencias atendidas.',
        date: '23/01/2026',
        image: 'assets/img/logo_relatorio.png'
      },
      {
        title: 'Atualizacao de protocolos operacionais',
        summary: 'Novas diretrizes para patrulha orientada por dados.',
        date: '28/01/2026',
        image: 'assets/img/logo_config.png'
      },
      {
        title: 'Projeto de proximidade com a comunidade',
        summary: 'Reunioes e visitas com liderancas locais da regiao.',
        date: '02/02/2026',
        image: 'assets/img/logo_organograma.png'
      },
      {
        title: 'Capacitacao para atendimento humanizado',
        summary: 'Treinamentos focados em mediacao e escuta ativa.',
        date: '05/02/2026',
        image: 'assets/img/logo_inicio.png'
      },
      {
        title: 'Patrulha escolar reforcada',
        summary: 'Presenca ampliada nos horarios de entrada e saida.',
        date: '08/02/2026',
        image: 'assets/img/prf.png'
      },
      {
        title: 'Balanceamento de recursos e turnos',
        summary: 'Redistribuicao estrategica para reduzir tempos de resposta.',
        date: '12/02/2026',
        image: 'assets/img/logo_relatorio.png'
      }
    ],
    activities: {
      cultural: [
        {
          title: 'Programa de musica comunitaria',
          description: 'Apresentacoes com grupos locais e escolas.',
          date: '20/01/2026',
          image: 'assets/img/logo_inicio.png'
        },
        {
          title: 'Exposicao historica da corporação',
          description: 'Mostra itinerante com acervo institucional.',
          date: '28/01/2026',
          image: 'assets/img/logo_organograma.png'
        },
        {
          title: 'Projeto leitura segura',
          description: 'Incentivo a leitura e visitas guiadas.',
          date: '05/02/2026',
          image: 'assets/img/logo_relatorio.png'
        },
        {
          title: 'Festival de talentos locais',
          description: 'Apresentacoes abertas e apoio a artistas.',
          date: '11/02/2026',
          image: 'assets/img/logo_config.png'
        },
        {
          title: 'Cinema ao ar livre',
          description: 'Sessao especial com debate comunitario.',
          date: '17/02/2026',
          image: 'assets/img/logo_inteligencia.png'
        },
        {
          title: 'Oficina de cidadania',
          description: 'Atividades educativas para jovens.',
          date: '22/02/2026',
          image: 'assets/img/prf.png'
        }
      ],
      community: [
        {
          title: 'Mutirao de seguranca urbana',
          description: 'Mapeamento de areas criticas com moradores.',
          date: '21/01/2026',
          image: 'assets/img/foto_relat_patrul.png'
        },
        {
          title: 'Apoio a vitimas e acolhimento',
          description: 'Orientacao e suporte para demandas urgentes.',
          date: '29/01/2026',
          image: 'assets/img/logo_relatorio.png'
        },
        {
          title: 'Visitas comunitarias programadas',
          description: 'Roteiro semanal de aproximacao local.',
          date: '03/02/2026',
          image: 'assets/img/logo_organograma.png'
        },
        {
          title: 'Campanha de prevencao a golpes',
          description: 'Acoes educativas e distribuicao de guias.',
          date: '09/02/2026',
          image: 'assets/img/logo_config.png'
        },
        {
          title: 'Projeto comercio seguro',
          description: 'Orientacoes e rondas em eixos comerciais.',
          date: '15/02/2026',
          image: 'assets/img/logo_inicio.png'
        },
        {
          title: 'Treinamento de liderancas',
          description: 'Capacitacao de referencia local.',
          date: '19/02/2026',
          image: 'assets/img/logo_inteligencia.png'
        }
      ],
      education: [
        {
          title: 'Formacao continuada',
          description: 'Capacitacao para equipes operacionais.',
          date: '24/01/2026',
          image: 'assets/img/logo_relatorio.png'
        },
        {
          title: 'Simulacao de ocorrencias',
          description: 'Treinos com cenarios reais e avaliacao.',
          date: '30/01/2026',
          image: 'assets/img/logo_config.png'
        },
        {
          title: 'Atualizacao tatica',
          description: 'Revisao de protocolos e equipamentos.',
          date: '06/02/2026',
          image: 'assets/img/logo_inteligencia.png'
        },
        {
          title: 'Workshop de comunicacao',
          description: 'Praticas para atendimento e registro.',
          date: '12/02/2026',
          image: 'assets/img/logo_organograma.png'
        },
        {
          title: 'Treino integrado',
          description: 'Rotinas conjuntas com apoio logistico.',
          date: '16/02/2026',
          image: 'assets/img/prf.png'
        },
        {
          title: 'Aprimoramento de lideranca',
          description: 'Formacao para comandantes de equipe.',
          date: '23/02/2026',
          image: 'assets/img/logo_inicio.png'
        }
      ]
    }
  };

  const state = {
    news: { page: 1, perPage: 6 },
    videos: { page: 1, perPage: 3 },
    cultural: { page: 1, perPage: 3 },
    community: { page: 1, perPage: 3 },
    education: { page: 1, perPage: 3 }
  };

  const byId = (id) => document.getElementById(id);

  const escapeHtml = (value) => {
    if (!value) return '';
    const div = document.createElement('div');
    div.textContent = String(value);
    return div.innerHTML;
  };

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

  const formatNumber = (value, template) => {
    const digits = String(value).replace(/\D/g, '');
    const formatted = Number(digits).toLocaleString('pt-BR');
    if (!template) return formatted;
    return template.replace(/[0-9.]+/g, formatted);
  };

  const animateOdometer = (element) => {
    if (!element) return;
    const targetRaw = element.getAttribute('data-target') || element.textContent;
    const digits = String(targetRaw).replace(/\D/g, '');
    const target = Number(digits);
    if (!Number.isFinite(target)) return;

    const duration = 3500;
    const startTime = window.performance.now();

    const step = (now) => {
      const progress = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      element.textContent = formatNumber(current, targetRaw);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const updateNumbersGridLayout = () => {
    const grid = byId('numbers-grid');
    if (!grid) return;
    const count = Array.isArray(data.numbers) ? data.numbers.length : 0;
    const safeCount = Math.max(1, count);
    const width = window.innerWidth;
    let columns = Math.min(safeCount, 5);

    if (width <= 768) {
      columns = Math.min(safeCount, 2);
    } else if (width <= 1200) {
      columns = Math.min(safeCount, 3);
    }

    grid.style.setProperty('grid-template-columns', `repeat(${columns}, minmax(200px, 1fr))`, 'important');
    grid.style.setProperty('justify-content', 'center');
  };

  const renderNumbers = () => {
    const grid = byId('numbers-grid');
    const period = byId('numbers-period');
    if (!grid) return;
    updateNumbersGridLayout();
    if (period) {
      period.textContent = data.period ? `(${data.period})` : '';
    }
    grid.innerHTML = data.numbers
      .map((item) => {
        const value = escapeHtml(item.value);
        const label = escapeHtml(item.label);
        const description = escapeHtml(item.description);
        return `
          <div class="number-item">
            <div class="number-value" data-target="${value}">0</div>
            ${label ? `<div class="number-unit">${label}</div>` : ''}
            ${description ? `<div class="number-description">${description}</div>` : ''}
          </div>
        `;
      })
      .join('');

    grid.querySelectorAll('.number-value').forEach(animateOdometer);
  };

  const newsCard = (item) => {
    const image = item.image
      ? `<img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'news-placeholder\\'><i class=\\'fas fa-newspaper\\'></i></div>'">`
      : `<div class="news-placeholder"><i class="fas fa-newspaper"></i></div>`;
    return `
      <article class="news-item">
        <div class="news-image">${image}</div>
        <div class="news-content">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.summary)}</p>
          <span class="news-date">${escapeHtml(item.date)}</span>
        </div>
      </article>
    `;
  };

  const videoCard = (item) => {
    const image = item.image
      ? `<img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'news-placeholder\\'><i class=\\'fas fa-video\\'></i></div>'">`
      : `<div class="news-placeholder"><i class="fas fa-video"></i></div>`;
    return `
      <article class="news-item">
        <div class="news-image">${image}</div>
        <div class="news-content">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.summary)}</p>
          <span class="news-date">${escapeHtml(item.date)}</span>
        </div>
      </article>
    `;
  };

  const activityCard = (item) => {
    const image = item.image
      ? `<img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'activity-placeholder\\'><i class=\\'fas fa-calendar-alt\\'></i></div>'">`
      : `<div class="activity-placeholder"><i class="fas fa-calendar-alt"></i></div>`;
    return `
      <article class="activity-item">
        <div class="activity-image">${image}</div>
        <div class="activity-content">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
          <span class="activity-date">${escapeHtml(item.date)}</span>
        </div>
      </article>
    `;
  };

  const renderPagination = (items, key, pageNumbersId, pageInfoId, paginationId) => {
    const totalPages = Math.max(1, Math.ceil(items.length / state[key].perPage));
    state[key].page = clamp(state[key].page, 1, totalPages);

    const pagination = byId(paginationId);
    const pageNumbers = byId(pageNumbersId);
    const pageInfo = byId(pageInfoId);

    if (pageInfo) {
      pageInfo.textContent = `Pagina ${state[key].page} de ${totalPages}`;
    }

    if (pageNumbers) {
      pageNumbers.innerHTML = '';
      if (totalPages > 1) {
        for (let i = 1; i <= totalPages; i += 1) {
          const button = document.createElement('button');
          button.className = 'pagination-number';
          if (i === state[key].page) {
            button.classList.add('active');
          }
          button.textContent = i;
          button.onclick = () => setPage(key, i);
          pageNumbers.appendChild(button);
        }
      }
    }

    if (pagination) {
      pagination.classList.toggle('hidden', totalPages <= 1);
    }

    const prevBtn = byId(`${key}-prev-btn`);
    const nextBtn = byId(`${key}-next-btn`);
    if (prevBtn) prevBtn.disabled = state[key].page <= 1;
    if (nextBtn) nextBtn.disabled = state[key].page >= totalPages;

    return totalPages;
  };

  const renderNews = () => {
    const grid = byId('news-grid');
    if (!grid) return;
    grid.innerHTML = data.news.map(newsCard).join('');
  };

  const renderVideos = () => {
    const grid = byId('videos-190-grid');
    if (!grid) return;
    renderPagination(data.videos, 'videos', 'videos-page-numbers', 'videos-page-info', 'videos-pagination');
    const start = (state.videos.page - 1) * state.videos.perPage;
    const pageItems = data.videos.slice(start, start + state.videos.perPage);
    grid.innerHTML = pageItems.map(videoCard).join('');
  };

  const renderActivities = (key, gridId, pageNumbersId, pageInfoId, paginationId) => {
    const grid = byId(gridId);
    if (!grid) return;
    const items = data.activities[key] || [];
    renderPagination(items, key, pageNumbersId, pageInfoId, paginationId);
    const start = (state[key].page - 1) * state[key].perPage;
    const pageItems = items.slice(start, start + state[key].perPage);
    grid.innerHTML = pageItems.map(activityCard).join('');
  };

  const setPage = (key, page) => {
    state[key].page = page;
    switch (key) {
      case 'news':
        renderNews();
        break;
      case 'videos':
        renderVideos();
        break;
      case 'cultural':
        renderActivities('cultural', 'cultural-activities-grid', 'cultural-page-numbers', 'cultural-page-info', 'cultural-pagination');
        break;
      case 'community':
        renderActivities('community', 'community-activities-grid', 'community-page-numbers', 'community-page-info', 'community-pagination');
        break;
      case 'education':
        renderActivities('education', 'education-activities-grid', 'education-page-numbers', 'education-page-info', 'education-pagination');
        break;
      default:
        break;
    }
  };

  const setupMobileMenu = () => {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.main-nav');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', () => nav.classList.toggle('active'));

    const dropdowns = document.querySelectorAll('.nav-dropdown > .nav-link-dropdown');
    dropdowns.forEach((trigger) => {
      trigger.addEventListener('click', (event) => {
        if (window.innerWidth <= 1024) {
          event.preventDefault();
          const wrapper = trigger.closest('.nav-dropdown');
          if (wrapper) {
            wrapper.classList.toggle('active');
          }
        }
      });
    });
  };

  const rewriteNavLinks = () => {
    const replacements = {
      '#organograma': 'organograma.html',
      '/organograma': 'organograma.html',
      '#capacitacao': 'capacitacao.html',
      '/capacitacao': 'capacitacao.html',
      '#historia-valores': 'historia-valores.html',
      '/historia-valores': 'historia-valores.html',
      '#documentos': 'documentos.html',
      '/documentos': 'documentos.html',
      '#preencher-bou': 'preencher-bou.html',
      '/preencher-bou': 'preencher-bou.html',
      '#concursos': 'concursos.html',
      '/concursos': 'concursos.html',
      '#diario-oficial': 'diario-oficial.html',
      '/diario-oficial': 'diario-oficial.html',
      '/login': 'login.html',
      '/registro': 'criar-conta.html'
    };

    document.querySelectorAll('a[href]').forEach((link) => {
      const href = link.getAttribute('href');
      if (href && replacements[href]) {
        link.setAttribute('href', replacements[href]);
      }
      if (href === '#noticias') {
        link.setAttribute('href', 'index.html#noticias');
      }
    });
  };

  const setupAccessibility = () => {
    const alertBtn = byId('alert');

    if (alertBtn) {
      alertBtn.addEventListener('click', () => {
        window.alert('Sem alertas no momento.');
      });
    }
  };

  const setupSwappedImages = () => {
    const swaps = [
      { from: '../images/ssp_fundobranco.png', to: 'assets/img/logo_inicio.png' },
      { from: '../images/Logo_PMESP.png', to: 'assets/img/prf.png' }
    ];
    swaps.forEach((swap) => {
      document.querySelectorAll(`img[src="${swap.from}"]`).forEach((img) => {
        img.src = swap.to;
      });
    });
  };

  const setupBannerSlider = () => {
    const bannerImage = document.querySelector('.banner-image');
    if (!bannerImage) return;

    const sources = [
      'assets/img/banner_1.png',
      'assets/img/banner_2.png',
      'assets/img/banner_3.png'
    ];

    const uniqueSources = sources.filter((src, idx, arr) => src && arr.indexOf(src) === idx);
    if (uniqueSources.length < 2) return;

    let index = uniqueSources.indexOf(bannerImage.getAttribute('src'));
    if (index < 0) {
      index = 0;
      bannerImage.src = uniqueSources[0];
    }

    const swapImage = () => {
      index = (index + 1) % uniqueSources.length;
      bannerImage.classList.add('is-fading');

      window.setTimeout(() => {
        bannerImage.src = uniqueSources[index];
        const clearFade = () => bannerImage.classList.remove('is-fading');
        bannerImage.onload = clearFade;
        bannerImage.onerror = clearFade;
      }, 300);
    };

    window.setInterval(swapImage, 6000);
  };

  const setupGlobals = () => {
    window.changeNewsPage = (direction) => setPage('news', state.news.page + direction);
    window.goToNewsPage = (page) => setPage('news', page);
    window.changeVideosPage = (direction) => setPage('videos', state.videos.page + direction);
    window.goToVideosPage = (page) => setPage('videos', page);
    window.changeCulturalPage = (direction) => setPage('cultural', state.cultural.page + direction);
    window.goToCulturalPage = (page) => setPage('cultural', page);
    window.changeCommunityPage = (direction) => setPage('community', state.community.page + direction);
    window.goToCommunityPage = (page) => setPage('community', page);
    window.changeEducationPage = (direction) => setPage('education', state.education.page + direction);
    window.goToEducationPage = (page) => setPage('education', page);

    window.openTicketsWidget = () => window.alert('Fale conosco: atendimento em horario comercial.');
    window.openCorregedoriaWidget = () => window.alert('Corregedoria: canal em manutencao.');

    window.cacheManager = {
      clearAndReload: () => {
        try {
          localStorage.clear();
          sessionStorage.clear();
        } catch (err) {
          /* ignore */
        }
        window.location.reload();
      }
    };

    window.userProfile = window.userProfile || {
      openModal: () => window.alert('Perfil do usuario indisponivel no modo estatico.')
    };

    window.auth = window.auth || {
      logout: () => window.alert('Voce saiu da conta.')
    };

    window.mostrarListaAprovadosFromBase64 = (base64) => {
      const modal = byId('lista-aprovados-modal');
      const content = byId('lista-aprovados-content');
      if (!modal || !content) return;
      try {
        const text = decodeURIComponent(escape(atob(base64)));
        content.textContent = text;
      } catch (err) {
        content.textContent = 'Erro ao carregar lista.';
      }
      modal.style.display = 'flex';
    };

    window.mostrarListaAprovados = (text) => {
      const modal = byId('lista-aprovados-modal');
      const content = byId('lista-aprovados-content');
      if (!modal || !content) return;
      content.textContent = text;
      modal.style.display = 'flex';
    };
  };

  const setupModalClose = () => {
    document.addEventListener('click', (event) => {
      const modal = byId('lista-aprovados-modal');
      if (modal && event.target === modal) {
        modal.style.display = 'none';
      }
    });
  };

  const setupInfoCardDropdowns = () => {
    const toggles = document.querySelectorAll('.info-card .info-card-toggle');
    if (!toggles.length) return;

    toggles.forEach((toggle) => {
      const card = toggle.closest('.info-card');
      if (!card) return;
      const targetId = toggle.getAttribute('aria-controls');
      const body = targetId ? byId(targetId) : card.querySelector('.info-card-body');
      if (!body) return;

      const setExpanded = (expanded) => {
        card.classList.toggle('is-open', expanded);
        toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      };

      setExpanded(true);

      toggle.addEventListener('click', () => {
        const isOpen = card.classList.contains('is-open');
        setExpanded(!isOpen);
      });

      toggle.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          toggle.click();
        }
      });
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    rewriteNavLinks();
    setupGlobals();
    setupSwappedImages();
    setupBannerSlider();
    renderNumbers();
    renderNews();
    renderVideos();
    renderActivities('cultural', 'cultural-activities-grid', 'cultural-page-numbers', 'cultural-page-info', 'cultural-pagination');
    renderActivities('community', 'community-activities-grid', 'community-page-numbers', 'community-page-info', 'community-pagination');
    renderActivities('education', 'education-activities-grid', 'education-page-numbers', 'education-page-info', 'education-pagination');
    setupMobileMenu();
    setupAccessibility();
    setupModalClose();
    setupInfoCardDropdowns();
    window.addEventListener('resize', updateNumbersGridLayout);
  });
})();
