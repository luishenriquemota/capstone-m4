"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../../data-source");
const card_entity_1 = require("../../entities/card.entity");
// import { AppError } from "../../errors/appError"
const listOneCardService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const cardRepository = data_source_1.AppDataSource.getRepository(card_entity_1.Card);
    const card = cardRepository.findOneBy({ id: Number(id) });
    if (!card) {
        throw new Error("Card not found"); //404
    }
    return card;
});
exports.default = listOneCardService;
