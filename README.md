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

> Of course you need to install docker-ce and docker-compose

- clone this repository
- `docker-compose up -d`
- `docker-compose exec web /bin/bash`
- `chown -R www-data:www-data var/log var/cache`
- `make init`
- go to `localhost:8080` and start coding !

## Useful docker commands

- `docker images` view all images and their size
- `docker-compose config` shows the detail of each service and values from .env file

## Usefull commands

- `php bin/console doctrine:migrations:migrate`
- `composer clear-cache`
- there is a `Makefile` inside application folder that contains a lot of useful commands... read it !

## Good to know

- Every time you want to install some dependencies (npm | composer) do it from inside the container
- Every time you want to launch a symfony command, do it from inside the container
- In fact the only things you want to do outside containers is editing the code and updating project files...
- Js Translations are loaded via an ajax call ... So you wont be able to use js translations at page loading (but why would we want to do that ?)



en partant d'une fresh install il manquait


# app/config/routing.yml 
``ỳaml
_bazinga_jstranslation:     
  resource: "@BazingaJsTranslationBundle/Resources/config/routing/routing.yml"
```
