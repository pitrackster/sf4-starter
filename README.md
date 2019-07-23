# sf4 docker seed

> basic symfony 4 / docker starter project (sf4 project created with the `composer create-project symfony/website-skeleton sf4-ske` command)

- Uses webpack for assets (js compiled through babel and scss)
- Includes:
  - jQuery
  - [bootstrap 4](https://getbootstrap.com/)
  - [fontawesome-free icons](https://fontawesome.com/)
  - [toastr](https://github.com/CodeSeven/toastr) for flashBag messages
  - [BazingaJsTranslationBundle](https://github.com/willdurand/BazingaJsTranslationBundle)
  - [friendsofsymfony/jsrouting-bundle](https://github.com/FriendsOfSymfony/FOSJsRoutingBundle)

## Install

> docker-ce and docker-compose are required...

- clone this repository
- copy `.env.dist` file to `.env` and edit key values as needed
- copy `application/.env.dist` file to `application/.env` and edit key values as needed
- run `docker-compose up -d`
- run `docker-compose exec web /bin/bash`
- run `make init`
- go to `localhost:8080` and start coding !

## Good to know

- there is a `Makefile` inside application folder that contains a lot of useful commands... read it !
- Every time you want to install some dependencies (npm | composer) do it from inside the container
- Every time you want to launch a symfony command, do it from inside the container
- In fact the only things you want to do outside containers is editing the code and updating project files...
- Js Translations are loaded via an ajax call ... So you wont be able to use js translations at page loading (but why would we want to do that ?)
