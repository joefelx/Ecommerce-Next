/*
  Warnings:

  - Added the required column `image` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ProductStatus" AS ENUM ('PUBLISHED', 'SAVED', 'LIVE');

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "status" "ProductStatus" NOT NULL;
