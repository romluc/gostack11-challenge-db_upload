import { MigrationInterface, QueryRunner } from 'typeorm';

export default class RenameUpdatedAtColumnInCategories1589204351271
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('categories', 'Updated_At', 'updated_at');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('categories', 'updated_at', 'Updated_At');
  }
}
