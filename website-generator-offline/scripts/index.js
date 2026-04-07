window['ai_edge_gallery_get_result'] = async (dataStr) => {
  try {
    const input = dataStr ? JSON.parse(dataStr) : {};

    const safeSections = Array.isArray(input.sections) ? input.sections.slice(0, 6) : [];

    const payload = {
      siteTitle: typeof input.siteTitle === 'string' && input.siteTitle.trim() ? input.siteTitle.trim() : 'Nova Landing',
      tagline: typeof input.tagline === 'string' && input.tagline.trim()
        ? input.tagline.trim()
        : 'Uma experiência web moderna, rápida e pronta para uso offline.',
      ctaText: typeof input.ctaText === 'string' && input.ctaText.trim() ? input.ctaText.trim() : 'Começar agora',
      primaryColor: typeof input.primaryColor === 'string' && input.primaryColor.trim() ? input.primaryColor.trim() : '#0ea5e9',
      sections: safeSections.length
        ? safeSections.map((s) => ({
            title: typeof s?.title === 'string' && s.title.trim() ? s.title.trim() : 'Seção',
            content: typeof s?.content === 'string' && s.content.trim()
              ? s.content.trim()
              : 'Conteúdo desta seção.'
          }))
        : [
            {
              title: 'Sobre o projeto',
              content: 'Este preview foi gerado para visualização imediata no chat.'
            },
            {
              title: 'Diferenciais',
              content: 'Design limpo, responsivo e estrutura pronta para evoluir.'
            },
            {
              title: 'Próximos passos',
              content: 'Refinar conteúdo, branding e converter para versão final de produção.'
            }
          ]
    };

    const encoded = encodeURIComponent(JSON.stringify(payload));
    const fullUrl = `webview.html?data=${encoded}&v=${Date.now()}`;

    return JSON.stringify({
      webview: {
        url: fullUrl,
        aspectRatio: 0.7
      },
      result: 'Website preview rendered. Ask the user to tap the preview card to open it.'
    });
  } catch (e) {
    return JSON.stringify({ error: `Failed to render website preview: ${e.message}` });
  }
};
