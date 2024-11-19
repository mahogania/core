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
import { AreaTriggerTavernWhereInput } from "./AreaTriggerTavernWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AreaTriggerTavernListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AreaTriggerTavernWhereInput,
  })
  @ValidateNested()
  @Type(() => AreaTriggerTavernWhereInput)
  @IsOptional()
  @Field(() => AreaTriggerTavernWhereInput, {
    nullable: true,
  })
  every?: AreaTriggerTavernWhereInput;

  @ApiProperty({
    required: false,
    type: () => AreaTriggerTavernWhereInput,
  })
  @ValidateNested()
  @Type(() => AreaTriggerTavernWhereInput)
  @IsOptional()
  @Field(() => AreaTriggerTavernWhereInput, {
    nullable: true,
  })
  some?: AreaTriggerTavernWhereInput;

  @ApiProperty({
    required: false,
    type: () => AreaTriggerTavernWhereInput,
  })
  @ValidateNested()
  @Type(() => AreaTriggerTavernWhereInput)
  @IsOptional()
  @Field(() => AreaTriggerTavernWhereInput, {
    nullable: true,
  })
  none?: AreaTriggerTavernWhereInput;
}
export { AreaTriggerTavernListRelationFilter as AreaTriggerTavernListRelationFilter };