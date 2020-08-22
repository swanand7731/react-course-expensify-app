import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import toJson from 'enzyme-to-json';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should render Expense Form correctly', ()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('should render expense form with data', ()=> {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('should render error for invalid form submission', ()=>{
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit', {
        preventDefault:()=>{}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', ()=>{
    const value = 'New description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target:{value}
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', ()=>{
    const value = 'new note';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("textarea").at(0).simulate("change", {
      target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
});

test('should set amount if valid input', ()=>{
    const value = '34.56';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("input").at(1).simulate("change", {
      target: { value }
    });
    expect(wrapper.state("amount")).toBe(value);
});

test('should not set amount if invalid input', ()=>{
    const value = '34.56ADS';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("input").at(1).simulate("change", {
      target: { value }
    });
    expect(wrapper.state("amount")).toBe('');
});

test('should call onSubmit prop for valid form submission', ()=>{
    const onSubmitspy = jest.fn();
    const wrapper = shallow(
      <ExpenseForm expense={expenses[1]} onSubmit={onSubmitspy} />
    );
    wrapper.find("form").simulate("submit", {
      preventDefault: () => {},
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitspy).toHaveBeenLastCalledWith({
      description: expenses[1].description,
      amount: expenses[1].amount,
      createdAt:expenses[1].createdAt,
      note:expenses[1].note
    });
});

test('should set new date on date change', ()=> {
    const now = moment();
    const wrapper =shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar focus on change', ()=> {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused:true});
    expect(wrapper.state('calendarFocused')).toBe(true);
});