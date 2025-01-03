/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WorkOrderOperationWhereInput } from "./WorkOrderOperationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class WorkOrderOperationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => WorkOrderOperationWhereInput,
  })
  @ValidateNested()
  @Type(() => WorkOrderOperationWhereInput)
  @IsOptional()
  @Field(() => WorkOrderOperationWhereInput, {
    nullable: true,
  })
  every?: WorkOrderOperationWhereInput;

  @ApiProperty({
    required: false,
    type: () => WorkOrderOperationWhereInput,
  })
  @ValidateNested()
  @Type(() => WorkOrderOperationWhereInput)
  @IsOptional()
  @Field(() => WorkOrderOperationWhereInput, {
    nullable: true,
  })
  some?: WorkOrderOperationWhereInput;

  @ApiProperty({
    required: false,
    type: () => WorkOrderOperationWhereInput,
  })
  @ValidateNested()
  @Type(() => WorkOrderOperationWhereInput)
  @IsOptional()
  @Field(() => WorkOrderOperationWhereInput, {
    nullable: true,
  })
  none?: WorkOrderOperationWhereInput;
}
export { WorkOrderOperationListRelationFilter as WorkOrderOperationListRelationFilter };
