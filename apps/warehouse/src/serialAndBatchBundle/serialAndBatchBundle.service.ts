import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SerialAndBatchBundleServiceBase } from "./base/serialAndBatchBundle.service.base";

@Injectable()
export class SerialAndBatchBundleService extends SerialAndBatchBundleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
