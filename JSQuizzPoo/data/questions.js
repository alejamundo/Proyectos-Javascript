import { Question } from "../models/Question.js";
import { data } from "./data.js";

//recorrer y pasar a la clase

export const q=data.map(question => new Question(question.question,question.choice,question.asnwear));
