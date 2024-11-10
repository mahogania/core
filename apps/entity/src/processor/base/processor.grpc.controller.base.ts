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
import { ProcessorService } from "../processor.service";
import { ProcessorCreateInput } from "./ProcessorCreateInput";
import { ProcessorWhereInput } from "./ProcessorWhereInput";
import { ProcessorWhereUniqueInput } from "./ProcessorWhereUniqueInput";
import { ProcessorFindManyArgs } from "./ProcessorFindManyArgs";
import { ProcessorUpdateInput } from "./ProcessorUpdateInput";
import { Processor } from "./Processor";
import { CommandFindManyArgs } from "../../command/base/CommandFindManyArgs";
import { Command } from "../../command/base/Command";
import { CommandWhereUniqueInput } from "../../command/base/CommandWhereUniqueInput";
import { ViewFindManyArgs } from "../../view/base/ViewFindManyArgs";
import { View } from "../../view/base/View";
import { ViewWhereUniqueInput } from "../../view/base/ViewWhereUniqueInput";

export class ProcessorGrpcControllerBase {
  constructor(protected readonly service: ProcessorService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Processor })
  @GrpcMethod("ProcessorService", "createProcessor")
  async createProcessor(
    @common.Body() data: ProcessorCreateInput
  ): Promise<Processor> {
    return await this.service.createProcessor({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Processor] })
  @ApiNestedQuery(ProcessorFindManyArgs)
  @GrpcMethod("ProcessorService", "processors")
  async processors(@common.Req() request: Request): Promise<Processor[]> {
    const args = plainToClass(ProcessorFindManyArgs, request.query);
    return this.service.processors({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Processor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ProcessorService", "processor")
  async processor(
    @common.Param() params: ProcessorWhereUniqueInput
  ): Promise<Processor | null> {
    const result = await this.service.processor({
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
  @swagger.ApiOkResponse({ type: Processor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ProcessorService", "updateProcessor")
  async updateProcessor(
    @common.Param() params: ProcessorWhereUniqueInput,
    @common.Body() data: ProcessorUpdateInput
  ): Promise<Processor | null> {
    try {
      return await this.service.updateProcessor({
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
  @swagger.ApiOkResponse({ type: Processor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ProcessorService", "deleteProcessor")
  async deleteProcessor(
    @common.Param() params: ProcessorWhereUniqueInput
  ): Promise<Processor | null> {
    try {
      return await this.service.deleteProcessor({
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

  @common.Get("/:id/commands")
  @ApiNestedQuery(CommandFindManyArgs)
  @GrpcMethod("ProcessorService", "findManyCommands")
  async findManyCommands(
    @common.Req() request: Request,
    @common.Param() params: ProcessorWhereUniqueInput
  ): Promise<Command[]> {
    const query = plainToClass(CommandFindManyArgs, request.query);
    const results = await this.service.findCommands(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        processor: {
          select: {
            id: true,
          },
        },

        trait: {
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

  @common.Post("/:id/commands")
  @GrpcMethod("ProcessorService", "connectCommands")
  async connectCommands(
    @common.Param() params: ProcessorWhereUniqueInput,
    @common.Body() body: CommandWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      commands: {
        connect: body,
      },
    };
    await this.service.updateProcessor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/commands")
  @GrpcMethod("ProcessorService", "updateCommands")
  async updateCommands(
    @common.Param() params: ProcessorWhereUniqueInput,
    @common.Body() body: CommandWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      commands: {
        set: body,
      },
    };
    await this.service.updateProcessor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/commands")
  @GrpcMethod("ProcessorService", "disconnectCommands")
  async disconnectCommands(
    @common.Param() params: ProcessorWhereUniqueInput,
    @common.Body() body: CommandWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      commands: {
        disconnect: body,
      },
    };
    await this.service.updateProcessor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/views")
  @ApiNestedQuery(ViewFindManyArgs)
  @GrpcMethod("ProcessorService", "findManyViews")
  async findManyViews(
    @common.Req() request: Request,
    @common.Param() params: ProcessorWhereUniqueInput
  ): Promise<View[]> {
    const query = plainToClass(ViewFindManyArgs, request.query);
    const results = await this.service.findViews(params.id, {
      ...query,
      select: {
        createdAt: true,

        fragment: {
          select: {
            id: true,
          },
        },

        id: true,

        processor: {
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

  @common.Post("/:id/views")
  @GrpcMethod("ProcessorService", "connectViews")
  async connectViews(
    @common.Param() params: ProcessorWhereUniqueInput,
    @common.Body() body: ViewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      views: {
        connect: body,
      },
    };
    await this.service.updateProcessor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/views")
  @GrpcMethod("ProcessorService", "updateViews")
  async updateViews(
    @common.Param() params: ProcessorWhereUniqueInput,
    @common.Body() body: ViewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      views: {
        set: body,
      },
    };
    await this.service.updateProcessor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/views")
  @GrpcMethod("ProcessorService", "disconnectViews")
  async disconnectViews(
    @common.Param() params: ProcessorWhereUniqueInput,
    @common.Body() body: ViewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      views: {
        disconnect: body,
      },
    };
    await this.service.updateProcessor({
      where: params,
      data,
      select: { id: true },
    });
  }
}
