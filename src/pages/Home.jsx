import React from 'react'
import './Home.css'
import ma from '../images/ma.webp';
import mb from '../images/mb.jpg';
import mc from '../images/mc.webp';
import md from '../images/md.jpg';
import me from '../images/me.jpg';
import mf from '../images/mf.webp';
import sc from '../images/sc.webp';
import wf from '../images/wf.jpg';
import mrg from '../images/mrg.webp';
import mrh from '../images/mrh.webp';
import mrl from '../images/mrl.webp';
import sa from '../images/sa.jpg';
import sb from '../images/sb.webp';
import sd from '../images/sd.webp';
import se from '../images/se.webp';
import sf from '../images/sf.webp';
import wb from '../images/wb.jpg';
import wc from '../images/wc.jpg';
import wd from '../images/wd.jpg';
import we from '../images/we.webp';
import hoa from '../images/hoa.webp';
import hob from '../images/hob.jpg';
import hoc from '../images/hoc.webp';
import hod from '../images/hod.webp';
import hoe from '../images/hoe.webp'; 
import hof from '../images/hof.webp';
import hog from '../images/hog.webp';
import hoh from '../images/hoh.webp';
import hoi from '../images/hoi.webp';
import hoj from '../images/hoj.webp';
import { CiLocationOn } from "react-icons/ci";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <>
    <Navbar/>
      <div>
             <div class="loc"><CiLocationOn class="sl"/>
                  Select a location to check product availability Add Location
             </div>

          <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={ma} class="d-block w-100"/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={mb} class="d-block w-100"/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={mc} class="d-block w-100"/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={md} class="d-block w-100"/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={me} class="d-block w-100"/>
    </div>
    <div class="carousel-item">
      <img src={mf} class="d-block w-100"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
       <div class="row m-2 p-4 row-cols-lg-5 row-cols-md-3 row-cols-sm-2">
          <div>
            <a href="#smartwatch"><img src={sc} class="him shadow"/></a>
          </div>
           <div>
            <a href="#watch"><img src={wf} class="him shadow"/></a>
          </div>
            <div>
            <a href="#bags"><img src={mrg} class="him shadow"/></a>
          </div>
           <div>
            <a href="#perfume"><img src={mrh} class="him shadow"/></a>
          </div>
          <div>
            <a href="#bags"><img src={mrl} class="him shadow"/></a>
          </div>
      </div>
      <div id="smartwatch">
           <h2><center>SMART WATCH</center></h2>
           <div class="row m-3 row-cols-lg-6 row-cols-md-2 row-cols-sm-2">
            <div class="box">
              <img src={sb}/>
              <span>Fastrack strap</span>
            </div>
             <div class="box">
              <img src={sc}/>
              <span>Fastrack pro10</span>
            </div>
             <div class="box">
              <img src={sd}/>
              <span>Fastrack index2</span>
            </div>
             <div class="box">
              <img src={se}/>
              <span>Fastrack mi</span>
            </div>
             <div class="box">
              <img src={sf}/>
              <span>Fastrack micro</span>
            </div>
           </div>
      </div>
       <div id="watch">
           <h2><center>WATCH</center></h2>
           <div class="row m-3 row-cols-lg-6 row-cols-md-2 row-cols-sm-2">
            <div class="box">
              <img src={wb}/>
              <span>Fastrack strap</span>
            </div>
             <div class="box">
              <img src={wc}/>
              <span>Fastrack strap silver</span>
            </div>
             <div class="box">
              <img src={wd}/>
              <span>Fastrack strap blue</span>
            </div>
             <div class="box">
              <img src={we}/>
              <span>Fastrack strap black</span>
            </div>
             <div class="box">
              <img src={wf}/>
              <span>Fastrack darkred</span>
            </div>
           </div>
      </div>
       <div id="bags">
           <h2><center>BAGS</center></h2>
           <div class="row m-3 row-cols-lg-6 row-cols-md-2 row-cols-sm-2">
            <div class="box">
              <img src={hoa}/>
              <span>Black bag</span>
            </div>
             <div class="box">
              <img src={hob}/>
              <span>monochrome white&black</span>
            </div>
             <div class="box">
              <img src={hoc}/>
              <span>Chain accent sling bag</span>
            </div>
             <div class="box">
              <img src={hod}/>
              <span>Color block laptop tote</span>
            </div>
             <div class="box">
              <img src={hoe}/>
              <span>Fancy college bag</span>
            </div>
           </div>
      </div>
       <div id="perfume">
           <h2><center>PERFUME</center></h2>
           <div class="row m-3 row-cols-lg-6 row-cols-md-2 row-cols-sm-2">
            <div class="box">
              <img src={hof}/>
              <span>lavender perfume</span>
            </div>
             <div class="box">
              <img src={hog}/>
              <span>celeb perfume</span>
            </div>
             <div class="box">
              <img src={hoh}/>
              <span>blue perfume</span>
            </div>
             <div class="box">
              <img src={hoi}/>
              <span>pink perfume</span>
            </div>
             <div class="box">
              <img src={hoj}/>
              <span>green flavour</span>
            </div>
           </div>
      </div>
   





      </div>
      <Footer/>
    </>
  )
}

export default Home