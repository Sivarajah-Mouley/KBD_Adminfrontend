import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
function ViewSuggestions() {
  const buttonStyle = {
    display: 'block',
    margin: '0 auto',
    fontSize: '20px',
    height: '60px',
    backgroundColor: '#26bfbf',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
  };

  const [suggestions, setSuggestions] = useState([]);
  const [singlesugg,setSinglesugg]=useState();
  const fetchSuggestions = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/suggestions');
      if (response.ok) {
        const data = await response.json();
        setSuggestions(data);
      } else {
        console.error('Failed to fetch suggestions');
      }
    } catch (error) {
      console.error(error);
    }
  };


  const handleDeleteSuggestion = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/suggestions/delete`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        alert('Suggestion deleted successfully');
      
         fetchSuggestions();
      } else {
        alert('Some error occurred');
      }
    } catch (error) {
      console.error(error);
    }
  };
  
 

  // let deleteSuggestions = async (e) => {
  //   try {
  //     let res = await fetch(`http://localhost:5000/api/suggestions/delete/${singlesugg}`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     let resJson = await res.json();
  //     console.log(resJson);
  //     if (res.status === 200) {
  //       alert("deleted succesfully");
  //     } else {
  //       alert("Some error occured");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  useEffect(() => {
    fetchSuggestions();
  }, []);

  return (
    <div className="text-center mx-auto">
      <div className="col-10 mx-auto m-2" style={{ height: '80px' }}>
        <div className="title_ad p-2 mb-2 col-6 mx-auto">User Suggestions</div>
      </div>
      <div>
        {suggestions.length > 0 && (
          <ul>
            {suggestions.map(suggestion => (
              <div key={suggestion.id} className="card col-6 mx-auto" style={{ marginBottom: '30px', height: 'auto' }}>
                <div className="card-body" style={{ marginBottom: '10px', fontFamily: 'open sans', fontSize: '20px' }}>
                  <p className="card-text">{suggestion.suggest}</p>
                  <button onClick={handleDeleteSuggestion} style={buttonStyle}>Delete</button>
                </div>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ViewSuggestions;
