import { Component, inject,  } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private gifsService  = inject( GifsService );
  private router = inject( Router )

  trendingGifs: any[] = [];


  constructor() {
    // Llamamos al método getGifs() directamente en el constructor
    this.getGifs();
  }

  getGifs(){
    this.gifsService.getGifs().subscribe(
      (res: any )=>{
        this.trendingGifs = res.data;
      },
      (error) => {
        console.error('Error al obtener los GIFs:', error);
      }
    );
  }

  redirectToDetail( gifId:string ){
    this.router.navigate(['/detail', gifId]);
      console.log(gifId);
  }


// Metodo para mostrar los gifs buscados
searchGifs(event: any) {
  // Obtenemos el valor del campo de búsqueda desde el evento
 const query = event.target.value;
 if (query && query.trim() !== '') {
   // Realizamos la búsqueda utilizando el servicio GifsService
   this.gifsService.searchGif(query).subscribe(
     // En caso de éxito, asignamos los resultados a trendingGifs
     (response: any) => {
       this.trendingGifs = response.data;
     },
           // En caso de error, mostramos un mensaje de error en la consola
     (error) => {
       console.error("Error searching GIFs:", error);
     }
   );
   // Si el campo de búsqueda está vacío, mostramos los GIFs en tendencia
 } else {
   this.getGifs();
 }
}

}
