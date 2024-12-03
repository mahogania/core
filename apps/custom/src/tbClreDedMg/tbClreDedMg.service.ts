import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TbClreDedMgServiceBase } from "./base/tbClreDedMg.service.base";

@Injectable()
export class TbClreDedMgService extends TbClreDedMgServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
