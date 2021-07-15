export class MultiLingual {
  constructor(eng, spa, fra) {
    this.eng = eng;
    this.spa = spa;
    this.fra = fra;
  }

  get(language, returnEnglish) {
    if (this[language]) {
      return this[language];
    } else if (returnEnglish !== false) {
      return this.eng;
      //return '* ML *'
    }
  }
}
