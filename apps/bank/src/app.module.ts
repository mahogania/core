import { Module } from "@nestjs/common";
import { BankAccountSubtypeModule } from "./bankAccountSubtype/bankAccountSubtype.module";
import { BankAccountTypeModule } from "./bankAccountType/bankAccountType.module";
import { BankAccountModule } from "./bankAccount/bankAccount.module";
import { BankClearanceDetailModule } from "./bankClearanceDetail/bankClearanceDetail.module";
import { BankGuaranteeModule } from "./bankGuarantee/bankGuarantee.module";
import { BankStatementImportModule } from "./bankStatementImport/bankStatementImport.module";
import { BankTransactionMappingModule } from "./bankTransactionMapping/bankTransactionMapping.module";
import { BankTransactionPaymentsModule } from "./bankTransactionPayments/bankTransactionPayments.module";
import { BankTransactionModule } from "./bankTransaction/bankTransaction.module";
import { BankModule } from "./bank/bank.module";
import { JournalEntryAccountModule } from "./journalEntryAccount/journalEntryAccount.module";
import { JournalEntryTemplateModule } from "./journalEntryTemplate/journalEntryTemplate.module";
import { JournalEntryModule } from "./journalEntry/journalEntry.module";
import { LedgerHealthMonitorCompanyModule } from "./ledgerHealthMonitorCompany/ledgerHealthMonitorCompany.module";
import { LedgerHealthModule } from "./ledgerHealth/ledgerHealth.module";
import { LedgerMergeAccountsModule } from "./ledgerMergeAccounts/ledgerMergeAccounts.module";
import { LedgerMergeModule } from "./ledgerMerge/ledgerMerge.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    BankAccountSubtypeModule,
    BankAccountTypeModule,
    BankAccountModule,
    BankClearanceDetailModule,
    BankGuaranteeModule,
    BankStatementImportModule,
    BankTransactionMappingModule,
    BankTransactionPaymentsModule,
    BankTransactionModule,
    BankModule,
    JournalEntryAccountModule,
    JournalEntryTemplateModule,
    JournalEntryModule,
    LedgerHealthMonitorCompanyModule,
    LedgerHealthModule,
    LedgerMergeAccountsModule,
    LedgerMergeModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
