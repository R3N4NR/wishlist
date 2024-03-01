/*
  Warnings:

  - You are about to drop the `PapaiNoel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "cartinha" DROP CONSTRAINT "cartinha_papainoel_id_fkey";

-- DropForeignKey
ALTER TABLE "pedido" DROP CONSTRAINT "pedido_papainoel_id_fkey";

-- DropTable
DROP TABLE "PapaiNoel";

-- CreateTable
CREATE TABLE "papainoel" (
    "id" TEXT NOT NULL,

    CONSTRAINT "papainoel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "cartinha" ADD CONSTRAINT "cartinha_papainoel_id_fkey" FOREIGN KEY ("papainoel_id") REFERENCES "papainoel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedido" ADD CONSTRAINT "pedido_papainoel_id_fkey" FOREIGN KEY ("papainoel_id") REFERENCES "papainoel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
