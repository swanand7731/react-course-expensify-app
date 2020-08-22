import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import Expenses from '../fixtures/expenses';
import toJson from 'enzyme-to-json';

test('should render ExpenseList with Expenses', ()=> {
    const wrapper = shallow(<ExpenseList expenses={Expenses} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('should render ExpenseList with empty message', ()=>{
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});
