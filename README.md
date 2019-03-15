# Black Ruby Studio Hompage

블랙루비 스튜디오 홈페이지.

## 디자인 작업물

[블랙루비 홈페이지 디자인 ver.1](./docs/design_ver1.md)을 참고해 개발 진행


## 기술 스택

- Framework: Vue.js
- Css: Grid, SCSS
- Js: Eslint, Babel
- Deployment: Jenkins, Nuxt.js, S3, CloudFront, Slack alert


## 구조화 및 도식화

```json
BRS_homepage
ㄴ assets // css 및 img 파일
  ㄴ CSS 
  ㄴ img
ㄴ components // Component 구조
  ㄴ common
    ㄴ header.vue
    ㄴ footer.vue
  ㄴ main
    ㄴ main.vue
    ㄴ findbig5
      ㄴ title.vue
      ㄴ introduce.vue
      ㄴ technology.vue
    ㄴ celebee
      ㄴ title.vue
      ㄴ introduce.vue
      ㄴ technology.vue
    ㄴ beamme
      ㄴ title.vue
      ㄴ introduce.vue
      ㄴ technology.vue
  ㄴ about
    ㄴ main.vue
    ㄴ growth.vue
    ㄴ study.vue
    ㄴ class.vue
    ㄴ weekly.vue
  ㄴ contact
    ㄴ profile1.vue
    ㄴ profile2.vue
    ㄴ contact.vue
ㄴ pages // page 구조
  ㄴ index.vue
  ㄴ about.vue
  ㄴ contact.vue
```

## 배포 방법

TO DO LIST

- [ ] S3 Bucket
- [ ] jenkins github hook
- [ ] jenkins to S3
- [ ] S3 to slack alert
- [ ] 배포 방법 설명

## 마케팅 & 트래킹 툴

- [ ] Google Analytics
- [ ] Google Adwords
- [ ] Facebook pages


## 설치

``` bash

# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

```

