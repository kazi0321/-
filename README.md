# 使い方

## 自分のリポジトリにフォークする
[親リポジトリの](https://github.com/kazi0321/angular)右上のフォークボタンから

## ローカルにクローンする
`git clone https://github.com/~~yourusername~~/angular.git`

## fetchの仕方
リモートリポジトリの追加、初回のみ

`git remote add upstream https://github.com/kazi0321/angular.git`

以下は開発するにあたり、リモートリポジトリとの差分を埋めるために最初に毎回行ってほしい
 
`git fetch upstream master`
 
`git merge upstream/master`

## pullrequest
`ng serve` で確認したのちpullrequestを作成してください。

そのときできるだけ分かりやすくコメントするとかじさんがたすかります。


# KidsProgram

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
