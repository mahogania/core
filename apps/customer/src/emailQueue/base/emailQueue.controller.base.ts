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
import { EmailQueueService } from "../emailQueue.service";
import { EmailQueueCreateInput } from "./EmailQueueCreateInput";
import { EmailQueue } from "./EmailQueue";
import { EmailQueueFindManyArgs } from "./EmailQueueFindManyArgs";
import { EmailQueueWhereUniqueInput } from "./EmailQueueWhereUniqueInput";
import { EmailQueueUpdateInput } from "./EmailQueueUpdateInput";

export class EmailQueueControllerBase {
  constructor(protected readonly service: EmailQueueService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: EmailQueue })
  async createEmailQueue(
    @common.Body() data: EmailQueueCreateInput
  ): Promise<EmailQueue> {
    return await this.service.createEmailQueue({
      data: data,
      select: {
        addUnsubscribeLink: true,
        attachments: true,
        communication: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        emailAccount: true,
        errorField: true,
        exposeRecipients: true,
        id: true,
        idx: true,
        message: true,
        messageId: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        priority: true,
        referenceDoctype: true,
        referenceName: true,
        retry: true,
        sendAfter: true,
        sender: true,
        showAsCc: true,
        status: true,
        unsubscribeMethod: true,
        unsubscribeParam: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [EmailQueue] })
  @ApiNestedQuery(EmailQueueFindManyArgs)
  async emailQueues(@common.Req() request: Request): Promise<EmailQueue[]> {
    const args = plainToClass(EmailQueueFindManyArgs, request.query);
    return this.service.emailQueues({
      ...args,
      select: {
        addUnsubscribeLink: true,
        attachments: true,
        communication: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        emailAccount: true,
        errorField: true,
        exposeRecipients: true,
        id: true,
        idx: true,
        message: true,
        messageId: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        priority: true,
        referenceDoctype: true,
        referenceName: true,
        retry: true,
        sendAfter: true,
        sender: true,
        showAsCc: true,
        status: true,
        unsubscribeMethod: true,
        unsubscribeParam: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: EmailQueue })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async emailQueue(
    @common.Param() params: EmailQueueWhereUniqueInput
  ): Promise<EmailQueue | null> {
    const result = await this.service.emailQueue({
      where: params,
      select: {
        addUnsubscribeLink: true,
        attachments: true,
        communication: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        emailAccount: true,
        errorField: true,
        exposeRecipients: true,
        id: true,
        idx: true,
        message: true,
        messageId: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        priority: true,
        referenceDoctype: true,
        referenceName: true,
        retry: true,
        sendAfter: true,
        sender: true,
        showAsCc: true,
        status: true,
        unsubscribeMethod: true,
        unsubscribeParam: true,
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
  @swagger.ApiOkResponse({ type: EmailQueue })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateEmailQueue(
    @common.Param() params: EmailQueueWhereUniqueInput,
    @common.Body() data: EmailQueueUpdateInput
  ): Promise<EmailQueue | null> {
    try {
      return await this.service.updateEmailQueue({
        where: params,
        data: data,
        select: {
          addUnsubscribeLink: true,
          attachments: true,
          communication: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          emailAccount: true,
          errorField: true,
          exposeRecipients: true,
          id: true,
          idx: true,
          message: true,
          messageId: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          priority: true,
          referenceDoctype: true,
          referenceName: true,
          retry: true,
          sendAfter: true,
          sender: true,
          showAsCc: true,
          status: true,
          unsubscribeMethod: true,
          unsubscribeParam: true,
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
  @swagger.ApiOkResponse({ type: EmailQueue })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteEmailQueue(
    @common.Param() params: EmailQueueWhereUniqueInput
  ): Promise<EmailQueue | null> {
    try {
      return await this.service.deleteEmailQueue({
        where: params,
        select: {
          addUnsubscribeLink: true,
          attachments: true,
          communication: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          emailAccount: true,
          errorField: true,
          exposeRecipients: true,
          id: true,
          idx: true,
          message: true,
          messageId: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          priority: true,
          referenceDoctype: true,
          referenceName: true,
          retry: true,
          sendAfter: true,
          sender: true,
          showAsCc: true,
          status: true,
          unsubscribeMethod: true,
          unsubscribeParam: true,
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
}
