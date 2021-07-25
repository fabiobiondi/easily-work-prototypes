import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'fb-demo-dnd',
  styleUrls: ['./demo-dnd.component.css'],
  template: `
    <div style="width: 300px" cdkDropList
         [cdkDropListData]="groups"
         (cdkDropListDropped)="dropGroup($event)">
      <div cdkDropListGroup class="example-container"
           *ngFor="let group of groups"
           cdkDrag [cdkDragData]="group">
        <h2>{{group.title}}</h2>
        <div cdkDropList class="example-list"
             id={{group.id}}
             [cdkDropListData]="group.items"
             (cdkDropListDropped)="dropItem($event)"
             [cdkDropListConnectedTo]="getConnectedList()">
          <div class="example-box"
               *ngFor="let item of group.items"
               cdkDrag [cdkDragData]="item">
            {{item.name}}
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class DemoDndComponent  {


  groups = [{
    id: 1,
    title: 'Group 1',
    items: [{
      name: 'Item 1 - Group 1'
    },
      {
        name: 'Item 2 - Group 1'
      },
      {
        name: 'Item 3 - Group 1'
      },
      {
        name: 'Item 4 - Group 1'
      }]
  },
    {
      id: 2,
      title: 'Group 2',
      items: [{
        name: 'Item 1 - Group 2'
      },
        {
          name: 'Item 2 - Group 2'
        },
        {
          name: 'Item 3 - Group 2'
        },
        {
          name: 'Item 4 - Group 2'
        }]
    },
    {
      id: 3,
      title: 'Group 3',
      items: [{
        name: 'Item 1 - Group 3'
      },
        {
          name: 'Item 2 - Group 3'
        },
        {
          name: 'Item 3 - Group 3'
        },
        {
          name: 'Item 4 - Group 3'
        }]
    }];

  dropItem(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  getConnectedList(): any[] {
    return this.groups.map(x => `${x.id}`);
  }

  dropGroup(event: CdkDragDrop<any>) {
    moveItemInArray(this.groups, event.previousIndex, event.currentIndex);
  }

}
