const { TestWatcher } = require('jest');
const Manager = require('../lib/Manager');

test('creates a new manager object', () =>{
    const worker = new Manager('Dave', 1, 'dave@noemail.com', '123')

    expect(worker.name).toBe('Dave')
    expect(worker.id).toEqual(1)
    expect(worker.email).toBe('dave@noemail.com')
    expect(worker.officeNumber).toBe('123')
})

test('returns manager\'s name', () => {
    const worker = new Manager('Dave', 1, 'dave@noemail.com', '123')

    expect(worker.getName()).toBe('Dave');
})

test('returns manager\'s email', () => {
    const worker = new Manager('Dave', 1, 'dave@noemail.com', '123')

    expect(worker.getEmail()).toBe('dave@noemail.com')
})

test('returns employee id', () => {
    const worker = new Manager('Dave', 1, 'dave@noemail.com', '123')

    expect(worker.getId()).toEqual(1);
})

test('returns employee\'s role', () => {
    const worker = new Manager('Dave', 1, 'dave@noemail.com', '123')

    expect(worker.getRole()).toBe('Manager');
})
