# Guia de Deployment no GitHub Pages

## Visão Geral

Este guia fornece instruções passo a passo para publicar sua Single Page Application (SPA) "Wagner Transporte Executivo" no GitHub Pages, tornando-a acessível publicamente na internet.

## Pré-requisitos

Antes de começar, você precisará de:

1. **Conta GitHub** - Crie uma em [github.com](https://github.com) se ainda não tiver
2. **Git instalado** - Baixe em [git-scm.com](https://git-scm.com)
3. **Projeto local** - Você já tem o projeto pronto em `/home/ubuntu/executive-taxi-spa`

## Passo 1: Criar um Repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login em sua conta
2. Clique no ícone "+" no canto superior direito e selecione "New repository"
3. **Nome do repositório:** `executive-taxi-spa` (ou o nome que preferir)
4. **Descrição:** "Wagner Transporte Executivo - Single Page Application"
5. Escolha **Public** para que o site seja acessível
6. **NÃO** inicialize com README, .gitignore ou licença (você já tem arquivos locais)
7. Clique em "Create repository"

## Passo 2: Configurar o Repositório Local

No seu terminal, execute os seguintes comandos:

```bash
cd /home/ubuntu/executive-taxi-spa

# Inicializar o repositório git (se ainda não estiver inicializado)
git init

# Adicionar o repositório remoto (substitua SEU_USUARIO pelo seu username do GitHub)
git remote add origin https://github.com/SEU_USUARIO/executive-taxi-spa.git

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Initial commit: Wagner Transporte Executivo SPA"

# Fazer push para o GitHub (branch main)
git branch -M main
git push -u origin main
```

## Passo 3: Configurar GitHub Pages

1. Acesse seu repositório no GitHub: `https://github.com/SEU_USUARIO/executive-taxi-spa`
2. Clique em **Settings** (Configurações)
3. No menu esquerdo, clique em **Pages**
4. Em "Source", selecione:
   - **Deploy from a branch**
   - Branch: **main**
   - Pasta: **/ (root)**
5. Clique em "Save"

## Passo 4: Aguardar o Build

O GitHub Pages iniciará automaticamente o build do seu site. Você verá:

1. Uma notificação amarela indicando que o site está sendo construído
2. Após alguns minutos, uma notificação verde confirmando que o site foi publicado
3. Um link no formato: `https://SEU_USUARIO.github.io/executive-taxi-spa`

## Passo 5: Acessar Seu Site

Seu site estará disponível em: **`https://SEU_USUARIO.github.io/executive-taxi-spa`**

Compartilhe este link com seus clientes!

## Atualizando o Site

Sempre que você quiser fazer alterações no site:

```bash
cd /home/ubuntu/executive-taxi-spa

# Fazer suas edições nos arquivos

# Adicionar as mudanças
git add .

# Fazer commit com uma mensagem descritiva
git commit -m "Descrição das mudanças"

# Fazer push para o GitHub
git push origin main
```

O GitHub Pages atualizará automaticamente seu site em poucos minutos.

## Domínio Personalizado (Opcional)

Se você quiser usar um domínio personalizado (ex: `www.wagnertransporte.com`):

1. Vá para **Settings > Pages**
2. Em "Custom domain", digite seu domínio
3. Clique em "Save"
4. Configure os DNS records do seu domínio conforme as instruções do GitHub

## Troubleshooting

### O site não aparece após o push

- Aguarde 2-3 minutos para o GitHub Pages processar
- Verifique se o branch está configurado corretamente em Settings > Pages
- Verifique se há erros no build (veja a aba "Actions" no repositório)

### Imagens não aparecem

- Certifique-se de que as imagens estão em `/client/public/images/`
- Os caminhos das imagens devem começar com `/images/` (caminho absoluto)

### Links não funcionam

- Verifique se todos os links internos usam rotas relativas corretas
- Links para WhatsApp devem ser `https://wa.me/...`

## Estrutura do Projeto

```
executive-taxi-spa/
├── client/
│   ├── public/
│   │   └── images/          ← Suas imagens
│   └── src/
│       ├── pages/
│       │   └── Home.tsx      ← Página principal
│       └── App.tsx
├── package.json
└── vite.config.ts
```

## Suporte Adicional

Para mais informações sobre GitHub Pages, consulte a [documentação oficial](https://docs.github.com/en/pages).

---

**Dica:** Você pode compartilhar o link do seu site diretamente com clientes via WhatsApp, e-mail ou redes sociais!
