
import ellipsis from './images/icon-ellipsis.svg'

function Track(props){
    
    const bgColor = {
        'backgroundColor': props.bgColor
    }

    const interval = {
        'daily': 'day',
        'weekly': 'week',
        'monthly': 'month'
    }

    return(
        <li className="track">
            <div className="top-img-container" style={bgColor}>
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
                        {props.now}hrs
                    </span>
                    <p>
                        This {interval[props.interval]} - {props.last}
                    </p>
                </div>


            </div>
        </li>
    )
}
export default Track