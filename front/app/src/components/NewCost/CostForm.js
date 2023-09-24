import React, { useState } from 'react'
import "./CostForm.css"

const CostForm = () => {

    // const [name, setName] = useState("");
    // const [amount, setAmount] = useState("");
    // const [date, setDate] = useState("2022-01-01");
    const [userInput, setUserInput] = useState({
        name: '',
        amount: '',
        date: ''
    })

    const nameChangeHandler = (event) => {
        // setName(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     name: event.target.value,
        // })
        setUserInput((previosState) => {
            return {
                ...previosState,
                name: event.target.value
            }
        })
        console.log(userInput.name);
    }

    const amountChangeHandler = (event) => {
        // setUserInput({
        //     ...setUserInput,
        //     amount: event.target.value
        // });
        setUserInput((previosState) => {
            return {
                ...previosState,
                amount: event.target.value
            }
        })
        console.log(userInput.amount);
    }

    const dateChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     date: event.target.value
        // });
        setUserInput((previosState) => {
            return {
                ...previosState,
                date: event.target.value
            }
        })
        console.log(userInput.date);
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