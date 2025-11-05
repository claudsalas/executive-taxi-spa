# Wagner Transporte Executivo - Single Page Application

Uma aplicação web profissional e responsiva para apresentar serviços de transporte executivo em São Paulo, Brasil.

## 🚗 Sobre o Projeto

Este é um website moderno e elegante desenvolvido para **Wagner Transporte Executivo**, oferecendo serviços de transfers executivos e viagens intermunicipais com foco em conforto, segurança e profissionalismo.

### Características Principais

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Conteúdo em Português**: Totalmente localizado para o mercado brasileiro
- **Integração WhatsApp**: Botões diretos para contato via WhatsApp
- **Galeria de Imagens**: Apresentação profissional do motorista e da frota
- **Single Page Application**: Navegação suave sem recarregar a página
- **Performance Otimizada**: Carregamento rápido e eficiente

## 📋 Seções do Website

1. **Hero (Capa)**: Apresentação principal com call-to-action
2. **Sobre Nós**: Informações sobre o motorista profissional
3. **Serviços**: Rotas e destinos principais (Ubatuba, Paraty, Angra dos Reis, Rio de Janeiro, etc.)
4. **Frota**: Detalhes do veículo Toyota Corolla Cross Híbrido
5. **Contato**: Informações de contato e formulário de orçamento
6. **Footer**: Rodapé com informações legais

## 🛠️ Stack Tecnológico

- **React 19**: Framework JavaScript moderno
- **TypeScript**: Tipagem estática para maior segurança
- **Tailwind CSS 4**: Framework de CSS utilitário
- **Vite**: Build tool rápido e eficiente
- **shadcn/ui**: Componentes UI acessíveis e customizáveis

## 📁 Estrutura do Projeto

```
executive-taxi-spa/
├── client/
│   ├── public/
│   │   └── images/              # Imagens do projeto
│   │       ├── PHOTO-*.jpg      # Fotos do carro e motorista
│   │       └── ...
│   ├── src/
│   │   ├── components/
│   │   │   └── ui/              # Componentes shadcn/ui
│   │   ├── pages/
│   │   │   └── Home.tsx         # Página principal (SPA)
│   │   ├── App.tsx              # Componente raiz
│   │   ├── main.tsx             # Entry point
│   │   └── index.css            # Estilos globais
│   └── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── GITHUB_PAGES_GUIDE.md        # Guia de deployment
└── README.md                     # Este arquivo
```

## 🚀 Como Executar Localmente

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn como gerenciador de pacotes

### Instalação

```bash
# Clonar o repositório (ou navegar até o diretório)
cd executive-taxi-spa

# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:5173` (ou a porta indicada no terminal).

## 📦 Scripts Disponíveis

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview

# Linting com ESLint
npm run lint
```

## 🌐 Deploy no GitHub Pages

Para publicar seu site gratuitamente no GitHub Pages, siga o guia completo em [GITHUB_PAGES_GUIDE.md](./GITHUB_PAGES_GUIDE.md).

### Resumo Rápido

1. Crie um repositório no GitHub
2. Faça push do código para o repositório
3. Ative GitHub Pages nas configurações
4. Seu site estará disponível em `https://seu-usuario.github.io/executive-taxi-spa`

## 📱 Informações de Contato

- **WhatsApp**: (11) 97737-7841
- **E-mail**: wdstaxi@gmail.com
- **Serviços**: Transfers executivos para Ubatuba, Paraty, Angra dos Reis, Rio de Janeiro e Porto Marítimo

## 🎨 Customização

### Alterar Cores

As cores principais estão definidas em `client/src/index.css`. Para modificar:

1. Abra `client/src/index.css`
2. Localize as variáveis CSS em `:root`
3. Modifique os valores OKLCH conforme desejado

### Alterar Conteúdo

Todo o conteúdo está em `client/src/pages/Home.tsx`. Edite o arquivo para:

- Mudar textos
- Adicionar novas seções
- Modificar imagens
- Atualizar informações de contato

### Adicionar Imagens

1. Coloque as imagens em `client/public/images/`
2. Referencie-as no código como `/images/nome-da-imagem.jpg`

## 📄 Licença

Este projeto é de propriedade de Wagner Transporte Executivo. Todos os direitos reservados.

## 📞 Suporte

Para dúvidas ou sugestões sobre o website, entre em contato:

- **WhatsApp**: (11) 97737-7841
- **E-mail**: wdstaxi@gmail.com

---

**Desenvolvido com ❤️ para Wagner Transporte Executivo**

Última atualização: Novembro de 2025
