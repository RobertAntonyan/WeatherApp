import React from 'react'
import '../Wheather/Wheather.css'
import dayImages from '../../Images/index'
import nightImages from '../../Images/nightImages'
function Wheather(props) {
 

        const months = ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        const month = months.find((el, idx) => {
            if(idx === props.month){
                return el
            }
            return
        })


    return (
        <div className='wheather'>
            {props.city &&
            <div className="widget">
                <div className="weatherIcon">
                {
                            props.is_day ? <img className='icon' src={dayImages[props.icon]} alt='icon' />  : 
                            <img className='icon' src={nightImages[props.icon]} alt='icon' />
                }
                
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{props.temp_c}&deg;</span>
                        <span className='wind'>Wind speed is {props.wind} mph</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">
                            {
                            props.is_day ? "Day" : "Night"
                            }
                            </div>
                        <div className="place1">{props.country}</div>
                        <div className="place">{props.city}</div>
                    </div>
                </div>
                <div className="date">
                    {
                        props.is_day ? props.day : props.night
                    }
                    {/* {
                        props.date
                    } */}
                </div>
            </div>
            }
            <p className='error'>{props.error}</p>
        </div>
    )
}

export default Wheather