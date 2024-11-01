import * as graphql from "@nestjs/graphql";
import { BomUpdateLogResolverBase } from "./base/bomUpdateLog.resolver.base";
import { BomUpdateLog } from "./base/BomUpdateLog";
import { BomUpdateLogService } from "./bomUpdateLog.service";

@graphql.Resolver(() => BomUpdateLog)
export class BomUpdateLogResolver extends BomUpdateLogResolverBase {
  constructor(protected readonly service: BomUpdateLogService) {
    super(service);
  }
}
