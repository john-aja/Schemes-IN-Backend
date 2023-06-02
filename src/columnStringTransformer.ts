export class ColumnStringTransformer {
  to(data: any): any {
    return JSON.stringify(data);
  }
  from(data) {
    return data ? JSON.parse(data) : data;
  }
}
