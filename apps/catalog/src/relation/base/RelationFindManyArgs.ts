/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RelationWhereInput } from "./RelationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RelationOrderByInput } from "./RelationOrderByInput";

@ArgsType()
class RelationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RelationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RelationWhereInput, { nullable: true })
  @Type(() => RelationWhereInput)
  where?: RelationWhereInput;

  @ApiProperty({
    required: false,
    type: [RelationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RelationOrderByInput], { nullable: true })
  @Type(() => RelationOrderByInput)
  orderBy?: Array<RelationOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { RelationFindManyArgs as RelationFindManyArgs };