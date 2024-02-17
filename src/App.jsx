import { useState } from 'react'
import Track from './Track'
import profileImg from './images/image-jeremy.png'

function App() {

  const [interval, setInterval] = useState()

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
          {
            async function getData(){
              try{
              const response = await fetch('./data.json')
              const data = await response.json()
              console.log(data)
              }
              catch(error){
                console.error(error)
              }
            }
          }
        </ul>
      </div>
      <ul className="track-lists">
        <Track bgColor='hsl(15, 100%, 70%)' title='work' now={32} interval='week' last={36}/>
      </ul>
    </main>
  )
}

export default App
