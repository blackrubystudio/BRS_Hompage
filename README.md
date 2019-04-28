# Black Ruby Studio Hompage

블랙루비 스튜디오 홈페이지.

## 디자인 작업물

[블랙루비 홈페이지 디자인 ver.1](./docs/design_ver1.md)에서 진행중인 프로젝트 추가 및 디자인 변경의 필요성을 느낌
[블랙루비 홈페이지 디자인 ver.2](./docs/design_ver2.md)을 개발 (현재 홈페이지 디자인)


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
components // 각 컴포넌트
├── about // About Page
│   ├── Main.vue
│   └── Growth.vue
├── common // 공통 컴포넌트
│   ├── Header.vue
│   ├── Footer.vue
│   ├── Postit.vue
│   ├── Technology.vue
│   ├── Activity.vue  
│   └── MenuMobile.vue
├── contact // ContanctUs Page
│   ├── ProfilePark.vue
│   ├── ProfileSo.vue
│   └── ContactUs.vue
├── main // Main Page
│   ├── Main.vue
│   ├── FindBig5.vue 
│   ├── Celebee.vue   
│   └── Beamme.vue
pages // Pages (link)
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

