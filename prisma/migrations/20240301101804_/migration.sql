/*
  Warnings:

  - You are about to drop the column `cartinha_id` on the `pedido` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[pedido_id]` on the table `cartinha` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `pedido_id` to the `cartinha` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "pedido" DROP CONSTRAINT "pedido_cartinha_id_fkey";

-- DropIndex
DROP INDEX "pedido_cartinha_id_key";

-- AlterTable
ALTER TABLE "cartinha" ADD COLUMN     "pedido_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "pedido" DROP COLUMN "cartinha_id";

-- CreateIndex
CREATE UNIQUE INDEX "cartinha_pedido_id_key" ON "cartinha"("pedido_id");

-- AddForeignKey
ALTER TABLE "cartinha" ADD CONSTRAINT "cartinha_pedido_id_fkey" FOREIGN KEY ("pedido_id") REFERENCES "pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
