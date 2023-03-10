import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TvService } from 'src/app/tv.service';


@Component({
  selector: 'app-tv-genre',
  templateUrl: './tv-genre.component.html',
  styleUrls: ['./tv-genre.component.scss']
})
export class TvGenreComponent implements OnInit {

  _tv: any[]=[];
  title: string[]=[];
  public id:any[]=[];

  constructor(
    private tvService: TvService,
    private router: ActivatedRoute

  ) { }

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.title = params['name'];
      this.getTvByGenre(this.id);
    });
  }

  getTvByGenre(id:any) {
    this.tvService.getTVShowByGenre(id).subscribe((res: any) => {
        this._tv = res.results;
    });
  }

}

