import React from 'react'
import batman from '../assets/batman-card.jpg'
import { TiStarFullOutline } from "react-icons/ti";
import { BsBadgeHd } from "react-icons/bs";
import { ImInfinite } from "react-icons/im";
import { CgScreen } from "react-icons/cg";



const MovieCard = () => {
  return (
  
// Premier niveau - justify-around 
  <div className='bg-[#030303e5] flex flex-col justify-around items-center h-screen w-screen '>
     {/*2eme niveau - justify-between*/}
<div className="flex items-center justify-between gap-x-[9rem]">
         <div className='flex-1 space-y-3 '>
        <span className=' block text-white text-5xl font-bold'>Regardez les meilleurs</span>
        <span className=' block text-white text-5xl font-bold'>films et series en </span>
        <span className=' block text-white text-5xl font-bold'> Streaming</span>
        <button className='bg-[#d02020fb] hover:bg-[#eb7070fb] mt-4 rounded-xl p-3 text-white text-center'> Commencer gratuitement</button>
        </div>
        {/* coté droit affiche film */}
     <div className=' relative flex justify-center   max-w-md '>
        
        <img className='w-72 transition-transform duration-300 group-hover:scale-100' src={batman} alt="batman" />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">

        <div className='grid grid-cols-2 gap-4 ml-3 mb-2 text-white text-md'>
        <p>2022</p> 
     
        <p>8,3</p>
        
        </div >
         <button className='bg-[#d02020fb] hover:bg-[#eb7070fb] rounded-xl px-7 py-2   text-white text-center mb-3'>Regarder</button>
         </div>
         </div>
</div>
    
     {/* partie du dessous - features grid */}
    <div className='grid grid-cols-3 ml-8 gap-8 w-full max-w-6xl mt-12'>
    <div className="flex items-start gap-4">
  <ImInfinite className="text-3xl text-gray-100" />
  <div>
    <h2 className="text-white text-xl font-bold">Accès illimité</h2>
    <span className="text-gray-100">Regardez où vous voulez, quand vous voulez</span>
  </div>
</div>

      
      <div className="flex items-start gap-4">
  <BsBadgeHd className="text-3xl text-gray-100" />
       <div>
        <h2 className='text-white text-xl font-bold'>Qualité HD et 4K</h2>
         <span className='text-gray-100'>Regardez ou vous voulez <br /> quand vous voulez</span>
         </div>
      </div>
      
      <div className="flex items-start gap-4">
  <CgScreen className="text-3xl text-gray-100" />
     <div>
        <h2 className='text-white text-xl font-bold'>Multi ecran</h2>
         <span className='text-gray-100'>Regardez ou vous voulez <br /> quand vous voulez</span>
         </div>
      </div>
    </div>
    </div>

    
    
    
  )
}

export default MovieCard