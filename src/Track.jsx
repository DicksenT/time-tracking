
import { useEffect, useState } from 'react'
import ellipsis from './images/icon-ellipsis.svg'

function Track(props){
    function count(status){
    const [numUp, setNumUp] = useState(0)
    useEffect(() =>{
        setNumUp(0);
        let duration = 500 / status
        let counter = setInterval(()=>{
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