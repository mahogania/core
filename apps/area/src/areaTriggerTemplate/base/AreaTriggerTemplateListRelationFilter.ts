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
import { AreaTriggerTemplateWhereInput } from "./AreaTriggerTemplateWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AreaTriggerTemplateListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AreaTriggerTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => AreaTriggerTemplateWhereInput)
  @IsOptional()
  @Field(() => AreaTriggerTemplateWhereInput, {
    nullable: true,
  })
  every?: AreaTriggerTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: () => AreaTriggerTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => AreaTriggerTemplateWhereInput)
  @IsOptional()
  @Field(() => AreaTriggerTemplateWhereInput, {
    nullable: true,
  })
  some?: AreaTriggerTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: () => AreaTriggerTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => AreaTriggerTemplateWhereInput)
  @IsOptional()
  @Field(() => AreaTriggerTemplateWhereInput, {
    nullable: true,
  })
  none?: AreaTriggerTemplateWhereInput;
}
export { AreaTriggerTemplateListRelationFilter as AreaTriggerTemplateListRelationFilter };