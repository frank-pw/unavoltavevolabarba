# Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Aggiungere una pagina Portfolio con due repository GitHub selezionati.

**Architecture:** Una pagina HTML autonoma riusa `nav.js` e `site-share.js`. Il layout e le copertine vivono nel CSS della pagina; non serve alcuna API.

**Tech Stack:** HTML, CSS e JavaScript già presente nel repository.

## Global Constraints

- Nessuna nuova dipendenza.
- Ordine della navigazione: Home, Blog, Portfolio, Contatti.
- Repository: `frank-pw/deep-cat-blue` e `frank-pw/cordyceps`.

---

### Task 1: Pagina Portfolio e navigazione

**Files:**
- Create: `portfolio.html`
- Modify: `nav.js`
- Test: `tests/portfolio.test.mjs`

**Interfaces:**
- Consumes: navigazione condivisa generata da `nav.js`.
- Produces: pagina `portfolio.html` raggiungibile dalla voce Portfolio.

- [ ] Scrivere un test Node che richieda pagina, link GitHub e ordine della navigazione.
- [ ] Eseguire `node --test tests/portfolio.test.mjs` e verificare il fallimento per pagina mancante.
- [ ] Creare `portfolio.html` e aggiungere Portfolio a `nav.js`.
- [ ] Eseguire `node --test tests/portfolio.test.mjs` e verificare il superamento.
- [ ] Servire il sito localmente e controllare la risposta HTTP di `portfolio.html`.
