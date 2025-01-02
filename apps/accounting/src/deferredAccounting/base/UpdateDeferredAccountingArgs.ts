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
import { DeferredAccountingWhereUniqueInput } from "./DeferredAccountingWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DeferredAccountingUpdateInput } from "./DeferredAccountingUpdateInput";

@ArgsType()
class UpdateDeferredAccountingArgs {
  @ApiProperty({
    required: true,
    type: () => DeferredAccountingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DeferredAccountingWhereUniqueInput)
  @Field(() => DeferredAccountingWhereUniqueInput, { nullable: false })
  where!: DeferredAccountingWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DeferredAccountingUpdateInput,
  })
  @ValidateNested()
  @Type(() => DeferredAccountingUpdateInput)
  @Field(() => DeferredAccountingUpdateInput, { nullable: false })
  data!: DeferredAccountingUpdateInput;
}

export { UpdateDeferredAccountingArgs as UpdateDeferredAccountingArgs };