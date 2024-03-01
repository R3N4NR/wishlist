/*
  Warnings:

  - Added the required column `nome` to the `papainoel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "papainoel" ADD COLUMN     "nome" TEXT NOT NULL;
