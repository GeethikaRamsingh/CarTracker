import { Pipe, PipeTransform } from '@angular/core';

//@Pipe({
  //name: 'epocttotime'
//})
//export class EpocttotimePipe implements PipeTransform {

  //transform(value: any, args?: any): any {
    //return null;
  //}

//}
@Pipe({
   name: 'epocttotime'
})
export class EpocttotimePipe implements PipeTransform {

  transform(epoch: number): any {
     return new Date(epoch * 1000);
  }

}