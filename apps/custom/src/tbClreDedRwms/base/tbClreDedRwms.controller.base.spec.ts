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
import { TbClreDedRwmsController } from "../tbClreDedRwms.controller";
import { TbClreDedRwmsService } from "../tbClreDedRwms.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  bfCmdtClsfSpelCd: "exampleBfCmdtClsfSpelCd",
  bfDtlDcshNo: "exampleBfDtlDcshNo",
  bfHsCd: "exampleBfHsCd",
  bfPdlsNo: "exampleBfPdlsNo",
  createdAt: new Date(),
  delYn: "exampleDelYn",
  divdFfmnTpCd: "exampleDivdFfmnTpCd",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  id: "exampleId",
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  mdfyDgcnt: 42,
  ntwg: 42.42,
  pdlsNo: "examplePdlsNo",
  qty: 42.42,
  qtyUtCd: "exampleQtyUtCd",
  reffNo: "exampleReffNo",
  rwmsSrno: 42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  bfCmdtClsfSpelCd: "exampleBfCmdtClsfSpelCd",
  bfDtlDcshNo: "exampleBfDtlDcshNo",
  bfHsCd: "exampleBfHsCd",
  bfPdlsNo: "exampleBfPdlsNo",
  createdAt: new Date(),
  delYn: "exampleDelYn",
  divdFfmnTpCd: "exampleDivdFfmnTpCd",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  id: "exampleId",
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  mdfyDgcnt: 42,
  ntwg: 42.42,
  pdlsNo: "examplePdlsNo",
  qty: 42.42,
  qtyUtCd: "exampleQtyUtCd",
  reffNo: "exampleReffNo",
  rwmsSrno: 42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    bfCmdtClsfSpelCd: "exampleBfCmdtClsfSpelCd",
    bfDtlDcshNo: "exampleBfDtlDcshNo",
    bfHsCd: "exampleBfHsCd",
    bfPdlsNo: "exampleBfPdlsNo",
    createdAt: new Date(),
    delYn: "exampleDelYn",
    divdFfmnTpCd: "exampleDivdFfmnTpCd",
    frstRegstId: "exampleFrstRegstId",
    frstRgsrDttm: new Date(),
    id: "exampleId",
    lastChgDttm: new Date(),
    lastChprId: "exampleLastChprId",
    mdfyDgcnt: 42,
    ntwg: 42.42,
    pdlsNo: "examplePdlsNo",
    qty: 42.42,
    qtyUtCd: "exampleQtyUtCd",
    reffNo: "exampleReffNo",
    rwmsSrno: 42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  bfCmdtClsfSpelCd: "exampleBfCmdtClsfSpelCd",
  bfDtlDcshNo: "exampleBfDtlDcshNo",
  bfHsCd: "exampleBfHsCd",
  bfPdlsNo: "exampleBfPdlsNo",
  createdAt: new Date(),
  delYn: "exampleDelYn",
  divdFfmnTpCd: "exampleDivdFfmnTpCd",
  frstRegstId: "exampleFrstRegstId",
  frstRgsrDttm: new Date(),
  id: "exampleId",
  lastChgDttm: new Date(),
  lastChprId: "exampleLastChprId",
  mdfyDgcnt: 42,
  ntwg: 42.42,
  pdlsNo: "examplePdlsNo",
  qty: 42.42,
  qtyUtCd: "exampleQtyUtCd",
  reffNo: "exampleReffNo",
  rwmsSrno: 42,
  updatedAt: new Date(),
};

const service = {
  createTbClreDedRwms() {
    return CREATE_RESULT;
  },
  tbClreDedRwmsItems: () => FIND_MANY_RESULT,
  tbClreDedRwms: ({ where }: { where: { id: string } }) => {
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

describe("TbClreDedRwms", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TbClreDedRwmsService,
          useValue: service,
        },
      ],
      controllers: [TbClreDedRwmsController],
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

  test("POST /tbClreDedRwms", async () => {
    await request(app.getHttpServer())
      .post("/tbClreDedRwms")
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

  test("GET /tbClreDedRwms", async () => {
    await request(app.getHttpServer())
      .get("/tbClreDedRwms")
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

  test("GET /tbClreDedRwms/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/tbClreDedRwms"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /tbClreDedRwms/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/tbClreDedRwms"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        frstRgsrDttm: FIND_ONE_RESULT.frstRgsrDttm.toISOString(),
        lastChgDttm: FIND_ONE_RESULT.lastChgDttm.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /tbClreDedRwms existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/tbClreDedRwms")
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
          .post("/tbClreDedRwms")
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
