/*
  Warnings:

  - You are about to drop the `TechStack` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_TechStackToWork` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_TechStackToWork" DROP CONSTRAINT "_TechStackToWork_A_fkey";

-- DropForeignKey
ALTER TABLE "_TechStackToWork" DROP CONSTRAINT "_TechStackToWork_B_fkey";

-- DropTable
DROP TABLE "TechStack";

-- DropTable
DROP TABLE "_TechStackToWork";

-- CreateTable
CREATE TABLE "Framework" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Framework_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_FrameworkToWork" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Framework_slug_key" ON "Framework"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Framework_name_key" ON "Framework"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_FrameworkToWork_AB_unique" ON "_FrameworkToWork"("A", "B");

-- CreateIndex
CREATE INDEX "_FrameworkToWork_B_index" ON "_FrameworkToWork"("B");

-- AddForeignKey
ALTER TABLE "_FrameworkToWork" ADD CONSTRAINT "_FrameworkToWork_A_fkey" FOREIGN KEY ("A") REFERENCES "Framework"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FrameworkToWork" ADD CONSTRAINT "_FrameworkToWork_B_fkey" FOREIGN KEY ("B") REFERENCES "Work"("id") ON DELETE CASCADE ON UPDATE CASCADE;
