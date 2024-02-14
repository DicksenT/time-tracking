import profileImg from './images/image-jeremy.png'

function App() {

  const intervals = document.querySelectorAll('.time-interval')

  const classSelect = e =>{
    intervals.forEach((interval)=>{
      interval.classList.remove('active')
    })
    e.target.classList.add('active')
  }

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
              <li key={item} className="time-interval" value={item} onClick={classSelect}>{item[0].toUpperCase() + item.slice(1)}</li>
            ))
          }

        </ul>
      </div>
    </main>
  )
}

export default App
