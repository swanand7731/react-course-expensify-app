import filtersReducers from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filtersReducers(undefined, {type:'@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    });

});

test('should set sortBy to amount', () => {
    const state = filtersReducers(undefined, {type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currState = {
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    }
    const action = {
        type:'SORT_BY_DATE'
    }
    const state = filtersReducers(currState, {type:'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});

test("should set text filer", () => {
    const state = filtersReducers(undefined, {type:'SET_TEXT_FILTER', text:'javascript'});
    expect(state.text).toBe('javascript');
});

test("should set start date filer", () => {
    const state = filtersReducers(undefined, {type:'SET_START_DATE', startDate:moment(0).add(2, 'days')});
    expect(state.startDate).toEqual(moment(0).add(2, 'days'));
});

test("should set end date filer", () => {
    const state = filtersReducers(undefined, {type:'SET_END_DATE', endDate:moment(0).subtract(2, 'days')});
    expect(state.endDate).toEqual(moment(0).subtract(2, 'days'));
});
