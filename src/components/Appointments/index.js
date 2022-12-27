// Write your code here import AppointmentItem from  '../AppointmentItem'

import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import {format} from 'date-fns'
import './index.css'

class Appointments extends Component {
  state = {title: '', date: '', isLiked: false, appointmentsList: []}

  onAddAppointment = event => {
    event.preventDefault()
    const {title, date, isLiked} = this.state

    const newAppointment = {
      id: uuidV4(),
      title,
      date,
      isLiked,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      name: '',
      date: '',
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  render() {
    return (
      <div className="main-container">
        <div className="form-cont">
          <form className="form" onSubmit={this.onAddAppointment}>
            <div>
              <label htmlFor="title">TITLE</label>
              <br />
              <input
                type="text"
                id="title"
                placeholder="TITLE"
                onChange={this.onChangeTitle}
              />
            </div>

            <div>
              <label htmlFor="date">Date</label>
              <br />
              <input type="date" id="date" onChange={this.onChangeDate} />
            </div>
            <div>
              <button type="submit">Add</button>
            </div>
          </form>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>{' '}
          <div className="appointment-cont">
            <h1>Appointments</h1>
            <button type="button" className="stared-btn">
              Stared
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
