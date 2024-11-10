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
import { CreatureFormationWhereInput } from "./CreatureFormationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CreatureFormationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CreatureFormationWhereInput,
  })
  @ValidateNested()
  @Type(() => CreatureFormationWhereInput)
  @IsOptional()
  @Field(() => CreatureFormationWhereInput, {
    nullable: true,
  })
  every?: CreatureFormationWhereInput;

  @ApiProperty({
    required: false,
    type: () => CreatureFormationWhereInput,
  })
  @ValidateNested()
  @Type(() => CreatureFormationWhereInput)
  @IsOptional()
  @Field(() => CreatureFormationWhereInput, {
    nullable: true,
  })
  some?: CreatureFormationWhereInput;

  @ApiProperty({
    required: false,
    type: () => CreatureFormationWhereInput,
  })
  @ValidateNested()
  @Type(() => CreatureFormationWhereInput)
  @IsOptional()
  @Field(() => CreatureFormationWhereInput, {
    nullable: true,
  })
  none?: CreatureFormationWhereInput;
}
export { CreatureFormationListRelationFilter as CreatureFormationListRelationFilter };