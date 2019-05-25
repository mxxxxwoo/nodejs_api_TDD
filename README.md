# 학습을 위해 PUSH할때마다 README.MD가 업데이트 됩니다. 
***


### 테스트주도개발(TDD)로 만드는 NodeJS API 서버 코드입니다.

- api단위 test를 위해 superTest library를 설치합니다.
- index.js의 app.get('/users')를 테스트하기위해 app을 모듈로 exports합니다.
- index.spec.js를 만들어 기본적인 작동 테스트를 해봅니다.
- package.json "scripts"에 test코드를 삽입합니다. 
	"mocha index.spec.js"
---
### 첫 API 테스트 만들기

성공시
- 유저 객체를 담은 배열로 응답한다.
- 최대 limit 갯수만큼 응답한다.

실패시
- limit이 숫자형이 아니면 400을 응답한다.
---

### GET /users/:id

Success
- id가 1인 유저 객체를 반환한다.

Error
- id가 숫자가 아닐경우 400으로 응답한다.
- id로 유저를 찾을수 없을경우 404로 응답한다.
---

### DELETE /users/:id

Success
- 204를 응답한다.

Error
- id가 숫자가 아닐경우 400으로 응답한다.
---

### POST /users

Success
- 201 상태코드를 반환한다.
- 생성된 유저 객체를 반환한다.
- 입력한 name을 반환한다.

Error
- name 파라메터 누락시 400을 반환한다.
- name이 중복일 경우 409를 반환한다.
---
