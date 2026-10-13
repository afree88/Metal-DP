# ⚒️ Metal DP — Site Institucional & Catálogo de Peças com Sveltia CMS

> **Serralheria artística sob medida em Dom Pedro - MA.**  
> Portões, corrimãos, pergolados, móveis industriais e estruturas metálicas com solda MMA reforçada e pintura automotiva a compressor.

---

## 🌟 Recursos Principais

- ⚡ **Desempenho Extremo com Astro** — Páginas estáticas ultrarrápidas, carregamento instantâneo até em 3G/4G.
- 📱 **Mobile-First** — Foco total em celular, pois é o principal meio de acesso dos clientes.
- 🛒 **Lista de Orçamento (Carrinho)** — Cliente monta sua lista de peças e envia direto no WhatsApp com preço estimado.
- 💬 **WhatsApp em destaque** — Botão flutuante com contagem de itens e mensagem pré-formatada com os produtos selecionados.
- 📐 **Catálogo de Peças sob Medida** — Cards com filtro por categoria, busca em tempo real e ordenação.
- 💳 **Meios de pagamento configuráveis no painel** — PIX, Dinheiro e Bitcoin Lightning Network (BTC).
- 🗺️ **Página de Localização** — Mapa Google Maps embutido, horários e endereço.
- 📬 **Formulário de Contato** — Integrado com Netlify Forms (sem backend).
- 🎛️ **Painel Admin (Sveltia CMS)** — O dono gerencia produtos, preços e fotos pelo navegador em `/admin`, sem precisar saber programação.

---

## 📦 Tecnologias Utilizadas

| Tecnologia | Finalidade |
|---|---|
| [Astro](https://astro.build) | Framework de geração de site estático |
| [Tailwind CSS](https://tailwindcss.com) | Estilização utility-first |
| [Sveltia CMS](https://github.com/sveltia/sveltia-cms) | Painel admin baseado em Git (grátis) |
| [Netlify](https://www.netlify.com) | Hospedagem, deploy automático e Identity |
| [Netlify Forms](https://www.netlify.com/products/forms/) | Formulário de contato sem backend |
| [Netlify Identity](https://docs.netlify.com/security/secure-access-to-sites/identity/) | Login seguro para o painel admin |

---

## 🚀 Como Colocar no Ar (100% Grátis)

### Passo 1 — Subir para o GitHub

```bash
git init
git add .
git commit -m "feat: site Metal DP serralheria artística"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/Metal-DP.git
git push -u origin main
```

---

### Passo 2 — Conectar no Netlify

1. Acesse [netlify.com](https://www.netlify.com) e faça login com o GitHub.
2. Clique em **"Add new site"** → **"Import an existing project"**.
3. Selecione o repositório **Metal-DP**.
4. O Netlify detecta as configurações automaticamente via `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Clique em **"Deploy site"**. Em menos de 2 minutos o site estará no ar com HTTPS gratuito!

---

### Passo 3 — Ativar o Painel Admin (Sveltia CMS)

Para que o dono acesse `/admin` com e-mail e senha (sem conta no GitHub):

1. No painel do site no Netlify → **Site configuration** → **Identity** → **"Enable Identity"**.
2. Em **Registration preferences**, escolha **"Invite only"** (recomendado).
3. Role até **Services** → **Git Gateway** → clique em **"Enable Git Gateway"**.
4. Em **Identity** → **"Invite users"** → envie convite para o e-mail do dono.
5. O dono recebe um e-mail para definir a senha e já pode acessar o painel.

**URL do painel:**
```
https://seusite.netlify.app/admin
```

---

### Passo 4 — Como Gerenciar Produtos pelo Painel

1. Acesse `https://seusite.netlify.app/admin` e faça login.
2. No menu lateral, clique em **"Produtos"**:
   - **Alterar preço:** clique no produto, edite o campo *Preço* e clique em **Salvar**.
   - **Novo produto:** clique em **"Novo Produto"**, preencha nome, categoria, descrição, preço, suba a foto e clique em **Salvar**.
3. O site atualiza automaticamente em instantes (Netlify faz o deploy automático a cada commit).

> 💡 Para alterar **dados da loja** (WhatsApp, PIX, horários, meios de pagamento), acesse **"Configurações da Loja"** no painel.

---

## 💻 Rodar Localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
# Acesse: http://localhost:4321
```

```bash
# Testar o build de produção
npm run build
npm run preview
```

---

## 📁 Estrutura de Arquivos

```
Metal-DP/
├── public/
│   ├── admin/
│   │   ├── index.html          ← Sveltia CMS (painel admin)
│   │   └── config.yml          ← Configuração das coleções do CMS
│   └── favicon.svg
├── src/
│   ├── content/
│   │   ├── config.ts           ← Schemas Zod de validação
│   │   ├── configuracoes/
│   │   │   └── loja.json       ← Dados da loja (nome, WhatsApp, PIX, horários...)
│   │   └── produtos/           ← Arquivos .md de cada peça (gerenciados pelo CMS)
│   ├── components/
│   │   ├── CartDrawer.astro    ← Gaveta de orçamento com tabs de pagamento
│   │   ├── CategoryChips.astro ← Filtro por categoria
│   │   ├── Footer.astro        ← Rodapé com pagamentos e contato
│   │   ├── Header.astro        ← Navegação, logo e modo escuro
│   │   ├── NetlifyForm.astro   ← Formulário de contato
│   │   ├── ProductCard.astro   ← Card de peça/produto
│   │   └── PromoBanner.astro   ← Banner de destaque/hero
│   ├── layouts/
│   │   └── BaseLayout.astro    ← Layout base com SEO e botões flutuantes
│   ├── pages/
│   │   ├── index.astro         ← Página inicial (hero + catálogo)
│   │   ├── sobre.astro         ← Sobre a serralheria
│   │   ├── contato.astro       ← Formulário de contato
│   │   ├── localizacao.astro   ← Mapa e horários
│   │   └── produtos/           ← Páginas individuais de cada peça
│   └── styles/
├── astro.config.mjs            ← Configuração do Astro com Tailwind
├── tailwind.config.mjs         ← Configuração do Tailwind
├── netlify.toml                ← Configuração de build e deploy
└── package.json
```

---

## 💳 Meios de Pagamento Suportados

| Método | Status |
|---|---|
| 💠 PIX | ✅ Ativo |
| 💵 Dinheiro | ✅ Ativo |
| ⚡ Bitcoin Lightning Network (BTC) | ✅ Ativo |
| 💳 Cartão | ❌ Não disponível no momento |

> Os meios de pagamento podem ser ativados/desativados em `src/content/configuracoes/loja.json` ou pelo painel admin.

---

## 📞 Contato da Serralheria

- 📍 **Localização:** Dom Pedro - MA (CEP 65765-000)
- 📱 **WhatsApp:** [(99) 9175-6968](https://wa.me/559991756968)
- 🕐 **Segunda a Sexta:** 07h30 às 18h00
- 🕐 **Sábado:** 08h00 às 12h00
- 🌐 **Online (orçamentos):** Qualquer horário pelo WhatsApp

---

## 📝 Licença

Projeto desenvolvido para uso exclusivo da **Metal DP Serralheria Artística**.  
Todos os direitos reservados © 2025 Metal DP.
