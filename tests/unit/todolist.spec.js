import { createLocalVue, mount} from '@vue/test-utils'
import TodoList from '@/components/TodoList';
import Vuex from 'vuex';
import ElementUI from 'element-ui';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(ElementUI);

describe('TodoList.vue', () => {
    let actions;
    let store;
    let getters;
    let state;
    let wrapper;

    // add this before each
    beforeEach(() => {
        state = {
            todos: []
        };
        actions = {
            loadTodos: jest.fn(),
            addTodo: jest.fn(),
            deleteTodo: jest.fn(),
            updateTodo: jest.fn(),
            clearNewTodo: jest.fn(),
        };
        getters = {
            todos: () => [],
        };
        store = new Vuex.Store({
                    state,
                    actions,
                    getters
                });

        wrapper = mount(TodoList, {
            localVue,
            store
        });
    });


    test('renders a todoList vue instance', () => {
        expect(wrapper.isVueInstance()).toBe(true);
    });

    test('Add todo button should be disabled for empty input', () => {
        wrapper.newTodo = 'Create Vue.js project';

        // simulate click event
        const button = wrapper.find('button');
        const input = wrapper.find('input');

        expect(button.attributes().disabled).toBeTruthy();

    })

    test('calls store action "addTodo" and "loadTodos" when button is clicked', () => {
        // simulate click event
        const button = wrapper.find('button');
        const input = wrapper.find('input');
        button.element.disabled = false;

        button.trigger('click');
        expect(actions.addTodo).toHaveBeenCalled();
        expect(actions.loadTodos).toHaveBeenCalled();

    })

})
