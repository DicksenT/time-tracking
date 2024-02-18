import { useEffect, useState } from 'react'
import Track from './Track'
import profileImg from './images/image-jeremy.png'

function App() {

  const [interval, setInterval] = useState()
  const [fetchedData, setFetchedData] = useState()
  useEffect(() =>{
    async function getData(){
      try{
      const response = await fetch('./data.json')
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
  },[interval])
  console.log(fetchedData)
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
              <li key={item} className={`time-interval ${interval === item ? 'active' : ''}`} 
                  value={item} 
                  onClick={() => setInterval(item)}>
                    {item[0].toUpperCase() + item.slice(1)}
              </li>
            ))
          }

        </ul>
      </div>
      <ul className="track-lists">
          {
            fetchedData && fetchedData.map((fdt)=>(
              <Track bgColor={fdt.color} title={fdt.title} interval={interval} 
                now={interval === 'daily' ? fdt.timeframes.daily.current :
                    interval === 'weekly' ? fdt.timeframes.weekly.current : 
                    fdt.timeframes.monthly.current}
                last={interval === 'daily' ? fdt.timeframes.daily.previous:
                      interval === 'weekly' ? fdt.timeframes.weekly.previous:
                      fdt.timeframes.monthly.previous}
                />
            ))
          }
      </ul>
    </main>
  )
}

export default App
