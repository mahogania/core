import { Module } from "@nestjs/common";
import { AccountClosingBalanceModule } from "./accountClosingBalance/accountClosingBalance.module";
import { AccountModule } from "./account/account.module";
import { AccountingDimensionDetailModule } from "./accountingDimensionDetail/accountingDimensionDetail.module";
import { AccountingDimensionFilterModule } from "./accountingDimensionFilter/accountingDimensionFilter.module";
import { AccountingDimensionModule } from "./accountingDimension/accountingDimension.module";
import { AccountingPeriodModule } from "./accountingPeriod/accountingPeriod.module";
import { ActivityTypeModule } from "./activityType/activityType.module";
import { AddressTemplateModule } from "./addressTemplate/addressTemplate.module";
import { AddressModule } from "./address/address.module";
import { AdvanceTaxesAndChargesModule } from "./advanceTaxesAndCharges/advanceTaxesAndCharges.module";
import { ActivityLogModule } from "./activityLog/activityLog.module";
import { AllowedDimensionModule } from "./allowedDimension/allowedDimension.module";
import { AdvanceTaxModule } from "./advanceTax/advanceTax.module";
import { AllowedToTransactWithModule } from "./allowedToTransactWith/allowedToTransactWith.module";
import { AmendedDocumentNamingSettingsModule } from "./amendedDocumentNamingSettings/amendedDocumentNamingSettings.module";
import { ApplicableOnAccountModule } from "./applicableOnAccount/applicableOnAccount.module";
import { AppointmentModule } from "./appointment/appointment.module";
import { AssetActivityModule } from "./assetActivity/assetActivity.module";
import { AssetCapitalizationAssetItemModule } from "./assetCapitalizationAssetItem/assetCapitalizationAssetItem.module";
import { AssetCapitalizationServiceItemModule } from "./assetCapitalizationServiceItem/assetCapitalizationServiceItem.module";
import { AssetCapitalizationStockItemModule } from "./assetCapitalizationStockItem/assetCapitalizationStockItem.module";
import { AssetCapitalizationModule } from "./assetCapitalization/assetCapitalization.module";
import { AssetCategoryAccountModule } from "./assetCategoryAccount/assetCategoryAccount.module";
import { AssetCategoryModule } from "./assetCategory/assetCategory.module";
import { AssetDepreciationScheduleModule } from "./assetDepreciationSchedule/assetDepreciationSchedule.module";
import { AssetFinanceBookModule } from "./assetFinanceBook/assetFinanceBook.module";
import { AssetMaintenanceLogModule } from "./assetMaintenanceLog/assetMaintenanceLog.module";
import { AssetMaintenanceTaskModule } from "./assetMaintenanceTask/assetMaintenanceTask.module";
import { AssetMaintenanceTeamModule } from "./assetMaintenanceTeam/assetMaintenanceTeam.module";
import { AssetMaintenanceModule } from "./assetMaintenance/assetMaintenance.module";
import { AssetMovementItemModule } from "./assetMovementItem/assetMovementItem.module";
import { AssetRepairConsumedItemModule } from "./assetRepairConsumedItem/assetRepairConsumedItem.module";
import { AssetRepairModule } from "./assetRepair/assetRepair.module";
import { AssetShiftFactorModule } from "./assetShiftFactor/assetShiftFactor.module";
import { AssetValueAdjustmentModule } from "./assetValueAdjustment/assetValueAdjustment.module";
import { AssetModule } from "./asset/asset.module";
import { AssignmentRuleDayModule } from "./assignmentRuleDay/assignmentRuleDay.module";
import { AssignmentRuleUserModule } from "./assignmentRuleUser/assignmentRuleUser.module";
import { AssignmentRuleModule } from "./assignmentRule/assignmentRule.module";
import { AuthorizationRuleModule } from "./authorizationRule/authorizationRule.module";
import { AutoEmailReportModule } from "./autoEmailReport/autoEmailReport.module";
import { AutoRepeatDayModule } from "./autoRepeatDay/autoRepeatDay.module";
import { BisectNodesModule } from "./bisectNodes/bisectNodes.module";
import { BrandModule } from "./brand/brand.module";
import { BudgetAccountModule } from "./budgetAccount/budgetAccount.module";
import { BudgetModule } from "./budget/budget.module";
import { BulkTransactionLogDetailModule } from "./bulkTransactionLogDetail/bulkTransactionLogDetail.module";
import { CustomsTariffNumberModule } from "./customsTariffNumber/customsTariffNumber.module";
import { DepreciationScheduleModule } from "./depreciationSchedule/depreciationSchedule.module";
import { DepartmentModule } from "./department/department.module";
import { DesignationModule } from "./designation/designation.module";
import { DiscountedInvoiceModule } from "./discountedInvoice/discountedInvoice.module";
import { FiscalYearCompanyModule } from "./fiscalYearCompany/fiscalYearCompany.module";
import { FinanceBookModule } from "./financeBook/financeBook.module";
import { FiscalYearModule } from "./fiscalYear/fiscalYear.module";
import { IndustryTypeModule } from "./industryType/industryType.module";
import { PaymentReconciliationLogAllocationModule } from "./paymentReconciliationLogAllocation/paymentReconciliationLogAllocation.module";
import { DeferredAccountingModule } from "./deferredAccounting/deferredAccounting.module";
import { PaymentReconciliationLogModule } from "./paymentReconciliationLog/paymentReconciliationLog.module";
import { PaymentReconciliationModule } from "./paymentReconciliation/paymentReconciliation.module";
import { StatementOfAccountsCustomerModule } from "./statementOfAccountsCustomer/statementOfAccountsCustomer.module";
import { StatementOfAccountsModule } from "./statementOfAccounts/statementOfAccounts.module";
import { ProductBundleItemModule } from "./productBundleItem/productBundleItem.module";
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
    AccountClosingBalanceModule,
    AccountModule,
    AccountingDimensionDetailModule,
    AccountingDimensionFilterModule,
    AccountingDimensionModule,
    AccountingPeriodModule,
    ActivityTypeModule,
    AddressTemplateModule,
    AddressModule,
    AdvanceTaxesAndChargesModule,
    ActivityLogModule,
    AllowedDimensionModule,
    AdvanceTaxModule,
    AllowedToTransactWithModule,
    AmendedDocumentNamingSettingsModule,
    ApplicableOnAccountModule,
    AppointmentModule,
    AssetActivityModule,
    AssetCapitalizationAssetItemModule,
    AssetCapitalizationServiceItemModule,
    AssetCapitalizationStockItemModule,
    AssetCapitalizationModule,
    AssetCategoryAccountModule,
    AssetCategoryModule,
    AssetDepreciationScheduleModule,
    AssetFinanceBookModule,
    AssetMaintenanceLogModule,
    AssetMaintenanceTaskModule,
    AssetMaintenanceTeamModule,
    AssetMaintenanceModule,
    AssetMovementItemModule,
    AssetRepairConsumedItemModule,
    AssetRepairModule,
    AssetShiftFactorModule,
    AssetValueAdjustmentModule,
    AssetModule,
    AssignmentRuleDayModule,
    AssignmentRuleUserModule,
    AssignmentRuleModule,
    AuthorizationRuleModule,
    AutoEmailReportModule,
    AutoRepeatDayModule,
    BisectNodesModule,
    BrandModule,
    BudgetAccountModule,
    BudgetModule,
    BulkTransactionLogDetailModule,
    CustomsTariffNumberModule,
    DepreciationScheduleModule,
    DepartmentModule,
    DesignationModule,
    DiscountedInvoiceModule,
    FiscalYearCompanyModule,
    FinanceBookModule,
    FiscalYearModule,
    IndustryTypeModule,
    PaymentReconciliationLogAllocationModule,
    DeferredAccountingModule,
    PaymentReconciliationLogModule,
    PaymentReconciliationModule,
    StatementOfAccountsCustomerModule,
    StatementOfAccountsModule,
    ProductBundleItemModule,
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
