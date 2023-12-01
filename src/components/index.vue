<template>
    
    <body>
        <button class="boton-notificacion"  @click="activarNotificaciones">Activar notificaciones para productos nuevos</button>


     <nav class="barra">
        <div class="imagen">
            <img class="imagenh" src="../img/logo.jpg_large" alt="">
        </div>
        <div class="links">
            <a href="Productos.vue" class="like">Audifonos</a>
            
            <a href="" class="like">Bocinas</a>
            
            <a href="" class="like">Computacion</a>
            <a href="" class="like">Iluminacion</a>
            
            <a href="" class="like">Articulos por temporada</a>
        </div>

        <div class="search">
            <img src="../img/buscar.png" alt="">
            <input type="text" placeholder="Busca tus productos" class="">
        </div>
     </nav>
    <section class="Seccion1">
        <div class="Secc1Hijo" >
           <p style="color: aliceblue;">Para solicitar mas informacion en la tienda y de sus productos solicita informacion <a href="" style="color: orange;">aqui</a></p> 
        </div>
        <div>
            <img style="width: 100%; height: 400px;" src="../img/Master.png" alt="">
        </div>
     </section>
        <section style="background-color: #639599; height: 50px;  width: 100%;">

      </section>
      <div style="display: flex; align-items: center; justify-content: space-between; font-size: 30px; padding: 5px;"><p>Articulos de nuevos</p> <a style="font-size: 20px; color: ; text-decoration: none;" href="" >Ver todos ></a>  </div>

<div class="Seccion2">
    <div v-for="producto in productos" :key="producto.id" class="articulo">
      <!-- <img :src="producto.imagenURL" :alt="producto.nombre" /> -->
      <img  src="../img/audifono.jpg" alt="">
      <section class="Informacion">
        <p>{{ producto.nombre }}</p>
        <p>{{ producto.carga }}</p>
        <p>{{ producto.precio }}</p>
      </section>
    </div>
  </div>

<div style="display: flex; align-items: center; justify-content: space-between; font-size: 30px; padding: 5px;"><p>Articulos de Temporada</p> <a style="font-size: 20px; color: ; text-decoration: none;" href="" >Ver todos ></a>  </div>
<section class="Seccion3" >
    
    <div class="articulo"><img  src="../img/audifono.jpg" alt=""><section class="Informacion">
    <p>producto x</p>
    
</section>
    </div>
    <div class="articulo"><img  src="../img/audifono.jpg" alt=""><section class="Informacion">
    <p>producto x</p>
    
</section></div>
    <div class="articulo"><img  src="../img/audifono.jpg" alt=""><section class="Informacion">
    <p>producto x</p>
    
</section></div>
    <div class="articulo"><img       src="../img/audifono.jpg" alt=""><div class="Informacion">
    <p>producto x</p>
    
    </div></div>
</section>




<div style=" padding: 10px; font-size: 30px;">Marcas que manejamos   </div>
<section class="Seccion4" >
    
    <div class="articulo"><img style="" src="../img/marca.jpg" alt=""></div>
    <div class="articulo"><img  src="../img/marca.jpg" alt=""></div>
    <div class="articulo"><img src="../img/marca.jpg" alt=""></div>
    <div class="articulo"><img  src="../img/marca.jpg" alt=""></div>
    <div class="articulo"><img  src="../img/marca.jpg" alt=""></div>
    <div class="articulo"><img  src="../img/marca.jpg" alt=""></div>
        
</section>
<section class="Seccion5">

<div>
    <img style="width: 100%; height: 400px;" src="../img/Master.png" alt="">
</div>
<div class="Secc5Hijo" >
    
    <div class="articulo"><img  src="../img/lolink.png" alt=""></div>
    <div class="articulo"><img  src="../img/lolink.png" alt=""></div>
    
</div>
</section>

<footer class="Seccion6" >
<section class="Links" >
    <a style=" text-decoration: none; color: white;">x</a>
    <a style=" text-decoration: none; color: white;">x</a>
    <a style=" text-decoration: none; color: white;">x</a>
    <a style=" text-decoration: none; color: white;">x</a>
    <a style=" text-decoration: none; color: white;">x</a>
    <a style=" text-decoration: none; color: white;">x</a>
    <a style=" text-decoration: none; color: white;">x</a>
    <a style=" text-decoration: none; color: white;">x</a>
    

</section>
<section class="Links" >
    <a style=" text-decoration: none; color: white;">x</a>
    <a style=" text-decoration: none; color: white;">x</a>
    <a style=" text-decoration: none; color: white;">x</a>
    <a style=" text-decoration: none; color: white;">x</a>
    <a style=" text-decoration: none; color: white;">x</a>
    

</section>

<section class="Links" >
    <a style=" text-decoration: none; color: white;">x</a>
    <a style=" text-decoration: none; color: white;">x</a>
    <a style=" text-decoration: none; color: white;">x</a>
    <a style=" text-decoration: none; color: white;">x</a>
    <a style=" text-decoration: none; color: white;">x</a>
    

</section>
        <section style="height: 200px;">
            <img src="../img/fotter.png" height="150px"  alt="">
        </section>
</footer> 

</body>

</template>

<script>
import Push from 'push.js';
export default {
  
  data() {
    return {
      productos: [] // Inicializamos un array vacío para almacenar los productos
    };
  },
  mounted() {
    this.obtenerProductos(); // Llamamos a la función obtenerProductos al cargar el componente
  },
  methods: {

    activarNotificaciones() {
      console.log("Estas dentro");
      Push.create('¡Hola!', {
      body: 'Esto es una notificación de prueba',
      icon: 'data:image/jpeg;base64,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', // Ruta a tu icono
      timeout: 4000, // Tiempo de duración de la notificación en milisegundos
      onClick: function () {
        // Acción cuando se hace clic en la notificación
        console.log(this);
      },
    });
    },


    obtenerProductos() {
        
      fetch('https://localhost:5001/catalog/GetProducts') // Reemplaza con la URL de tu API
        .then(response => {
          if (!response.ok) {
            throw new Error('Error en la solicitud');
          }
          return response.json();
        })
        .then(data => {
          this.productos = data; // Asignamos los datos obtenidos a la variable 'productos'
        console.log(this.productos);
        
        })
        .catch(error => {
          console.error('Error al obtener los productos:', error);
        });
    }
  }
};
</script>

<style scoped src="../style.css"></style>