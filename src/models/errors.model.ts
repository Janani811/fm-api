import mongoose, { Schema, Document } from 'mongoose';

interface IError extends Document {
  er_title: string;
  er_description: object;
  er_created_by: mongoose.Schema.Types.ObjectId;
  er_tags: string[];
  er_attachments: mongoose.Schema.Types.ObjectId[];
  er_createdAt: Date;
}

const ErrorSchema: Schema = new Schema<IError>({
  er_title: { type: String, required: true },
  er_description: { type: Object, required: true },
  er_created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  er_tags: { type: [String] },
  er_attachments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attachment' }],
  er_createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IError>('Error', ErrorSchema);