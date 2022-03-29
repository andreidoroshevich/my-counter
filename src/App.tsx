import React, {ChangeEvent, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./component/Button";
import Count from "./component/Count";
import Header from "./component/Header";


function App() {
    const [minSetValue, setMinSetValue] = useState(0);
    const [maxSetValue, setMaxSetValue] = useState(0);
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);
    const [count, setCount] = useState<number>(minValue)


    useEffect(()=>{
        let countAsString = localStorage.getItem('count')
        if (countAsString) {
            let newValue = JSON.parse(countAsString)
            setCount(newValue)}

            let maxSetValueAsString = localStorage.getItem('maxSetValue')
            if (maxSetValueAsString) {
                let newMaxSetValue = JSON.parse(maxSetValueAsString)
                setMaxSetValue(newMaxSetValue)}

        let minSetValueAsString = localStorage.getItem('minSetValue')
        if (minSetValueAsString) {
            let newMinSetValue = JSON.parse(minSetValueAsString)
            setMinSetValue(newMinSetValue)}

        let minValueAsString = localStorage.getItem('minValue')
        if (minValueAsString) {
            let newMinValue = JSON.parse(minValueAsString)
            setMinValue(newMinValue)}

        let maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString)
            setMaxValue(newMaxValue)}
    },[])

    useEffect(()=>{
        localStorage.setItem('count', JSON.stringify(count))
        localStorage.setItem('maxSetValue', JSON.stringify(maxSetValue))
        localStorage.setItem('minSetValue', JSON.stringify(minSetValue))
        localStorage.setItem('minValue', JSON.stringify(minValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    },[count, maxSetValue, minSetValue, minValue, maxValue])



    const buttonAddHandler = () => {
        setCount(count >= maxValue ? minValue : count + 1)
    }
    const buttonResetHandler = () => {
        setCount(minSetValue)
    }

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxSetValue(+e.currentTarget.value);

    };

    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMinSetValue(+e.currentTarget.value);

    };

const onClickSetSettings = () =>{
    setMaxValue(maxSetValue)
    setCount(minSetValue)
}

    return (
        <div className="App">

            <div className={'setting'}>
                <Header className={((minSetValue >= maxSetValue) || (minSetValue < 0)) && ((minSetValue !==0) && (maxSetValue !==0))  ? 'red' : ''} name={((minSetValue >= maxSetValue) || (minSetValue < 0)) && ((minSetValue !==0) && (maxSetValue !==0)) ?  "Incorrect Value" : "Set Min/Max count Value"}/>

                <div className={'valueItem'}><span>maxValue: </span><input className={((minSetValue >= maxSetValue) || (minSetValue < 0)) && ((minSetValue !==0) && (maxSetValue !==0))  ? 'red' : ''} type={"number"}
                                                   value={maxSetValue}
                                                   onChange={onChangeMaxValueHandler}/>
                </div>

                <div className={'valueItem'}><span>minValue: </span>
                    <input className={((minSetValue >= maxSetValue) || (minSetValue < 0)) && ((minSetValue !==0) && (maxSetValue !==0))  ? 'red' : ''} type={"number"}
                           value={minSetValue}
                           onChange={onChangeMinValueHandler}/>
                </div>

                <Button className={"setButton btn_add"} disabled={(minSetValue >= maxSetValue) || (minSetValue < 0)}  name={'SET'} callBack={onClickSetSettings}/>
            </div>
            <div className={'count'}>
                <Header className={(count === maxValue) && (maxValue !==0)  ? 'red' : ''} name={(count !== maxValue) || (count === 0) ? "Simple React Counter" : "Maximum value reached"}/>
                <Count className={(count === maxValue) && (maxValue !==0)  ? 'max-counter' : 'counter'} count={count}/>
                <Button className={count !== minValue ? 'btn_reset' : ''} callBack={buttonResetHandler} disabled={(count === minValue) || (count === minSetValue) ? true : false} name={'Reset'}/>
                <Button className={count < maxValue ? 'btn_add' : ''} disabled={count === maxValue} callBack={buttonAddHandler} name={'Increment'}/>

            </div>
        </div>
    );
}

export default App;
