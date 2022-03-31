import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { ShiftController } from "../shift.controller";
import { ShiftService } from "../shift.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  actualFinish: new Date(),
  actualStart: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  scheduledFinish: new Date(),
  scheduledStart: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  actualFinish: new Date(),
  actualStart: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  scheduledFinish: new Date(),
  scheduledStart: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    actualFinish: new Date(),
    actualStart: new Date(),
    createdAt: new Date(),
    id: "exampleId",
    scheduledFinish: new Date(),
    scheduledStart: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  actualFinish: new Date(),
  actualStart: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  scheduledFinish: new Date(),
  scheduledStart: new Date(),
  updatedAt: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
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

describe("Shift", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ShiftService,
          useValue: service,
        },
      ],
      controllers: [ShiftController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /shifts", async () => {
    await request(app.getHttpServer())
      .post("/shifts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        actualFinish: CREATE_RESULT.actualFinish.toISOString(),
        actualStart: CREATE_RESULT.actualStart.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        scheduledFinish: CREATE_RESULT.scheduledFinish.toISOString(),
        scheduledStart: CREATE_RESULT.scheduledStart.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /shifts", async () => {
    await request(app.getHttpServer())
      .get("/shifts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          actualFinish: FIND_MANY_RESULT[0].actualFinish.toISOString(),
          actualStart: FIND_MANY_RESULT[0].actualStart.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          scheduledFinish: FIND_MANY_RESULT[0].scheduledFinish.toISOString(),
          scheduledStart: FIND_MANY_RESULT[0].scheduledStart.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /shifts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/shifts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /shifts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/shifts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        actualFinish: FIND_ONE_RESULT.actualFinish.toISOString(),
        actualStart: FIND_ONE_RESULT.actualStart.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        scheduledFinish: FIND_ONE_RESULT.scheduledFinish.toISOString(),
        scheduledStart: FIND_ONE_RESULT.scheduledStart.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
