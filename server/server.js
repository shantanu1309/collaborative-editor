const mongoose = require("mongoose");
const Document = require("./Document"); // Make sure you created this file!

// 1. Connect to MongoDB Atlas (Replace with your actual string)
mongoose.connect("mongodb+srv://shantanushinde67_db_user:Shant123@cluster0.dbls7je.mongodb.net/?appName=Cluster0")
  .then(() => console.log("Connected to MongoDB Atlas!"))
  .catch((err) => console.error("Database connection error:", err));

const io = require("socket.io")(3001, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const defaultValue = "";

io.on("connection", (socket) => {
  // 2. When a user joins, they need a specific document ID
  socket.on("get-document", async (documentId) => {
    const document = await findOrCreateDocument(documentId);
    socket.join(documentId);
    
    // Send the existing data back to the user's editor
    socket.emit("load-document", document.data);

    socket.on("send-changes", (delta) => {
      // Broadcast changes only to people in the same document room
      socket.broadcast.to(documentId).emit("receive-changes", delta);
    });

    // 3. Save the document data to MongoDB
    socket.on("save-document", async (data) => {
      await Document.findByIdAndUpdate(documentId, { data });
    });
  });
});

// Helper function to find a doc or create it if it's new
async function findOrCreateDocument(id) {
  if (id == null) return;
  const document = await Document.findById(id);
  if (document) return document;
  return await Document.create({ _id: id, data: defaultValue });
}

console.log("Server is running on port 3001");