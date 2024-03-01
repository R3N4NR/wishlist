/*
  Warnings:

  - A unique constraint covering the columns `[papainoel_id]` on the table `pedido` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "pedido_papainoel_id_key" ON "pedido"("papainoel_id");
