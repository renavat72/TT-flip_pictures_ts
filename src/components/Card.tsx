import { useEffect, useState } from "react";

import star from '../img/star.png'

export function Card(data:any) {
    const [rotation, setRotation] = useState<number>(0);
    useEffect(() => {
      setRotation(Number(window.localStorage.getItem(`rotation ${data.data.id}`)));
    }, []);
  
    useEffect(() => {
      if(rotation>0){
        window.localStorage.setItem(`rotation ${data.data.id}`, String(rotation));
      }
      if(rotation>270){
        setRotation(0)
      }
    }, [rotation]);
    
   
    return(
    <div className="Card">
        {data.data.id % 2 ?  <img src={star} alt="img" className="CardStar"/>: null}
      <div> 
         <img src={data.data.download_url} alt="img" style={{transform: `rotate(${rotation}deg)`}} className="CardImg" />
      </div>
      <div className="CardDescription">
        <div>
          <div className="CardTextTitle">Picture</div>
          <div className="CardTextDescripiton">
            {data.data.author}
          </div>
        </div>
          <button className="CardBtn" onClick={()=>setRotation(rotation +90)} >🔄</button>
      </div>
    </div>
    )
}
