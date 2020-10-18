import axios from 'axios';
import React,{useState,useEffect} from 'react';
import '../public/css/style.css';


const MovieUpdate = () => {  
    const [daftarMovie, setDaftarMovie] =  useState(null);
    const [input, setInput]  =  useState({title:"",description:"",year:"",duration:"",genre:"",rating:"",image_url:"",id:null});
    
      //untuk menjadikan saling terhubung

    useEffect(()=>{
      if (daftarMovie=== null){
        axios.get("http://backendexample.sanbercloud.com/api/movies")
        .then(res => setDaftarMovie(res.data.map(el =>{ 
          return{
            id: el.id,
            title:el.title,
            description: el.description,
            year: el.year,  
            duration: el.duration,
            genre: el.genre,
            rating: el.rating,
            image_url: el.image_url
          }
        })))
      }
    },[daftarMovie])  
   
    const handleDelete=(event)=>{
      let idDataMovie = parseInt(event.target.value)
      axios.delete(`http://backendexample.sanbercloud.com/api/movies/${idDataMovie}`)
      .then(()=>{
        setDaftarMovie(null)
      })
      
    }

    const handleEdit=(event)=>{
      let idDataMovie = parseInt(event.target.value)
      axios.put(`http://backendexample.sanbercloud.com/api/movies/${idDataMovie}`)
      .then(res=>{
        setInput({title:idDataMovie.title,description:idDataMovie.description,year:idDataMovie.year,duration:idDataMovie.duration,genre:idDataMovie.genre,rating:idDataMovie.rating,image_url:idDataMovie.image_url,id:idDataMovie}) 
      })
      
    }
  
    const handleSubmit=(event)=>{
      // menahan submit
      event.preventDefault()
  
      let title  = input.title
      let description= input.description
      let year= input.year
      let duration= input.duration
      let genre= input.genre
      let rating= input.rating
      let image_url= input.description
            
      if (input.id === null){
        axios.post(`http://backendexample.sanbercloud.com/api/movies`,{title,description,year,duration,genre,rating,image_url})
        .then(res => {
          setDaftarMovie([
            ...daftarMovie,
            {id: res.data.id,
              title,
              description,
              year,
              duration,
              genre,
              rating,
              image_url
            }
          ])
        })
      }else{
        axios.put(`http://backendexample.sanbercloud.com/api/movies/${input.id}`,{title,description,year,duration,genre,rating,image_url})
        .then(()=>{
          let dataMovie = daftarMovie.find(el=>el.id===input.id)
          dataMovie.title = title
          dataMovie.description= description
          dataMovie.year= year
          dataMovie.duration= duration
          dataMovie.genre= genre
          dataMovie.rating= rating
          dataMovie.image_url= image_url
          setDaftarMovie([...daftarMovie])
        })
      }
      setInput({title:"",description:"",year:"",duration:"",genre:"",rating:"",image_url:"",id:null})
    }

    const handleChange = (event)=>{
      let typeOfInput = event.target.name      
      switch (typeOfInput){
        case "title":
        {
          setInput({...input, title: event.target.value});
          break
        }
        case "description":
        {
          setInput({...input, description: event.target.value});
          break
        }
        case "year":
        {
          setInput({...input, year: event.target.value});
            break
        }
        case "duration":
        {
          setInput({...input, duration: event.target.value});
          break
        }
        case "genre":
        {
          setInput({...input, genre: event.target.value});
          break
        }
        case "rating":
        {
          setInput({...input, rating: event.target.value});
          break
        }
        case "image_url":
        {
          setInput({...input, image_url: event.target.value});
          break
        }
      default:
        {break;}
      }
    }
  
    return(
        <>
          <center><h2>Daftar List Movie</h2></center>
          <table className="tabel2">
            <thead>
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Description</th>
                <th>Year</th>
                <th>Duration</th>
                <th>Genre</th>
                <th>Rating</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                {daftarMovie !== null && daftarMovie.map((item,index)=>{
                    return(                    
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>{item.year} </td>
                        <td>{item.duration} </td>
                        <td>{item.genre} </td>
                        <td>{item.rating} </td>
                        <td>
                          <button onClick={handleEdit} value={item.id}>Edit</button>
                          &nbsp;
                          <button onClick={handleDelete} value={item.id}>Delete</button>
                        </td>
                      </tr>
                    );
                  })
                }
                  
                
            </tbody>
          </table>
          {/* Form */}
          <center><h2>Form Movie</h2></center>
          <div style={{width: "50%", margin: "0 auto", display: "block"}}>
            <div style={{border: "1px solid #aaa", padding: "20px"}}>
              <form onSubmit={handleSubmit}>
                <label style={{float: "left"}}>
                  Title:
                </label>
                <input style={{float: "right"}} type="text" required name="title" value={input.title} onChange={handleChange}/>
                <br/>
                <br/>
                <label style={{float: "left"}}>
                  Description:
                </label>
                <input style={{float: "right"}} type="text" required name="description" value={input.description} onChange={handleChange}/>
                <br/>
                <br/>
                <label style={{float: "left"}}>
                  Year:
                </label>
                <input style={{float: "right"}} type="text" required name="year" value={input.year} onChange={handleChange}/>
                <br/>
                <br/>
                <label style={{float: "left"}}>
                  Duration:
                </label>
                <input style={{float: "right"}} type="text" required name="duration" value={input.duration} onChange={handleChange}/>
                <br/>
                <br/>
                <label style={{float: "left"}}>
                  Genre:
                </label>
                <input style={{float: "right"}} type="text" required name="genre" value={input.genre} onChange={handleChange}/>
                <br/>
                <br/>
                <label style={{float: "left"}}>
                  Rating:
                </label>
                <input style={{float: "right"}} type="text" required name="rating" value={input.rating} onChange={handleChange}/>
                <br/>
                <br/>
                <label style={{float: "left"}}>
                  Image URL:
                </label>
                <input style={{float: "right"}} type="longtext" required name="image_url" value={input.image_url} onChange={handleChange}/>
                <br/>
                <br/>
                <div style={{width: "100%", paddingBottom: "20px"}}>
                  <button style={{ float: "right"}}>submit</button>
                </div>
              </form>
            </div>
          </div>
        </>
      )
    }
  




export default MovieUpdate