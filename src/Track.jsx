
import { useEffect, useState } from 'react'
import ellipsis from './images/icon-ellipsis.svg'

function Track(props){
    //create count function to create changing content(0 to value)
    function count(status){
        //initial useState
        const [numUp, setNumUp] = useState(0)
        //we use useEffect because we want this to keep running even after the component is mounted
        useEffect(() =>{
            //reset numUp to 0 because we want to reset the count everytime status or depedencies changed
            setNumUp(0);
            let duration = 500 / status
            let counter = setInterval(()=>{
                //we using functional update because if not, the initial numUp we pass to setInterval will not be changed
                //that can cause of on nontstop running
                //ex(we pass numUp that is 0 to setInterval, even the content change but the initial value of
                //num up will stay on 0)
                setNumUp(prevNumUp => {
                    if (prevNumUp < status) {
                    return prevNumUp + 1;
                    } else {
                    clearInterval(counter);
                    return prevNumUp;
                    }
                });
              
            },duration)
            return ()=> {clearInterval(counter)}        
        },[status])
        //we return HTML component because we want to put it in page
        return <span>{numUp}</span>
    }

    const bgColor = {
        'backgroundColor': props.bgColor
    }

    const interval = {
        'daily': 'day',
        'weekly': 'week',
        'monthly': 'month'
        
    }

    return(
        <li className="track" style={bgColor}>
            <div className="top-img-container" >
                <img src={props.img} alt="" />
            </div>
            <div className="info">
                <div className="headline">
                    <p className="title">
                        {props.title}
                    </p>
                    <div className="ellipsis-container">
                        <img src={ellipsis} alt="" />
                    </div>
                </div>
                <div className="time">
                    <span className="now">
                        {count(props.now)}hrs
                    </span>
                    <p>
                        this {interval[props.interval]} - {count(props.last)}hrs
                    </p>
                </div>
            </div>
        </li>
    )

}

export default Track