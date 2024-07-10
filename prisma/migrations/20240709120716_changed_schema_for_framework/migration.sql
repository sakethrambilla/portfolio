/*
  Warnings:

  - You are about to drop the column `name` on the `Framework` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `WorkCategory` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title]` on the table `Framework` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `title` to the `Framework` table without a default value. This is not possible if the table is not empty.
  - Added the required column `color` to the `WorkCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `WorkCategory` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Framework_name_key";

-- AlterTable
ALTER TABLE "Framework" DROP COLUMN "name",
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "WorkCategory" DROP COLUMN "name",
ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Blog" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BlogCategory" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BlogCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BlogToBlogCategory" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Blog_slug_key" ON "Blog"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "BlogCategory_slug_key" ON "BlogCategory"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "_BlogToBlogCategory_AB_unique" ON "_BlogToBlogCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_BlogToBlogCategory_B_index" ON "_BlogToBlogCategory"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Framework_title_key" ON "Framework"("title");

-- AddForeignKey
ALTER TABLE "_BlogToBlogCategory" ADD CONSTRAINT "_BlogToBlogCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Blog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BlogToBlogCategory" ADD CONSTRAINT "_BlogToBlogCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "BlogCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
