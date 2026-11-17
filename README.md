# Прототип «Добрый сосед»

Форма заявки с полями для домашнего адреса, описания необходимой помощи и необязательной суммы вклада в рублях. Демо не отправляет и не сохраняет заявки и не принимает оплату.

## Запуск

Для запуска нужны Node.js и npm:

```sh
npm install
npm run dev
```

Название сайта и отображаемая валюта задаются в `.env` с помощью `VITE_SITE_NAME` и `VITE_CURRENCY`. Переменные Vite с префиксом `VITE_` попадают в клиентскую сборку, поэтому не храните в этом файле секреты.

## Деплой на GitHub Pages

Workflow `.github/workflows/deploy.yml` на каждый push в `main` (или вручную через **Actions → Deploy to GitHub Pages → Run workflow**) ставит зависимости (`npm ci`), собирает проект (`npm run build`) и публикует `dist`.

Один раз в настройках репозитория: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

Сайт будет доступен по адресу `https://<user>.github.io/Prototype/` — путь совпадает с `base` в `vite.config.js`. Если репозиторий переименован или публикуется с другим путём, задайте `BASE_PATH` при сборке:

```sh
BASE_PATH=/new-repo-name/ npm run build
```

Node.js в workflow (22) должен совпадать с локальной версией — `package-lock.json` содержит платформенные бинарники `esbuild`/`rollup` из `npm ci`.
