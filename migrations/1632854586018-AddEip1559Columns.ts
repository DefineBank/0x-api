import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

const columns = ['priority_fee', 'max_priority_fee', 'max_gas_price'].map(
    (name) =>
        new TableColumn({
            name,
            type: 'bigint',
            isNullable: true,
        }),
);

export class AddEip1559Columns1632854586018 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await Promise.all(columns.map((column) => queryRunner.addColumn('rfqm_transaction_submissions', column)));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await Promise.all(columns.map((column) => queryRunner.dropColumn('rfqm_transaction_submissions', column)));
    }
}
