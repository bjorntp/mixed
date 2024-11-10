const express = require('express');
const router = express.Router();
const { createReminder, editReminder, fetchRemindersUser, fetchRemindersUserByRepeat, removeReminder, fetchReminder, toggleReminder, checkEnabled, fetchLatestReminder } = require('../models/reminders.ts');

// Route to create a new reminder
router.post('/reminder/new', async (req, res) => {
  const { title, user_id, description, enabled, repeat, time } = req.body;
  try {
    const newReminder = await createReminder(title, user_id, description, enabled, repeat, time);
    res.status(201).json(newReminder);
  } catch (err) {
    console.error('Error creating reminder:', err);
    res.status(500).json({ error: 'Failed to create reminder' });
  }
});

// Route to create a new reminder
router.post('/reminder/edit', async (req, res) => {
  const { reminder_id, title, user_id, description, enabled, repeat, time } = req.body;
  try {
    const newReminder = await editReminder(reminder_id, title, user_id, description, enabled, repeat, time);
    res.status(201).json(newReminder);
  } catch (err) {
    console.error('Error editing reminder:', err);
    res.status(500).json({ error: 'Failed to edit reminder' });
  }
});

// Route to delete a reminder
router.post('/reminder/remove', async (req, res) => {
  const { reminder_id } = req.body;
  try {
    const deleteReminder = await removeReminder(reminder_id);
    res.status(200).json({ message: 'Reminder deleted successfully', deleteReminder });
  } catch (error) {
    console.error('Error deleting reminder:', error);
    res.status(500).json({ error: 'Failed to delete reminder' });
  }
});

router.post('/reminder/toggle', async (req, res) => {
  const { reminder_id } = req.body;
  try {
    const toggled = await toggleReminder(reminder_id);
    res.status(200).json({ message: 'Reminder toggled successfully', toggled });
  } catch (error) {
    console.error('Error toggling reminder:', error);
    res.status(500).json({ error: 'Failed to toggle reminder' });
  }
});

// Route to fetch all reminders for a user
router.get('/reminders/all', async (req, res) => {
  const { user_id } = req.body;
  try {
    const allReminders = await fetchRemindersUser(user_id);
    res.status(200).json(allReminders);
  } catch (err) {
    console.error('Error fetching reminders:', err);
    res.status(500).json({ error: 'Failed to fetch reminders' });
  }
});

// Route to fetch all reminders for a user with a specific repeat
router.get('/reminders/byRepeat', async (req, res) => {
  const { user_id, repeat } = req.body;
  try {
    const allReminders = await fetchRemindersUserByRepeat(user_id, repeat);
    res.status(200).json(allReminders);
  } catch (err) {
    console.error('Error fetching reminders:', err);
    res.status(500).json({ error: 'Failed to fetch reminders' });
  }
});

// Fetch specific reminder
router.get('/reminder/fetch', async (req, res) => {
  const { reminder_id } = req.body;
  try {
    const reminder = await fetchReminder(reminder_id);
    res.status(200).json(reminder);
  } catch (error) {
    console.error('Error deleting reminder:', error);
    res.status(500).json({ error: 'Failed to fetch reminder' });
  }
});

router.get('/reminder/enabled', async (req, res) => {
  const { reminder_id } = req.body;
  try {
    const reminder = await checkEnabled(reminder_id);
    res.status(200).json(reminder);
  } catch (error) {
    console.error('Error deleting reminder:', error);
    res.status(500).json({ error: 'Failed to fetch reminder' });
  }
});

router.get('/reminder/latest', async (req, res) => {
  const { user_id } = req.body;
  try {
    const reminder = await fetchLatestReminder( user_id );
    res.status(200).json(reminder);
  } catch (error) {
    console.error('Error deleting reminder:', error);
    res.status(500).json({ error: 'Failed to fetch reminder' });
  }
})
module.exports = router;
