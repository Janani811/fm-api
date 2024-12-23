import mongoose, { Schema, Document } from 'mongoose';

interface IAttachment extends Document {
  at_url: string;
  at_file_type: string;
  at_file_name: string;
  at_size: number;
  at_associated_id: mongoose.Schema.Types.ObjectId;
  at_type: string;
  at_uploaded_by: mongoose.Schema.Types.ObjectId;
  at_uploaded_at: Date;
}

const AttachmentSchema: Schema = new Schema<IAttachment>({
  at_url: { type: String, required: true },
  at_file_type: { type: String, required: true },
  at_file_name: { type: String, required: true },
  at_size: { type: Number },
  at_associated_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  at_type: { type: String, enum: ['error', 'solution', 'comment'], required: true },
  at_uploaded_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  at_uploaded_at: { type: Date, default: Date.now }
});

export default mongoose.model<IAttachment>('Attachment', AttachmentSchema);
