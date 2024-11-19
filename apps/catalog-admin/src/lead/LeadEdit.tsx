import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const LeadEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="annual_revenue" source="annualRevenue" />
        <NumberInput step={1} label="blog_subscriber" source="blogSubscriber" />
        <TextInput label="campaign_name" source="campaignName" />
        <TextInput label="city" source="city" />
        <TextInput label="company" source="company" />
        <TextInput label="company_name" source="companyName" />
        <TextInput label="country" source="country" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="customer" source="customer" />
        <NumberInput step={1} label="disabled" source="disabled" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="email_id" source="emailId" type="email" />
        <TextInput label="fax" source="fax" />
        <TextInput label="first_name" source="firstName" />
        <TextInput label="gender" source="gender" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="image" multiline source="image" />
        <TextInput label="industry" source="industry" />
        <TextInput label="job_title" source="jobTitle" />
        <TextInput label="language" source="language" />
        <TextInput label="last_name" source="lastName" />
        <TextInput label="lead_name" source="leadName" />
        <TextInput label="lead_owner" source="leadOwner" />
        <TextInput label="market_segment" source="marketSegment" />
        <TextInput label="middle_name" source="middleName" />
        <TextInput label="mobile_no" source="mobileNo" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="naming_series" source="namingSeries" />
        <TextInput label="no_of_employees" source="noOfEmployees" />
        <TextInput label="owner" source="owner" />
        <TextInput label="phone" source="phone" />
        <TextInput label="phone_ext" source="phoneExt" />
        <TextInput label="qualification_status" source="qualificationStatus" />
        <TextInput label="qualified_by" source="qualifiedBy" />
        <DateTimeInput label="qualified_on" source="qualifiedOn" />
        <TextInput label="request_type" source="requestType" />
        <TextInput label="salutation" source="salutation" />
        <TextInput label="source" source="source" />
        <TextInput label="state" source="state" />
        <TextInput label="status" source="status" />
        <TextInput label="territory" source="territory" />
        <TextInput label="title" source="title" />
        <TextInput label="type" source="typeField" />
        <NumberInput step={1} label="unsubscribed" source="unsubscribed" />
        <TextInput label="website" source="website" />
      </SimpleForm>
    </Edit>
  );
};
