import plan from '../src/reducers/plan'

describe('Plan', () => {
  it('should give back state', () => {
	const state = {}

	const nextState = plan(state, {})

	expect(state).toEqual(nextState)
  })

  it('should give state after update plan', () => {
	const state = {}

	const action = {
		type: "UPDATE_PLAN"
	}

	const nextState = plan(state, action)

	expect(nextState).toEqual({loading: false})
  })
})
