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
import { CustomizeFormFieldWhereInput } from "./CustomizeFormFieldWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CustomizeFormFieldOrderByInput } from "./CustomizeFormFieldOrderByInput";

@ArgsType()
class CustomizeFormFieldFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CustomizeFormFieldWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CustomizeFormFieldWhereInput, { nullable: true })
  @Type(() => CustomizeFormFieldWhereInput)
  where?: CustomizeFormFieldWhereInput;

  @ApiProperty({
    required: false,
    type: [CustomizeFormFieldOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CustomizeFormFieldOrderByInput], { nullable: true })
  @Type(() => CustomizeFormFieldOrderByInput)
  orderBy?: Array<CustomizeFormFieldOrderByInput>;

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

export { CustomizeFormFieldFindManyArgs as CustomizeFormFieldFindManyArgs };
