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
import { CustomRoleWhereInput } from "./CustomRoleWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CustomRoleOrderByInput } from "./CustomRoleOrderByInput";

@ArgsType()
class CustomRoleFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CustomRoleWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CustomRoleWhereInput, { nullable: true })
  @Type(() => CustomRoleWhereInput)
  where?: CustomRoleWhereInput;

  @ApiProperty({
    required: false,
    type: [CustomRoleOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CustomRoleOrderByInput], { nullable: true })
  @Type(() => CustomRoleOrderByInput)
  orderBy?: Array<CustomRoleOrderByInput>;

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

export { CustomRoleFindManyArgs as CustomRoleFindManyArgs };
