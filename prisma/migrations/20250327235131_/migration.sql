-- CreateTable
CREATE TABLE "Spare" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "machineId" INTEGER NOT NULL,
    "brandId" INTEGER NOT NULL,

    CONSTRAINT "Spare_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Spare_code_key" ON "Spare"("code");

-- AddForeignKey
ALTER TABLE "Spare" ADD CONSTRAINT "Spare_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "Machines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spare" ADD CONSTRAINT "Spare_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
