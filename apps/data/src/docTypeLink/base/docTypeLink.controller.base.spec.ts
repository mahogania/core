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
import { DocTypeLinkController } from "../docTypeLink.controller";
import { DocTypeLinkService } from "../docTypeLink.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  creation: new Date(),
  custom: 42,
  docstatus: 42,
  group: "exampleGroup",
  hidden: 42,
  id: "exampleId",
  idx: 42,
  isChildTable: 42,
  linkDoctype: "exampleLinkDoctype",
  linkFieldname: "exampleLinkFieldname",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentDoctype: "exampleParentDoctype",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  tableFieldname: "exampleTableFieldname",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  creation: new Date(),
  custom: 42,
  docstatus: 42,
  group: "exampleGroup",
  hidden: 42,
  id: "exampleId",
  idx: 42,
  isChildTable: 42,
  linkDoctype: "exampleLinkDoctype",
  linkFieldname: "exampleLinkFieldname",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentDoctype: "exampleParentDoctype",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  tableFieldname: "exampleTableFieldname",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    creation: new Date(),
    custom: 42,
    docstatus: 42,
    group: "exampleGroup",
    hidden: 42,
    id: "exampleId",
    idx: 42,
    isChildTable: 42,
    linkDoctype: "exampleLinkDoctype",
    linkFieldname: "exampleLinkFieldname",
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    name: "exampleName",
    owner: "exampleOwner",
    parent: "exampleParent",
    parentDoctype: "exampleParentDoctype",
    parentfield: "exampleParentfield",
    parenttype: "exampleParenttype",
    tableFieldname: "exampleTableFieldname",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  creation: new Date(),
  custom: 42,
  docstatus: 42,
  group: "exampleGroup",
  hidden: 42,
  id: "exampleId",
  idx: 42,
  isChildTable: 42,
  linkDoctype: "exampleLinkDoctype",
  linkFieldname: "exampleLinkFieldname",
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  name: "exampleName",
  owner: "exampleOwner",
  parent: "exampleParent",
  parentDoctype: "exampleParentDoctype",
  parentfield: "exampleParentfield",
  parenttype: "exampleParenttype",
  tableFieldname: "exampleTableFieldname",
  updatedAt: new Date(),
};

const service = {
  createDocTypeLink() {
    return CREATE_RESULT;
  },
  docTypeLinks: () => FIND_MANY_RESULT,
  docTypeLink: ({ where }: { where: { id: string } }) => {
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

describe("DocTypeLink", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DocTypeLinkService,
          useValue: service,
        },
      ],
      controllers: [DocTypeLinkController],
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

  test("POST /docTypeLinks", async () => {
    await request(app.getHttpServer())
      .post("/docTypeLinks")
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

  test("GET /docTypeLinks", async () => {
    await request(app.getHttpServer())
      .get("/docTypeLinks")
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

  test("GET /docTypeLinks/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/docTypeLinks"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /docTypeLinks/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/docTypeLinks"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /docTypeLinks existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/docTypeLinks")
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
          .post("/docTypeLinks")
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
