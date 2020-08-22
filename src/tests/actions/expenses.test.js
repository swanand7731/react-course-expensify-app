import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', ()=> {
    const action = removeExpense({ id: '123' });
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123'
    });
});

test('Should setup edit expense action object', () => {
    const action = editExpense("123abc", {note: "Note 1"});

    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc',
        updates:{ note: "Note 1" }
    });
});

test('Should setup add expense action object with provided values', ()=>{
    const expenseData = {
        description:'Rent',
        amount:45600,
        createdAt:1000,
        note:'rent this month'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id:expect.any(String)
        }
    })
});

test('Should setup add expense action object with default values', ()=>{
    const expenseData = {
        amount:0,
        createdAt:0,
        description:'',
        note:''
    };
    const action = addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id:expect.any(String)
        }
    });
});

