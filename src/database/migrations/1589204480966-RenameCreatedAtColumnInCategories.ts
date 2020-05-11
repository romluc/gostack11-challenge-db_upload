import { MigrationInterface, QueryRunner } from 'typeorm';

export default class RenameCreatedAtColumnInCategories1589204480966
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('categories', 'created_At', 'created_at');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('categories', 'created_at', 'created_At');
  }
}
