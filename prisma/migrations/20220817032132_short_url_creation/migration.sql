/*
  Warnings:

  - You are about to drop the `Example` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Example";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "ShortUrl" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dateCreated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "url" TEXT NOT NULL,
    "slug" TEXT NOT NULL
);

-- CreateIndex
CREATE INDEX "ShortUrl_slug_idx" ON "ShortUrl"("slug");
