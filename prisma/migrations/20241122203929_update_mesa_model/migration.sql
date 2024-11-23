/*
  Warnings:

  - You are about to drop the column `status` on the `Mesa` table. All the data in the column will be lost.
  - You are about to drop the column `status_pagamento` on the `Mesa` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Mesa" DROP COLUMN "status",
DROP COLUMN "status_pagamento";
