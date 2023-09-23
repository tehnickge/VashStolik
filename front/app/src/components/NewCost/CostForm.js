import React, { useState } from 'react'
import "./CostForm.css"

const CostForm = () => {

    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("2022-01-01");

    const nameChangeHandler = (event) => {
        setName(event.target.value);
        console.log(name);
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
        console.log(amount);
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
        console.log(date);
    }

    return(
        <form>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>название</label>
                    <input type="text" onChange={nameChangeHandler}/>
                </div>
                <div className="new-cost__control">
                    <label>сумма</label>
                    <input type="number" min='0.01' step='0.01' max='999999' onChange={amountChangeHandler} />
                </div>
                <div className="new-cost__control">
                    <label>дата</label>
                    <input type="date" min='2019-01-01' step="2024-03-02" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className=".new-cost__actions">
                <button type="submit">Добавить</button>
            </div>
        </form>
    )
}

export default CostForm