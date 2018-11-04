import mutations from './mutations'

test('Delete todo from list of todos', () => {
    const state = {
        todos: [{
            "title": "Create Vue.JS Project",
            "completed": false,
            "id": "2511505930"
        }]
    };
    const todo = {
        "title": "Create Vue.JS Project",
        "completed": false,
        "id": "2511505930"
    };
    mutations.deleteTodo(state, todo)
    expect(state.todos.includes(todo)).toBeFalsy();
})