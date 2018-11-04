import getters from './getters'

test('todos returns empty array during startup', () => {
    const state = {
        todos: []
    }
    expect(getters.todos(state).length).toBe(0);
});

test('todos returns a non-empty array after adding new todo', () => {
    const state = {
        todos: [{
            "title": "Create Vue.JS Project",
            "completed": false,
            "id": "2511505930"
        }]
    };
    expect(getters.todos(state).length).not.toBe(0);
})