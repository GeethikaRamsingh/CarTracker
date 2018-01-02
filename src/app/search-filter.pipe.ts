import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(items: any[], filterQuery: any): any[] {
if(!filterQuery) return items;
    return items.filter(item =>{
      for (let key in item ) {
        if((""+item[key]).includes(filterQuery)){
          return true;
        }
      }
      return false;
    });
  }
}