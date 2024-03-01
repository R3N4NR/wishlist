/*
  Warnings:

  - You are about to drop the column `pedido_concedido_id` on the `pedido` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[pedido_id]` on the table `pedido_concedido` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `pedido_id` to the `pedido_concedido` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "pedido" DROP CONSTRAINT "pedido_pedido_concedido_id_fkey";

-- DropIndex
DROP INDEX "pedido_pedido_concedido_id_key";

-- AlterTable
ALTER TABLE "pedido" DROP COLUMN "pedido_concedido_id";

-- AlterTable
ALTER TABLE "pedido_concedido" ADD COLUMN     "pedido_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "pedido_concedido_pedido_id_key" ON "pedido_concedido"("pedido_id");

-- AddForeignKey
ALTER TABLE "pedido_concedido" ADD CONSTRAINT "pedido_concedido_pedido_id_fkey" FOREIGN KEY ("pedido_id") REFERENCES "pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
