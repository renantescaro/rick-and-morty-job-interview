# 🧬 Rick and Morty App

![Next.js](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![GraphQL](https://img.shields.io/badge/GraphQL-E10098?logo=graphql&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)

> 🌐 Projeto desenvolvido para entrevista técnica, utilizando **Next.js + GraphQL + Clean Architecture**.

---

## 🚀 Demonstração

🔗 **Acesse o projeto online:**  
👉 [https://rick-and-morty-job-interview.vercel.app/](https://rick-and-morty-job-interview.vercel.app/)

---

## 🧱 Tecnologias Utilizadas

| Tecnologia | Descrição |
|-------------|------------|
| ⚡ **Next.js 16** | Framework React moderno com SSR e otimizações automáticas |
| ⚛️ **React** | Biblioteca para criação da interface |
| 🧩 **GraphQL + Apollo Client** | Consumo de dados da API pública do Rick and Morty |
| 💅 **Tailwind CSS** | Estilização responsiva e moderna |
| 🧼 **Clean Architecture** | Separação de camadas: domain, infra e presentation |
| 🔹 **TypeScript** | Tipagem estática para segurança e clareza de código |

---

## 🧭 Estrutura de Pastas

```
📦 src/
 ┣ 📂 domain/                → Entidades e contratos
 ┣ 📂 infra/
 ┃ ┗ 📂 graphql/             → Apollo Client e serviços da API
 ┣ 📂 presentation/
 ┃ ┗ 📂 components/          → Componentes reutilizáveis (CharacterCard, Filter, etc)
 ┗ 📜 app/
    ┗ page.tsx               → Página inicial
```

## ⚙️ Como Executar Localmente

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/renantescaro/rick-and-morty-job-interview
cd rick-and-morty-job-interview
```

### 2️⃣ Instalar dependências
```bash
npm install
# ou
yarn install
```

### 3️⃣ Criar o arquivo `.env.local`
```env
NEXT_PUBLIC_GRAPHQL_URL=https://rickandmortyapi.com/graphql
```

### 4️⃣ Rodar o projeto em modo desenvolvimento
```bash
npm run dev
```

### 5️⃣ Acessar
Abra o navegador e entre em:  
👉 **http://localhost:3000**

---

## 🧠 Funcionalidades

✅ Listagem de personagens  
✅ Filtro por nome e status  
✅ Layout responsivo
✅ Consumo via GraphQL  
✅ Padrão de camadas com Clean Architecture  

---

## 👨‍💻 Autor

**Renan Tescaro**
🔗 [LinkedIn](https://www.linkedin.com/in/renan-tescaro/)  
📧 renantescaro@yahoo.com.br  
