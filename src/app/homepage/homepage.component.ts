import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { createThis } from 'typescript';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'ex12-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  prop!: string[];
  propNum = 0;
  propKeys!: string;
  ob$!: Observable<Object>;
  constructor(private getDadaService: GetDataService) {}

  ngOnInit(): void {
    this.getDadaService.getData().subscribe((data) => {
      this.prop = Object.keys(data);
      this.propNum = this.prop.length;
    });
  }
}
