# Diretrizes de "Vibe Design" para o Instituto P&D

Este documento serve como a base de referência arquitetural e visual para a IA (Claude) ao construir a Landing Page do Instituto de Pesquisa e Desenvolvimento.

## 1. Identidade Visual e Vibe (Aesthetics)
O instituto não tem fins lucrativos (focado em captação via Lei do Bem / Lei de Informática). A "vibe" deve transmitir:
- **Autoridade e Inovação:** Design high-end, sério, mas altamente tecnológico.
- **Minimalismo Tecnológico:** Interfaces limpas ("animation-clean"), uso de espaços em branco generosos.
- **Glassmorphism e Blur:** Componentes como modais e cards flutuantes utilizando fundos translúcidos e desfoque (blur) para dar profundidade, inspirado no padrão Wix Studio e dashboards modernos ("cool-dashboard").
- **Tipografia:** Moderna, sem serifa (ex: Inter, Roboto, Plus Jakarta Sans), com pesos bem definidos para separar cabeçalhos de textos de apoio.

## 2. Componentes e Interações de Alto Nível
Ao desenhar os componentes, siga estas diretrizes extraídas do banco de referências:
- **Cards e Grids (Bento Grid):** Layouts em formato bento-box para apresentar os pilares do instituto (Inovação, Leis de Incentivo, Projetos).
- **Animações Fluidas:** Entradas suaves (fade-in, slide-up), micro-interações em botões (hover states elaborados) usando Framer Motion ou GSAP.
- **Botões e CTAs:** Estilo "premium", com gradientes sutis, bordas brilhantes ou contrastes fortes em modo escuro (Dark Mode preferencial para P&D tecnológico).
- **Navegação (Sidebar/Navbar):** Fixa, translúcida, ocupando pouco espaço vertical para focar no conteúdo ("dashboard-list" style).

## 3. Fontes de Inspiração Direta (Para o Claude)
- **Aura.build:** Usar como referência para fluidez e estética.
- **Mobbin / Webflow Dribbble:** Extrair o nível de acabamento visual "expensive" (soft-design).
- **Design System Extraction:** Basear-se estritamente nas regras estruturais de HTML/CSS extraídas do arquivo `Extract HTML Design System.pdf` (que deve ser fornecido junto ao prompt).

## 4. Instruções de Implementação para o Agente Claude
1. **Leia** este documento e o `Extract HTML Design System.pdf`.
2. **Ative** as skills listadas (como `soft-design`, `lp-page-builder`, etc.) para garantir a execução do frontend com Tailwind, Framer Motion e Lucide Icons.
3. **Desenvolva** a interface priorizando a acessibilidade, o contraste tecnológico e a clareza sobre como funciona o incentivo fiscal (Lei do Bem).
