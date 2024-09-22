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
import { CreatureFormationsWhereInput } from "./CreatureFormationsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CreatureFormationsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CreatureFormationsWhereInput,
  })
  @ValidateNested()
  @Type(() => CreatureFormationsWhereInput)
  @IsOptional()
  @Field(() => CreatureFormationsWhereInput, {
    nullable: true,
  })
  every?: CreatureFormationsWhereInput;

  @ApiProperty({
    required: false,
    type: () => CreatureFormationsWhereInput,
  })
  @ValidateNested()
  @Type(() => CreatureFormationsWhereInput)
  @IsOptional()
  @Field(() => CreatureFormationsWhereInput, {
    nullable: true,
  })
  some?: CreatureFormationsWhereInput;

  @ApiProperty({
    required: false,
    type: () => CreatureFormationsWhereInput,
  })
  @ValidateNested()
  @Type(() => CreatureFormationsWhereInput)
  @IsOptional()
  @Field(() => CreatureFormationsWhereInput, {
    nullable: true,
  })
  none?: CreatureFormationsWhereInput;
}
export { CreatureFormationsListRelationFilter as CreatureFormationsListRelationFilter };
