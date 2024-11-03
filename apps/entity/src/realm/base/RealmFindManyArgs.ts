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
import { RealmWhereInput } from "./RealmWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RealmOrderByInput } from "./RealmOrderByInput";

@ArgsType()
class RealmFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RealmWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RealmWhereInput, { nullable: true })
  @Type(() => RealmWhereInput)
  where?: RealmWhereInput;

  @ApiProperty({
    required: false,
    type: [RealmOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RealmOrderByInput], { nullable: true })
  @Type(() => RealmOrderByInput)
  orderBy?: Array<RealmOrderByInput>;

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

export { RealmFindManyArgs as RealmFindManyArgs };