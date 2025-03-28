/*
  Warnings:

  - You are about to drop the `Spare` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Spare" DROP CONSTRAINT "Spare_brandId_fkey";

-- DropForeignKey
ALTER TABLE "Spare" DROP CONSTRAINT "Spare_machineId_fkey";

-- DropTable
DROP TABLE "Spare";

-- CreateTable
CREATE TABLE "Spares" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "machineId" INTEGER NOT NULL,
    "brandId" INTEGER NOT NULL,

    CONSTRAINT "Spares_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Spares_code_key" ON "Spares"("code");

-- AddForeignKey
ALTER TABLE "Spares" ADD CONSTRAINT "Spares_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "Machines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spares" ADD CONSTRAINT "Spares_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
