const { TestWatcher } = require('jest');
const Intern = require('../lib/Intern');

test('creates a new intern object', () =>{
    const worker = new Intern('Dave', 1, 'dave@noemail.com', 'OSU')

    expect(worker.name).toBe('Dave')
    expect(worker.id).toEqual(1)
    expect(worker.email).toBe('dave@noemail.com')
    expect(worker.school).toBe('OSU')
})

test('returns interns\'s name', () => {
    const worker = new Intern('Dave', 1, 'dave@noemail.com', 'OSU')

    expect(worker.getName()).toBe('Dave');
})

test('returns interns\'s email', () => {
    const worker = new Intern('Dave', 1, 'dave@noemail.com', 'OSU')

    expect(worker.getEmail()).toBe('dave@noemail.com')
})

test('returns employee id', () => {
    const worker = new Intern('Dave', 1, 'dave@noemail.com', 'OSU')

    expect(worker.getId()).toEqual(1);
})

test('returns employee\'s role', () => {
    const worker = new Intern('Dave', 1, 'dave@noemail.com', 'OSU')

    expect(worker.getRole()).toBe('Intern');
})

test('returns intern\'s school', () => {
    const worker = new Intern('Dave', 1, 'dave@noemail.com', 'OSU')

    expect(worker.getSchool()).toBe('OSU')
})