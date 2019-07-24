# Symfony 4 / docker starter project

> This is a basic symfony 4 / docker starter project.
> This seed provides all libs / bundles I like to use in a classic web app.

## What's inside

- Uses webpack for assets
  - Each page has its own scss and js file
  - Babel will compile js so you can use latest ES6/9 features
- Includes:
  - [jQuery 3.4](https://jquery.com/)
  - [bootstrap 4](https://getbootstrap.com/)
  - [fontawesome-free icons](https://fontawesome.com/)
  - [toastr](https://github.com/CodeSeven/toastr) for flashBag messages
  - [BazingaJsTranslationBundle](https://github.com/willdurand/BazingaJsTranslationBundle)
  - [friendsofsymfony/jsrouting-bundle](https://github.com/FriendsOfSymfony/FOSJsRoutingBundle)
  - [Security](https://symfony.com/doc/current/security.html)

## Install

> docker-ce and docker-compose are required...

- open a console
- clone this repository
- go inside the appropriate folder
- copy `.env.dist` file to `.env` and edit key values as needed
- copy `application/.env.dist` file to `application/.env` and edit key values as needed
- run `docker-compose up -d`
- run `docker-compose exec web /bin/bash`
- run `make init`
- go to `localhost:8080` and start coding !

## Good to know

- There is a `Makefile` inside application folder that contains a lot of useful commands... read it !
- Every time you want to install some dependencies (npm | composer) do it from inside the container
- Every time you want to launch a symfony command (`php bin/console ....`), do it from outside the container
  - If you do it from inside the container you'll need to change the owner on created files / folder... `chown [-R] <user>:<group> path/to/file/or/folder/`
- Js Translations are loaded via an ajax call ... So you wont be able to use js translations at page loading (but why would we want to do that ?)

## Errors

- Error pages are customized see [here](https://symfony.com/doc/current/controller/error_pages.html)
