/* eslint-disable eslint-comments/disable-enable-pair */

import { Utils } from './albumUtils';

export class albumModel {
  key:any
  images:any

  constructor(key:string) {
    this.key = key;
    this.images = Utils.store(key, null);
  };
  inform () {
    Utils.store(this.key, this.images);
  };
  addImage(url:string, sha:string) {
    this.images = this.images.concat({
      id: Utils.uuid(),
      url,
      sha,
    });
    this.inform();
  }
  destroy(image:any) {
    this.images = this.images.filter((candidate:any) => candidate !== image);
    
    this.inform();
  };
};

// TodoModel.prototype.subscribe = function (onChange) {
//   this.onChanges.push(onChange);
// };







