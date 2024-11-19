import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BundleServiceBase } from "./base/bundle.service.base";

@Injectable()
export class BundleService extends BundleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
