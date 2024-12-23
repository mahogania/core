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
import { ConditionsWhereUniqueInput } from "./ConditionsWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ConditionsUpdateInput } from "./ConditionsUpdateInput";

@ArgsType()
class UpdateConditionsArgs {
  @ApiProperty({
    required: true,
    type: () => ConditionsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ConditionsWhereUniqueInput)
  @Field(() => ConditionsWhereUniqueInput, { nullable: false })
  where!: ConditionsWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ConditionsUpdateInput,
  })
  @ValidateNested()
  @Type(() => ConditionsUpdateInput)
  @Field(() => ConditionsUpdateInput, { nullable: false })
  data!: ConditionsUpdateInput;
}

export { UpdateConditionsArgs as UpdateConditionsArgs };
