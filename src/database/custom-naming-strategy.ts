import { DefaultNamingStrategy, NamingStrategyInterface, Table } from 'typeorm';

export class CustomNamingStrategy extends DefaultNamingStrategy
  implements NamingStrategyInterface {
  primaryKeyName(tableOrName: Table | string, columnNames: string[]): string {
    return `${tableOrName}_PK`;
  }

  foreignKeyName(
    tableOrName: Table | string,
    columnNames: string[],
    referencedTablePath?: string,
    referencedColumnNames?: string[],
  ): string {
    return `FK_${referencedTablePath}_${tableOrName}`;
  }
}
