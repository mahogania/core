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
import { DashboardChartController } from "../dashboardChart.controller";
import { DashboardChartService } from "../dashboardChart.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  aggregateFunctionBasedOn: "exampleAggregateFunctionBasedOn",
  basedOn: "exampleBasedOn",
  chartName: "exampleChartName",
  chartType: "exampleChartType",
  color: "exampleColor",
  createdAt: new Date(),
  creation: new Date(),
  customOptions: "exampleCustomOptions",
  docstatus: 42,
  documentType: "exampleDocumentType",
  dynamicFiltersJson: "exampleDynamicFiltersJson",
  filtersJson: "exampleFiltersJson",
  fromDate: new Date(),
  groupByBasedOn: "exampleGroupByBasedOn",
  groupByType: "exampleGroupByType",
  heatmapYear: "exampleHeatmapYear",
  id: "exampleId",
  idx: 42,
  isPublic: 42,
  isStandard: 42,
  lastSyncedOn: new Date(),
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  moduleField: "exampleModuleField",
  numberOfGroups: 42,
  owner: "exampleOwner",
  parentDocumentType: "exampleParentDocumentType",
  reportName: "exampleReportName",
  source: "exampleSource",
  timeInterval: "exampleTimeInterval",
  timeseries: 42,
  timespan: "exampleTimespan",
  toDate: new Date(),
  typeField: "exampleTypeField",
  updatedAt: new Date(),
  useReportChart: 42,
  valueBasedOn: "exampleValueBasedOn",
  xField: "exampleXField",
};
const CREATE_RESULT = {
  aggregateFunctionBasedOn: "exampleAggregateFunctionBasedOn",
  basedOn: "exampleBasedOn",
  chartName: "exampleChartName",
  chartType: "exampleChartType",
  color: "exampleColor",
  createdAt: new Date(),
  creation: new Date(),
  customOptions: "exampleCustomOptions",
  docstatus: 42,
  documentType: "exampleDocumentType",
  dynamicFiltersJson: "exampleDynamicFiltersJson",
  filtersJson: "exampleFiltersJson",
  fromDate: new Date(),
  groupByBasedOn: "exampleGroupByBasedOn",
  groupByType: "exampleGroupByType",
  heatmapYear: "exampleHeatmapYear",
  id: "exampleId",
  idx: 42,
  isPublic: 42,
  isStandard: 42,
  lastSyncedOn: new Date(),
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  moduleField: "exampleModuleField",
  numberOfGroups: 42,
  owner: "exampleOwner",
  parentDocumentType: "exampleParentDocumentType",
  reportName: "exampleReportName",
  source: "exampleSource",
  timeInterval: "exampleTimeInterval",
  timeseries: 42,
  timespan: "exampleTimespan",
  toDate: new Date(),
  typeField: "exampleTypeField",
  updatedAt: new Date(),
  useReportChart: 42,
  valueBasedOn: "exampleValueBasedOn",
  xField: "exampleXField",
};
const FIND_MANY_RESULT = [
  {
    aggregateFunctionBasedOn: "exampleAggregateFunctionBasedOn",
    basedOn: "exampleBasedOn",
    chartName: "exampleChartName",
    chartType: "exampleChartType",
    color: "exampleColor",
    createdAt: new Date(),
    creation: new Date(),
    customOptions: "exampleCustomOptions",
    docstatus: 42,
    documentType: "exampleDocumentType",
    dynamicFiltersJson: "exampleDynamicFiltersJson",
    filtersJson: "exampleFiltersJson",
    fromDate: new Date(),
    groupByBasedOn: "exampleGroupByBasedOn",
    groupByType: "exampleGroupByType",
    heatmapYear: "exampleHeatmapYear",
    id: "exampleId",
    idx: 42,
    isPublic: 42,
    isStandard: 42,
    lastSyncedOn: new Date(),
    modified: new Date(),
    modifiedBy: "exampleModifiedBy",
    moduleField: "exampleModuleField",
    numberOfGroups: 42,
    owner: "exampleOwner",
    parentDocumentType: "exampleParentDocumentType",
    reportName: "exampleReportName",
    source: "exampleSource",
    timeInterval: "exampleTimeInterval",
    timeseries: 42,
    timespan: "exampleTimespan",
    toDate: new Date(),
    typeField: "exampleTypeField",
    updatedAt: new Date(),
    useReportChart: 42,
    valueBasedOn: "exampleValueBasedOn",
    xField: "exampleXField",
  },
];
const FIND_ONE_RESULT = {
  aggregateFunctionBasedOn: "exampleAggregateFunctionBasedOn",
  basedOn: "exampleBasedOn",
  chartName: "exampleChartName",
  chartType: "exampleChartType",
  color: "exampleColor",
  createdAt: new Date(),
  creation: new Date(),
  customOptions: "exampleCustomOptions",
  docstatus: 42,
  documentType: "exampleDocumentType",
  dynamicFiltersJson: "exampleDynamicFiltersJson",
  filtersJson: "exampleFiltersJson",
  fromDate: new Date(),
  groupByBasedOn: "exampleGroupByBasedOn",
  groupByType: "exampleGroupByType",
  heatmapYear: "exampleHeatmapYear",
  id: "exampleId",
  idx: 42,
  isPublic: 42,
  isStandard: 42,
  lastSyncedOn: new Date(),
  modified: new Date(),
  modifiedBy: "exampleModifiedBy",
  moduleField: "exampleModuleField",
  numberOfGroups: 42,
  owner: "exampleOwner",
  parentDocumentType: "exampleParentDocumentType",
  reportName: "exampleReportName",
  source: "exampleSource",
  timeInterval: "exampleTimeInterval",
  timeseries: 42,
  timespan: "exampleTimespan",
  toDate: new Date(),
  typeField: "exampleTypeField",
  updatedAt: new Date(),
  useReportChart: 42,
  valueBasedOn: "exampleValueBasedOn",
  xField: "exampleXField",
};

const service = {
  createDashboardChart() {
    return CREATE_RESULT;
  },
  dashboardCharts: () => FIND_MANY_RESULT,
  dashboardChart: ({ where }: { where: { id: string } }) => {
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

describe("DashboardChart", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DashboardChartService,
          useValue: service,
        },
      ],
      controllers: [DashboardChartController],
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

  test("POST /dashboardCharts", async () => {
    await request(app.getHttpServer())
      .post("/dashboardCharts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        fromDate: CREATE_RESULT.fromDate.toISOString(),
        lastSyncedOn: CREATE_RESULT.lastSyncedOn.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        toDate: CREATE_RESULT.toDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /dashboardCharts", async () => {
    await request(app.getHttpServer())
      .get("/dashboardCharts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creation: FIND_MANY_RESULT[0].creation.toISOString(),
          fromDate: FIND_MANY_RESULT[0].fromDate.toISOString(),
          lastSyncedOn: FIND_MANY_RESULT[0].lastSyncedOn.toISOString(),
          modified: FIND_MANY_RESULT[0].modified.toISOString(),
          toDate: FIND_MANY_RESULT[0].toDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /dashboardCharts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/dashboardCharts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /dashboardCharts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/dashboardCharts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creation: FIND_ONE_RESULT.creation.toISOString(),
        fromDate: FIND_ONE_RESULT.fromDate.toISOString(),
        lastSyncedOn: FIND_ONE_RESULT.lastSyncedOn.toISOString(),
        modified: FIND_ONE_RESULT.modified.toISOString(),
        toDate: FIND_ONE_RESULT.toDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /dashboardCharts existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/dashboardCharts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creation: CREATE_RESULT.creation.toISOString(),
        fromDate: CREATE_RESULT.fromDate.toISOString(),
        lastSyncedOn: CREATE_RESULT.lastSyncedOn.toISOString(),
        modified: CREATE_RESULT.modified.toISOString(),
        toDate: CREATE_RESULT.toDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/dashboardCharts")
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
