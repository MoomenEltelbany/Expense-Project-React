import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

import "./Expenses.css";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2022");

    const filterChangedHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpense = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    return (
        <>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangedHandler}
                />
                {filteredExpense.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </Card>
        </>
    );
};

export default Expenses;
