export class ColumnStringTransformer {
  to(data: any) {
    return JSON.stringify(data);
  }
  from(data: any) {
    return data ? JSON.parse(data) : data;
  }
}
