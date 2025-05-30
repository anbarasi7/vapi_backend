import mongoose from "mongoose";


const callReportSchema = new mongoose.Schema({}, {strict: false});
export const CallReportModel = mongoose.model("CallReport", callReportSchema);