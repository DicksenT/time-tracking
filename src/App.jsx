import { useEffect, useState } from 'react'
import Track from './Track'
import profileImg from './images/image-jeremy.png'

function App() {
  //interval state
  const [interval, setInterval] = useState()
  //fetchedData state to store fetched data in useEffect
  const [fetchedData, setFetchedData] = useState()
  useEffect(() =>{
    async function getData(){
      try{
        const response = await fetch('./public/data.json')
        if(!response.ok){
          console.log(response.status)
          return
        }
        const data = await response.json()
        setFetchedData(data)
      }
      catch(error){
        console.error(error)
      }
    }
    getData()
  },[])
  return(
    <main>
      <div className="profile">
        <div className="details">
          <div className="img-container">
            <img className="profile-Img" src={profileImg} alt="" />
            </div>
          <div className="detail">
            <p className="for">Report for</p>
            <p className="name">Jeremy Robson</p>
          </div>
        </div>
        <ul className="time-periods">
          {
            ['daily', 'weekly', 'monthly'].map((item) =>(
              //add 'active' class only to clicked list if the current interval is same as the value
              <li key={item} className={`time-interval ${interval === item ? 'active' : ''}`} 
                  value={item}
                  //add click function to set interval after it clicked
                  onClick={() => setInterval(item)}>
                    {item[0].toUpperCase() + item.slice(1)}
              </li>
            ))
          }

        </ul>
      </div>
      <ul className="track-lists">
          {
            //only map the fetchedData after it finished fetch || fetchedData is not empty
            //because useEffect or fetching need some time that can cause fetchedData to be empty or undefined
            fetchedData && fetchedData.map((fdt)=>(
              <Track bgColor={fdt.color} title={fdt.title} interval={interval} 
              //only give props.now that are the same as interval
              //useful for show multiple type of data ex.(daily, weekly or monthly)
                now={interval === 'daily' ? fdt.timeframes.daily.current :
                    interval === 'weekly' ? fdt.timeframes.weekly.current : 
                    interval === 'monthly'? fdt.timeframes.monthly.current:
                    0}
                last={interval === 'daily' ? fdt.timeframes.daily.previous:
                      interval === 'weekly' ? fdt.timeframes.weekly.previous:
                      interval === 'monthly'? fdt.timeframes.monthly.previous:
                      0}
                img={fdt.img}
                key={fdt.title}
                />
            ))
          }
      </ul>
    </main>
  )
}

export default App
