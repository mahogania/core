import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EmployeeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Employees"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="attendance_device_id" source="attendanceDeviceId" />
        <TextField label="bank_ac_no" source="bankAcNo" />
        <TextField label="bank_name" source="bankName" />
        <TextField label="bio" source="bio" />
        <TextField label="blood_group" source="bloodGroup" />
        <TextField label="branch" source="branch" />
        <TextField label="cell_number" source="cellNumber" />
        <TextField label="company" source="company" />
        <TextField label="company_email" source="companyEmail" />
        <TextField label="contract_end_date" source="contractEndDate" />
        <TextField
          label="create_user_permission"
          source="createUserPermission"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="ctc" source="ctc" />
        <TextField
          label="current_accommodation_type"
          source="currentAccommodationType"
        />
        <TextField label="current_address" source="currentAddress" />
        <TextField label="date_of_birth" source="dateOfBirth" />
        <TextField label="date_of_issue" source="dateOfIssue" />
        <TextField label="date_of_joining" source="dateOfJoining" />
        <TextField label="date_of_retirement" source="dateOfRetirement" />
        <TextField label="department" source="department" />
        <TextField label="designation" source="designation" />
        <TextField label="docstatus" source="docstatus" />
        <TextField
          label="emergency_phone_number"
          source="emergencyPhoneNumber"
        />
        <TextField label="employee" source="employee" />
        <TextField label="employee_name" source="employeeName" />
        <TextField label="employee_number" source="employeeNumber" />
        <TextField label="encashment_date" source="encashmentDate" />
        <TextField label="family_background" source="familyBackground" />
        <TextField label="feedback" source="feedback" />
        <TextField
          label="final_confirmation_date"
          source="finalConfirmationDate"
        />
        <TextField label="first_name" source="firstName" />
        <TextField label="gender" source="gender" />
        <TextField label="health_details" source="healthDetails" />
        <TextField label="held_on" source="heldOn" />
        <TextField label="holiday_list" source="holidayList" />
        <TextField label="iban" source="iban" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="image" source="image" />
        <TextField label="last_name" source="lastName" />
        <TextField label="leave_encashed" source="leaveEncashed" />
        <TextField label="lft" source="lft" />
        <TextField label="marital_status" source="maritalStatus" />
        <TextField label="middle_name" source="middleName" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="naming_series" source="namingSeries" />
        <TextField label="new_workplace" source="newWorkplace" />
        <TextField label="notice_number_of_days" source="noticeNumberOfDays" />
        <TextField label="owner" source="owner" />
        <TextField label="passport_number" source="passportNumber" />
        <TextField
          label="permanent_accommodation_type"
          source="permanentAccommodationType"
        />
        <TextField label="permanent_address" source="permanentAddress" />
        <TextField
          label="person_to_be_contacted"
          source="personToBeContacted"
        />
        <TextField label="personal_email" source="personalEmail" />
        <TextField label="place_of_issue" source="placeOfIssue" />
        <TextField
          label="prefered_contact_email"
          source="preferedContactEmail"
        />
        <TextField label="prefered_email" source="preferedEmail" />
        <TextField label="reason_for_leaving" source="reasonForLeaving" />
        <TextField label="relation" source="relation" />
        <TextField label="relieving_date" source="relievingDate" />
        <TextField label="reports_to" source="reportsTo" />
        <TextField
          label="resignation_letter_date"
          source="resignationLetterDate"
        />
        <TextField label="rgt" source="rgt" />
        <TextField label="salary_currency" source="salaryCurrency" />
        <TextField label="salary_mode" source="salaryMode" />
        <TextField label="salutation" source="salutation" />
        <TextField
          label="scheduled_confirmation_date"
          source="scheduledConfirmationDate"
        />
        <TextField label="status" source="status" />
        <TextField label="unsubscribed" source="unsubscribed" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user_id" source="userId" />
        <TextField label="valid_upto" source="validUpto" />{" "}
      </Datagrid>
    </List>
  );
};
