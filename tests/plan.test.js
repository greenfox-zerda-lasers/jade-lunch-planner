import plan from '../src/reducers/plan';

describe('Plan', () => {
  it('should give back state', () => {
	const state = {};

	const nextState = plan(state, {});

	expect(state).toEqual(nextState);
});

  it('should give state after update plan', () => {
	const state = {
    loading: false,
    plans: [
      { plan_id: 1,
        time: "12:00",
        place: "Ordo Tatai Sass",
        timezone_offset: -60
      }]
    };

	const action = {
		type: "UPDATE_PLAN",
    payload: {
      event: {
        time: "11:00",
      },
      listKey: 0,
    }
	};

	const nextState = plan(state, action);

	expect(nextState).toEqual({loading: false, plans: [{plan_id: 1, time: "11:00", place: "Ordo Tatai Sass", timezone_offset: -60}]});
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
  const state = {
    loading: false,
    plans: [{
      time: "12:00",
      place: "Ordo ndr",
      plan_id: 1,
      timezone_offset: -60
      }]
  };

  const action = {
    type: "REQUEST_PLAN_SUCCESS",
    payload:
    {
      plans: [{
        time: "12:00",
        place: "Ordo ndr",
        plan_id: 1,
        timezone_offset: -60
      }]
    }
  };

  const nextState = plan(state, action);

  expect(nextState).toEqual({loading: false, plans: [{plan_id: 1, time: "12:00", place: "Ordo ndr", timezone_offset: -60}]});
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
