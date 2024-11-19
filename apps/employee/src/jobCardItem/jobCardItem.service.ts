import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JobCardItemServiceBase } from "./base/jobCardItem.service.base";

@Injectable()
export class JobCardItemService extends JobCardItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
