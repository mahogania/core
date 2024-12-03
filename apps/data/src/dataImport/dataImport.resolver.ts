import * as graphql from "@nestjs/graphql";
import { DataImportResolverBase } from "./base/dataImport.resolver.base";
import { DataImport } from "./base/DataImport";
import { DataImportService } from "./dataImport.service";

@graphql.Resolver(() => DataImport)
export class DataImportResolver extends DataImportResolverBase {
  constructor(protected readonly service: DataImportService) {
    super(service);
  }
}
