import { Component } from '@angular/core';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  title = 'DisplayList';

  item = {
    'title': '',
    'title_desc': '',
    'timestamp': ''
  
  };
  items = [];
  public onClick() {
    this.items.push({
      title: this.item.title,
      title_desc: this.item.title_desc,
      timestamp: this.item.timestamp,
      strike: false
    });
  }

  public onDelete(item) {
    for (var i = 0; i < this.items.length; i++) {
      if (item.title == this.items[i].title) {
        this.items.splice(i, 1);
        break;
      }
    }
  }

  public onStrike(item) {
    for (var i = 0; i < this.items.length; i++) {
      if (item.title == this.items[i].title) {
        if (this.items[i].strike == false) {
          this.items[i].strike = true;
        } else {
          this.items[i].strike = false;
        }
        break;
      }
    }
  }

}