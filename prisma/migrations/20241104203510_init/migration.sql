-- CreateTable
CREATE TABLE "Garcom" (
    "id_garcom" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,

    CONSTRAINT "Garcom_pkey" PRIMARY KEY ("id_garcom")
);

-- CreateTable
CREATE TABLE "Mesa" (
    "id_mesa" UUID NOT NULL,
    "numero_mesa" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL,
    "status_pagamento" BOOLEAN NOT NULL,

    CONSTRAINT "Mesa_pkey" PRIMARY KEY ("id_mesa")
);

-- CreateTable
CREATE TABLE "pedido" (
    "id_pedido" UUID NOT NULL,
    "id_mesa" UUID NOT NULL,
    "id_garcom" UUID NOT NULL,
    "data_hora" TIMESTAMP(3) NOT NULL,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "pedido_pkey" PRIMARY KEY ("id_pedido")
);

-- CreateTable
CREATE TABLE "item_pedido" (
    "id_item_pedido" UUID NOT NULL,
    "id_pedido" UUID NOT NULL,
    "id_produto" UUID NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "observacoes" VARCHAR(255),

    CONSTRAINT "item_pedido_pkey" PRIMARY KEY ("id_item_pedido")
);

-- CreateTable
CREATE TABLE "produto" (
    "id_produto" UUID NOT NULL,
    "nome_produto" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "id_categoria_produto" UUID NOT NULL,

    CONSTRAINT "produto_pkey" PRIMARY KEY ("id_produto")
);

-- CreateTable
CREATE TABLE "categoria_produto" (
    "id_categoria_produto" UUID NOT NULL,
    "categoria" VARCHAR(60) NOT NULL,

    CONSTRAINT "categoria_produto_pkey" PRIMARY KEY ("id_categoria_produto")
);

-- AddForeignKey
ALTER TABLE "pedido" ADD CONSTRAINT "pedido_id_mesa_fkey" FOREIGN KEY ("id_mesa") REFERENCES "Mesa"("id_mesa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedido" ADD CONSTRAINT "pedido_id_garcom_fkey" FOREIGN KEY ("id_garcom") REFERENCES "Garcom"("id_garcom") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_pedido" ADD CONSTRAINT "item_pedido_id_pedido_fkey" FOREIGN KEY ("id_pedido") REFERENCES "pedido"("id_pedido") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_pedido" ADD CONSTRAINT "item_pedido_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "produto"("id_produto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produto" ADD CONSTRAINT "produto_id_categoria_produto_fkey" FOREIGN KEY ("id_categoria_produto") REFERENCES "categoria_produto"("id_categoria_produto") ON DELETE RESTRICT ON UPDATE CASCADE;
