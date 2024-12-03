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
import { CreatureLootWhereInput } from "./CreatureLootWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CreatureLootListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CreatureLootWhereInput,
  })
  @ValidateNested()
  @Type(() => CreatureLootWhereInput)
  @IsOptional()
  @Field(() => CreatureLootWhereInput, {
    nullable: true,
  })
  every?: CreatureLootWhereInput;

  @ApiProperty({
    required: false,
    type: () => CreatureLootWhereInput,
  })
  @ValidateNested()
  @Type(() => CreatureLootWhereInput)
  @IsOptional()
  @Field(() => CreatureLootWhereInput, {
    nullable: true,
  })
  some?: CreatureLootWhereInput;

  @ApiProperty({
    required: false,
    type: () => CreatureLootWhereInput,
  })
  @ValidateNested()
  @Type(() => CreatureLootWhereInput)
  @IsOptional()
  @Field(() => CreatureLootWhereInput, {
    nullable: true,
  })
  none?: CreatureLootWhereInput;
}
export { CreatureLootListRelationFilter as CreatureLootListRelationFilter };
