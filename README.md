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

Assets // CSS & IMG
├── css
├── img
components
├── about // Directory 구조 변경 예정
│   ├── Main.vue
│   └── Growth.vue
├── common // 여러 페이지 및 컴포넌트에 사용
│   ├── Header.vue
│   ├── Footer.vue
│   ├── Postit.vue
│   ├── Technology.vue
│   └── Activity.vue
├── contact // Contanct Us
│   ├── ProfilePark.vue
│   ├── ProfileSo.vue
│   └── ContactUs.vue
├── main // Main Page
│   ├── Main.vue
│   ├── FindBig5.vue 
│   ├── Celebee.vue   
│   └── Beamme.vue
pages // Pages
├── about.vue
├── contact.vue
└── index.vue
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

