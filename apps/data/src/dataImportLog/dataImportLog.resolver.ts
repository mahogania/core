import * as graphql from "@nestjs/graphql";
import { DataImportLogResolverBase } from "./base/dataImportLog.resolver.base";
import { DataImportLog } from "./base/DataImportLog";
import { DataImportLogService } from "./dataImportLog.service";

@graphql.Resolver(() => DataImportLog)
export class DataImportLogResolver extends DataImportLogResolverBase {
  constructor(protected readonly service: DataImportLogService) {
    super(service);
  }
}
