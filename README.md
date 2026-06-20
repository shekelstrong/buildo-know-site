# Buildo База знаний — Сайт

> **AI-бот для поддержки клиентов и внутренних баз знаний**

Часть экосистемы **Buildo** (https://buildo.ru). MIT licensed. Open source.

![Buildo](https://img.shields.io/badge/Buildo-ecosystem-5B8DEF?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

---

## Что это

Маркетинговый сайт продукта База знаний. Лендинг + SEO блог + кейсы. Buildo.ru зонтик.

**Сценарий использования (Сайт):** Лендинг с примерами, калькулятор, документация

---

## Архитектура

```
Buildo База знаний экосистема
├── shekelstrong/buildo-know-tg          ← этот репо (Telegram-бот)
├── shekelstrong/buildo-know-miniapp    ← Mini App
└── shekelstrong/buildo-know-site        ← Маркетинговый сайт
```

---

## Стек

| Слой | Технология |
|---|---|
| Bot | aiogram 3.x + Redis FSM + Docker |
| Frontend | Next.js 14 + Tailwind + shadcn/ui |
| Backend | FastAPI + LangChain + pgvector + OpenRouter + ЮKassa |
| AI (image) | не используется (embed text only) |
| AI (text) | MiniMax M3 (основной), Kimi K2 (длинные контексты) |
| Deploy | Layero / Vercel (manual deploy by user) |

---

## Монетизация

2990 ₽/мес (5 ботов) / 7990 ₽/мес (безлимит + RAG)

**Целевая аудитория:** SMB, поддержка, продажи, обучение
**Конкуренты (РФ):** Chatbase, Botpress (не в РФ), Carrot Quest, Envybox

---

## Деплой

```bash
cp .env.example .env
# заполни: TELEGRAM_BOT_TOKEN, OPENROUTER_API_KEY, YOOKASSA_*
docker compose up --build
```

Продакшен:
```bash
git push origin main  # GitHub Actions → SSH → VPS → docker compose up -d --build
```

---

## Связанные репо

- [buildo-know-tg](https://github.com/shekelstrong/buildo-know-tg) — этот репо
- [buildo-know-miniapp](https://github.com/shekelstrong/buildo-know-miniapp)
- [buildo-know-site](https://github.com/shekelstrong/buildo-know-site)
- [nemo-team-docs/projects/buildo/know/](https://github.com/shekelstrong/nemo-team-docs/tree/main/projects/buildo/know) — спецификация

---

## License

MIT (c) 2026 Buildo Ecosystem. Inspired by [awesome-generative-ai-apps](https://github.com/Anil-matcha/awesome-generative-ai-apps).