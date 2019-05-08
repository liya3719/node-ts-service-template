/**
 * 示例SQL
 * @class
 */

export class IndexSql {
  static example: string = `
    select
    count(example_name) as example
    from example_table
    where example_name = ?
  `;
}