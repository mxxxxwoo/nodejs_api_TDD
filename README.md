# nodejs_api_TDD
TDD로 nodejs를 이용해서 api서버를 만듭니다.

- api단위 test를 위해 superTest library를 설치합니다.
- index.js의 app.get('/users')를 테스트하기위해 app을 모듈로 exports합니다.
- index.spec.js를 만들어 기본적인 작동 테스트를 해봅니다.
- package.json "scripts"에 test코드를 삽입합니다. 
	"mocha index.spec.js"
