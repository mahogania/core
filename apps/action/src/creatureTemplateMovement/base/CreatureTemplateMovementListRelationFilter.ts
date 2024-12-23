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
import { CreatureTemplateMovementWhereInput } from "./CreatureTemplateMovementWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CreatureTemplateMovementListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CreatureTemplateMovementWhereInput,
  })
  @ValidateNested()
  @Type(() => CreatureTemplateMovementWhereInput)
  @IsOptional()
  @Field(() => CreatureTemplateMovementWhereInput, {
    nullable: true,
  })
  every?: CreatureTemplateMovementWhereInput;

  @ApiProperty({
    required: false,
    type: () => CreatureTemplateMovementWhereInput,
  })
  @ValidateNested()
  @Type(() => CreatureTemplateMovementWhereInput)
  @IsOptional()
  @Field(() => CreatureTemplateMovementWhereInput, {
    nullable: true,
  })
  some?: CreatureTemplateMovementWhereInput;

  @ApiProperty({
    required: false,
    type: () => CreatureTemplateMovementWhereInput,
  })
  @ValidateNested()
  @Type(() => CreatureTemplateMovementWhereInput)
  @IsOptional()
  @Field(() => CreatureTemplateMovementWhereInput, {
    nullable: true,
  })
  none?: CreatureTemplateMovementWhereInput;
}
export { CreatureTemplateMovementListRelationFilter as CreatureTemplateMovementListRelationFilter };
