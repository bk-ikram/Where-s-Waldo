/*
  Warnings:

  - You are about to drop the `Scores` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Scores";

-- CreateTable
CREATE TABLE "Score" (
    "id" SERIAL NOT NULL,
    "displayName" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endTime" TIMESTAMP(3),
    "duration" INTEGER,

    CONSTRAINT "Score_pkey" PRIMARY KEY ("id")
);
