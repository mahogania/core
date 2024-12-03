/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  CreatureEquipment as PrismaCreatureEquipment,
  Creature as PrismaCreature,
} from "@prisma/client";

import { LocalStorageService } from "src/storage/providers/local/local.storage.service";
import { InputJsonValue } from "src/types";
import { FileDownload, FileUpload } from "src/storage/base/storage.types";
import { LocalStorageFile } from "src/storage/providers/local/local.storage.types";

export class CreatureEquipmentServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly localStorageService: LocalStorageService
  ) {}

  async count(
    args: Omit<Prisma.CreatureEquipmentCountArgs, "select">
  ): Promise<number> {
    return this.prisma.creatureEquipment.count(args);
  }

  async creatureEquipments(
    args: Prisma.CreatureEquipmentFindManyArgs
  ): Promise<PrismaCreatureEquipment[]> {
    return this.prisma.creatureEquipment.findMany(args);
  }
  async creatureEquipment(
    args: Prisma.CreatureEquipmentFindUniqueArgs
  ): Promise<PrismaCreatureEquipment | null> {
    return this.prisma.creatureEquipment.findUnique(args);
  }
  async createCreatureEquipment(
    args: Prisma.CreatureEquipmentCreateArgs
  ): Promise<PrismaCreatureEquipment> {
    return this.prisma.creatureEquipment.create(args);
  }
  async updateCreatureEquipment(
    args: Prisma.CreatureEquipmentUpdateArgs
  ): Promise<PrismaCreatureEquipment> {
    return this.prisma.creatureEquipment.update(args);
  }
  async deleteCreatureEquipment(
    args: Prisma.CreatureEquipmentDeleteArgs
  ): Promise<PrismaCreatureEquipment> {
    return this.prisma.creatureEquipment.delete(args);
  }

  async uploadAppereance<T extends Prisma.CreatureEquipmentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CreatureEquipmentFindUniqueArgs>,
    file: FileUpload
  ): Promise<PrismaCreatureEquipment> {
    file.filename = `profilePicture-${args.where.id}.${file.filename
      .split(".")
      .pop()}`;
    const containerPath = "/";
    const appereance = await this.localStorageService.uploadFile(
      file,
      [],
      1000000,
      containerPath
    );

    return await this.prisma.creatureEquipment.update({
      where: args.where,

      data: {
        appereance: appereance as InputJsonValue,
      },
    });
  }

  async downloadAppereance<T extends Prisma.CreatureEquipmentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CreatureEquipmentFindUniqueArgs>
  ): Promise<FileDownload> {
    const { appereance } =
      await this.prisma.creatureEquipment.findUniqueOrThrow({
        where: args.where,
      });

    return await this.localStorageService.downloadFile(
      appereance as unknown as LocalStorageFile
    );
  }

  async deleteAppereance<T extends Prisma.CreatureEquipmentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CreatureEquipmentFindUniqueArgs>
  ): Promise<PrismaCreatureEquipment> {
    const { appereance } =
      await this.prisma.creatureEquipment.findUniqueOrThrow({
        where: args.where,
      });

    await this.localStorageService.deleteFile(
      appereance as unknown as LocalStorageFile
    );

    return await this.prisma.creatureEquipment.update({
      where: args.where,

      data: {
        appereance: Prisma.DbNull,
      },
    });
  }

  async uploadVisual<T extends Prisma.CreatureEquipmentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CreatureEquipmentFindUniqueArgs>,
    file: FileUpload
  ): Promise<PrismaCreatureEquipment> {
    file.filename = `profilePicture-${args.where.id}.${file.filename
      .split(".")
      .pop()}`;
    const containerPath = "/";
    const visual = await this.localStorageService.uploadFile(
      file,
      [],
      1000000,
      containerPath
    );

    return await this.prisma.creatureEquipment.update({
      where: args.where,

      data: {
        visual: visual as InputJsonValue,
      },
    });
  }

  async downloadVisual<T extends Prisma.CreatureEquipmentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CreatureEquipmentFindUniqueArgs>
  ): Promise<FileDownload> {
    const { visual } = await this.prisma.creatureEquipment.findUniqueOrThrow({
      where: args.where,
    });

    return await this.localStorageService.downloadFile(
      visual as unknown as LocalStorageFile
    );
  }

  async deleteVisual<T extends Prisma.CreatureEquipmentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CreatureEquipmentFindUniqueArgs>
  ): Promise<PrismaCreatureEquipment> {
    const { visual } = await this.prisma.creatureEquipment.findUniqueOrThrow({
      where: args.where,
    });

    await this.localStorageService.deleteFile(
      visual as unknown as LocalStorageFile
    );

    return await this.prisma.creatureEquipment.update({
      where: args.where,

      data: {
        visual: Prisma.DbNull,
      },
    });
  }

  async findCreatures(
    parentId: string,
    args: Prisma.CreatureFindManyArgs
  ): Promise<PrismaCreature[]> {
    return this.prisma.creatureEquipment
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .creatures(args);
  }
}
