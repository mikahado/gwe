export class Session {
  constructor(materialArray) {
    this.material = materialArray;

    this.sessionInfo = {};
    this.sessionInfo.graphic = this.material[0].content.graphic;
    this.sessionInfo.numParts = this.material.length;

    for (let i = 0; i < this.material.length; i++) {
      //Attach Session Info
      if (!this.material[i].sessionInfo) {
        this.material[i].sessionInfo = {};
      }
      this.material[i].sessionInfo.partNo = i + 1;
      this.material[i].sessionInfo.ofParts = this.sessionInfo.numParts;
    }
  }
}
