-- CreateTable
CREATE TABLE "AlternativeSpares" (
    "mainSpareId" INTEGER NOT NULL,
    "alternativeSpareId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "AlternativeSpares_mainSpareId_alternativeSpareId_key" ON "AlternativeSpares"("mainSpareId", "alternativeSpareId");

-- AddForeignKey
ALTER TABLE "AlternativeSpares" ADD CONSTRAINT "AlternativeSpares_mainSpareId_fkey" FOREIGN KEY ("mainSpareId") REFERENCES "Spares"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlternativeSpares" ADD CONSTRAINT "AlternativeSpares_alternativeSpareId_fkey" FOREIGN KEY ("alternativeSpareId") REFERENCES "Spares"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
