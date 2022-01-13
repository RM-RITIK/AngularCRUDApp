import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ListService } from 'src/app/services/list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  items?: Item[];
  currentItem: Item = {};
  currentIndex = -1;

  constructor(private listService: ListService, private router: Router) { }

  ngOnInit(): void {
    this.retrieveItems();
  }

  retrieveItems(): void {
    this.listService.getAll()
      .subscribe({
        next: (data) => {
          this.items = data;
          console.log(this.items);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveItems();
    this.currentItem = {};
    this.currentIndex = -1;
  }

  setActiveItem(item: Item, index: number): void {
    this.currentItem = item;
    this.currentIndex = index;
  }

  updateItem(id: any): void {
    this.router.navigate([`update-item`], {queryParams: {id: id}})

  }

}
