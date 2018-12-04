import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete} from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

export interface Usertip {
  name: string;
}

@Component({
  selector: 'app-user-tip',
  templateUrl: './user-tip.component.html',
  styleUrls: ['./user-tip.component.css']
})
export class UserTipComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  usertips: Usertip[] = [
    {name: 'example'},
  ];


  constructor() {
  }

  ngOnInit() {
    this.drag();
  }

  drag() {

    let dragSrcEl = null;

    function handleDragStart(e) {

      this.style.opacity = '0.5';  // this / e.target is the source node.

      dragSrcEl = this;

      e.dataTransfer.effectAllowed = 'move';

      e.dataTransfer.setData('text/html', this.innerHTML);

    }



    function handleDragOver(e) {

      if (e.preventDefault) {

        e.preventDefault(); // Necessary. Allows us to drop.

      }

      e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

      return false;

    }



    function handleDragEnter(e) {

      // this / e.target is the current hover target.

      this.classList.add('over');

    }



    function handleDragLeave(e) {

      this.classList.remove('over');  // this / e.target is previous target element.

    }

    function handleDrop(e) {

      // this / e.target is current target element.

      if (e.stopPropagation) {

        e.stopPropagation(); // stops the browser from redirecting.

      }

      if (dragSrcEl !== this) {

        // Set the source column's HTML to the HTML of the columnwe dropped on.

        dragSrcEl.innerHTML = this.innerHTML;

        this.innerHTML = e.dataTransfer.getData('text/html');

      }



      return false;

    }



    function handleDragEnd(e) {

      // this/e.target is the source node.

      this.style.opacity = '1.0';

      [].forEach.call(cols, function (col) {

        col.classList.remove('over');

      });

    }


    let cols = null;
    cols = document.querySelectorAll('.chip');

    [].forEach.call(cols, function (col) {

      col.addEventListener('dragstart', handleDragStart, false);

      col.addEventListener('dragenter', handleDragEnter, false);

      col.addEventListener('dragover', handleDragOver, false);

      col.addEventListener('dragleave', handleDragLeave, false);

      col.addEventListener('drop', handleDrop, false);

      col.addEventListener('dragend', handleDragEnd, false);

    });

  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.usertips.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(usertip: Usertip): void {
    const index = this.usertips.indexOf(usertip);

    if (index >= 0) {
      this.usertips.splice(index, 1);
    }
  }



}
