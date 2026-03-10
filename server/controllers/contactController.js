import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const messagesFile = path.join(__dirname, '../data/messages.json');

// Initialize messages file if it doesn't exist
const initializeMessagesFile = async () => {
  try {
    await fs.access(messagesFile);
  } catch {
    await fs.writeFile(messagesFile, JSON.stringify([], null, 2));
  }
};

export const submitContact = async (req, res) => {
  try {
    const { name, email, company, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields (name, email, message)',
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address',
      });
    }

    // Create contact object
    const contact = {
      id: Date.now(),
      name,
      email,
      company: company || 'Not specified',
      message,
      createdAt: new Date().toISOString(),
    };

    // Initialize file if needed
    await initializeMessagesFile();

    // Read existing messages
    const data = await fs.readFile(messagesFile, 'utf-8');
    const messages = JSON.parse(data);

    // Add new message
    messages.push(contact);

    // Write back to file
    await fs.writeFile(messagesFile, JSON.stringify(messages, null, 2));

    // Log to console
    console.log('New contact submission:', contact);

    res.status(200).json({
      success: true,
      message: 'Thank you for your message. We will get back to you soon!',
      data: contact,
    });
  } catch (error) {
    console.error('Error in submitContact:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request',
    });
  }
};

export const getMessages = async (req, res) => {
  try {
    await initializeMessagesFile();
    const data = await fs.readFile(messagesFile, 'utf-8');
    const messages = JSON.parse(data);

    res.status(200).json({
      success: true,
      count: messages.length,
      data: messages,
    });
  } catch (error) {
    console.error('Error in getMessages:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while retrieving messages',
    });
  }
};
