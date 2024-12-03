import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JobCardServiceBase } from "./base/jobCard.service.base";

@Injectable()
export class JobCardService extends JobCardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
