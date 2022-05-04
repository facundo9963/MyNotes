import React from "react";
import styles from "./LandingPage.module.css"

function LandingPage(props) {


  return ( 
      <div className={styles.container}>

      <div className={styles.info}>
          <h2>LLevá tus notas a cualquier lugar</h2>
          <p>Ingresá y empezá a guardar todas tus notas para no olvidarte de nada. Elegí las más destacadas. Compartí tus notas con tus amigos. Podes hacerlo desde cualquier dispositivo!!</p> 
          <button>Empezar</button>    
      </div>
      </div>

  );
}

export default LandingPage;