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
import { BusinessWhereUniqueInput } from "../../business/base/BusinessWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { IndustryWhereUniqueInput } from "../../industry/base/IndustryWhereUniqueInput";
import { EnumRelationKind } from "./EnumRelationKind";

@InputType()
class RelationWhereInput {
  @ApiProperty({
    required: false,
    type: () => BusinessWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BusinessWhereUniqueInput)
  @IsOptional()
  @Field(() => BusinessWhereUniqueInput, {
    nullable: true,
  })
  ascendantBusiness?: BusinessWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => BusinessWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BusinessWhereUniqueInput)
  @IsOptional()
  @Field(() => BusinessWhereUniqueInput, {
    nullable: true,
  })
  descendantBusiness?: BusinessWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => IndustryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => IndustryWhereUniqueInput)
  @IsOptional()
  @Field(() => IndustryWhereUniqueInput, {
    nullable: true,
  })
  industry?: IndustryWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumRelationKind,
  })
  @IsEnum(EnumRelationKind)
  @IsOptional()
  @Field(() => EnumRelationKind, {
    nullable: true,
  })
  kind?: "Cooperation" | "Competition";
}

export { RelationWhereInput as RelationWhereInput };
