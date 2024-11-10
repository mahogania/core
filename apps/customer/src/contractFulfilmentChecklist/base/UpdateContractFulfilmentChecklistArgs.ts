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
import { ContractFulfilmentChecklistWhereUniqueInput } from "./ContractFulfilmentChecklistWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ContractFulfilmentChecklistUpdateInput } from "./ContractFulfilmentChecklistUpdateInput";

@ArgsType()
class UpdateContractFulfilmentChecklistArgs {
  @ApiProperty({
    required: true,
    type: () => ContractFulfilmentChecklistWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ContractFulfilmentChecklistWhereUniqueInput)
  @Field(() => ContractFulfilmentChecklistWhereUniqueInput, { nullable: false })
  where!: ContractFulfilmentChecklistWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ContractFulfilmentChecklistUpdateInput,
  })
  @ValidateNested()
  @Type(() => ContractFulfilmentChecklistUpdateInput)
  @Field(() => ContractFulfilmentChecklistUpdateInput, { nullable: false })
  data!: ContractFulfilmentChecklistUpdateInput;
}

export { UpdateContractFulfilmentChecklistArgs as UpdateContractFulfilmentChecklistArgs };
