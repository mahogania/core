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
import { EmailQueueRecipientWhereInput } from "./EmailQueueRecipientWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { EmailQueueRecipientOrderByInput } from "./EmailQueueRecipientOrderByInput";

@ArgsType()
class EmailQueueRecipientFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => EmailQueueRecipientWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => EmailQueueRecipientWhereInput, { nullable: true })
  @Type(() => EmailQueueRecipientWhereInput)
  where?: EmailQueueRecipientWhereInput;

  @ApiProperty({
    required: false,
    type: [EmailQueueRecipientOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [EmailQueueRecipientOrderByInput], { nullable: true })
  @Type(() => EmailQueueRecipientOrderByInput)
  orderBy?: Array<EmailQueueRecipientOrderByInput>;

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

export { EmailQueueRecipientFindManyArgs as EmailQueueRecipientFindManyArgs };
