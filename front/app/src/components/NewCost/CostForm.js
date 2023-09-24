import React, { useState } from 'react'
import "./CostForm.css"

const CostForm = () => {

    const [inputName, setInputName] = useState("");
    const [inputAmount, setInputAmount] = useState("");
    const [inputDate, setInputDate] = useState("2022-01-01");
    // const [userInput, setUserInput] = useState({
    //     name: '',
    //     amount: '',
    //     date: ''
    // })

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
        console.log(inputName);
        // setName(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     name: event.target.value,
        // })
        // setUserInput((previosState) => {
        //     return {
        //         ...previosState,
        //         name: event.target.value
        //     }
        // })
        // console.log(userInput.name);
    };

    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);
        console.log(inputAmount);
        // setUserInput({
        //     ...setUserInput,
        //     amount: event.target.value
        // });
        // setUserInput((previosState) => {
        //     return {
        //         ...previosState,
        //         amount: event.target.value
        //     }
        // })
        // console.log(userInput.amount);
    };

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
        console.log(inputDate);
        // setUserInput({
        //     ...userInput,
        //     date: event.target.value
        // });
        // setUserInput((previosState) => {
        //     return {
        //         ...previosState,
        //         date: event.target.value
        //     }
        // })
        // console.log(userInput.date);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const costData = {
            name: inputName,
            amount: inputAmount,
            date: new Date(inputDate)
        }
        console.log(costData);
        setInputName('');
        setInputAmount('');
        setInputDate('');
    };

    return(
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>название</label>
                    <input type="text" value={inputName} onChange={nameChangeHandler}/>
                </div>
                <div className="new-cost__control">
                    <label>сумма</label>
                    <input type="number" min='0.01' step='0.01' max='999999' value={inputAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-cost__control">
                    <label>дата</label>
                    <input type="date" min='2019-01-01' step="2024-03-02" value={inputDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className=".new-cost__actions">
                <button type="submit">Добавить</button>
            </div>
        </form>
    )
}

export default CostForm