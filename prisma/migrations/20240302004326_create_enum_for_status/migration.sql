/*
  Warnings:

  - The `status` column on the `pedido` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDENTE', 'CONCEDIDO', 'REJEITADO');

-- AlterTable
ALTER TABLE "pedido" DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'PENDENTE';
