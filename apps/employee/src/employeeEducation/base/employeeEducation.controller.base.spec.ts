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
import { EmployeeEducationController } from "../employeeEducation.controller";
import { EmployeeEducationService } from "../employeeEducation.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  classPer: "exampleClassPer",
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  level: "exampleLevel",
  majOptSubj: "exampleMajOptSubj",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  qualification: "exampleQualification",
  schoolUniv: "exampleSchoolUniv",
  updatedAt: new Date(),
  yearOfPassing: 42,
};
const CREATE_RESULT = {
  classPer: "exampleClassPer",
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  level: "exampleLevel",
  majOptSubj: "exampleMajOptSubj",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  qualification: "exampleQualification",
  schoolUniv: "exampleSchoolUniv",
  updatedAt: new Date(),
  yearOfPassing: 42,
};
const FIND_MANY_RESULT = [
  {
    classPer: "exampleClassPer",
    createdAt: new Date(),
    creation: new Date(),
    docstatus: 42,
    id: "exampleId",
    idx: 42,
    level: "exampleLevel",
    majOptSubj: "exampleMajOptSubj",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    owner: "exampleOwner",
    parent: "exampleParent",
    parentfield: "exampleParentfield",
    parenttype: "exampleParenttype",
    qualification: "exampleQualification",
    schoolUniv: "exampleSchoolUniv",
    updatedAt: new Date(),
    yearOfPassing: 42,
  },
];
const FIND_ONE_RESULT = {
  classPer: "exampleClassPer",
  createdAt: new Date(),
  creation: new Date(),
  docstatus: 42,
  id: "exampleId",
  idx: 42,
  level: "exampleLevel",
  majOptSubj: "exampleMajOptSubj",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  qualification: "exampleQualification",
  schoolUniv: "exampleSchoolUniv",
  updatedAt: new Date(),
  yearOfPassing: 42,
};

const service = {
  createEmployeeEducation() {
    return CREATE_RESULT;
  },
  employeeEducations: () => FIND_MANY_RESULT,
  employeeEducation: ({ where }: { where: { id: string } }) => {
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

describe("EmployeeEducation", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EmployeeEducationService,
          useValue: service,
        },
      ],
      controllers: [EmployeeEducationController],
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

  test("POST /employeeEducations", async () => {
    await request(app.getHttpServer())
      .post("/employeeEducations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /employeeEducations", async () => {
    await request(app.getHttpServer())
      .get("/employeeEducations")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /employeeEducations/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/employeeEducations"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /employeeEducations/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/employeeEducations"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /employeeEducations existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/employeeEducations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/employeeEducations")
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
