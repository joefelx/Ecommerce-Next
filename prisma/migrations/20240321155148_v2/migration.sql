-- AlterTable
ALTER TABLE "User" ALTER COLUMN "verificationToken" DROP NOT NULL,
ALTER COLUMN "forgotpasswordToken" DROP NOT NULL;
