import React from 'react' 
import './TicTacToe.css'
import circleImg from '../Assets/circle.png'
import crossImg from '../Assets/cross.png'
import {useState} from 'react'
import {useRef} from 'react'

let data = ["", "", "", "", "", "", "", "", "",]

const TicTacToe = () => {

    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let isDraw = false;
    let titleRef = useRef(null);
    let square1 = useRef(null);
    let square2 = useRef(null);
    let square3 = useRef(null);
    let square4 = useRef(null);
    let square5 = useRef(null);
    let square6 = useRef(null);
    let square7 = useRef(null);
    let square8 = useRef(null);
    let square9 = useRef(null);

    let square_array = [square1, square2, square3, square4, square5, square6, square7, square8, square9];

    const toggle = (e, num) => {
        if (lock) {
            return 0;
        }

        if (data[num] !== "") { 
            return; 
        }

        if(count %2===0){
            e.target.innerHTML = `<img src='${crossImg}'>`;
            if(data[num] === "" ){
                data[num] = "x";
                setCount(++count);
            }
        }
        else{
            e.target.innerHTML = `<img src='${circleImg}'>`;
            if(data[num] === "" ){
                data[num] = "o";
                setCount(++count);
            }
        }
        checkWin();
    }

    const checkWin = () =>{
        if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
            win(data[2]);
        }
        else if (data[3]===data[4] && data[4]===data[5] && data[5]!==""){
            win(data[5]);
        }
        else if (data[6]===data[7] && data[7]===data[8] && data[8]!==""){
            win(data[8]);
        }
        else if (data[0]===data[3] && data[3]===data[6] && data[6]!==""){
            win(data[6]);
        }
        else if (data[1]===data[4] && data[4]===data[7] && data[7]!==""){
            win(data[7]);
        }
        else if (data[2]===data[5] && data[5]===data[8] && data[8]!==""){
            win(data[8]);
        }
        else if (data[0]===data[4] && data[4]===data[8] && data[8]!==""){
            win(data[8]);
        }
        else if (data[0]===data[1] && data[1]===data[2] && data[2]!==""){
            win(data[2]);
        }
        else if (data[2]===data[4] && data[4]===data[6] && data[6]!==""){
            win(data[6]);
        }
        else if (!data.includes("")) {
            isDraw = true;
            setLock(true);
            titleRef.current.innerHTML = 'It\'s a Draw!';
        }
            
    }

    const win = (winner) => {
        setLock(true);
        if(winner==="x"){
            titleRef.current.innerHTML = `Cross Wins!`;
        }
        else{
            titleRef.current.innerHTML = `Circle Wins!`;
        }
    }

    const reset = () => {
        setLock(false);
        data = ["", "", "", "", "", "", "", "", "",];
        titleRef.current.innerHTML = 'Tic Tac Toe'
        square_array.map((e)=>{
            e.current.innerHTML = " ";
        })
    }

    return (
        <div className='container'>
            <h1 className='title' ref={titleRef}>Tic Tac Toe</h1>
            <div className="board">
                <div className="row1">
                    <div className="squares" ref={square1} onClick={(e) => { toggle(e, 0) } }></div>
                    <div className="squares" ref={square2} onClick={(e) => { toggle(e, 1) } }></div>
                    <div className="squares" ref={square3} onClick={(e) => { toggle(e, 2) } }></div>
                </div>
                <div className="row2">
                    <div className="squares" ref={square4} onClick={(e) => { toggle(e, 3) } }></div>
                    <div className="squares" ref={square5} onClick={(e) => { toggle(e, 4) } }></div>
                    <div className="squares" ref={square6} onClick={(e) => { toggle(e, 5) } }></div>
                </div>
                <div className="row3">
                    <div className="squares" ref={square7} onClick={(e) => { toggle(e, 6) } }></div>
                    <div className="squares" ref={square8} onClick={(e) => { toggle(e, 7) } }></div>
                    <div className="squares" ref={square9} onClick={(e) => { toggle(e, 8) } }></div>
                </div>
            </div>
            <button className="reset" onClick={()=>(reset())}>Reset</button>
        </div>
    )
}

export default TicTacToe