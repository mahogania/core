import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClientScriptServiceBase } from "./base/clientScript.service.base";

@Injectable()
export class ClientScriptService extends ClientScriptServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
