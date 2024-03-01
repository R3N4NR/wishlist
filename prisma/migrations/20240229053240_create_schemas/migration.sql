-- CreateTable
CREATE TABLE "cartinha" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "papainoel_id" TEXT NOT NULL,

    CONSTRAINT "cartinha_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pedido" (
    "id" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "rota_id" TEXT NOT NULL,
    "pedido_concedido_id" TEXT NOT NULL,
    "cartinha_id" TEXT NOT NULL,
    "papainoel_id" TEXT NOT NULL,

    CONSTRAINT "pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PapaiNoel" (
    "id" TEXT NOT NULL,

    CONSTRAINT "PapaiNoel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rota" (
    "id" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,

    CONSTRAINT "rota_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pedido_concedido" (
    "id" TEXT NOT NULL,
    "dadosEntrega" TEXT NOT NULL,

    CONSTRAINT "pedido_concedido_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pedido_rota_id_key" ON "pedido"("rota_id");

-- CreateIndex
CREATE UNIQUE INDEX "pedido_pedido_concedido_id_key" ON "pedido"("pedido_concedido_id");

-- CreateIndex
CREATE UNIQUE INDEX "pedido_cartinha_id_key" ON "pedido"("cartinha_id");

-- AddForeignKey
ALTER TABLE "cartinha" ADD CONSTRAINT "cartinha_papainoel_id_fkey" FOREIGN KEY ("papainoel_id") REFERENCES "PapaiNoel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedido" ADD CONSTRAINT "pedido_rota_id_fkey" FOREIGN KEY ("rota_id") REFERENCES "rota"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedido" ADD CONSTRAINT "pedido_pedido_concedido_id_fkey" FOREIGN KEY ("pedido_concedido_id") REFERENCES "pedido_concedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedido" ADD CONSTRAINT "pedido_cartinha_id_fkey" FOREIGN KEY ("cartinha_id") REFERENCES "cartinha"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedido" ADD CONSTRAINT "pedido_papainoel_id_fkey" FOREIGN KEY ("papainoel_id") REFERENCES "PapaiNoel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
