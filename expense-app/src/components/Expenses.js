import ExpenseItem from './ExpenseItem';

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        title={props.item.title}
        amount={props.item.amount}
        date={props.item.date}
      />
    </div>
  );
}

export default Expenses;
