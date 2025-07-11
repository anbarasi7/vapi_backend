import express from 'express';
import { createAssistant, storeCallReport, getSessions , createLiveKitToken} from '../controllers/callReportController.js';
const vapiRoutes = express.Router();

vapiRoutes.post("/create-assistant", createAssistant);

vapiRoutes.post("/end-call-report", storeCallReport);

vapiRoutes.get("/sessions", getSessions);

vapiRoutes.get("/livekit-token",createLiveKitToken);

export default vapiRoutes;