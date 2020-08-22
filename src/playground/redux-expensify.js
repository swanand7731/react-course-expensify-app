






const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 100 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Mobile bill", amount: 100 })
);
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 300 }));
// store.dispatch(setTextFilter('Rent'));
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
store.dispatch(setStartDate());
store.dispatch(setTextFilter("rent"));
