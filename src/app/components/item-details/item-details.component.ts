import { Component, Input, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  
  @Input() viewMode = false;

  @Input() currentItem: Item = {
    itemText: ''
  };
  message = '';
  id?: number;

  constructor(private listService: ListService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.route.queryParams.subscribe(params => {this.id = params['id']})
      console.log(this.id);
      this.getItem();
    }
  }

  getItem(): void {
    this.listService.get(this.id)
      .subscribe({
        next: (data) => {
          this.currentItem = data;
          console.log(data);
        },
        error: (e) => {
          console.error(e);
        }
      });
  }

  updateItem(): void {
    this.listService.update(this.id, this.currentItem)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => {
          console.error(e);
        }
      });

  }

}
