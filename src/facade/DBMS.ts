import Row from './Row';

export default class DBMS {
  private db = new Map<string, Row>();

  constructor() {
    this.db.set('jane', new Row('Jane', '1990-01-01', 'test1@test.com'));
    this.db.set('john', new Row('John', '1991-02-02', 'test2@test.com'));
    this.db.set('joe', new Row('Joe', '1992-03-03', 'test3@test.com'));
  }

  query(name: string, callback: (row: Row) => void) {
    setTimeout(() => {
      callback(this.db.get(name) as Row);
    }, 1500);
  }
}
