import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
public readonly text='SURVEY'.split('');

public readonly lastIndex= this.text.length -1;
public readonly duration=2;
public readonly delay= (this.duration *.5) /this.lastIndex;
loader=true;
ngOnInit():void{
  setTimeout(() => {
    this.loader=false;
  }, 3000);
}
}



