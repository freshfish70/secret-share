using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SecretShare.Migrations
{
    public partial class AddBucketPassphrase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "RetrievalPassphrase",
                table: "Buckets",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "RetrievalPassphrase",
                table: "Buckets");
        }
    }
}
