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
import { LeadController } from "../lead.controller";
import { LeadService } from "../lead.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  annualRevenue: 42.42,
  blogSubscriber: 42,
  campaignName: "exampleCampaignName",
  city: "exampleCity",
  company: "exampleCompany",
  companyName: "exampleCompanyName",
  country: "exampleCountry",
  createdAt: new Date(),
  creation: new Date(),
  customer: "exampleCustomer",
  disabled: 42,
  docstatus: 42,
  emailId: "exampleEmailId",
  fax: "exampleFax",
  firstName: "exampleFirstName",
  gender: "exampleGender",
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  industry: "exampleIndustry",
  jobTitle: "exampleJobTitle",
  language: "exampleLanguage",
  lastName: "exampleLastName",
  leadName: "exampleLeadName",
  leadOwner: "exampleLeadOwner",
  marketSegment: "exampleMarketSegment",
  middleName: "exampleMiddleName",
  mobileNo: "exampleMobileNo",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  noOfEmployees: "exampleNoOfEmployees",
  owner: "exampleOwner",
  phone: "examplePhone",
  phoneExt: "examplePhoneExt",
  qualificationStatus: "exampleQualificationStatus",
  qualifiedBy: "exampleQualifiedBy",
  qualifiedOn: new Date(),
  requestType: "exampleRequestType",
  salutation: "exampleSalutation",
  source: "exampleSource",
  state: "exampleState",
  status: "exampleStatus",
  territory: "exampleTerritory",
  title: "exampleTitle",
  typeField: "exampleTypeField",
  unsubscribed: 42,
  updatedAt: new Date(),
  website: "exampleWebsite",
};
const CREATE_RESULT = {
  annualRevenue: 42.42,
  blogSubscriber: 42,
  campaignName: "exampleCampaignName",
  city: "exampleCity",
  company: "exampleCompany",
  companyName: "exampleCompanyName",
  country: "exampleCountry",
  createdAt: new Date(),
  creation: new Date(),
  customer: "exampleCustomer",
  disabled: 42,
  docstatus: 42,
  emailId: "exampleEmailId",
  fax: "exampleFax",
  firstName: "exampleFirstName",
  gender: "exampleGender",
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  industry: "exampleIndustry",
  jobTitle: "exampleJobTitle",
  language: "exampleLanguage",
  lastName: "exampleLastName",
  leadName: "exampleLeadName",
  leadOwner: "exampleLeadOwner",
  marketSegment: "exampleMarketSegment",
  middleName: "exampleMiddleName",
  mobileNo: "exampleMobileNo",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  noOfEmployees: "exampleNoOfEmployees",
  owner: "exampleOwner",
  phone: "examplePhone",
  phoneExt: "examplePhoneExt",
  qualificationStatus: "exampleQualificationStatus",
  qualifiedBy: "exampleQualifiedBy",
  qualifiedOn: new Date(),
  requestType: "exampleRequestType",
  salutation: "exampleSalutation",
  source: "exampleSource",
  state: "exampleState",
  status: "exampleStatus",
  territory: "exampleTerritory",
  title: "exampleTitle",
  typeField: "exampleTypeField",
  unsubscribed: 42,
  updatedAt: new Date(),
  website: "exampleWebsite",
};
const FIND_MANY_RESULT = [
  {
    annualRevenue: 42.42,
    blogSubscriber: 42,
    campaignName: "exampleCampaignName",
    city: "exampleCity",
    company: "exampleCompany",
    companyName: "exampleCompanyName",
    country: "exampleCountry",
    createdAt: new Date(),
    creation: new Date(),
    customer: "exampleCustomer",
    disabled: 42,
    docstatus: 42,
    emailId: "exampleEmailId",
    fax: "exampleFax",
    firstName: "exampleFirstName",
    gender: "exampleGender",
    id: "exampleId",
    idx: 42,
    image: "exampleImage",
    industry: "exampleIndustry",
    jobTitle: "exampleJobTitle",
    language: "exampleLanguage",
    lastName: "exampleLastName",
    leadName: "exampleLeadName",
    leadOwner: "exampleLeadOwner",
    marketSegment: "exampleMarketSegment",
    middleName: "exampleMiddleName",
    mobileNo: "exampleMobileNo",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    namingSeries: "exampleNamingSeries",
    noOfEmployees: "exampleNoOfEmployees",
    owner: "exampleOwner",
    phone: "examplePhone",
    phoneExt: "examplePhoneExt",
    qualificationStatus: "exampleQualificationStatus",
    qualifiedBy: "exampleQualifiedBy",
    qualifiedOn: new Date(),
    requestType: "exampleRequestType",
    salutation: "exampleSalutation",
    source: "exampleSource",
    state: "exampleState",
    status: "exampleStatus",
    territory: "exampleTerritory",
    title: "exampleTitle",
    typeField: "exampleTypeField",
    unsubscribed: 42,
    updatedAt: new Date(),
    website: "exampleWebsite",
  },
];
const FIND_ONE_RESULT = {
  annualRevenue: 42.42,
  blogSubscriber: 42,
  campaignName: "exampleCampaignName",
  city: "exampleCity",
  company: "exampleCompany",
  companyName: "exampleCompanyName",
  country: "exampleCountry",
  createdAt: new Date(),
  creation: new Date(),
  customer: "exampleCustomer",
  disabled: 42,
  docstatus: 42,
  emailId: "exampleEmailId",
  fax: "exampleFax",
  firstName: "exampleFirstName",
  gender: "exampleGender",
  id: "exampleId",
  idx: 42,
  image: "exampleImage",
  industry: "exampleIndustry",
  jobTitle: "exampleJobTitle",
  language: "exampleLanguage",
  lastName: "exampleLastName",
  leadName: "exampleLeadName",
  leadOwner: "exampleLeadOwner",
  marketSegment: "exampleMarketSegment",
  middleName: "exampleMiddleName",
  mobileNo: "exampleMobileNo",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  namingSeries: "exampleNamingSeries",
  noOfEmployees: "exampleNoOfEmployees",
  owner: "exampleOwner",
  phone: "examplePhone",
  phoneExt: "examplePhoneExt",
  qualificationStatus: "exampleQualificationStatus",
  qualifiedBy: "exampleQualifiedBy",
  qualifiedOn: new Date(),
  requestType: "exampleRequestType",
  salutation: "exampleSalutation",
  source: "exampleSource",
  state: "exampleState",
  status: "exampleStatus",
  territory: "exampleTerritory",
  title: "exampleTitle",
  typeField: "exampleTypeField",
  unsubscribed: 42,
  updatedAt: new Date(),
  website: "exampleWebsite",
};

const service = {
  createLead() {
    return CREATE_RESULT;
  },
  leads: () => FIND_MANY_RESULT,
  lead: ({ where }: { where: { id: string } }) => {
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

describe("Lead", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: LeadService,
          useValue: service,
        },
      ],
      controllers: [LeadController],
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

  test("POST /leads", async () => {
    await request(app.getHttpServer())
      .post("/leads")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        qualifiedOn: CREATE_RESULT.qualifiedOn.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /leads", async () => {
    await request(app.getHttpServer())
      .get("/leads")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          qualifiedOn: FIND_MANY_RESULT[0].qualifiedOn.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /leads/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/leads"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /leads/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/leads"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        qualifiedOn: FIND_ONE_RESULT.qualifiedOn.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /leads existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/leads")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        qualifiedOn: CREATE_RESULT.qualifiedOn.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/leads")
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
