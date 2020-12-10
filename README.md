# Alcoolmerce

Hey, bem vindo ao backend do frontend que vende cachaça.

## Como Rodar

1. Para o envio de email funcionar é necessário criar uma conta no [mailtrap](https://mailtrap.io/)
   Assim que criar uma conta passe os dados do seu SMTP para o arquivo src/config/mail.js .
   Ou usa o que tem lá, mas vai enviar email para mim.

2. Execute esses comandos do docker-compose e seja feliz.

```bash
  sudo docker-compose up --build
  sudo docker-compose run app npx sequelize-cli db:migrate
  sudo docker-compose run app npx sequelize-cli db:seed:all
```

<hr>

Rotas do [Postman](https://www.getpostman.com/collections/cefc62e8e6d4d7ae40a1) para você testar o backend 😄
