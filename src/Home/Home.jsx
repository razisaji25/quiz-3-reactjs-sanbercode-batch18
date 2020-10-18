import React from 'react';
import axios from 'axios';
import {useState,useEffect} from 'react';
import '../public/css/style.css';

const Home = ()=> {
  const [daftarMovie, setDaftarMovie] =  useState(null);
    
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

  return (
    <div>
      <header className="kotak2">
        <center><h1>List Movie Now</h1></center>
      </header>
      <body>
        <section>
        <div>
            <div>
                {daftarMovie !== null && daftarMovie.map((item,index)=>{
                    return(   
                        <div className="kotak">
                            <div className="kotaker-1">
                                <h2>{item.title}</h2>
                                <img src={item.image_url} alt="" width="300px"></img>
                            </div>
                            <div className="kotaker-2">
                                <h3><strong>Year: </strong>{item.year}</h3>
                                <h3><strong>Genre: </strong>{item.genre}</h3>
                                <h3><strong>Rating: </strong>{item.rating}</h3>
                                <h3><strong>Description: </strong>{item.description}</h3>
                            </div> 
                        </div>
                    );
                  })
                }
            </div>
        </div>    
        </section>
        <footer>
        <div class="foot">
            <h5>copyright &copy; 2020 by Sanbercode</h5>
        </div>
        </footer>
      </body>
    </div>
  );
}



export default Home;