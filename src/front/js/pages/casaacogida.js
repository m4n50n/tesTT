
import React from "react";
import Maps from "../component/maps";
import Cardperros from "../component/card_pet";






  const CasaAcogida = () => {
  return( 
  <>
  <Cardperros/>
  
  <Maps location={location} zoom={18} />
  </>
 

  )
  
};




export default CasaAcogida;
