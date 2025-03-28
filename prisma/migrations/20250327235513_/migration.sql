/*
  Warnings:

  - Added the required column `name` to the `Spare` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Spare" ADD COLUMN     "name" TEXT NOT NULL;
