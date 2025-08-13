# 🍽️ WaiterApp Dashboard

Dashboard web para gerenciamento de pedidos de restaurante em tempo real, desenvolvido com React, TypeScript e Socket.IO.

## 📋 Sobre o Projeto

O WaiterApp Dashboard é uma aplicação web moderna que permite aos funcionários do restaurante acompanhar e gerenciar pedidos em tempo real através de um sistema de kanban board. Os pedidos são organizados em três colunas principais: **Fila de Espera**, **Em Produção** e **Pronto**.

### ✨ Funcionalidades Principais

- 📊 **Board de Pedidos**: Visualização em tempo real dos pedidos organizados por status
- 🔄 **Atualizações em Tempo Real**: Integração com Socket.IO para sincronização automática
- 📱 **Interface Responsiva**: Design moderno e adaptável para diferentes dispositivos
- 🎯 **Gerenciamento de Status**: Mudança de status dos pedidos (Aguardando → Em Produção → Pronto)
- ❌ **Cancelamento de Pedidos**: Funcionalidade para cancelar pedidos quando necessário
- 🔔 **Notificações**: Sistema de toast para feedback visual das ações

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 19** - Biblioteca para construção da interface
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool e dev server
- **Tailwind CSS v4** - Framework CSS utilitário
- **Framer Motion** - Animações e transições

### Comunicação
- **Socket.IO Client** - Comunicação em tempo real
- **Axios** - Cliente HTTP para requisições REST
- **TanStack Query** - Gerenciamento de estado do servidor

### Desenvolvimento
- **Biome** - Linter e formatter
- **Husky** - Git hooks
- **Commitlint** - Padronização de commits

## 🎨 Design System

O projeto utiliza um design system consistente baseado no Tailwind CSS v4:

### Cores
- **Primária**: `#D73035` (vermelho)
- **Primária Escura**: `#8A1114`
- **Secundária**: `#FFABAD` (rosa claro)
- **Escala de Cinza**: `#333333`, `#666666`, `#999999`, `#CCCCCC`, `#F2F2F2`, `#FFFFFF`

### Tipografia
- **Fonte**: Inter (sans-serif)
- **Hierarquia**: Display (64px), Headings (48px-16px), Body (18px-14px)

## 🏗️ Arquitetura

O projeto segue uma arquitetura modular bem estruturada:

```
src/
├── app/                    # Configuração principal da aplicação
├── assets/                 # Recursos estáticos (imagens, estilos)
├── infra/                  # Configurações de infraestrutura
│   └── config/            # Configurações de ambiente
├── modules/               # Módulos da aplicação
│   ├── core/              # Funcionalidades centrais
│   │   ├── components/    # Componentes compartilhados
│   │   ├── hooks/         # Hooks customizados
│   │   ├── providers/     # Context providers
│   │   ├── services/      # Serviços (HTTP, Socket)
│   │   └── types/         # Tipos TypeScript
│   ├── orders/            # Módulo de pedidos
│   │   ├── components/    # Componentes específicos
│   │   ├── hooks/         # Hooks do módulo
│   │   ├── models/        # Modelos de dados
│   │   ├── services/      # Serviços do módulo
│   │   └── types/         # Tipos específicos
│   └── products/          # Módulo de produtos
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 18+)
- Yarn ou npm

### Instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd dashboard
```

2. **Instale as dependências**
```bash
yarn install
# ou
npm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env.local
```

Edite o arquivo `.env.local` e configure:
```env
VITE_APP_BASE_URL=http://localhost:3001
```

4. **Execute o projeto**
```bash
yarn dev
# ou
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

## 📦 Scripts Disponíveis

- `yarn dev` - Executa o servidor de desenvolvimento
- `yarn build` - Gera build de produção
- `yarn preview` - Visualiza o build de produção
- `yarn lint` - Executa o linter
- `yarn format` - Formata o código
- `yarn lint:fix` - Corrige automaticamente problemas de lint

## 🔌 Integração com Backend

O dashboard se conecta com uma API backend através de:

### REST API
- **Base URL**: Configurada via `VITE_APP_BASE_URL`
- **Endpoints**: Gerenciamento de pedidos e produtos
- **Autenticação**: Configuração preparada para implementação

### WebSocket
- **Socket.IO**: Comunicação em tempo real
- **Eventos**: Atualizações automáticas de pedidos
- **Rooms**: Organização por estabelecimento

## 🎯 Funcionalidades Detalhadas

### Board de Pedidos
- **Fila de Espera** 🕒: Pedidos aguardando preparo
- **Em Produção** 👩‍🍳: Pedidos sendo preparados
- **Pronto** ✅: Pedidos finalizados

### Gerenciamento de Status
- Transição automática entre status
- Validação de mudanças de estado
- Feedback visual para ações

### Sistema de Notificações
- Toast notifications para ações
- Confirmações de sucesso/erro
- Posicionamento otimizado (top-right)

## 🔧 Configurações de Desenvolvimento

### Code Quality
- **Biome**: Configurado para linting e formatting
- **TypeScript**: Tipagem rigorosa habilitada
- **Git Hooks**: Validação automática em commits

### Performance
- **Lazy Loading**: Carregamento otimizado de componentes
- **React Query**: Cache inteligente de dados
- **Vite**: Build otimizado e HMR

## 📱 Responsividade

O dashboard é totalmente responsivo e otimizado para:
- 🖥️ Desktop (1200px+)
- 💻 Laptop (768px - 1199px)
- 📱 Tablet (480px - 767px)
- 📱 Mobile (até 479px)

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

Desenvolvido por **Mateus Azevedo**

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!