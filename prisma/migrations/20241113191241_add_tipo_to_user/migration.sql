/*
  Warnings:

  - Added the required column `tipo` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "tipo" CHAR(1) NOT NULL;
