// import jasmine from 'jasmine';
// import plan from '../src/reducers';
//
//
// const initialState = {
//   place: gen.string,
//   time: '12:40',
//   loading: gen.boolean,
// }
//
// const update = () => [{type: 'UPDATE_PLAN'}, state => ({ })]
// const request = () => [{type: 'REQUEST_PLAN'}, state => state - 1]
// const undefined = () => [{type: {}}, state => state]
//
// const result1 = check(property(
//   [gen.object({
//     state: initialState,
//     actionObj: gen.returnOneOf([inc(), dec(), undef()]
//   )})],
//   ({state, actionObj : [action, expected] }) => counter(state, action) === expected(state)
// }), {times: 200, seed: 500})
//
//
// const { check, property, gen } = testcheck
// const { map, reduce, prop, max, filter, findIndex, propEq } = R
//
// const createAction = (action, property) => ({action, property})
// const propertyFn = reducer => ({state, def: {action, property}}) => property(state, reducer(state, action))
// const run = (reducer, generatedData, options={}) => check(property(generatedData, propertyFn(reducer)), options)
//
// // define initial state shape and action creators
//
// const initialState = gen.notEmpty(gen.array(gen.object({id: gen.posInt, text: gen.string, completed: gen.boolean })))
// const randomizeAddTodo = text => createAction(addTodo(text), (state, nextState) => state.length !== nextState.length)
// const randomizeDeleteTodo = id => createAction(deleteTodo(id), (state, nextState) => findIndex(propEq('id', id))(nextState) === -1)
// const randomizeEditTodo = ({id, text}) => createAction(editTodo(id, text), (state, nextState) => state !== nextState)
// const generateDataDefintion = [gen.object({state: initialState, def:
//   gen.oneOf([
//     gen.map(randomizeAddTodo, gen.string),
//     gen.map(randomizeDeleteTodo, gen.posInt),
//     gen.map(randomizeEditTodo, gen.object({id: gen.posInt, text: gen.notEmpty(gen.string)})),
//   ])})]
//
// console.log(run(todos, generateDataDefintion, {times: 20, seed: 823}))
