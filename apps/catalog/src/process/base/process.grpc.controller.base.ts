/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { GrpcMethod } from "@nestjs/microservices";
import { ProcessService } from "../process.service";
import { ProcessCreateInput } from "./ProcessCreateInput";
import { ProcessWhereInput } from "./ProcessWhereInput";
import { ProcessWhereUniqueInput } from "./ProcessWhereUniqueInput";
import { ProcessFindManyArgs } from "./ProcessFindManyArgs";
import { ProcessUpdateInput } from "./ProcessUpdateInput";
import { Process } from "./Process";
import { Pipeline } from "../../pipeline/base/Pipeline";
import { FormFindManyArgs } from "../../form/base/FormFindManyArgs";
import { Form } from "../../form/base/Form";
import { FormWhereUniqueInput } from "../../form/base/FormWhereUniqueInput";
import { ThreatFindManyArgs } from "../../threat/base/ThreatFindManyArgs";
import { Threat } from "../../threat/base/Threat";
import { ThreatWhereUniqueInput } from "../../threat/base/ThreatWhereUniqueInput";

export class ProcessGrpcControllerBase {
  constructor(protected readonly service: ProcessService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Process })
  @GrpcMethod("ProcessService", "createProcess")
  async createProcess(
    @common.Body() data: ProcessCreateInput
  ): Promise<Process> {
    return await this.service.createProcess({
      data: {
        ...data,

        Pipeline: data.Pipeline
          ? {
              connect: data.Pipeline,
            }
          : undefined,
      },
      select: {
        Pipeline: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Process] })
  @ApiNestedQuery(ProcessFindManyArgs)
  @GrpcMethod("ProcessService", "processes")
  async processes(@common.Req() request: Request): Promise<Process[]> {
    const args = plainToClass(ProcessFindManyArgs, request.query);
    return this.service.processes({
      ...args,
      select: {
        Pipeline: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Process })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ProcessService", "process")
  async process(
    @common.Param() params: ProcessWhereUniqueInput
  ): Promise<Process | null> {
    const result = await this.service.process({
      where: params,
      select: {
        Pipeline: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Process })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ProcessService", "updateProcess")
  async updateProcess(
    @common.Param() params: ProcessWhereUniqueInput,
    @common.Body() data: ProcessUpdateInput
  ): Promise<Process | null> {
    try {
      return await this.service.updateProcess({
        where: params,
        data: {
          ...data,

          Pipeline: data.Pipeline
            ? {
                connect: data.Pipeline,
              }
            : undefined,
        },
        select: {
          Pipeline: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Process })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ProcessService", "deleteProcess")
  async deleteProcess(
    @common.Param() params: ProcessWhereUniqueInput
  ): Promise<Process | null> {
    try {
      return await this.service.deleteProcess({
        where: params,
        select: {
          Pipeline: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/forms")
  @ApiNestedQuery(FormFindManyArgs)
  @GrpcMethod("ProcessService", "findManyForms")
  async findManyForms(
    @common.Req() request: Request,
    @common.Param() params: ProcessWhereUniqueInput
  ): Promise<Form[]> {
    const query = plainToClass(FormFindManyArgs, request.query);
    const results = await this.service.findForms(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        process: {
          select: {
            id: true,
          },
        },

        schema: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/forms")
  @GrpcMethod("ProcessService", "connectForms")
  async connectForms(
    @common.Param() params: ProcessWhereUniqueInput,
    @common.Body() body: FormWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      forms: {
        connect: body,
      },
    };
    await this.service.updateProcess({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/forms")
  @GrpcMethod("ProcessService", "updateForms")
  async updateForms(
    @common.Param() params: ProcessWhereUniqueInput,
    @common.Body() body: FormWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      forms: {
        set: body,
      },
    };
    await this.service.updateProcess({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/forms")
  @GrpcMethod("ProcessService", "disconnectForms")
  async disconnectForms(
    @common.Param() params: ProcessWhereUniqueInput,
    @common.Body() body: FormWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      forms: {
        disconnect: body,
      },
    };
    await this.service.updateProcess({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/threats")
  @ApiNestedQuery(ThreatFindManyArgs)
  @GrpcMethod("ProcessService", "findManyThreats")
  async findManyThreats(
    @common.Req() request: Request,
    @common.Param() params: ProcessWhereUniqueInput
  ): Promise<Threat[]> {
    const query = plainToClass(ThreatFindManyArgs, request.query);
    const results = await this.service.findThreats(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        process: {
          select: {
            id: true,
          },
        },

        unit: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/threats")
  @GrpcMethod("ProcessService", "connectThreats")
  async connectThreats(
    @common.Param() params: ProcessWhereUniqueInput,
    @common.Body() body: ThreatWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      threats: {
        connect: body,
      },
    };
    await this.service.updateProcess({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/threats")
  @GrpcMethod("ProcessService", "updateThreats")
  async updateThreats(
    @common.Param() params: ProcessWhereUniqueInput,
    @common.Body() body: ThreatWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      threats: {
        set: body,
      },
    };
    await this.service.updateProcess({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/threats")
  @GrpcMethod("ProcessService", "disconnectThreats")
  async disconnectThreats(
    @common.Param() params: ProcessWhereUniqueInput,
    @common.Body() body: ThreatWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      threats: {
        disconnect: body,
      },
    };
    await this.service.updateProcess({
      where: params,
      data,
      select: { id: true },
    });
  }
}
