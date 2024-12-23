import mongoose, { Schema, Document } from 'mongoose';

interface IComment extends Document {
  co_content: string;
  co_created_by: mongoose.Schema.Types.ObjectId;
  co_associated_id: mongoose.Schema.Types.ObjectId;
  co_type: string;
  co_attachments: mongoose.Schema.Types.ObjectId[];
  co_created_at: Date;
}

const CommentSchema: Schema = new Schema<IComment>({
  co_content: { type: String, required: true },
  co_created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  co_associated_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  co_type: { type: String, enum: ['error', 'solution'], required: true },
  co_attachments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attachment' }],
  co_created_at: { type: Date, default: Date.now }
});

export default mongoose.model<IComment>('Comment', CommentSchema);
