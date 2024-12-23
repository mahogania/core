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
import { AreaTriggerInvolvedRelationWhereInput } from "./AreaTriggerInvolvedRelationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AreaTriggerInvolvedRelationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AreaTriggerInvolvedRelationWhereInput,
  })
  @ValidateNested()
  @Type(() => AreaTriggerInvolvedRelationWhereInput)
  @IsOptional()
  @Field(() => AreaTriggerInvolvedRelationWhereInput, {
    nullable: true,
  })
  every?: AreaTriggerInvolvedRelationWhereInput;

  @ApiProperty({
    required: false,
    type: () => AreaTriggerInvolvedRelationWhereInput,
  })
  @ValidateNested()
  @Type(() => AreaTriggerInvolvedRelationWhereInput)
  @IsOptional()
  @Field(() => AreaTriggerInvolvedRelationWhereInput, {
    nullable: true,
  })
  some?: AreaTriggerInvolvedRelationWhereInput;

  @ApiProperty({
    required: false,
    type: () => AreaTriggerInvolvedRelationWhereInput,
  })
  @ValidateNested()
  @Type(() => AreaTriggerInvolvedRelationWhereInput)
  @IsOptional()
  @Field(() => AreaTriggerInvolvedRelationWhereInput, {
    nullable: true,
  })
  none?: AreaTriggerInvolvedRelationWhereInput;
}
export { AreaTriggerInvolvedRelationListRelationFilter as AreaTriggerInvolvedRelationListRelationFilter };
