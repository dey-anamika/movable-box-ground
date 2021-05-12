import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Movable Boxes Field';
  container = [];
  selectedEle: any;
  keyValue = 'arrow'
  eleTop = 10;
  eleLeft = 10;
  count = 0;

  newBlock() {
    this.count++;
    console.log('new block');
    this.container.push({
      id: this.count,
      index: this.count
    });
  }

  changeValue(event: any) {
    this.keyValue = event.target.value;
  }

  keydownFunction(event: any) {
    console.log('pressed', event);
    this.selectedEle = event.srcElement;
    console.log('selectedEle', this.selectedEle);
    this.eleTop = parseInt(this.selectedEle.style.top.split('px')) ? parseInt(this.selectedEle.style.top.split('px')) : 0;
    this.eleLeft = parseInt(this.selectedEle.style.left.split('px')) ? parseInt(this.selectedEle.style.left.split('px')) : 0;
    console.log("top", this.eleTop);
    console.log('left', this.eleLeft);

    if ((this.keyValue == 'arrow' && event.keyCode == 40) || (this.keyValue == "wasd" && event.keyCode == 83)) { //For down
      this.eleTop += 10;
      if (this.eleTop > 500)
        this.eleTop = 500;
      this.selectedEle.style.top = this.eleTop + 'px';
    } else if ((this.keyValue == 'arrow' && event.keyCode == 38) || (this.keyValue == "wasd" && event.keyCode == 87)) { //for Up
      this.eleTop -= 10;
      if (this.eleTop < 0)
        this.eleTop = 0
      this.selectedEle.style.top = this.eleTop + 'px';
    } else if ((this.keyValue == 'arrow' && event.keyCode == 37) || (this.keyValue == "wasd" && event.keyCode == 65)) { //for right
      this.eleLeft -= 10;
      if (this.eleLeft < 0)
        this.eleLeft = 0
      this.selectedEle.style.left = this.eleLeft + 'px';
    } else if ((this.keyValue == 'arrow' && event.keyCode == 39) || (this.keyValue == "wasd" && event.keyCode == 68)) { //for left
      this.eleLeft += 10;
      if (this.eleLeft > 1400)
        this.eleLeft = 1400
      this.selectedEle.style.left = this.eleLeft + 'px';
    } else if (event.keyCode == 46) { // for delete
      var index = this.selectedEle.id - 1;
      console.log(index);

      this.container.splice(index, 1);
      console.log(this.container);

    }
  }
}
