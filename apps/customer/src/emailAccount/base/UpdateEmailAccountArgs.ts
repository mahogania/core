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
import { EmailAccountWhereUniqueInput } from "./EmailAccountWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { EmailAccountUpdateInput } from "./EmailAccountUpdateInput";

@ArgsType()
class UpdateEmailAccountArgs {
  @ApiProperty({
    required: true,
    type: () => EmailAccountWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EmailAccountWhereUniqueInput)
  @Field(() => EmailAccountWhereUniqueInput, { nullable: false })
  where!: EmailAccountWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => EmailAccountUpdateInput,
  })
  @ValidateNested()
  @Type(() => EmailAccountUpdateInput)
  @Field(() => EmailAccountUpdateInput, { nullable: false })
  data!: EmailAccountUpdateInput;
}

export { UpdateEmailAccountArgs as UpdateEmailAccountArgs };
