import { Octokit } from "@octokit/rest";
import { GetResponseDataTypeFromEndpointMethod, OctokitResponse, ResponseHeaders } from "@octokit/types";
import * as dotenv from "dotenv";
import { IIssues, IData } from './interfaces/issue.interfaces';
import { processIssues } from "./utils/processIssues";
import { processWebHooks } from "./utils/processWebHooks";
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
const octokit = new Octokit({
  auth: process.env.GIT_TOKEN,
});


octokit.rest.issues.listForRepo({
  owner: "Tech-Code1",
  repo: "prueba-bot",
  state: "open",
}).then((response: OctokitResponse<[] , 200>) => {

  processIssues(response.data);
  
}).catch((err) => {
  console.log(err);
  
})

octokit.request('GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries', {
  owner: 'Tech-Code1',
  repo: 'prueba-bot',
  hook_id: 401629647
}).then((response: OctokitResponse<[] , 200>) => {
  processWebHooks(response.data);
})