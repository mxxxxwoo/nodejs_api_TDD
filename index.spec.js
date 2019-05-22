const request = require('supertest')
// superTest 모듈
const should = require('should')
// should 모듈

const app = require('./index')
// index.js 모듈

describe('GET /users는', () => {
    describe('성공시', () => {
        it('유저 객체를 담은 배열로 응답함', (done) => {
            request(app)
                .get('/users')
                .end((err, res) => {
                    res.body.should.be.instanceOf(Array)
                    done()
                })
        })
    })
    
})