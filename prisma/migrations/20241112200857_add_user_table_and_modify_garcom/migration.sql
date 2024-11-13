/*
  Warnings:

  - You are about to drop the `Garcom` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "pedido" DROP CONSTRAINT "pedido_id_garcom_fkey";

-- DropTable
DROP TABLE "Garcom";

-- CreateTable
CREATE TABLE "User" (
    "id_user" UUID NOT NULL,
    "login" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "garcom" (
    "id_garcom" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "id_user" UUID NOT NULL,

    CONSTRAINT "garcom_pkey" PRIMARY KEY ("id_garcom")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_login_key" ON "User"("login");

-- CreateIndex
CREATE UNIQUE INDEX "garcom_id_user_key" ON "garcom"("id_user");

-- AddForeignKey
ALTER TABLE "garcom" ADD CONSTRAINT "garcom_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedido" ADD CONSTRAINT "pedido_id_garcom_fkey" FOREIGN KEY ("id_garcom") REFERENCES "garcom"("id_garcom") ON DELETE RESTRICT ON UPDATE CASCADE;
