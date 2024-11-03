import { Module } from "@nestjs/common";
import { CrmNoteModule } from "./crmNote/crmNote.module";
import { CallLogModule } from "./callLog/callLog.module";
import { CalendarViewModule } from "./calendarView/calendarView.module";
import { CampaignEmailScheduleModule } from "./campaignEmailSchedule/campaignEmailSchedule.module";
import { CampaignItemModule } from "./campaignItem/campaignItem.module";
import { CampaignModule } from "./campaign/campaign.module";
import { CashierClosingPaymentsModule } from "./cashierClosingPayments/cashierClosingPayments.module";
import { CashierClosingModule } from "./cashierClosing/cashierClosing.module";
import { ChequePrintTemplateModule } from "./chequePrintTemplate/chequePrintTemplate.module";
import { ClientScriptModule } from "./clientScript/clientScript.module";
import { ChangelogFeedModule } from "./changelogFeed/changelogFeed.module";
import { ClosedDocumentModule } from "./closedDocument/closedDocument.module";
import { ClosingStockBalanceModule } from "./closingStockBalance/closingStockBalance.module";
import { ColorModule } from "./color/color.module";
import { CommunicationLinkModule } from "./communicationLink/communicationLink.module";
import { CommentModule } from "./comment/comment.module";
import { CommunicationMediumTimeslotModule } from "./communicationMediumTimeslot/communicationMediumTimeslot.module";
import { CommunicationMediumModule } from "./communicationMedium/communicationMedium.module";
import { CommunicationModule } from "./communication/communication.module";
import { CompanyHistoryModule } from "./companyHistory/companyHistory.module";
import { CompanyModule } from "./company/company.module";
import { CompetitorDetailModule } from "./competitorDetail/competitorDetail.module";
import { CompetitorModule } from "./competitor/competitor.module";
import { ConnectedAppModule } from "./connectedApp/connectedApp.module";
import { ConsoleLogModule } from "./consoleLog/consoleLog.module";
import { ContactEmailModule } from "./contactEmail/contactEmail.module";
import { ContactPhoneModule } from "./contactPhone/contactPhone.module";
import { ContactModule } from "./contact/contact.module";
import { ContractFulfilmentChecklistModule } from "./contractFulfilmentChecklist/contractFulfilmentChecklist.module";
import { ContractTemplateFulfilmentTermsModule } from "./contractTemplateFulfilmentTerms/contractTemplateFulfilmentTerms.module";
import { ContractTemplateModule } from "./contractTemplate/contractTemplate.module";
import { ContractModule } from "./contract/contract.module";
import { CostCenterAllocationPercentageModule } from "./costCenterAllocationPercentage/costCenterAllocationPercentage.module";
import { CostCenterAllocationModule } from "./costCenterAllocation/costCenterAllocation.module";
import { CostCenterModule } from "./costCenter/costCenter.module";
import { CountryModule } from "./country/country.module";
import { CouponCodeModule } from "./couponCode/couponCode.module";
import { CurrencyExchangeSettingsDetailsModule } from "./currencyExchangeSettingsDetails/currencyExchangeSettingsDetails.module";
import { CurrencyExchangeSettingsResultModule } from "./currencyExchangeSettingsResult/currencyExchangeSettingsResult.module";
import { CurrencyExchangeModule } from "./currencyExchange/currencyExchange.module";
import { CurrencyModule } from "./currency/currency.module";
import { CustomDocPermModule } from "./customDocPerm/customDocPerm.module";
import { CustomFieldModule } from "./customField/customField.module";
import { CustomHtmlBlockModule } from "./customHtmlBlock/customHtmlBlock.module";
import { CustomRoleModule } from "./customRole/customRole.module";
import { CustomerCreditLimitModule } from "./customerCreditLimit/customerCreditLimit.module";
import { CustomerGroupItemModule } from "./customerGroupItem/customerGroupItem.module";
import { CustomerGroupModule } from "./customerGroup/customerGroup.module";
import { CustomerItemModule } from "./customerItem/customerItem.module";
import { CustomerModule } from "./customer/customer.module";
import { CustomizeFormFieldModule } from "./customizeFormField/customizeFormField.module";
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
    CrmNoteModule,
    CallLogModule,
    CalendarViewModule,
    CampaignEmailScheduleModule,
    CampaignItemModule,
    CampaignModule,
    CashierClosingPaymentsModule,
    CashierClosingModule,
    ChequePrintTemplateModule,
    ClientScriptModule,
    ChangelogFeedModule,
    ClosedDocumentModule,
    ClosingStockBalanceModule,
    ColorModule,
    CommunicationLinkModule,
    CommentModule,
    CommunicationMediumTimeslotModule,
    CommunicationMediumModule,
    CommunicationModule,
    CompanyHistoryModule,
    CompanyModule,
    CompetitorDetailModule,
    CompetitorModule,
    ConnectedAppModule,
    ConsoleLogModule,
    ContactEmailModule,
    ContactPhoneModule,
    ContactModule,
    ContractFulfilmentChecklistModule,
    ContractTemplateFulfilmentTermsModule,
    ContractTemplateModule,
    ContractModule,
    CostCenterAllocationPercentageModule,
    CostCenterAllocationModule,
    CostCenterModule,
    CountryModule,
    CouponCodeModule,
    CurrencyExchangeSettingsDetailsModule,
    CurrencyExchangeSettingsResultModule,
    CurrencyExchangeModule,
    CurrencyModule,
    CustomDocPermModule,
    CustomFieldModule,
    CustomHtmlBlockModule,
    CustomRoleModule,
    CustomerCreditLimitModule,
    CustomerGroupItemModule,
    CustomerGroupModule,
    CustomerItemModule,
    CustomerModule,
    CustomizeFormFieldModule,
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
