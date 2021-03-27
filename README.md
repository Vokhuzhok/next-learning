This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Описание проекта

Данный проект создан с целью изучения технологии SSR с использованием фрэймворка [Next.js](https://nextjs.org/)

Изучение происходило самостоятельно с использованием документации [Next.js Documentation](https://nextjs.org/docs/getting-started)

а так же иных материалов расположенных в сети интернет.

В проекте реализована отправка данных формы в телеграм бота.

Данный функционал реализован с помощью официальной документации [Telegram bot API](https://tlgrm.ru/docs/bots/api)

#### **ВНИМАНИЕ**

**В данном репозитории отсутствует директива config в которой должен размещаться config.json**

Для корректной работы данного функционала необходимо: 

создать данную директорию в которой разместить config.json следующего содержания

```
{
    "telegram": {
        "token": "TOKEN_TELEGRAM_BOT",
        "chatId": "CHAT_ID"
    }
}
```

Где:

* TOKEN_TELEGRAM_BOT - токен вашего бота
* CHAT_ID - id вашего чата

Подробнее об токене и chatId можно узнать в [Telegram bot API](https://tlgrm.ru/docs/bots/api).

**Проект находится в разработке**