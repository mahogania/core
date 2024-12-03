import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TbClreDedPrcDclrServiceBase } from "./base/tbClreDedPrcDclr.service.base";

@Injectable()
export class TbClreDedPrcDclrService extends TbClreDedPrcDclrServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
