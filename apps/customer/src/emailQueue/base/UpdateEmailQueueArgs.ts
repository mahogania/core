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
import { EmailQueueWhereUniqueInput } from "./EmailQueueWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { EmailQueueUpdateInput } from "./EmailQueueUpdateInput";

@ArgsType()
class UpdateEmailQueueArgs {
  @ApiProperty({
    required: true,
    type: () => EmailQueueWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EmailQueueWhereUniqueInput)
  @Field(() => EmailQueueWhereUniqueInput, { nullable: false })
  where!: EmailQueueWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => EmailQueueUpdateInput,
  })
  @ValidateNested()
  @Type(() => EmailQueueUpdateInput)
  @Field(() => EmailQueueUpdateInput, { nullable: false })
  data!: EmailQueueUpdateInput;
}

export { UpdateEmailQueueArgs as UpdateEmailQueueArgs };
