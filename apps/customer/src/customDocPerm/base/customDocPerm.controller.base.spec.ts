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
import { CustomDocPermController } from "../customDocPerm.controller";
import { CustomDocPermService } from "../customDocPerm.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amend: "true",
  cancel: "true",
  create: "true",
  createdAt: new Date(),
  creation: new Date(),
  deleteField: "true",
  docstatus: 42,
  email: "true",
  exportField: "true",
  id: "exampleId",
  idx: 42,
  ifOwner: "true",
  importField: "true",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  permlevel: 42,
  print: "true",
  read: "true",
  report: "true",
  role: "exampleRole",
  selectField: "true",
  share: "true",
  submit: "true",
  updatedAt: new Date(),
  write: "true",
};
const CREATE_RESULT = {
  amend: "true",
  cancel: "true",
  create: "true",
  createdAt: new Date(),
  creation: new Date(),
  deleteField: "true",
  docstatus: 42,
  email: "true",
  exportField: "true",
  id: "exampleId",
  idx: 42,
  ifOwner: "true",
  importField: "true",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  permlevel: 42,
  print: "true",
  read: "true",
  report: "true",
  role: "exampleRole",
  selectField: "true",
  share: "true",
  submit: "true",
  updatedAt: new Date(),
  write: "true",
};
const FIND_MANY_RESULT = [
  {
    amend: "true",
    cancel: "true",
    create: "true",
    createdAt: new Date(),
    creation: new Date(),
    deleteField: "true",
    docstatus: 42,
    email: "true",
    exportField: "true",
    id: "exampleId",
    idx: 42,
    ifOwner: "true",
    importField: "true",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    owner: "exampleOwner",
    parent: "exampleParent",
    permlevel: 42,
    print: "true",
    read: "true",
    report: "true",
    role: "exampleRole",
    selectField: "true",
    share: "true",
    submit: "true",
    updatedAt: new Date(),
    write: "true",
  },
];
const FIND_ONE_RESULT = {
  amend: "true",
  cancel: "true",
  create: "true",
  createdAt: new Date(),
  creation: new Date(),
  deleteField: "true",
  docstatus: 42,
  email: "true",
  exportField: "true",
  id: "exampleId",
  idx: 42,
  ifOwner: "true",
  importField: "true",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  permlevel: 42,
  print: "true",
  read: "true",
  report: "true",
  role: "exampleRole",
  selectField: "true",
  share: "true",
  submit: "true",
  updatedAt: new Date(),
  write: "true",
};

const service = {
  createCustomDocPerm() {
    return CREATE_RESULT;
  },
  customDocPerms: () => FIND_MANY_RESULT,
  customDocPerm: ({ where }: { where: { id: string } }) => {
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

describe("CustomDocPerm", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CustomDocPermService,
          useValue: service,
        },
      ],
      controllers: [CustomDocPermController],
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

  test("POST /customDocPerms", async () => {
    await request(app.getHttpServer())
      .post("/customDocPerms")
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

  test("GET /customDocPerms", async () => {
    await request(app.getHttpServer())
      .get("/customDocPerms")
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

  test("GET /customDocPerms/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/customDocPerms"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /customDocPerms/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/customDocPerms"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /customDocPerms existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/customDocPerms")
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
          .post("/customDocPerms")
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
