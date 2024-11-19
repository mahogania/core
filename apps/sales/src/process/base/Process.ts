/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Pipeline } from "../../pipeline/base/Pipeline";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Form } from "../../form/base/Form";
import { Threat } from "../../threat/base/Threat";

@ObjectType()
class Process {
  @ApiProperty({
    required: false,
    type: () => Pipeline,
  })
  @ValidateNested()
  @Type(() => Pipeline)
  @IsOptional()
  Pipeline?: Pipeline | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [Form],
  })
  @ValidateNested()
  @Type(() => Form)
  @IsOptional()
  forms?: Array<Form>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [Threat],
  })
  @ValidateNested()
  @Type(() => Threat)
  @IsOptional()
  threats?: Array<Threat>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Process as Process };