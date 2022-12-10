import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

import "./Expenses.css";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2021");

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
                <ExpenseList item={filteredExpense} />
            </Card>
        </>
    );
};

export default Expenses;
