import mongoose, { Schema, Document } from 'mongoose';

interface ISolution extends Document {
  sol_error_id: mongoose.Schema.Types.ObjectId;
  sol_content: object;
  sol_created_by: mongoose.Schema.Types.ObjectId;
  sol_upvotes: number;
  sol_downvotes: number;
  sol_attachments: mongoose.Schema.Types.ObjectId[];
  sol_created_at: Date;
}

const SolutionSchema: Schema = new Schema<ISolution>({
  sol_error_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Error', required: true },
  sol_content: { type: Object, required: true },
  sol_created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  sol_upvotes: { type: Number, default: 0 },
  sol_downvotes: { type: Number, default: 0 },
  sol_attachments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attachment' }],
  sol_created_at: { type: Date, default: Date.now }
});

export default mongoose.model<ISolution>('Solution', SolutionSchema);
