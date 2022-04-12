const { TestWatcher } = require('jest');
const Engineer = require('../lib/Engineer');

test('creates a new enginner object', () =>{
    const worker = new Engineer('Dave', 1, 'dave@noemail.com', 'davegithub')

    expect(worker.name).toBe('Dave')
    expect(worker.id).toEqual(1)
    expect(worker.email).toBe('dave@noemail.com')
    expect(worker.github).toBe('davegithub')
})

test('returns engineer\'s name', () => {
    const worker = new Engineer('Dave', 1, 'dave@noemail.com', 'davegithub')

    expect(worker.getName()).toBe('Dave');
})

test('returns engineer\'s email', () => {
    const worker = new Engineer('Dave', 1, 'dave@noemail.com', 'davegithub')

    expect(worker.getEmail()).toBe('dave@noemail.com')
})

test('returns employee id', () => {
    const worker = new Engineer('Dave', 1, 'dave@noemail.com', 'davegithub')

    expect(worker.getId()).toEqual(1);
})

test('returns engineer\'s role', () => {
    const worker = new Engineer('Dave', 1, 'dave@noemail.com', 'davegithub')

    expect(worker.getRole()).toBe('Engineer');
})

test('returns engineer\'s role', () => {
    const worker = new Engineer('Dave', 1, 'dave@noemail.com', 'davegithub')

    expect(worker.getGithub()).toBe('davegithub');
})