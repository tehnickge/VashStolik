import "./CostFilter.css"

const CostFilter = (props) => {

    const yearChangeHandler = (event) => {
        props.onChangeYear(event.target.value);
    };

    return(
        <div className="costs-filter">
            <div className="costs-filter__control">
                <label>Выбор по году</label>
                <select onChange={yearChangeHandler} value={props.year}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    )
}

export default CostFilter;