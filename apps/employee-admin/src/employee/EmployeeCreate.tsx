import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const EmployeeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="attendance_device_id" source="attendanceDeviceId" />
        <TextInput label="bank_ac_no" source="bankAcNo" />
        <TextInput label="bank_name" source="bankName" />
        <TextInput label="bio" multiline source="bio" />
        <TextInput label="blood_group" source="bloodGroup" />
        <TextInput label="branch" source="branch" />
        <TextInput label="cell_number" source="cellNumber" />
        <TextInput label="company" source="company" />
        <TextInput label="company_email" source="companyEmail" />
        <DateTimeInput label="contract_end_date" source="contractEndDate" />
        <NumberInput
          step={1}
          label="create_user_permission"
          source="createUserPermission"
        />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput label="ctc" source="ctc" />
        <TextInput
          label="current_accommodation_type"
          source="currentAccommodationType"
        />
        <TextInput label="current_address" multiline source="currentAddress" />
        <DateTimeInput label="date_of_birth" source="dateOfBirth" />
        <DateTimeInput label="date_of_issue" source="dateOfIssue" />
        <DateTimeInput label="date_of_joining" source="dateOfJoining" />
        <DateTimeInput label="date_of_retirement" source="dateOfRetirement" />
        <TextInput label="department" source="department" />
        <TextInput label="designation" source="designation" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput
          label="emergency_phone_number"
          source="emergencyPhoneNumber"
        />
        <TextInput label="employee" source="employee" />
        <TextInput label="employee_name" source="employeeName" />
        <TextInput label="employee_number" source="employeeNumber" />
        <DateTimeInput label="encashment_date" source="encashmentDate" />
        <TextInput
          label="family_background"
          multiline
          source="familyBackground"
        />
        <TextInput label="feedback" multiline source="feedback" />
        <DateTimeInput
          label="final_confirmation_date"
          source="finalConfirmationDate"
        />
        <TextInput label="first_name" source="firstName" />
        <TextInput label="gender" source="gender" />
        <TextInput label="health_details" multiline source="healthDetails" />
        <DateTimeInput label="held_on" source="heldOn" />
        <TextInput label="holiday_list" source="holidayList" />
        <TextInput label="iban" source="iban" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="image" multiline source="image" />
        <TextInput label="last_name" source="lastName" />
        <TextInput label="leave_encashed" source="leaveEncashed" />
        <NumberInput step={1} label="lft" source="lft" />
        <TextInput label="marital_status" source="maritalStatus" />
        <TextInput label="middle_name" source="middleName" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="naming_series" source="namingSeries" />
        <TextInput label="new_workplace" source="newWorkplace" />
        <NumberInput
          step={1}
          label="notice_number_of_days"
          source="noticeNumberOfDays"
        />
        <TextInput label="owner" source="owner" />
        <TextInput label="passport_number" source="passportNumber" />
        <TextInput
          label="permanent_accommodation_type"
          source="permanentAccommodationType"
        />
        <TextInput
          label="permanent_address"
          multiline
          source="permanentAddress"
        />
        <TextInput
          label="person_to_be_contacted"
          source="personToBeContacted"
        />
        <TextInput label="personal_email" source="personalEmail" />
        <TextInput label="place_of_issue" source="placeOfIssue" />
        <TextInput
          label="prefered_contact_email"
          source="preferedContactEmail"
        />
        <TextInput label="prefered_email" source="preferedEmail" />
        <TextInput
          label="reason_for_leaving"
          multiline
          source="reasonForLeaving"
        />
        <TextInput label="relation" source="relation" />
        <DateTimeInput label="relieving_date" source="relievingDate" />
        <TextInput label="reports_to" source="reportsTo" />
        <DateTimeInput
          label="resignation_letter_date"
          source="resignationLetterDate"
        />
        <NumberInput step={1} label="rgt" source="rgt" />
        <TextInput label="salary_currency" source="salaryCurrency" />
        <TextInput label="salary_mode" source="salaryMode" />
        <TextInput label="salutation" source="salutation" />
        <DateTimeInput
          label="scheduled_confirmation_date"
          source="scheduledConfirmationDate"
        />
        <TextInput label="status" source="status" />
        <NumberInput step={1} label="unsubscribed" source="unsubscribed" />
        <TextInput label="user_id" source="userId" />
        <DateTimeInput label="valid_upto" source="validUpto" />
      </SimpleForm>
    </Create>
  );
};
