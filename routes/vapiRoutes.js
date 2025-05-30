import express from 'express';
import { createAssistant, storeCallReport, getSessions } from '../controllers/callReportController.js';
const vapiRoutes = express.Router();

vapiRoutes.post("/create-assistant", createAssistant);

vapiRoutes.post("/end-call-report", storeCallReport);

vapiRoutes.get("/sessions", getSessions);

export default vapiRoutes;