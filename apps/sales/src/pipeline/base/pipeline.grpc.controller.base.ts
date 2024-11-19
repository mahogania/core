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
import { PipelineService } from "../pipeline.service";
import { PipelineCreateInput } from "./PipelineCreateInput";
import { PipelineWhereInput } from "./PipelineWhereInput";
import { PipelineWhereUniqueInput } from "./PipelineWhereUniqueInput";
import { PipelineFindManyArgs } from "./PipelineFindManyArgs";
import { PipelineUpdateInput } from "./PipelineUpdateInput";
import { Pipeline } from "./Pipeline";
import { ConfigurationFindManyArgs } from "../../configuration/base/ConfigurationFindManyArgs";
import { Configuration } from "../../configuration/base/Configuration";
import { ConfigurationWhereUniqueInput } from "../../configuration/base/ConfigurationWhereUniqueInput";
import { ProcessFindManyArgs } from "../../process/base/ProcessFindManyArgs";
import { Process } from "../../process/base/Process";
import { ProcessWhereUniqueInput } from "../../process/base/ProcessWhereUniqueInput";

export class PipelineGrpcControllerBase {
  constructor(protected readonly service: PipelineService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Pipeline })
  @GrpcMethod("PipelineService", "createPipeline")
  async createPipeline(
    @common.Body() data: PipelineCreateInput
  ): Promise<Pipeline> {
    return await this.service.createPipeline({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Pipeline] })
  @ApiNestedQuery(PipelineFindManyArgs)
  @GrpcMethod("PipelineService", "pipelines")
  async pipelines(@common.Req() request: Request): Promise<Pipeline[]> {
    const args = plainToClass(PipelineFindManyArgs, request.query);
    return this.service.pipelines({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Pipeline })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("PipelineService", "pipeline")
  async pipeline(
    @common.Param() params: PipelineWhereUniqueInput
  ): Promise<Pipeline | null> {
    const result = await this.service.pipeline({
      where: params,
      select: {
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
  @swagger.ApiOkResponse({ type: Pipeline })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("PipelineService", "updatePipeline")
  async updatePipeline(
    @common.Param() params: PipelineWhereUniqueInput,
    @common.Body() data: PipelineUpdateInput
  ): Promise<Pipeline | null> {
    try {
      return await this.service.updatePipeline({
        where: params,
        data: data,
        select: {
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
  @swagger.ApiOkResponse({ type: Pipeline })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("PipelineService", "deletePipeline")
  async deletePipeline(
    @common.Param() params: PipelineWhereUniqueInput
  ): Promise<Pipeline | null> {
    try {
      return await this.service.deletePipeline({
        where: params,
        select: {
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

  @common.Get("/:id/Configurations")
  @ApiNestedQuery(ConfigurationFindManyArgs)
  @GrpcMethod("PipelineService", "findManyConfigurations")
  async findManyConfigurations(
    @common.Req() request: Request,
    @common.Param() params: PipelineWhereUniqueInput
  ): Promise<Configuration[]> {
    const query = plainToClass(ConfigurationFindManyArgs, request.query);
    const results = await this.service.findConfigurations(params.id, {
      ...query,
      select: {
        bundle: {
          select: {
            id: true,
          },
        },

        catalog: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        pipeline: {
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

  @common.Post("/:id/Configurations")
  @GrpcMethod("PipelineService", "connectConfigurations")
  async connectConfigurations(
    @common.Param() params: PipelineWhereUniqueInput,
    @common.Body() body: ConfigurationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      Configurations: {
        connect: body,
      },
    };
    await this.service.updatePipeline({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/Configurations")
  @GrpcMethod("PipelineService", "updateConfigurations")
  async updateConfigurations(
    @common.Param() params: PipelineWhereUniqueInput,
    @common.Body() body: ConfigurationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      Configurations: {
        set: body,
      },
    };
    await this.service.updatePipeline({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/Configurations")
  @GrpcMethod("PipelineService", "disconnectConfigurations")
  async disconnectConfigurations(
    @common.Param() params: PipelineWhereUniqueInput,
    @common.Body() body: ConfigurationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      Configurations: {
        disconnect: body,
      },
    };
    await this.service.updatePipeline({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/processes")
  @ApiNestedQuery(ProcessFindManyArgs)
  @GrpcMethod("PipelineService", "findManyProcesses")
  async findManyProcesses(
    @common.Req() request: Request,
    @common.Param() params: PipelineWhereUniqueInput
  ): Promise<Process[]> {
    const query = plainToClass(ProcessFindManyArgs, request.query);
    const results = await this.service.findProcesses(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/processes")
  @GrpcMethod("PipelineService", "connectProcesses")
  async connectProcesses(
    @common.Param() params: PipelineWhereUniqueInput,
    @common.Body() body: ProcessWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      processes: {
        connect: body,
      },
    };
    await this.service.updatePipeline({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/processes")
  @GrpcMethod("PipelineService", "updateProcesses")
  async updateProcesses(
    @common.Param() params: PipelineWhereUniqueInput,
    @common.Body() body: ProcessWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      processes: {
        set: body,
      },
    };
    await this.service.updatePipeline({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/processes")
  @GrpcMethod("PipelineService", "disconnectProcesses")
  async disconnectProcesses(
    @common.Param() params: PipelineWhereUniqueInput,
    @common.Body() body: ProcessWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      processes: {
        disconnect: body,
      },
    };
    await this.service.updatePipeline({
      where: params,
      data,
      select: { id: true },
    });
  }
}