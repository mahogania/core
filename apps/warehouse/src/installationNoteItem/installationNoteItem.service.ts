import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InstallationNoteItemServiceBase } from "./base/installationNoteItem.service.base";

@Injectable()
export class InstallationNoteItemService extends InstallationNoteItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
