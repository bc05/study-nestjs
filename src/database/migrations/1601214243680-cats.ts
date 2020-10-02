import {MigrationInterface, QueryRunner} from "typeorm";

export class cats1601214243680 implements MigrationInterface {
    name = 'cats1601214243680'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cat" ("id" SERIAL NOT NULL, "name" text NOT NULL, "breed_type_id" integer, CONSTRAINT "cat_PK" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "breed_type" ("id" SERIAL NOT NULL, "type" character varying NOT NULL, CONSTRAINT "breed_type_PK" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "cat" ADD CONSTRAINT "FK_breed_type_cat" FOREIGN KEY ("breed_type_id") REFERENCES "breed_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cat" DROP CONSTRAINT "FK_breed_type_cat"`);
        await queryRunner.query(`DROP TABLE "breed_type"`);
        await queryRunner.query(`DROP TABLE "cat"`);
    }

}
