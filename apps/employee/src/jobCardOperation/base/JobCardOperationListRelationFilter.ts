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
import { JobCardOperationWhereInput } from "./JobCardOperationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class JobCardOperationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => JobCardOperationWhereInput,
  })
  @ValidateNested()
  @Type(() => JobCardOperationWhereInput)
  @IsOptional()
  @Field(() => JobCardOperationWhereInput, {
    nullable: true,
  })
  every?: JobCardOperationWhereInput;

  @ApiProperty({
    required: false,
    type: () => JobCardOperationWhereInput,
  })
  @ValidateNested()
  @Type(() => JobCardOperationWhereInput)
  @IsOptional()
  @Field(() => JobCardOperationWhereInput, {
    nullable: true,
  })
  some?: JobCardOperationWhereInput;

  @ApiProperty({
    required: false,
    type: () => JobCardOperationWhereInput,
  })
  @ValidateNested()
  @Type(() => JobCardOperationWhereInput)
  @IsOptional()
  @Field(() => JobCardOperationWhereInput, {
    nullable: true,
  })
  none?: JobCardOperationWhereInput;
}
export { JobCardOperationListRelationFilter as JobCardOperationListRelationFilter };