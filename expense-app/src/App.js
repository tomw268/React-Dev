import ExpenseItem from './components/ExpenseItem';

import Expenses from './components/Expenses';

function App() {
  const expense = [
    {
      id: 'e1',
      title: 'Car Insurace',
      amount: 143.62,
      date: new Date(2021, 2, 28),
    },
    { id: 'e2', title: 'Phone', amount: 75.21, date: new Date(2021, 2, 29) },
    { id: 'e3', title: 'Food', amount: 150, date: new Date(2021, 2, 27) },
    { id: 'e4', title: 'Gas', amount: 30.2, date: new Date(2021, 2, 26) },
  ];
  return (
    <div>
      <h2>Tom's Expense App!!</h2>
      <Expenses item={expense} />
    </div>
  );
}

export default App;
