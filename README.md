# TrackIt - Rastreador de Hábitos 📊

Uma aplicação web moderna para rastrear e gerenciar seus hábitos diários, construída com React e Context API.

## 🚀 Demo

Acesse a aplicação online: **[https://track-lt-vpz9.vercel.app/](https://track-lt-vpz9.vercel.app/)**

## 📋 Sobre o Projeto

TrackIt é um aplicativo de rastreamento de hábitos que permite aos usuários:

- ✅ Criar e gerenciar hábitos personalizados
- 📅 Marcar hábitos como concluídos diariamente
- 📈 Acompanhar sequências e estatísticas
- 👤 Sistema completo de autenticação
- 📱 Interface responsiva e intuitiva

## 🛠️ Tecnologias Utilizadas

- **React 19.1.0** - Framework principal
- **Vite 7.0.4** - Build tool e desenvolvimento
- **Styled Components 6.1.19** - Estilização CSS-in-JS
- **React Router DOM 7.6.3** - Roteamento
- **Axios 1.10.0** - Requisições HTTP
- **Context API** - Gerenciamento de estado global
- **FontAwesome** - Ícones
- **Vercel** - Deploy e hospedagem

## 🎯 Funcionalidades

### 🔐 Autenticação
- Login e registro de usuários
- Proteção de rotas
- Persistência de sessão

### 📝 Gerenciamento de Hábitos
- Criar hábitos com dias da semana específicos
- Deletar hábitos existentes
- Visualizar lista completa de hábitos

### 📅 Página Hoje
- Ver hábitos do dia atual
- Marcar/desmarcar como concluído
- Acompanhar sequência atual e recorde
- Porcentagem de conclusão diária

### 🎨 Interface
- Design clean e moderno
- Navegação intuitiva
- Feedback visual em tempo real
- Totalmente responsivo

## 🏗️ Arquitetura

### Context API Centralizado
```
APIContext.jsx
├── Estados Globais
│   ├── user (dados do usuário)
│   ├── habits (lista de hábitos)
│   ├── todaysHabits (hábitos de hoje)
│   └── loading (estado de carregamento)
├── Autenticação
│   ├── login()
│   ├── register()
│   └── logout()
├── Gerenciamento de Hábitos
│   ├── createHabit()
│   ├── deleteHabit()
│   └── fetchTodaysHabits()
└── Interações
    └── toggleHabit()
```

### Estrutura de Componentes
```
src/
├── Components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── PageTitle.jsx
│   ├── HabitCard.jsx
│   ├── HabitForm.jsx
│   └── ...
├── Pages/
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Habits.jsx
│   └── Today.jsx
├── Context/
│   └── APIContext.jsx
└── Styles/
    └── Global.jsx
```

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação
```bash

git clone https://github.com/LuanBmenez/TrackLt.git


cd TrackLt


npm install


npm run dev


http://localhost:5173
```

### Scripts Disponíveis
```bash
npm run dev      
npm run build    
npm run preview  
npm run lint     
```

## 🌐 API

A aplicação utiliza a API do bootcamp Driven para:

- **Autenticação**: Login e registro de usuários
- **CRUD de Hábitos**: Criar, listar e deletar hábitos
- **Tracking Diário**: Marcar/desmarcar hábitos do dia

**Base URL**: `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit`

## 📱 Responsividade

- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (320px - 767px)

## 🎨 Design System

### Cores Principais
- **Azul Principal**: `#126BA5`
- **Azul Secundário**: `#52B6FF`
- **Verde Sucesso**: `#8FC549`
- **Cinza Texto**: `#666666`
- **Cinza Claro**: `#BABABA`

### Tipografia
- **Fonte Principal**: Lexend Deca
- **Tamanhos**: 13px, 18px, 20px, 23px

## 🔄 Estado Global

Toda a aplicação utiliza Context API para eliminar prop drilling:

- **Estados centralizados** em um único contexto
- **Funções reutilizáveis** para todas as operações
- **Sincronização automática** entre componentes
- **Persistência** de autenticação

## 📦 Deploy

A aplicação está automaticamente deployada na Vercel:

- **Build automático** a cada push na main
- **Preview** para pull requests
- **Domínio personalizado** configurado
- **SSL** habilitado

## 🤝 Contribuição

    1. Faça um fork do projeto
    2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
    3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
    4. Push para a branch (`git push origin feature/AmazingFeature`)
    5. Abra um Pull Request

    ## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Luan Menez**

- GitHub: [@LuanBmenez](https://github.com/LuanBmenez)
- LinkedIn: [@LuanBmenez](https://github.com/LuanBmenez)
- Email: [menezluan120@gmail.com]

---

⭐ **Desenvolvido com React + Context API para gerenciamento de estado eficiente**

🚀 **[Acesse a aplicação aqui!](https://track-lt-vpz9.vercel.app/)**
