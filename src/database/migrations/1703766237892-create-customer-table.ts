import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCustomerTable1703766237892 implements MigrationInterface {
    name = 'CreateCustomerTable1703766237892'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tbl_customer\` (\`customer_id\` int NOT NULL AUTO_INCREMENT, \`customer_code\` varchar(255) NULL, \`customer_pin\` varchar(255) NOT NULL, \`customer_name\` varchar(255) NOT NULL, \`customer_name_en\` varchar(255) NOT NULL, \`customer_bank_holder_name\` varchar(255) NULL, \`customer_name_en_scb\` varchar(255) NULL, \`customer_img\` varchar(255) NULL, \`bank_id\` varchar(255) NOT NULL, \`bank_no\` varchar(255) NOT NULL, \`truewallet_id\` varchar(255) NULL, \`line_id\` varchar(255) NULL, \`phone\` varchar(255) NULL, \`email\` varchar(255) NULL, \`idcard\` varchar(255) NOT NULL, \`backidcard\` varchar(255) NOT NULL, \`birthday\` varchar(255) NULL, \`remark\` varchar(255) NULL, \`status\` int NOT NULL, \`verify_identity\` int NOT NULL, \`verify_bank\` int NOT NULL, \`device_token\` varchar(255) NULL, \`user_token\` varchar(255) NULL, \`agent_id\` varchar(255) NULL, \`nopromation\` varchar(255) NULL, \`languages\` varchar(255) NULL, \`register_type\` varchar(255) NULL, \`scb_premium\` varchar(255) NULL, \`qr_status\` varchar(255) NULL, \`referer\` varchar(255) NULL, \`referer_status\` int NOT NULL, \`mylink\` varchar(255) NULL, \`welcome\` int NOT NULL, \`wrong_bank\` int NOT NULL, \`lastupdate\` datetime NULL, \`createdate\` datetime NULL, \`is_bank_verified\` varchar(255) NULL, PRIMARY KEY (\`customer_id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`tbl_customer\``);
    }

}
