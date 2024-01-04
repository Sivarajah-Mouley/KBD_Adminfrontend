import {React,useState,useEffect} from 'react'
import "./addNotice.css";

function App() {
  const buttonStyle = {
    display: 'block',
    margin: '0 auto',
    fontSize: '10px',
    height: '20px',
    backgroundColor: '#26bfbf',
    color: '#fff',
    padding: '10px',
  
    border: 'none',
  };

 
  const [type, setType] = useState("");
  const [details, setDetails] = useState("");
  const [audiance, setAudiance] = useState("");

  const [users, setUsers] = useState([])
  

  
  
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:5000/api/notice/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: type,
          details: details,
          audiance: audiance,
        }),
      });
      let resJson = await res.json();
      console.log(resJson);
      if (res.status === 200) {
        alert("notice added successfully");
      } else {
        alert("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchData = () => {
    fetch("http://localhost:5000/api/notice")
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
    <div className="text-center mx-auto ">
       <div className='col-10 mx-auto m-2'style={{height:"100px"}}>
      <div className="title_ad p-2 mb-2 col-6 mx-auto">Flash Deals</div>
      </div>
      <form className="form1 col-4 mt-2" onSubmit={handleSubmit}>
        
        <div className="subtitle">Hold hands with happy customer</div>
        <div className="input-container col-10 mx-auto">
          <select
            className="input"
            type="text"
            placeholder=" "
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Coupon">Coupon</option>
            <option value="Discount">Discount</option>
            <option value="Offers">Offers</option>
          </select>
        </div>
        <div className="input-container ic1 col-10 mx-auto">
          <textarea
            class="form-control"
            className="input"
            type= "text"
            placeholder=" "
            onChange={(e) => setDetails(e.target.value)}
            rows="3"
          ></textarea>
          <label  className="placeholder">
            description
          </label>
        </div>
        <div className="input-container col-10 mx-auto">
          <select
            className="input"
            type="text"
            onChange={(e) => setAudiance(e.target.value)}
          >
            <option value="public">public</option>
            <option value="users"> users</option>
          </select>
        </div>

        <button type="text" className="submitbtn">
          Submit
        </button>
      </form>
<div>
      {users.length > 0 && (
    <ul>
      {users.map(user => (
        <div className="box2">
        <div className="box2-header">
         Manage Notices
        </div>
        <div className="box2-body">
          <h5 className="box2-title">{user.type}</h5>
          <p className="box-text text-black margin top- 5px" style={{ fontSize:'15px',fontFamily:'open sans' }}>{user.details}</p>
        <div>
        <button style={buttonStyle}>Delete</button>
        </div>
        </div>
       
      </div>
      ))}
    </ul>
  )}
</div>
    </div>

  );

      }
export default App;
