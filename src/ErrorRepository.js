export default class ErrorRepository {
  constructor() {
    this.errorDataBase = new Map();
  }

  translate(code) {
    if (!this.errorDataBase.has(code)) {
      return 'Unknown error';
    }
    return this.errorDataBase.get(code);
  }
}