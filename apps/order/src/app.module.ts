import { Module } from "@nestjs/common";
import { BlanketOrderItemModule } from "./blanketOrderItem/blanketOrderItem.module";
import { BlanketOrderModule } from "./blanketOrder/blanketOrder.module";
import { InvoiceDiscountingModule } from "./invoiceDiscounting/invoiceDiscounting.module";
import { ItemAlternativeModule } from "./itemAlternative/itemAlternative.module";
import { ItemAttributeValueModule } from "./itemAttributeValue/itemAttributeValue.module";
import { ItemBarcodeModule } from "./itemBarcode/itemBarcode.module";
import { ItemAttributeModule } from "./itemAttribute/itemAttribute.module";
import { ItemCustomerDetailModule } from "./itemCustomerDetail/itemCustomerDetail.module";
import { ItemDefaultModule } from "./itemDefault/itemDefault.module";
import { ItemGroupModule } from "./itemGroup/itemGroup.module";
import { ItemManufacturerModule } from "./itemManufacturer/itemManufacturer.module";
import { ItemPriceModule } from "./itemPrice/itemPrice.module";
import { ItemReorderModule } from "./itemReorder/itemReorder.module";
import { ItemSupplierModule } from "./itemSupplier/itemSupplier.module";
import { ItemTaxTemplateDetailModule } from "./itemTaxTemplateDetail/itemTaxTemplateDetail.module";
import { ItemTaxTemplateModule } from "./itemTaxTemplate/itemTaxTemplate.module";
import { ItemTaxModule } from "./itemTax/itemTax.module";
import { ItemVariantModule } from "./itemVariant/itemVariant.module";
import { ItemModule } from "./item/item.module";
import { ModeOfPaymentAccountModule } from "./modeOfPaymentAccount/modeOfPaymentAccount.module";
import { ModeOfPaymentModule } from "./modeOfPayment/modeOfPayment.module";
import { PosClosingEntryDetailModule } from "./posClosingEntryDetail/posClosingEntryDetail.module";
import { PosClosingEntryModule } from "./posClosingEntry/posClosingEntry.module";
import { PosClosingEntryTaxesModule } from "./posClosingEntryTaxes/posClosingEntryTaxes.module";
import { PosInvoiceItemModule } from "./posInvoiceItem/posInvoiceItem.module";
import { PosFieldModule } from "./posField/posField.module";
import { PosCustomerGroupModule } from "./posCustomerGroup/posCustomerGroup.module";
import { PosInvoiceModule } from "./posInvoice/posInvoice.module";
import { PosInvoiceReferenceModule } from "./posInvoiceReference/posInvoiceReference.module";
import { PosInvoiceMergeLogModule } from "./posInvoiceMergeLog/posInvoiceMergeLog.module";
import { PosPaymentMethodModule } from "./posPaymentMethod/posPaymentMethod.module";
import { PosProfileUserModule } from "./posProfileUser/posProfileUser.module";
import { PosProfileModule } from "./posProfile/posProfile.module";
import { PosOpeningEntryModule } from "./posOpeningEntry/posOpeningEntry.module";
import { PosOpeningEntryDetailModule } from "./posOpeningEntryDetail/posOpeningEntryDetail.module";
import { PaymentEntryReferenceModule } from "./paymentEntryReference/paymentEntryReference.module";
import { PaymentEntryDeductionModule } from "./paymentEntryDeduction/paymentEntryDeduction.module";
import { PaymentRequestModule } from "./paymentRequest/paymentRequest.module";
import { PaymentEntryModule } from "./paymentEntry/paymentEntry.module";
import { PaymentLedgerEntryModule } from "./paymentLedgerEntry/paymentLedgerEntry.module";
import { PaymentGatewayAccountModule } from "./paymentGatewayAccount/paymentGatewayAccount.module";
import { PaymentOrderReferenceModule } from "./paymentOrderReference/paymentOrderReference.module";
import { PickListItemModule } from "./pickListItem/pickListItem.module";
import { PickListModule } from "./pickList/pickList.module";
import { PurchaseInvoiceAdvanceModule } from "./purchaseInvoiceAdvance/purchaseInvoiceAdvance.module";
import { PurchaseInvoiceItemModule } from "./purchaseInvoiceItem/purchaseInvoiceItem.module";
import { PurchaseInvoiceModule } from "./purchaseInvoice/purchaseInvoice.module";
import { PurchaseOrderItemSuppliedModule } from "./purchaseOrderItemSupplied/purchaseOrderItemSupplied.module";
import { PurchaseOrderItemModule } from "./purchaseOrderItem/purchaseOrderItem.module";
import { PurchaseOrderModule } from "./purchaseOrder/purchaseOrder.module";
import { PurchaseReceiptItemSuppliedModule } from "./purchaseReceiptItemSupplied/purchaseReceiptItemSupplied.module";
import { PurchaseReceiptItemModule } from "./purchaseReceiptItem/purchaseReceiptItem.module";
import { PurchaseTaxesAndChargesTemplateModule } from "./purchaseTaxesAndChargesTemplate/purchaseTaxesAndChargesTemplate.module";
import { PurchaseTaxesAndChargesModule } from "./purchaseTaxesAndCharges/purchaseTaxesAndCharges.module";
import { QuotationItemModule } from "./quotationItem/quotationItem.module";
import { QuotationModule } from "./quotation/quotation.module";
import { QuotationLostReasonDetailModule } from "./quotationLostReasonDetail/quotationLostReasonDetail.module";
import { SalesInvoiceItemModule } from "./salesInvoiceItem/salesInvoiceItem.module";
import { SalesInvoiceAdvanceModule } from "./salesInvoiceAdvance/salesInvoiceAdvance.module";
import { SalesInvoiceTimesheetModule } from "./salesInvoiceTimesheet/salesInvoiceTimesheet.module";
import { SalesInvoicePaymentModule } from "./salesInvoicePayment/salesInvoicePayment.module";
import { SalesOrderItemModule } from "./salesOrderItem/salesOrderItem.module";
import { SalesInvoiceModule } from "./salesInvoice/salesInvoice.module";
import { SalesPartnerItemModule } from "./salesPartnerItem/salesPartnerItem.module";
import { SalesOrderModule } from "./salesOrder/salesOrder.module";
import { SalesTeamModule } from "./salesTeam/salesTeam.module";
import { SalesPartnerModule } from "./salesPartner/salesPartner.module";
import { SalesStageModule } from "./salesStage/salesStage.module";
import { SalesTaxesAndChargesModule } from "./salesTaxesAndCharges/salesTaxesAndCharges.module";
import { SubcontractingOrderServiceItemModule } from "./subcontractingOrderServiceItem/subcontractingOrderServiceItem.module";
import { SubcontractingOrderSuppliedItemModule } from "./subcontractingOrderSuppliedItem/subcontractingOrderSuppliedItem.module";
import { SubcontractingOrderItemModule } from "./subcontractingOrderItem/subcontractingOrderItem.module";
import { SubcontractingOrderModule } from "./subcontractingOrder/subcontractingOrder.module";
import { SubcontractingReceiptItemModule } from "./subcontractingReceiptItem/subcontractingReceiptItem.module";
import { SubcontractingReceiptSuppliedItemModule } from "./subcontractingReceiptSuppliedItem/subcontractingReceiptSuppliedItem.module";
import { SubcontractingReceiptModule } from "./subcontractingReceipt/subcontractingReceipt.module";
import { SubscriptionInvoiceModule } from "./subscriptionInvoice/subscriptionInvoice.module";
import { SubscriptionPlanDetailModule } from "./subscriptionPlanDetail/subscriptionPlanDetail.module";
import { SubscriptionPlanModule } from "./subscriptionPlan/subscriptionPlan.module";
import { SubscriptionModule } from "./subscription/subscription.module";
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
    BlanketOrderItemModule,
    BlanketOrderModule,
    InvoiceDiscountingModule,
    ItemAlternativeModule,
    ItemAttributeValueModule,
    ItemBarcodeModule,
    ItemAttributeModule,
    ItemCustomerDetailModule,
    ItemDefaultModule,
    ItemGroupModule,
    ItemManufacturerModule,
    ItemPriceModule,
    ItemReorderModule,
    ItemSupplierModule,
    ItemTaxTemplateDetailModule,
    ItemTaxTemplateModule,
    ItemTaxModule,
    ItemVariantModule,
    ItemModule,
    ModeOfPaymentAccountModule,
    ModeOfPaymentModule,
    PosClosingEntryDetailModule,
    PosClosingEntryModule,
    PosClosingEntryTaxesModule,
    PosInvoiceItemModule,
    PosFieldModule,
    PosCustomerGroupModule,
    PosInvoiceModule,
    PosInvoiceReferenceModule,
    PosInvoiceMergeLogModule,
    PosPaymentMethodModule,
    PosProfileUserModule,
    PosProfileModule,
    PosOpeningEntryModule,
    PosOpeningEntryDetailModule,
    PaymentEntryReferenceModule,
    PaymentEntryDeductionModule,
    PaymentRequestModule,
    PaymentEntryModule,
    PaymentLedgerEntryModule,
    PaymentGatewayAccountModule,
    PaymentOrderReferenceModule,
    PickListItemModule,
    PickListModule,
    PurchaseInvoiceAdvanceModule,
    PurchaseInvoiceItemModule,
    PurchaseInvoiceModule,
    PurchaseOrderItemSuppliedModule,
    PurchaseOrderItemModule,
    PurchaseOrderModule,
    PurchaseReceiptItemSuppliedModule,
    PurchaseReceiptItemModule,
    PurchaseTaxesAndChargesTemplateModule,
    PurchaseTaxesAndChargesModule,
    QuotationItemModule,
    QuotationModule,
    QuotationLostReasonDetailModule,
    SalesInvoiceItemModule,
    SalesInvoiceAdvanceModule,
    SalesInvoiceTimesheetModule,
    SalesInvoicePaymentModule,
    SalesOrderItemModule,
    SalesInvoiceModule,
    SalesPartnerItemModule,
    SalesOrderModule,
    SalesTeamModule,
    SalesPartnerModule,
    SalesStageModule,
    SalesTaxesAndChargesModule,
    SubcontractingOrderServiceItemModule,
    SubcontractingOrderSuppliedItemModule,
    SubcontractingOrderItemModule,
    SubcontractingOrderModule,
    SubcontractingReceiptItemModule,
    SubcontractingReceiptSuppliedItemModule,
    SubcontractingReceiptModule,
    SubscriptionInvoiceModule,
    SubscriptionPlanDetailModule,
    SubscriptionPlanModule,
    SubscriptionModule,
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
