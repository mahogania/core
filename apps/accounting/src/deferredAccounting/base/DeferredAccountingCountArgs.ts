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
import { DeferredAccountingWhereInput } from "./DeferredAccountingWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class DeferredAccountingCountArgs {
  @ApiProperty({
    required: false,
    type: () => DeferredAccountingWhereInput,
  })
  @Field(() => DeferredAccountingWhereInput, { nullable: true })
  @Type(() => DeferredAccountingWhereInput)
  where?: DeferredAccountingWhereInput;
}

export { DeferredAccountingCountArgs as DeferredAccountingCountArgs };
