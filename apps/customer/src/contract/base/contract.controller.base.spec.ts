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
import { ContractController } from "../contract.controller";
import { ContractService } from "../contract.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amendedFrom: "exampleAmendedFrom",
  contractTemplate: "exampleContractTemplate",
  contractTerms: "exampleContractTerms",
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  documentName: "exampleDocumentName",
  documentType: "exampleDocumentType",
  endDate: new Date(),
  fulfilmentDeadline: new Date(),
  fulfilmentStatus: "exampleFulfilmentStatus",
  id: "exampleId",
  idx: 42,
  ipAddress: "exampleIpAddress",
  isSigned: "true",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  partyName: "examplePartyName",
  partyType: "examplePartyType",
  partyUser: "examplePartyUser",
  requiresFulfilment: "true",
  signedByCompany: "exampleSignedByCompany",
  signedOn: new Date(),
  signee: "exampleSignee",
  signeeCompany: "exampleSigneeCompany",
  startDate: new Date(),
  status: "exampleStatus",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  amendedFrom: "exampleAmendedFrom",
  contractTemplate: "exampleContractTemplate",
  contractTerms: "exampleContractTerms",
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  documentName: "exampleDocumentName",
  documentType: "exampleDocumentType",
  endDate: new Date(),
  fulfilmentDeadline: new Date(),
  fulfilmentStatus: "exampleFulfilmentStatus",
  id: "exampleId",
  idx: 42,
  ipAddress: "exampleIpAddress",
  isSigned: "true",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  partyName: "examplePartyName",
  partyType: "examplePartyType",
  partyUser: "examplePartyUser",
  requiresFulfilment: "true",
  signedByCompany: "exampleSignedByCompany",
  signedOn: new Date(),
  signee: "exampleSignee",
  signeeCompany: "exampleSigneeCompany",
  startDate: new Date(),
  status: "exampleStatus",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    amendedFrom: "exampleAmendedFrom",
    contractTemplate: "exampleContractTemplate",
    contractTerms: "exampleContractTerms",
    createdAt: new Date(),
    creation: new Date(),
    docstatus: 42,
    documentName: "exampleDocumentName",
    documentType: "exampleDocumentType",
    endDate: new Date(),
    fulfilmentDeadline: new Date(),
    fulfilmentStatus: "exampleFulfilmentStatus",
    id: "exampleId",
    idx: 42,
    ipAddress: "exampleIpAddress",
    isSigned: "true",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    owner: "exampleOwner",
    partyName: "examplePartyName",
    partyType: "examplePartyType",
    partyUser: "examplePartyUser",
    requiresFulfilment: "true",
    signedByCompany: "exampleSignedByCompany",
    signedOn: new Date(),
    signee: "exampleSignee",
    signeeCompany: "exampleSigneeCompany",
    startDate: new Date(),
    status: "exampleStatus",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  amendedFrom: "exampleAmendedFrom",
  contractTemplate: "exampleContractTemplate",
  contractTerms: "exampleContractTerms",
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  documentName: "exampleDocumentName",
  documentType: "exampleDocumentType",
  endDate: new Date(),
  fulfilmentDeadline: new Date(),
  fulfilmentStatus: "exampleFulfilmentStatus",
  id: "exampleId",
  idx: 42,
  ipAddress: "exampleIpAddress",
  isSigned: "true",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  partyName: "examplePartyName",
  partyType: "examplePartyType",
  partyUser: "examplePartyUser",
  requiresFulfilment: "true",
  signedByCompany: "exampleSignedByCompany",
  signedOn: new Date(),
  signee: "exampleSignee",
  signeeCompany: "exampleSigneeCompany",
  startDate: new Date(),
  status: "exampleStatus",
  updatedAt: new Date(),
};

const service = {
  createContract() {
    return CREATE_RESULT;
  },
  contracts: () => FIND_MANY_RESULT,
  contract: ({ where }: { where: { id: string } }) => {
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

describe("Contract", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ContractService,
          useValue: service,
        },
      ],
      controllers: [ContractController],
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

  test("POST /contracts", async () => {
    await request(app.getHttpServer())
      .post("/contracts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        endDate: CREATE_RESULT.endDate.toISOString(),
        fulfilmentDeadline: CREATE_RESULT.fulfilmentDeadline.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        signedOn: CREATE_RESULT.signedOn.toISOString(),
        startDate: CREATE_RESULT.startDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /contracts", async () => {
    await request(app.getHttpServer())
      .get("/contracts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          endDate: FIND_MANY_RESULT[0].endDate.toISOString(),
          fulfilmentDeadline:
            FIND_MANY_RESULT[0].fulfilmentDeadline.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          signedOn: FIND_MANY_RESULT[0].signedOn.toISOString(),
          startDate: FIND_MANY_RESULT[0].startDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /contracts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/contracts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /contracts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/contracts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        endDate: FIND_ONE_RESULT.endDate.toISOString(),
        fulfilmentDeadline: FIND_ONE_RESULT.fulfilmentDeadline.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        signedOn: FIND_ONE_RESULT.signedOn.toISOString(),
        startDate: FIND_ONE_RESULT.startDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /contracts existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/contracts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        endDate: CREATE_RESULT.endDate.toISOString(),
        fulfilmentDeadline: CREATE_RESULT.fulfilmentDeadline.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        signedOn: CREATE_RESULT.signedOn.toISOString(),
        startDate: CREATE_RESULT.startDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/contracts")
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
