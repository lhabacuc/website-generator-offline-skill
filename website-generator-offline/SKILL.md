# Website Generator Offline

## Purpose
Criar websites estáticos, leves e funcionais para execução totalmente offline, direcionados para fluxos de criação dentro do Google AI Edge Gallery.

## When To Use
Use esta skill quando o usuário pedir:
- geração de site/landing page offline;
- página HTML/CSS/JS sem dependências externas;
- protótipos rápidos para testar prompts ou modelos no AI Edge Gallery;
- pacote de arquivos pronto para abrir localmente.

## Core Rules
1. Saída sempre offline-first: sem CDN, sem fontes remotas, sem chamadas HTTP.
2. Estrutura mínima previsível:
   - `index.html`
   - `styles.css`
   - `script.js` (opcional, se houver interação)
   - `assets/` (somente se necessário)
3. Compatibilidade: funcionar abrindo `index.html` direto no navegador (file://).
4. Priorizar desempenho:
   - HTML semântico;
   - CSS enxuto;
   - JS pequeno e sem framework.
5. Acessibilidade mínima obrigatória:
   - contraste adequado;
   - foco visível;
   - labels e `aria-*` quando necessário;
   - navegação por teclado.

## Workflow
1. Entender objetivo do site:
   - tema;
   - público;
   - seções obrigatórias;
   - tom visual.
2. Propor direção visual curta (2-4 linhas), antes de codar.
3. Gerar os arquivos finais com conteúdo realista (evitar lorem ipsum, salvo pedido).
4. Validar checklist:
   - abre offline;
   - layout responsivo;
   - sem erros JS básicos;
   - sem links quebrados internos.
5. Entregar resumo com:
   - arquivos criados;
   - decisões técnicas;
   - próximos passos opcionais.

## Output Contract
Quando executar esta skill, a resposta deve conter:
1. Uma breve proposta visual.
2. Código completo dos arquivos.
3. Como testar localmente em 1-2 comandos simples.
4. Lista curta de melhorias futuras (opcional).

## Constraints For AI Edge Gallery Context
- Evitar dependências que exijam build step.
- Manter o tamanho total pequeno para facilitar iteração em dispositivo.
- Se houver mídia, usar placeholders locais e instruir onde substituir.
- Não assumir backend.

## Default Prompt Template
Use este template ao iniciar a geração:

```text
Crie um website estático 100% offline com os arquivos index.html, styles.css e script.js.
Tema: <tema>.
Objetivo: <objetivo>.
Seções obrigatórias: <lista>.
Estilo visual: <direção visual>.
Restrições: sem CDN, sem bibliotecas externas, responsivo mobile-first, acessível.
Entrega: código completo de cada arquivo + instruções de teste local.
```

## Quick QA Checklist
- [ ] Site abre via `file://` sem erros críticos.
- [ ] Nenhuma URL externa em `link`, `script`, `@import` ou `fetch`.
- [ ] Navegação e CTAs funcionam.
- [ ] Mobile (largura ~360px) e desktop (>=1280px) legíveis.
- [ ] Título, descrição e hierarquia de headings coerentes.
