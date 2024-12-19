import { Component, inject } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gifs-detail',
  templateUrl: './gifs-detail.component.html',
  styleUrl: './gifs-detail.component.css'
})
export class GifsDetailComponent {


    private gifsService  = inject( GifsService );
    private route = inject(ActivatedRoute);
    gifId: string='';
    gifDetail: any;

    constructor(){
      // this.getGifId();
      this.route.params.subscribe(params => {
        this.gifId = params['id'];
        // Llamar al servicio para obtener los detalles del gif utilizando el ID
        this.getGifId();
      });
    }


    getGifId(){
      this.gifsService.gifsById(this.gifId).subscribe(
        ( res: any )=>{
          this.gifDetail = res.data;
          console.log('GIF Detail:', this.gifDetail);
        },
        ( error )=>{
          console.error("Error fetching GIF detail:", error);
        }
      )
    };
}
