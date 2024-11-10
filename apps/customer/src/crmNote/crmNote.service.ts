import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CrmNoteServiceBase } from "./base/crmNote.service.base";

@Injectable()
export class CrmNoteService extends CrmNoteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
