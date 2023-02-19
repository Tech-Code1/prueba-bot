"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("@octokit/rest");
const dotenv = __importStar(require("dotenv"));
const processIssues_1 = require("./utils/processIssues");
const processWebHooks_1 = require("./utils/processWebHooks");
const express = require('express');
dotenv.config();
const app = express();
const port = 3000;
app.post('/webhook', (req, res) => {
    const eventType = req.headers['x-github-event'];
    const payload = req.body;
    if (eventType === 'issues' && payload.action === 'closed' && payload.issue.merged) {
        // Aquí agregas la lógica para enviar la notificación.
        console.log('El issue ' + payload.issue.number + ' ha sido fusionado.');
    }
    res.status(200).send('OK');
});
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
// eslint-disable-next-line no-undef
const octokit = new rest_1.Octokit({
    auth: process.env.GIT_TOKEN,
});
octokit.rest.issues.listForRepo({
    owner: "Tech-Code1",
    repo: "prueba-bot",
    state: "open",
}).then((response) => {
    (0, processIssues_1.processIssues)(response.data);
}).catch((err) => {
    console.log(err);
});
octokit.request('GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries', {
    owner: 'Tech-Code1',
    repo: 'prueba-bot',
    hook_id: 401629647
}).then((response) => {
    (0, processWebHooks_1.processWebHooks)(response.data);
});
//# sourceMappingURL=webhook.js.map