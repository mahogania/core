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
import { CargoDeclarationTransportController } from "../cargoDeclarationTransport.controller";
import { CargoDeclarationTransportService } from "../cargoDeclarationTransport.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  chssNo: "exampleChssNo",
  createdAt: new Date(),
  delYn: "exampleDelYn",
  drvrNm: "exampleDrvrNm",
  drvrPsprNo: "exampleDrvrPsprNo",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  id: "exampleId",
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  mrn: "exampleMrn",
  trnpMethNatCd: "exampleTrnpMethNatCd",
  updatedAt: new Date(),
  vhclMnurCd: "exampleVhclMnurCd",
  vhclNttn: 42.42,
  vhclPtCd: "exampleVhclPtCd",
  vhclRgsrNo: "exampleVhclRgsrNo",
  vhclSrno: 42,
  vhclTtn: 42.42,
};
const CREATE_RESULT = {
  chssNo: "exampleChssNo",
  createdAt: new Date(),
  delYn: "exampleDelYn",
  drvrNm: "exampleDrvrNm",
  drvrPsprNo: "exampleDrvrPsprNo",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  id: "exampleId",
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  mrn: "exampleMrn",
  trnpMethNatCd: "exampleTrnpMethNatCd",
  updatedAt: new Date(),
  vhclMnurCd: "exampleVhclMnurCd",
  vhclNttn: 42.42,
  vhclPtCd: "exampleVhclPtCd",
  vhclRgsrNo: "exampleVhclRgsrNo",
  vhclSrno: 42,
  vhclTtn: 42.42,
};
const FIND_MANY_RESULT = [
  {
    chssNo: "exampleChssNo",
    createdAt: new Date(),
    delYn: "exampleDelYn",
    drvrNm: "exampleDrvrNm",
    drvrPsprNo: "exampleDrvrPsprNo",
    frstRegstId: "exampleFrstRegstId",
    frstRgsrDttm: new Date(),
    id: "exampleId",
    lastChgDttm: new Date(),
    lastChprId: "exampleLastChprId",
    mrn: "exampleMrn",
    trnpMethNatCd: "exampleTrnpMethNatCd",
    updatedAt: new Date(),
    vhclMnurCd: "exampleVhclMnurCd",
    vhclNttn: 42.42,
    vhclPtCd: "exampleVhclPtCd",
    vhclRgsrNo: "exampleVhclRgsrNo",
    vhclSrno: 42,
    vhclTtn: 42.42,
  },
];
const FIND_ONE_RESULT = {
  chssNo: "exampleChssNo",
  createdAt: new Date(),
  delYn: "exampleDelYn",
  drvrNm: "exampleDrvrNm",
  drvrPsprNo: "exampleDrvrPsprNo",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  id: "exampleId",
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  mrn: "exampleMrn",
  trnpMethNatCd: "exampleTrnpMethNatCd",
  updatedAt: new Date(),
  vhclMnurCd: "exampleVhclMnurCd",
  vhclNttn: 42.42,
  vhclPtCd: "exampleVhclPtCd",
  vhclRgsrNo: "exampleVhclRgsrNo",
  vhclSrno: 42,
  vhclTtn: 42.42,
};

const service = {
  createCargoDeclarationTransport() {
    return CREATE_RESULT;
  },
  cargoDeclarationTransports: () => FIND_MANY_RESULT,
  cargoDeclarationTransport: ({ where }: { where: { id: string } }) => {
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

describe("CargoDeclarationTransport", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CargoDeclarationTransportService,
          useValue: service,
        },
      ],
      controllers: [CargoDeclarationTransportController],
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

  test("POST /cargoDeclarationTransports", async () => {
    await request(app.getHttpServer())
      .post("/cargoDeclarationTransports")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        frstRgsrDttm: CREATE_RESULT.frstRgsrDttm.toISOString(),
        lastChgDttm: CREATE_RESULT.lastChgDttm.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /cargoDeclarationTransports", async () => {
    await request(app.getHttpServer())
      .get("/cargoDeclarationTransports")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          frstRgsrDttm: FIND_MANY_RESULT[0].frstRgsrDttm.toISOString(),
          lastChgDttm: FIND_MANY_RESULT[0].lastChgDttm.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /cargoDeclarationTransports/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/cargoDeclarationTransports"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /cargoDeclarationTransports/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/cargoDeclarationTransports"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        frstRgsrDttm: FIND_ONE_RESULT.frstRgsrDttm.toISOString(),
        lastChgDttm: FIND_ONE_RESULT.lastChgDttm.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /cargoDeclarationTransports existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/cargoDeclarationTransports")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        frstRgsrDttm: CREATE_RESULT.frstRgsrDttm.toISOString(),
        lastChgDttm: CREATE_RESULT.lastChgDttm.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/cargoDeclarationTransports")
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
