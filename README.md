# ATV I - Atlantis

Sistema básico de cadastro de clientes para hotel desenvolvido em TypeScript.

## 📋 Descrição

Este é o primeiro projeto da série Atlantis, um sistema simples de cadastro que demonstra os conceitos básicos de orientação a objetos em TypeScript. O sistema permite cadastrar clientes com suas informações pessoais, endereços, telefones, documentos e dependentes.

## 🚀 Funcionalidades

- **Cadastro de Cliente**: Permite registrar informações básicas do cliente
- **Cadastro de Endereço**: Registra endereço completo do cliente
- **Cadastro de Telefones**: Permite adicionar múltiplos telefones
- **Cadastro de Documentos**: Suporte para diferentes tipos de documentos (CPF, RG, Passaporte)
- **Cadastro de Dependentes**: Permite associar dependentes ao cliente titular
- **Clonagem de Dados**: Dependentes herdam endereço e telefones do titular

## 🛠️ Tecnologias Utilizadas

- **TypeScript** - Linguagem principal
- **Node.js** - Runtime JavaScript
- **ts-node** - Executor TypeScript direto
- **prompt-sync** - Interface de entrada do usuário

## 📦 Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 20 ou superior)
- [npm](https://www.npmjs.com/) (geralmente vem com Node.js)

## 🔧 Instalação

1. **Clone o repositório ou navegue até a pasta do projeto:**
   ```bash
   git clone https://github.com/0thigs/atlantis-1.git
   cd atvi-atlantis
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

## ▶️ Como Executar

Para rodar o projeto, execute o seguinte comando:

```bash
npm start
```

O sistema irá iniciar e solicitará as seguintes informações em sequência:

1. **Dados do Cliente:**
   - Nome
   - Nome social
   - Data de cadastro
   - Data de nascimento

2. **Endereço:**
   - Rua
   - Bairro
   - Cidade
   - Estado
   - País
   - Código postal

3. **Telefone:**
   - DDD
   - Número

4. **Documento:**
   - Data de expedição
   - Número do documento
   - Tipo (CPF, RG, Passaporte)

5. **Dados do Dependente:**
   - Nome social
   - Data de cadastro
   - Data de nascimento
   - Documento (mesmas informações do titular)
```

## 🔄 Fluxo de Execução

1. O sistema solicita dados do cliente titular
2. Coleta informações de endereço
3. Registra telefone(s)
4. Cadastra documento(s)
5. Solicita dados do dependente
6. Clona endereço e telefone do titular para o dependente
7. Exibe o objeto cliente completo no console