
import { CasaAcogida } from "../component/card_casaacogida";
import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";








const Protectoralogin = () => {
  const { actions, store } = useContext(Context);
  useEffect(() => {
    actions.listaCasaAcogida();


  }, []);
  console.log(store.casaacogida_list)
  return (

    <>
       
      <button type="button" className="btn btn-outline-danger">Registra tu mascota </button>

      <div>
         <div> 
         <button onClick={() => { actions.logout(); navigate("/");}}type="button"className="buttonout"class="btn btn-light bg-light"  > LOGOUT</button>


         </div>
        <div className="cardacogida">
          {store.casaacogida_list.map((organizacion) => {
            return <CasaAcogida key={organizacion.id} organizacion={organizacion} />;
          })}
        </div>






      </div>
    </>
  );
};
export default Protectoralogin;
