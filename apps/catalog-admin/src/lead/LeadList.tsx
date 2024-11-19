import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LeadList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Leads"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="annual_revenue" source="annualRevenue" />
        <TextField label="blog_subscriber" source="blogSubscriber" />
        <TextField label="campaign_name" source="campaignName" />
        <TextField label="city" source="city" />
        <TextField label="company" source="company" />
        <TextField label="company_name" source="companyName" />
        <TextField label="country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="customer" source="customer" />
        <TextField label="disabled" source="disabled" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="email_id" source="emailId" />
        <TextField label="fax" source="fax" />
        <TextField label="first_name" source="firstName" />
        <TextField label="gender" source="gender" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="image" source="image" />
        <TextField label="industry" source="industry" />
        <TextField label="job_title" source="jobTitle" />
        <TextField label="language" source="language" />
        <TextField label="last_name" source="lastName" />
        <TextField label="lead_name" source="leadName" />
        <TextField label="lead_owner" source="leadOwner" />
        <TextField label="market_segment" source="marketSegment" />
        <TextField label="middle_name" source="middleName" />
        <TextField label="mobile_no" source="mobileNo" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="naming_series" source="namingSeries" />
        <TextField label="no_of_employees" source="noOfEmployees" />
        <TextField label="owner" source="owner" />
        <TextField label="phone" source="phone" />
        <TextField label="phone_ext" source="phoneExt" />
        <TextField label="qualification_status" source="qualificationStatus" />
        <TextField label="qualified_by" source="qualifiedBy" />
        <TextField label="qualified_on" source="qualifiedOn" />
        <TextField label="request_type" source="requestType" />
        <TextField label="salutation" source="salutation" />
        <TextField label="source" source="source" />
        <TextField label="state" source="state" />
        <TextField label="status" source="status" />
        <TextField label="territory" source="territory" />
        <TextField label="title" source="title" />
        <TextField label="type" source="typeField" />
        <TextField label="unsubscribed" source="unsubscribed" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="website" source="website" />{" "}
      </Datagrid>
    </List>
  );
};
