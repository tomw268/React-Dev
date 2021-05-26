import ExpenseItem from './components/ExpenseItem';

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
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
