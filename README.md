# TS_Setting
- yarn add typescript(yarn global typescript)
- yarn add tsc-watch --dev
- yarn add crypto-js


- tsconfig.json create(TypeScript가 어떻게 JavaScript로 변환되는지 알려주면서 옵션 부여)
- index.ts create(package.json의 include에 컴파일 과정에서 포함할 파일의 배열 지정)

- tsc : ts파일 코드를 컴파일해서 js파일과 함께 js.map파일을 생성해줌
- Cannot find module 'typescript/bin/tsc'에러시 : npm i -D @types/node typescript ts-node 해줄 것