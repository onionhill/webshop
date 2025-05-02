/*
  Warnings:

  - Added the required column `numReviews` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stock` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "banner" TEXT,
ADD COLUMN     "isFeatured" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "numReviews" INTEGER NOT NULL,
ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "stock" INTEGER NOT NULL;
