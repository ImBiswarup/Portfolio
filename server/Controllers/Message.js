const Message = require('../Models/Message');

const messageController = {
  postMessage: async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      const newMessage = new Message({ name, email, message });
      await newMessage.save();

      res.json({ success: true });
    } catch (error) {
      console.error('Error saving message to MongoDB:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};

module.exports = messageController;
