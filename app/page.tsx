export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="px-4 pt-20 pb-16 max-w-5xl mx-auto text-center">
        <div className="text-7xl mb-6">📚</div>
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
          Корпоративная база знаний<br />
          <span className="gradient-text">с помощью AI</span>
        </h1>
        <p className="text-lg text-ink-muted max-w-2xl mx-auto mb-8">
          AI-поиск по всем документам компании. Ответ за 3 секунды. Без дизайнера, без кода, без ожидания.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="btn-primary">Попробовать бесплатно</button>
          <button className="h-12 px-6 rounded-xl font-semibold border border-bg-border hover:bg-bg-surface transition">
            Посмотреть примеры
          </button>
        </div>
        <p className="text-xs text-ink-dim mt-6">Без карты · 5 бесплатных генераций · Результат за 30 секунд</p>
      </section>

      {/* Features */}
      <section className="px-4 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Как это работает</h2>
        <div className="grid sm:grid-cols-3 gap-6">
      <div className="card">
        <div className="text-3xl mb-3">🔌</div>
        <h3 className="text-lg font-semibold mb-2">Подключи источники</h3>
        <p className="text-sm text-ink-muted">Google Drive, Notion, Confluence, Slack, GitHub</p>
      </div>
      <div className="card">
        <div className="text-3xl mb-3">💬</div>
        <h3 className="text-lg font-semibold mb-2">Задай вопрос</h3>
        <p className="text-sm text-ink-muted">AI найдёт ответ во всех подключённых документах</p>
      </div>
      <div className="card">
        <div className="text-3xl mb-3">🔗</div>
        <h3 className="text-lg font-semibold mb-2">Получи ответ с цитатами</h3>
        <p className="text-sm text-ink-muted">Не выдумывает, цитирует источники</p>
      </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="px-4 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Для кого</h2>
        <div className="grid sm:grid-cols-2 gap-4">
      <div className="flex items-start gap-4 p-5 rounded-xl bg-bg-surface border border-bg-border">
        <div className="text-3xl flex-shrink-0">🆕</div>
        <div>
          <h3 className="text-base font-semibold mb-1">Новый сотрудник</h3>
          <p className="text-sm text-ink-muted">Адаптация за 1 день вместо месяца</p>
        </div>
      </div>
      <div className="flex items-start gap-4 p-5 rounded-xl bg-bg-surface border border-bg-border">
        <div className="text-3xl flex-shrink-0">🎧</div>
        <div>
          <h3 className="text-base font-semibold mb-1">Поддержка</h3>
          <p className="text-sm text-ink-muted">Быстрый поиск по тикетам и FAQ</p>
        </div>
      </div>
      <div className="flex items-start gap-4 p-5 rounded-xl bg-bg-surface border border-bg-border">
        <div className="text-3xl flex-shrink-0">📊</div>
        <div>
          <h3 className="text-base font-semibold mb-1">Менеджмент</h3>
          <p className="text-sm text-ink-muted">Отчёты и KPI из любых систем</p>
        </div>
      </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-4 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-3">Тарифы</h2>
        <p className="text-center text-ink-muted mb-12">Без подписок. Платишь один раз — пользуешься.</p>
        <div className="grid sm:grid-cols-3 gap-6">
      <div className="card text-center">
        <h3 className="text-lg font-semibold mb-2">Старт</h3>
        <div className="text-4xl font-bold gradient-text mb-4">4 900 ₽/мес</div>
        <ul className="space-y-2 text-sm text-ink-muted mb-6">
          <li>✓ До 10 сотрудников</li>
          <li>✓ 5 ГБ документов</li>
          <li>✓ Slack/Notion</li>
        </ul>
        <button className="btn-primary w-full">Выбрать</button>
      </div>
      <div className="card text-center">
        <h3 className="text-lg font-semibold mb-2">Про</h3>
        <div className="text-4xl font-bold gradient-text mb-4">14 900 ₽/мес</div>
        <ul className="space-y-2 text-sm text-ink-muted mb-6">
          <li>✓ До 50 сотрудников</li>
          <li>✓ 50 ГБ</li>
          <li>✓ Все источники</li>
          <li>✓ API</li>
        </ul>
        <button className="btn-primary w-full">Выбрать</button>
      </div>
      <div className="card text-center">
        <h3 className="text-lg font-semibold mb-2">Бизнес</h3>
        <div className="text-4xl font-bold gradient-text mb-4">49 000 ₽/мес</div>
        <ul className="space-y-2 text-sm text-ink-muted mb-6">
          <li>✓ Безлимит</li>
          <li>✓ White-label</li>
          <li>✓ On-premise</li>
          <li>✓ SLA</li>
        </ul>
        <button className="btn-primary w-full">Выбрать</button>
      </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Готов попробовать?</h2>
        <p className="text-lg text-ink-muted mb-8">
          5 бесплатных генераций. Без карты. Результат за 30 секунд.
        </p>
        <button className="btn-primary text-lg px-10">Начать бесплатно →</button>
      </section>

      {/* Footer */}
      <footer className="px-4 py-10 border-t border-bg-border text-center text-sm text-ink-dim">
        © 2026 Buildo Know · Часть экосистемы Buildo · <a href="#" className="hover:text-ink-muted">Telegram</a> · <a href="#" className="hover:text-ink-muted">Поддержка</a>
      </footer>
    </main>
  )
}
