﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using SecretShare.DataAccess;

#nullable disable

namespace SecretShare.Migrations
{
    [DbContext(typeof(SecretContext))]
    [Migration("20211218114127_initial")]
    partial class initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("SecretShare.Entities.Bucket", b =>
                {
                    b.Property<Guid>("BucketId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<DateTimeOffset>("CreatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("PrivateKey")
                        .HasColumnType("text");

                    b.Property<string>("PublicKey")
                        .HasColumnType("text");

                    b.Property<DateTimeOffset>("UpdatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("BucketId");

                    b.ToTable("Buckets");
                });

            modelBuilder.Entity("SecretShare.Secret", b =>
                {
                    b.Property<Guid>("SecretId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<Guid?>("BucketId")
                        .HasColumnType("uuid");

                    b.Property<DateTimeOffset>("CreatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<DateTimeOffset>("UpdatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Value")
                        .HasColumnType("text");

                    b.Property<bool>("Viewed")
                        .HasColumnType("boolean");

                    b.Property<DateTimeOffset>("ViewedAt")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("SecretId");

                    b.HasIndex("BucketId");

                    b.ToTable("Secrets");
                });

            modelBuilder.Entity("SecretShare.Secret", b =>
                {
                    b.HasOne("SecretShare.Entities.Bucket", null)
                        .WithMany("Secrets")
                        .HasForeignKey("BucketId");
                });

            modelBuilder.Entity("SecretShare.Entities.Bucket", b =>
                {
                    b.Navigation("Secrets");
                });
#pragma warning restore 612, 618
        }
    }
}