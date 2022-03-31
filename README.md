# vue-test 프로젝트입니다..
급하게 작성하다보니 많이 부족한 점 양해 부탁드립니다.
마크업부분이나 css 부분이 많이 지저분할 수 있습니다...



## Project Information
- node version : 14.15.4
- vue-cli version : 4.5.15


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

## Project Setting Process

```

### vue create front-home
> Manually select features
> Choose Vue version / Babel & Linter / Formatter
> 2.x
> ESLint + Prettier
> Lint on save
> In dedicated config files
> N

```
### 의존성 설치 
```
npm i sass-loader axios
npm i vue-slider-component

```


### ESLint
```
### .eslintrc.js 수정 (파일 참고)
### vue-cli를 통해 package.json에 devDependencies에 추가되어있음 (추가되어있지 않으면 추가해야함)
```

### 개발 시 문제점
```
1. 급하게 만들다보니 전화번호 하이폰, 문자열 처리 부분을 외부 코드가져다 사용하여 번호 입력시 자동으로 하이폰 처리는 되지만 에러가 발생되고 있고 문자열 X 처리 못하고있습니다...

2. Range Slider 부분 'vue-slider-component' 라는 외부 라이브러리 가져다 썼습니다

3. 추가 정보 선택 시와 미 선택시 전달해야하는 params 값이 달라야하는데 이 부분 아직 따로 작성하진 못했습니다.

4. 컴포넌트 구분을 다 하지는 못하였습니다... (따라서, 코드가 좀 지저분할 수 있따는 점 그리고 sass 도 컴포넌트별로 구분해서 사용하려다가 급하게 작성하다보니 _reset.scss 에서만 작성하였습니다.. 이건 구분해야할 필요가 있습니다)

```

### 개발 해야하는 부분 (2022.04.01 작성)
```
1. vuex 사용 할 예정입니다.

2. api 로직중에서 단순 호출만한 get 방식만 사용하였습니다. post는 작성하지 않았습니다. 만들 예정입니다.

이후 필요한 부분은 좀 더 코드를 작성하면서 확인하겠습니다!

3. 공간 구조 부분 , 평수/월세 선택 부분 컴포넌트 분리 후에 부모 컴포넌트로 데이터 전달하는 로직 작성하지 않았습니다.... (따라서, 전송하더라도 데이터가 전송되지 않을 것입니다... 이 부분 작성 할 예정입니다)

```

