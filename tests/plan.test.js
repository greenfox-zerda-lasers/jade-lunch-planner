import plan from '../src/reducers/plan'

describe('Plan', () => {
  it('should give back state', () => {
	const state = {};

	const nextState = plan(state, {});

	expect(state).toEqual(nextState)
});

  it('should give state after update plan', () => {
	const state = {};

	const action = {
		type: "UPDATE_PLAN",
    payload: {
      time: "12:00",
      place: "Ordo Tatai Sass",
    }
	};

	const nextState = plan(state, action);

	expect(nextState).toEqual({loading: false, time: "12:00", place: "Ordo Tatai Sass"});
});

  it("should give state after request plan, +loading true", () => {
  const state = {};

  const action = {
    type: "REQUEST_PLAN"
  };

  const nextSate = plan(state, action);

  expect(nextSate).toEqual({loading: true});
});

  it("should give updated state with payload after REQUEST_PLAN_SUCCESS and loading false", () => {
  const state = {};

  const action = {
    type: "REQUEST_PLAN_SUCCESS",
    payload: {
      time: "10:00",
      place: "Ordo Hydra",
    }
  };

  const nextState = plan(state, action);

  expect(nextState).toEqual({loading: false, time:"10:00", place:"Ordo Hydra"});
  });

  it("should give state after REQUEST_PLAN_FAILURE", () => {
  const state = {};

  const action = {
    type: "REQUEST_PLAN_FAILURE",
  };

  const nextState = plan(state, action);

  expect(nextState).toEqual({loading: false});
  });
});
