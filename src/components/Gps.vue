<template>
     <main>
    <div ref="map" class="map"></div>

    <button @click="aceptar" class="aceptar">
      <span>Aceptar</span>
      <i class="fa fa-check"></i>
    </button>

    <button @click="mylocation" class="miubicacion">
      <span>Mi ubicación actual</span>
      <i class="fa fa-map-marker"></i>
    </button>
  </main>
</template>
 <script src="../js/GpaScript"></script> 

 <style >
 .main {
  position: relative;
}

.map {
  width: 100%;
  height: 400px;
  /* Agrega cualquier otro estilo deseado para el mapa */
}

.aceptar{
  position: absolute;
  bottom: 90%;
  left:90%;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  cursor: pointer;
}
.miubicacion {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  cursor: pointer;
}

 </style>