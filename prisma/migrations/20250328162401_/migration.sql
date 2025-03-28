/*
  Warnings:

  - You are about to drop the column `machineId` on the `Spares` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Spares" DROP CONSTRAINT "Spares_machineId_fkey";

-- AlterTable
ALTER TABLE "Spares" DROP COLUMN "machineId";

-- CreateTable
CREATE TABLE "SparesOnMachines" (
    "spareId" INTEGER NOT NULL,
    "machineId" INTEGER NOT NULL,

    CONSTRAINT "SparesOnMachines_pkey" PRIMARY KEY ("spareId","machineId")
);

-- AddForeignKey
ALTER TABLE "SparesOnMachines" ADD CONSTRAINT "SparesOnMachines_spareId_fkey" FOREIGN KEY ("spareId") REFERENCES "Spares"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SparesOnMachines" ADD CONSTRAINT "SparesOnMachines_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "Machines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
