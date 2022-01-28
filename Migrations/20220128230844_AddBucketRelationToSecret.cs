using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SecretShare.Migrations
{
    public partial class AddBucketRelationToSecret : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Secrets_Buckets_BucketId",
                table: "Secrets");

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "Secrets",
                type: "varchar(255)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AlterColumn<Guid>(
                name: "BucketId",
                table: "Secrets",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uuid",
                oldNullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "SubmissionId",
                table: "Buckets",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddForeignKey(
                name: "FK_Secrets_Buckets_BucketId",
                table: "Secrets",
                column: "BucketId",
                principalTable: "Buckets",
                principalColumn: "BucketId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Secrets_Buckets_BucketId",
                table: "Secrets");

            migrationBuilder.DropColumn(
                name: "SubmissionId",
                table: "Buckets");

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "Secrets",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "varchar(255)",
                oldNullable: true);

            migrationBuilder.AlterColumn<Guid>(
                name: "BucketId",
                table: "Secrets",
                type: "uuid",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uuid");

            migrationBuilder.AddForeignKey(
                name: "FK_Secrets_Buckets_BucketId",
                table: "Secrets",
                column: "BucketId",
                principalTable: "Buckets",
                principalColumn: "BucketId");
        }
    }
}
