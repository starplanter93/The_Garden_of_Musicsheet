-- CreateTable
CREATE TABLE `User` (
    `userId` VARCHAR(191) NOT NULL,
    `userName` VARCHAR(191) NOT NULL,
    `userEmail` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `profileImage` VARCHAR(191) NULL,
    `userCoin` INTEGER NULL,
    `optOut` BOOLEAN NOT NULL DEFAULT false,
    `role` ENUM('ADMIN', 'USER') NOT NULL DEFAULT 'USER',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_userName_key`(`userName`),
    UNIQUE INDEX `User_userEmail_key`(`userEmail`),
    INDEX `User_userName_userEmail_idx`(`userName`, `userEmail`),
    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Music` (
    `postId` INTEGER NOT NULL AUTO_INCREMENT,
    `authorId` VARCHAR(191) NOT NULL,
    `singer` VARCHAR(191) NOT NULL,
    `sheetPrice` INTEGER NOT NULL,
    `sheetInstrument` VARCHAR(191) NOT NULL,
    `sheetLevel` ENUM('EASY', 'GENERAL', 'DIFFICULTY') NOT NULL,
    `sheetStreamingURL` VARCHAR(191) NULL,
    `sheetName` VARCHAR(191) NOT NULL,
    `showBoard` BOOLEAN NOT NULL DEFAULT true,
    `examination` ENUM('APPROVE', 'REVIEW', 'REJECT') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`postId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sheet` (
    `sheetId` INTEGER NOT NULL AUTO_INCREMENT,
    `sheetPostId` INTEGER NOT NULL,
    `sheetSort` INTEGER NOT NULL,
    `sheetLink` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Sheet_sheetLink_key`(`sheetLink`),
    PRIMARY KEY (`sheetId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Purchased` (
    `cartId` INTEGER NOT NULL AUTO_INCREMENT,
    `cartUserId` VARCHAR(191) NOT NULL,
    `cartPostId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`cartId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Music` ADD CONSTRAINT `Music_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sheet` ADD CONSTRAINT `Sheet_sheetPostId_fkey` FOREIGN KEY (`sheetPostId`) REFERENCES `Music`(`postId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Purchased` ADD CONSTRAINT `Purchased_cartUserId_fkey` FOREIGN KEY (`cartUserId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Purchased` ADD CONSTRAINT `Purchased_cartPostId_fkey` FOREIGN KEY (`cartPostId`) REFERENCES `Music`(`postId`) ON DELETE RESTRICT ON UPDATE CASCADE;
