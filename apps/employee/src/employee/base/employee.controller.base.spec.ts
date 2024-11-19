import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { EmployeeController } from "../employee.controller";
import { EmployeeService } from "../employee.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  attendanceDeviceId: "exampleAttendanceDeviceId",
  bankAcNo: "exampleBankAcNo",
  bankName: "exampleBankName",
  bio: "exampleBio",
  bloodGroup: "exampleBloodGroup",
  branch: "exampleBranch",
  cellNumber: "exampleCellNumber",
  company: "exampleCompany",
  companyEmail: "exampleCompanyEmail",
  contractEndDate: new Date(),
  createUserPermission: 42,
  createdAt: new Date(),
  creation: new Date(),
  ctc: 42.42,
  currentAccommodationType: "exampleCurrentAccommodationType",
  currentAddress: "exampleCurrentAddress",
  dateOfBirth: new Date(),
  dateOfIssue: new Date(),
  dateOfJoining: new Date(),
  dateOfRetirement: new Date(),
  department: "exampleDepartment",
  designation: "exampleDesignation",
  docstatus: 42,
  emergencyPhoneNumber: "exampleEmergencyPhoneNumber",
  employee: "exampleEmployee",
  employeeName: "exampleEmployeeName",
  employeeNumber: "exampleEmployeeNumber",
  encashmentDate: new Date(),
  familyBackground: "exampleFamilyBackground",
  feedback: "exampleFeedback",
  finalConfirmationDate: new Date(),
  firstName: "exampleFirstName",
  gender: "exampleGender",
  healthDetails: "exampleHealthDetails",
  heldOn: new Date(),
  holidayList: "exampleHolidayList",
  iban: "exampleIban",
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  lastName: "exampleLastName",
  leaveEncashed: "exampleLeaveEncashed",
  lft: 42,
  maritalStatus: "exampleMaritalStatus",
  middleName: "exampleMiddleName",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  newWorkplace: "exampleNewWorkplace",
  noticeNumberOfDays: 42,
  owner: "exampleOwner",
  passportNumber: "examplePassportNumber",
  permanentAccommodationType: "examplePermanentAccommodationType",
  permanentAddress: "examplePermanentAddress",
  personToBeContacted: "examplePersonToBeContacted",
  personalEmail: "examplePersonalEmail",
  placeOfIssue: "examplePlaceOfIssue",
  preferedContactEmail: "examplePreferedContactEmail",
  preferedEmail: "examplePreferedEmail",
  reasonForLeaving: "exampleReasonForLeaving",
  relation: "exampleRelation",
  relievingDate: new Date(),
  reportsTo: "exampleReportsTo",
  resignationLetterDate: new Date(),
  rgt: 42,
  salaryCurrency: "exampleSalaryCurrency",
  salaryMode: "exampleSalaryMode",
  salutation: "exampleSalutation",
  scheduledConfirmationDate: new Date(),
  status: "exampleStatus",
  unsubscribed: 42,
  updatedAt: new Date(),
  userId: "exampleUserId",
  validUpto: new Date(),
};
const CREATE_RESULT = {
  attendanceDeviceId: "exampleAttendanceDeviceId",
  bankAcNo: "exampleBankAcNo",
  bankName: "exampleBankName",
  bio: "exampleBio",
  bloodGroup: "exampleBloodGroup",
  branch: "exampleBranch",
  cellNumber: "exampleCellNumber",
  company: "exampleCompany",
  companyEmail: "exampleCompanyEmail",
  contractEndDate: new Date(),
  createUserPermission: 42,
  createdAt: new Date(),
  creation: new Date(),
  ctc: 42.42,
  currentAccommodationType: "exampleCurrentAccommodationType",
  currentAddress: "exampleCurrentAddress",
  dateOfBirth: new Date(),
  dateOfIssue: new Date(),
  dateOfJoining: new Date(),
  dateOfRetirement: new Date(),
  department: "exampleDepartment",
  designation: "exampleDesignation",
  docstatus: 42,
  emergencyPhoneNumber: "exampleEmergencyPhoneNumber",
  employee: "exampleEmployee",
  employeeName: "exampleEmployeeName",
  employeeNumber: "exampleEmployeeNumber",
  encashmentDate: new Date(),
  familyBackground: "exampleFamilyBackground",
  feedback: "exampleFeedback",
  finalConfirmationDate: new Date(),
  firstName: "exampleFirstName",
  gender: "exampleGender",
  healthDetails: "exampleHealthDetails",
  heldOn: new Date(),
  holidayList: "exampleHolidayList",
  iban: "exampleIban",
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  lastName: "exampleLastName",
  leaveEncashed: "exampleLeaveEncashed",
  lft: 42,
  maritalStatus: "exampleMaritalStatus",
  middleName: "exampleMiddleName",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  newWorkplace: "exampleNewWorkplace",
  noticeNumberOfDays: 42,
  owner: "exampleOwner",
  passportNumber: "examplePassportNumber",
  permanentAccommodationType: "examplePermanentAccommodationType",
  permanentAddress: "examplePermanentAddress",
  personToBeContacted: "examplePersonToBeContacted",
  personalEmail: "examplePersonalEmail",
  placeOfIssue: "examplePlaceOfIssue",
  preferedContactEmail: "examplePreferedContactEmail",
  preferedEmail: "examplePreferedEmail",
  reasonForLeaving: "exampleReasonForLeaving",
  relation: "exampleRelation",
  relievingDate: new Date(),
  reportsTo: "exampleReportsTo",
  resignationLetterDate: new Date(),
  rgt: 42,
  salaryCurrency: "exampleSalaryCurrency",
  salaryMode: "exampleSalaryMode",
  salutation: "exampleSalutation",
  scheduledConfirmationDate: new Date(),
  status: "exampleStatus",
  unsubscribed: 42,
  updatedAt: new Date(),
  userId: "exampleUserId",
  validUpto: new Date(),
};
const FIND_MANY_RESULT = [
  {
    attendanceDeviceId: "exampleAttendanceDeviceId",
    bankAcNo: "exampleBankAcNo",
    bankName: "exampleBankName",
    bio: "exampleBio",
    bloodGroup: "exampleBloodGroup",
    branch: "exampleBranch",
    cellNumber: "exampleCellNumber",
    company: "exampleCompany",
    companyEmail: "exampleCompanyEmail",
    contractEndDate: new Date(),
    createUserPermission: 42,
    createdAt: new Date(),
    creation: new Date(),
    ctc: 42.42,
    currentAccommodationType: "exampleCurrentAccommodationType",
    currentAddress: "exampleCurrentAddress",
    dateOfBirth: new Date(),
    dateOfIssue: new Date(),
    dateOfJoining: new Date(),
    dateOfRetirement: new Date(),
    department: "exampleDepartment",
    designation: "exampleDesignation",
    docstatus: 42,
    emergencyPhoneNumber: "exampleEmergencyPhoneNumber",
    employee: "exampleEmployee",
    employeeName: "exampleEmployeeName",
    employeeNumber: "exampleEmployeeNumber",
    encashmentDate: new Date(),
    familyBackground: "exampleFamilyBackground",
    feedback: "exampleFeedback",
    finalConfirmationDate: new Date(),
    firstName: "exampleFirstName",
    gender: "exampleGender",
    healthDetails: "exampleHealthDetails",
    heldOn: new Date(),
    holidayList: "exampleHolidayList",
    iban: "exampleIban",
    id: "exampleId",
    idx: 42,
    image: "exampleImage",
    lastName: "exampleLastName",
    leaveEncashed: "exampleLeaveEncashed",
    lft: 42,
    maritalStatus: "exampleMaritalStatus",
    middleName: "exampleMiddleName",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    namingSeries: "exampleNamingSeries",
    newWorkplace: "exampleNewWorkplace",
    noticeNumberOfDays: 42,
    owner: "exampleOwner",
    passportNumber: "examplePassportNumber",
    permanentAccommodationType: "examplePermanentAccommodationType",
    permanentAddress: "examplePermanentAddress",
    personToBeContacted: "examplePersonToBeContacted",
    personalEmail: "examplePersonalEmail",
    placeOfIssue: "examplePlaceOfIssue",
    preferedContactEmail: "examplePreferedContactEmail",
    preferedEmail: "examplePreferedEmail",
    reasonForLeaving: "exampleReasonForLeaving",
    relation: "exampleRelation",
    relievingDate: new Date(),
    reportsTo: "exampleReportsTo",
    resignationLetterDate: new Date(),
    rgt: 42,
    salaryCurrency: "exampleSalaryCurrency",
    salaryMode: "exampleSalaryMode",
    salutation: "exampleSalutation",
    scheduledConfirmationDate: new Date(),
    status: "exampleStatus",
    unsubscribed: 42,
    updatedAt: new Date(),
    userId: "exampleUserId",
    validUpto: new Date(),
  },
];
const FIND_ONE_RESULT = {
  attendanceDeviceId: "exampleAttendanceDeviceId",
  bankAcNo: "exampleBankAcNo",
  bankName: "exampleBankName",
  bio: "exampleBio",
  bloodGroup: "exampleBloodGroup",
  branch: "exampleBranch",
  cellNumber: "exampleCellNumber",
  company: "exampleCompany",
  companyEmail: "exampleCompanyEmail",
  contractEndDate: new Date(),
  createUserPermission: 42,
  createdAt: new Date(),
  creation: new Date(),
  ctc: 42.42,
  currentAccommodationType: "exampleCurrentAccommodationType",
  currentAddress: "exampleCurrentAddress",
  dateOfBirth: new Date(),
  dateOfIssue: new Date(),
  dateOfJoining: new Date(),
  dateOfRetirement: new Date(),
  department: "exampleDepartment",
  designation: "exampleDesignation",
  docstatus: 42,
  emergencyPhoneNumber: "exampleEmergencyPhoneNumber",
  employee: "exampleEmployee",
  employeeName: "exampleEmployeeName",
  employeeNumber: "exampleEmployeeNumber",
  encashmentDate: new Date(),
  familyBackground: "exampleFamilyBackground",
  feedback: "exampleFeedback",
  finalConfirmationDate: new Date(),
  firstName: "exampleFirstName",
  gender: "exampleGender",
  healthDetails: "exampleHealthDetails",
  heldOn: new Date(),
  holidayList: "exampleHolidayList",
  iban: "exampleIban",
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  lastName: "exampleLastName",
  leaveEncashed: "exampleLeaveEncashed",
  lft: 42,
  maritalStatus: "exampleMaritalStatus",
  middleName: "exampleMiddleName",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  newWorkplace: "exampleNewWorkplace",
  noticeNumberOfDays: 42,
  owner: "exampleOwner",
  passportNumber: "examplePassportNumber",
  permanentAccommodationType: "examplePermanentAccommodationType",
  permanentAddress: "examplePermanentAddress",
  personToBeContacted: "examplePersonToBeContacted",
  personalEmail: "examplePersonalEmail",
  placeOfIssue: "examplePlaceOfIssue",
  preferedContactEmail: "examplePreferedContactEmail",
  preferedEmail: "examplePreferedEmail",
  reasonForLeaving: "exampleReasonForLeaving",
  relation: "exampleRelation",
  relievingDate: new Date(),
  reportsTo: "exampleReportsTo",
  resignationLetterDate: new Date(),
  rgt: 42,
  salaryCurrency: "exampleSalaryCurrency",
  salaryMode: "exampleSalaryMode",
  salutation: "exampleSalutation",
  scheduledConfirmationDate: new Date(),
  status: "exampleStatus",
  unsubscribed: 42,
  updatedAt: new Date(),
  userId: "exampleUserId",
  validUpto: new Date(),
};

const service = {
  createEmployee() {
    return CREATE_RESULT;
  },
  employees: () => FIND_MANY_RESULT,
  employee: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Employee", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EmployeeService,
          useValue: service,
        },
      ],
      controllers: [EmployeeController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /employees", async () => {
    await request(app.getHttpServer())
      .post("/employees")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        contractEndDate: CREATE_RESULT.contractEndDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        dateOfBirth: CREATE_RESULT.dateOfBirth.toISOString(),
        dateOfIssue: CREATE_RESULT.dateOfIssue.toISOString(),
        dateOfJoining: CREATE_RESULT.dateOfJoining.toISOString(),
        dateOfRetirement: CREATE_RESULT.dateOfRetirement.toISOString(),
        encashmentDate: CREATE_RESULT.encashmentDate.toISOString(),
        finalConfirmationDate:
          CREATE_RESULT.finalConfirmationDate.toISOString(),
        heldOn: CREATE_RESULT.heldOn.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        relievingDate: CREATE_RESULT.relievingDate.toISOString(),
        resignationLetterDate:
          CREATE_RESULT.resignationLetterDate.toISOString(),
        scheduledConfirmationDate:
          CREATE_RESULT.scheduledConfirmationDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        validUpto: CREATE_RESULT.validUpto.toISOString(),
      });
  });

  test("GET /employees", async () => {
    await request(app.getHttpServer())
      .get("/employees")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          contractEndDate: FIND_MANY_RESULT[0].contractEndDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          dateOfBirth: FIND_MANY_RESULT[0].dateOfBirth.toISOString(),
          dateOfIssue: FIND_MANY_RESULT[0].dateOfIssue.toISOString(),
          dateOfJoining: FIND_MANY_RESULT[0].dateOfJoining.toISOString(),
          dateOfRetirement: FIND_MANY_RESULT[0].dateOfRetirement.toISOString(),
          encashmentDate: FIND_MANY_RESULT[0].encashmentDate.toISOString(),
          finalConfirmationDate:
            FIND_MANY_RESULT[0].finalConfirmationDate.toISOString(),
          heldOn: FIND_MANY_RESULT[0].heldOn.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          relievingDate: FIND_MANY_RESULT[0].relievingDate.toISOString(),
          resignationLetterDate:
            FIND_MANY_RESULT[0].resignationLetterDate.toISOString(),
          scheduledConfirmationDate:
            FIND_MANY_RESULT[0].scheduledConfirmationDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          validUpto: FIND_MANY_RESULT[0].validUpto.toISOString(),
        },
      ]);
  });

  test("GET /employees/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/employees"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /employees/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/employees"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        contractEndDate: FIND_ONE_RESULT.contractEndDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        dateOfBirth: FIND_ONE_RESULT.dateOfBirth.toISOString(),
        dateOfIssue: FIND_ONE_RESULT.dateOfIssue.toISOString(),
        dateOfJoining: FIND_ONE_RESULT.dateOfJoining.toISOString(),
        dateOfRetirement: FIND_ONE_RESULT.dateOfRetirement.toISOString(),
        encashmentDate: FIND_ONE_RESULT.encashmentDate.toISOString(),
        finalConfirmationDate:
          FIND_ONE_RESULT.finalConfirmationDate.toISOString(),
        heldOn: FIND_ONE_RESULT.heldOn.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        relievingDate: FIND_ONE_RESULT.relievingDate.toISOString(),
        resignationLetterDate:
          FIND_ONE_RESULT.resignationLetterDate.toISOString(),
        scheduledConfirmationDate:
          FIND_ONE_RESULT.scheduledConfirmationDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        validUpto: FIND_ONE_RESULT.validUpto.toISOString(),
      });
  });

  test("POST /employees existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/employees")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        contractEndDate: CREATE_RESULT.contractEndDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        dateOfBirth: CREATE_RESULT.dateOfBirth.toISOString(),
        dateOfIssue: CREATE_RESULT.dateOfIssue.toISOString(),
        dateOfJoining: CREATE_RESULT.dateOfJoining.toISOString(),
        dateOfRetirement: CREATE_RESULT.dateOfRetirement.toISOString(),
        encashmentDate: CREATE_RESULT.encashmentDate.toISOString(),
        finalConfirmationDate:
          CREATE_RESULT.finalConfirmationDate.toISOString(),
        heldOn: CREATE_RESULT.heldOn.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        relievingDate: CREATE_RESULT.relievingDate.toISOString(),
        resignationLetterDate:
          CREATE_RESULT.resignationLetterDate.toISOString(),
        scheduledConfirmationDate:
          CREATE_RESULT.scheduledConfirmationDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        validUpto: CREATE_RESULT.validUpto.toISOString(),
      })
      .then(function () {
        agent
          .post("/employees")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
