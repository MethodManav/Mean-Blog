/*
  Warnings:

  - You are about to drop the column `subjectId` on the `Note` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Note" DROP CONSTRAINT "Note_subjectId_fkey";

-- AlterTable
ALTER TABLE "Note" DROP COLUMN "subjectId";
