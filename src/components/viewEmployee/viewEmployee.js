import {React,useState,useEffect} from 'react'

function ViewEmployee() {
    const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("http://localhost:5000/api/employee")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
        {users.length > 0 && (
        <ul>
          {users.map(user => (
            <div class="card col-10 mx-auto">
            <div class="card-header">
            </div>
            <div class="card-body">
              <h5 class="card-title">{user.firstName}</h5>
              <p class="card-text">{user.email}</p>
              <p class="card-text">{user.phone}</p>

              <a href="#" class="btn btn-primary">update</a>
            </div>
          </div>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ViewEmployee