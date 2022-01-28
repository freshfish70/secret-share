using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SecretShare.Migrations
{
    public partial class AddTitleSecret : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "Secrets",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Title",
                table: "Secrets");
        }
    }
}
