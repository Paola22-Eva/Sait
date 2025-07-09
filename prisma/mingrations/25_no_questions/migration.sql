/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `News` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `excerpt` to the `News` table without a default value. This is not possible if the table is not empty.
  - Made the column `image` on table `News` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "News" ADD COLUMN     "excerpt" TEXT NOT NULL,
ALTER COLUMN "image" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "News_title_key" ON "News"("title");
