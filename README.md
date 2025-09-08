# Desafio Frontend - Automação de Testes com Cypress

Este projeto é um desafio de automação de testes utilizando **Cypress**, seguindo o padrão **Page Object Model (POM)**, com validação de interações na UI do site [DemoQA](https://demoqa.com).

---

## 🛠 Tecnologias e Ferramentas

* [Node.js](https://nodejs.org/)
* [Cypress](https://www.cypress.io/)
* [Cypress Mochawesome Reporter](https://www.npmjs.com/package/cypress-mochawesome-reporter) para relatórios detalhados
* [Plugin drag-drop](https://github.com/4teamwork/cypress-drag-drop) para testes de arrastar e soltar
* [Faker](https://www.npmjs.com/package/@faker-js/faker) para geração de dados dinâmicos

---

## ⚡ Instalação

1. Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
cd <nome_do_repositorio>
```

2. Instale as dependências:

```bash
npm install
```

---

## 🚀 Executando os Testes

* Abrir o Cypress em modo interativo:

```bash
npx cypress open
```

* Rodar todos os testes em modo headless:

```bash
npx cypress run
```

* Rodar testes específicos:

```bash
npx cypress run --spec "cypress/e2e/<nome_do_arquivo>.cy.js"
```

---

## 📌 Padrão do Projeto

* **Page Object Model (POM)**:

  * Cada página tem sua classe com métodos para interagir com elementos.

* **Comandos customizados**:

  * Todos os comandos do Cypress podem ser extendidos em `cypress/support/commands.js`.

* **Uso de Faker**:

  * Para gerar dados dinâmicos em formulários de teste, evitando dados estáticos.

---


## 📊 Relatórios

* Os relatórios são gerados automaticamente pelo **Mochawesome**.
* Caminho padrão: `cypress/reports/mochawesome.html`.

---