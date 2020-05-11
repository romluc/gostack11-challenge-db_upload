import { MigrationInterface, QueryRunner } from 'typeorm';

export default class RenameCreatedAtColumnInTransactions1589204249229
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('transactions', 'created_At', 'created_at');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('transactions', 'created_at', 'created_At');
  }
}
