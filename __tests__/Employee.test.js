const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee');

test('creates a new employee object', () =>{
    const worker = new Employee('Dave', 1, 'dave@noemail.com')

    expect(worker.name).toBe('Dave')
    expect(worker.id).toEqual(1)
    expect(worker.email).toBe('dave@noemail.com')
})

test('returns employee name', () => {
    const worker = new Employee('Dave', 1, 'dave@noemail.com')

    expect(worker.getName()).toBe('Dave');
})

test('returns employee email', () => {
    const worker = new Employee('Dave', 1, 'dave@noemail.com')

    expect(worker.getEmail()).toBe('dave@noemail.com')
})

test('returns employee id', () => {
    const worker = new Employee('Dave', 1, 'dave@noemail.com')

    expect(worker.getId()).toEqual(1);
})

test('returns employees role', () => {
    const worker = new Employee('Dave', 1, 'dave@noemail.com')

    expect(worker.getRole()).toBe('Employee');
})