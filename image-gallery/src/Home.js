import React, { useState } from "react";
import {Link} from 'react-router-dom'
import {NewAlbumForm} from './NewAlbumForm'
import './Home.css'


export const Home = ({albums}) => {
    
  return <>
    <div className="main" >
    <h4>Gallery App</h4>
    <section>
        <div class="content">
        {albums.map((album) => (
          <Link to={`/${album.id}`}>
            <aside key={album.name}>
              <img src={album.images ? album.images[0].url : ""} alt="album" />
            
              <h3>{album.name}</h3>
            </aside>
          </Link>
        ))}
        </div>
        
      </section>
      <footer>
        <NewAlbumForm />
        <h5>App Created with 💖 By Vrushabh Dhatrak</h5>
      </footer>

    </div>
      
  </>
}
