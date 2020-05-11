import { MigrationInterface, QueryRunner } from 'typeorm';

export default class RenameUpdatedAtColumnInTransactions1589203792092
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('transactions', 'Updated_At', 'updated_at');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('transactions', 'updated_at', 'Updated_At');
  }
}
