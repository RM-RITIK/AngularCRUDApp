import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  item: Item = {
    itemText: '',
  };
  submitted= false;

  constructor(private listService: ListService) {}

  ngOnInit(): void {
  }

  saveItem():void {
    const data = {
      itemText: this.item.itemText
    };
    this.listService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true
        },
        error: (e) => console.error(e)
      });
  }

  newItem():void {
    this.submitted = false;
    this.item = {
      itemText: '',
    }
  }

}
