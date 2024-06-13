"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
var client_1 = __importDefault(require("@sanity/client"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
if (!process.env.SANITY_PROJECT_ID || !process.env.SANITY_DATASET) {
    throw new Error("Missing required environment variables: SANITY_PROJECT_ID or SANITY_DATASET");
}
exports.client = (0, client_1.default)({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    useCdn: true,
    token: process.env.SANITY_TOKEN // Optional if you are using authenticated requests
});
