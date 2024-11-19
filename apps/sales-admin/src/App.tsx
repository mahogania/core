import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BusinessList } from "./business/BusinessList";
import { BusinessCreate } from "./business/BusinessCreate";
import { BusinessEdit } from "./business/BusinessEdit";
import { BusinessShow } from "./business/BusinessShow";
import { StrengthList } from "./strength/StrengthList";
import { StrengthCreate } from "./strength/StrengthCreate";
import { StrengthEdit } from "./strength/StrengthEdit";
import { StrengthShow } from "./strength/StrengthShow";
import { WeaknessList } from "./weakness/WeaknessList";
import { WeaknessCreate } from "./weakness/WeaknessCreate";
import { WeaknessEdit } from "./weakness/WeaknessEdit";
import { WeaknessShow } from "./weakness/WeaknessShow";
import { OpportunityList } from "./opportunity/OpportunityList";
import { OpportunityCreate } from "./opportunity/OpportunityCreate";
import { OpportunityEdit } from "./opportunity/OpportunityEdit";
import { OpportunityShow } from "./opportunity/OpportunityShow";
import { ThreatList } from "./threat/ThreatList";
import { ThreatCreate } from "./threat/ThreatCreate";
import { ThreatEdit } from "./threat/ThreatEdit";
import { ThreatShow } from "./threat/ThreatShow";
import { UnitList } from "./unit/UnitList";
import { UnitCreate } from "./unit/UnitCreate";
import { UnitEdit } from "./unit/UnitEdit";
import { UnitShow } from "./unit/UnitShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { DiscountList } from "./discount/DiscountList";
import { DiscountCreate } from "./discount/DiscountCreate";
import { DiscountEdit } from "./discount/DiscountEdit";
import { DiscountShow } from "./discount/DiscountShow";
import { InvoiceList } from "./invoice/InvoiceList";
import { InvoiceCreate } from "./invoice/InvoiceCreate";
import { InvoiceEdit } from "./invoice/InvoiceEdit";
import { InvoiceShow } from "./invoice/InvoiceShow";
import { ItemList } from "./item/ItemList";
import { ItemCreate } from "./item/ItemCreate";
import { ItemEdit } from "./item/ItemEdit";
import { ItemShow } from "./item/ItemShow";
import { QuoteList } from "./quote/QuoteList";
import { QuoteCreate } from "./quote/QuoteCreate";
import { QuoteEdit } from "./quote/QuoteEdit";
import { QuoteShow } from "./quote/QuoteShow";
import { AddressList } from "./address/AddressList";
import { AddressCreate } from "./address/AddressCreate";
import { AddressEdit } from "./address/AddressEdit";
import { AddressShow } from "./address/AddressShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { ProposalList } from "./proposal/ProposalList";
import { ProposalCreate } from "./proposal/ProposalCreate";
import { ProposalEdit } from "./proposal/ProposalEdit";
import { ProposalShow } from "./proposal/ProposalShow";
import { ConfigurationList } from "./configuration/ConfigurationList";
import { ConfigurationCreate } from "./configuration/ConfigurationCreate";
import { ConfigurationEdit } from "./configuration/ConfigurationEdit";
import { ConfigurationShow } from "./configuration/ConfigurationShow";
import { ConstraintList } from "./constraint/ConstraintList";
import { ConstraintCreate } from "./constraint/ConstraintCreate";
import { ConstraintEdit } from "./constraint/ConstraintEdit";
import { ConstraintShow } from "./constraint/ConstraintShow";
import { BundleList } from "./bundle/BundleList";
import { BundleCreate } from "./bundle/BundleCreate";
import { BundleEdit } from "./bundle/BundleEdit";
import { BundleShow } from "./bundle/BundleShow";
import { ProcessList } from "./process/ProcessList";
import { ProcessCreate } from "./process/ProcessCreate";
import { ProcessEdit } from "./process/ProcessEdit";
import { ProcessShow } from "./process/ProcessShow";
import { PriceList } from "./price/PriceList";
import { PriceCreate } from "./price/PriceCreate";
import { PriceEdit } from "./price/PriceEdit";
import { PriceShow } from "./price/PriceShow";
import { PipelineList } from "./pipeline/PipelineList";
import { PipelineCreate } from "./pipeline/PipelineCreate";
import { PipelineEdit } from "./pipeline/PipelineEdit";
import { PipelineShow } from "./pipeline/PipelineShow";
import { ContractList } from "./contract/ContractList";
import { ContractCreate } from "./contract/ContractCreate";
import { ContractEdit } from "./contract/ContractEdit";
import { ContractShow } from "./contract/ContractShow";
import { FeatureList } from "./feature/FeatureList";
import { FeatureCreate } from "./feature/FeatureCreate";
import { FeatureEdit } from "./feature/FeatureEdit";
import { FeatureShow } from "./feature/FeatureShow";
import { OptionList } from "./option/OptionList";
import { OptionCreate } from "./option/OptionCreate";
import { OptionEdit } from "./option/OptionEdit";
import { OptionShow } from "./option/OptionShow";
import { TemplateList } from "./template/TemplateList";
import { TemplateCreate } from "./template/TemplateCreate";
import { TemplateEdit } from "./template/TemplateEdit";
import { TemplateShow } from "./template/TemplateShow";
import { FormList } from "./form/FormList";
import { FormCreate } from "./form/FormCreate";
import { FormEdit } from "./form/FormEdit";
import { FormShow } from "./form/FormShow";
import { CurrencyList } from "./currency/CurrencyList";
import { CurrencyCreate } from "./currency/CurrencyCreate";
import { CurrencyEdit } from "./currency/CurrencyEdit";
import { CurrencyShow } from "./currency/CurrencyShow";
import { IndustryList } from "./industry/IndustryList";
import { IndustryCreate } from "./industry/IndustryCreate";
import { IndustryEdit } from "./industry/IndustryEdit";
import { IndustryShow } from "./industry/IndustryShow";
import { RelationList } from "./relation/RelationList";
import { RelationCreate } from "./relation/RelationCreate";
import { RelationEdit } from "./relation/RelationEdit";
import { RelationShow } from "./relation/RelationShow";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { DealList } from "./deal/DealList";
import { DealCreate } from "./deal/DealCreate";
import { DealEdit } from "./deal/DealEdit";
import { DealShow } from "./deal/DealShow";
import { CatalogList } from "./catalog/CatalogList";
import { CatalogCreate } from "./catalog/CatalogCreate";
import { CatalogEdit } from "./catalog/CatalogEdit";
import { CatalogShow } from "./catalog/CatalogShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Sale"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Business"
          list={BusinessList}
          edit={BusinessEdit}
          create={BusinessCreate}
          show={BusinessShow}
        />
        <Resource
          name="Strength"
          list={StrengthList}
          edit={StrengthEdit}
          create={StrengthCreate}
          show={StrengthShow}
        />
        <Resource
          name="Weakness"
          list={WeaknessList}
          edit={WeaknessEdit}
          create={WeaknessCreate}
          show={WeaknessShow}
        />
        <Resource
          name="Opportunity"
          list={OpportunityList}
          edit={OpportunityEdit}
          create={OpportunityCreate}
          show={OpportunityShow}
        />
        <Resource
          name="Threat"
          list={ThreatList}
          edit={ThreatEdit}
          create={ThreatCreate}
          show={ThreatShow}
        />
        <Resource
          name="Unit"
          list={UnitList}
          edit={UnitEdit}
          create={UnitCreate}
          show={UnitShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="Discount"
          list={DiscountList}
          edit={DiscountEdit}
          create={DiscountCreate}
          show={DiscountShow}
        />
        <Resource
          name="Invoice"
          list={InvoiceList}
          edit={InvoiceEdit}
          create={InvoiceCreate}
          show={InvoiceShow}
        />
        <Resource
          name="Item"
          list={ItemList}
          edit={ItemEdit}
          create={ItemCreate}
          show={ItemShow}
        />
        <Resource
          name="Quote"
          list={QuoteList}
          edit={QuoteEdit}
          create={QuoteCreate}
          show={QuoteShow}
        />
        <Resource
          name="Address"
          list={AddressList}
          edit={AddressEdit}
          create={AddressCreate}
          show={AddressShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="Proposal"
          list={ProposalList}
          edit={ProposalEdit}
          create={ProposalCreate}
          show={ProposalShow}
        />
        <Resource
          name="Configuration"
          list={ConfigurationList}
          edit={ConfigurationEdit}
          create={ConfigurationCreate}
          show={ConfigurationShow}
        />
        <Resource
          name="Constraint"
          list={ConstraintList}
          edit={ConstraintEdit}
          create={ConstraintCreate}
          show={ConstraintShow}
        />
        <Resource
          name="Bundle"
          list={BundleList}
          edit={BundleEdit}
          create={BundleCreate}
          show={BundleShow}
        />
        <Resource
          name="Process"
          list={ProcessList}
          edit={ProcessEdit}
          create={ProcessCreate}
          show={ProcessShow}
        />
        <Resource
          name="Price"
          list={PriceList}
          edit={PriceEdit}
          create={PriceCreate}
          show={PriceShow}
        />
        <Resource
          name="Pipeline"
          list={PipelineList}
          edit={PipelineEdit}
          create={PipelineCreate}
          show={PipelineShow}
        />
        <Resource
          name="Contract"
          list={ContractList}
          edit={ContractEdit}
          create={ContractCreate}
          show={ContractShow}
        />
        <Resource
          name="Feature"
          list={FeatureList}
          edit={FeatureEdit}
          create={FeatureCreate}
          show={FeatureShow}
        />
        <Resource
          name="Option"
          list={OptionList}
          edit={OptionEdit}
          create={OptionCreate}
          show={OptionShow}
        />
        <Resource
          name="Template"
          list={TemplateList}
          edit={TemplateEdit}
          create={TemplateCreate}
          show={TemplateShow}
        />
        <Resource
          name="Form"
          list={FormList}
          edit={FormEdit}
          create={FormCreate}
          show={FormShow}
        />
        <Resource
          name="Currency"
          list={CurrencyList}
          edit={CurrencyEdit}
          create={CurrencyCreate}
          show={CurrencyShow}
        />
        <Resource
          name="Industry"
          list={IndustryList}
          edit={IndustryEdit}
          create={IndustryCreate}
          show={IndustryShow}
        />
        <Resource
          name="Relation"
          list={RelationList}
          edit={RelationEdit}
          create={RelationCreate}
          show={RelationShow}
        />
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="Deal"
          list={DealList}
          edit={DealEdit}
          create={DealCreate}
          show={DealShow}
        />
        <Resource
          name="Catalog"
          list={CatalogList}
          edit={CatalogEdit}
          create={CatalogCreate}
          show={CatalogShow}
        />
      </Admin>
    </div>
  );
};

export default App;
