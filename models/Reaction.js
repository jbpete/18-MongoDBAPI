// const { Schema } = require('mongoose')

// const reactionSchema = new Schema(
//     {
//         reactionId: {
//             type: Schema.Types.ObjectId,
//             default: () => new Types.Objectid()
//         },
//         reactionBody: {
//             type: String,
//             required: true,
//             max: 280
//         },
//         username: {
//             type: String,
//             required: true
//         },
//         createdAt: {
//             type: Date,
//             default: Date.now,
//             get: (date) => {
//                 if (date) return date.toISOString().split("T") [0];
//             }  
//         }
//     }
// );

//const Department = mongoose.model('Department', departmentSchema);
