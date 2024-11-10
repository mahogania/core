import * as graphql from "@nestjs/graphql";
import { BankStatementImportResolverBase } from "./base/bankStatementImport.resolver.base";
import { BankStatementImport } from "./base/BankStatementImport";
import { BankStatementImportService } from "./bankStatementImport.service";

@graphql.Resolver(() => BankStatementImport)
export class BankStatementImportResolver extends BankStatementImportResolverBase {
  constructor(protected readonly service: BankStatementImportService) {
    super(service);
  }
}
