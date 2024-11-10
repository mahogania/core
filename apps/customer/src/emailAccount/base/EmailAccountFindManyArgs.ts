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
import { EmailAccountWhereInput } from "./EmailAccountWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { EmailAccountOrderByInput } from "./EmailAccountOrderByInput";

@ArgsType()
class EmailAccountFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => EmailAccountWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => EmailAccountWhereInput, { nullable: true })
  @Type(() => EmailAccountWhereInput)
  where?: EmailAccountWhereInput;

  @ApiProperty({
    required: false,
    type: [EmailAccountOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [EmailAccountOrderByInput], { nullable: true })
  @Type(() => EmailAccountOrderByInput)
  orderBy?: Array<EmailAccountOrderByInput>;

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

export { EmailAccountFindManyArgs as EmailAccountFindManyArgs };
