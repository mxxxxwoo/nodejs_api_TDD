const utils = require('./utils')
// const assert = require('assert')
const should = require('should')

describe('utils.js 모듈의 capitalize() 함수는', () => {
    it('문자열의 첫번째 문자를 대문자로 변환한다.', () => {
        const result = utils.capitialize('hello')
        // assert.equal(result, 'Hello')
        // 노드 문서에는 테스트코드에서 assert 말고 
        // 서드파티 라이브러리를 사용하라는 항목이있음

        result.should.be.equal('Hello')
        // 조금더 가독성이 좋게 읽을수 있다. 
    })
})
