import Joi from "joi";
import { Stats } from "@/protocols";

export const statsSchema = Joi.object<Stats>({
    player: Joi.string().required(),
    points: Joi.number().positive().required(),
    rebounds: Joi.number().positive().required(),
    assists: Joi.number().positive().required()
})