const pool = require('../db.ts') ;


/**
  * Create a new reminder
  *
  * @param title Title of the reminder
  * @param description Body of the reminder
  * @param repeat Either none, daily, weekly or yearly 
  * @param enabled 0 disabled, 1 enabled
  */
const createReminder = async (title, user_id, description, enabled, repeat, time) => {
  const query = `
    INSERT INTO reminders (title, user_id, description, enabled, repeat, time)
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;
  `;

  const values = [title, user_id, description, enabled, repeat, time];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error('Error creating reminder:', error);
    throw err;
  }
}

const editReminder = async (id, title, user_id, description, enabled, repeat, time) => {

  const values = [id, title, user_id, description, enabled, repeat, time];

  const deleteQuery = `
    DELETE FROM reminders
    WHERE id = $1;
  `;

  const insertQuery = `
    INSERT INTO reminders (id, title, user_id, description, enabled, repeat, time)
    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;
  `;

  try {
    await pool.query(deleteQuery, [ values [0] ]);
    const result = await pool.query(insertQuery, values);
    return result.rows;
  } catch (error) {
    console.error('Error creating reminder:', error);
    throw error;
  }
}

const toggleReminder = async (reminder_id) => {
  const query = `
  UPDATE reminders
  SET enabled = NOT enabled WHERE id = $1;
  `
  try {
    const result = await pool.query(query, [ reminder_id ]);
    return result.rows[0];
  } catch (err) {
    console.error('Error toggling reminder:', error);
    throw err;
  }
}

const checkEnabled = async (reminder_id) => {
  const query = `
  SELECT enabled FROM reminders
  WHERE ID = $1
  `
  try {
    const result = await pool.query(query, [ reminder_id ]);
    return result.rows[0];
  } catch (err) {
    console.error('Error creating reminder:', error);
    throw err;
  }
}

/**
 * Remove reminder
 *
 *  @param reminder_id Identify reminder by id
 */
const removeReminder = async (reminder_id) => {
  const query = `
    DELETE FROM reminders
    WHERE ID = $1;
  `;

  try {
    const result = await pool.query(query, [ reminder_id ]);
    return result.rows;
  } catch (error) {
    console.error('Error removing reminder: ', error);
    throw error;
  }
}


/**
  * @returns all reminders for a specific user to an array.
  */
const fetchRemindersUser = async (user_id) => {
  const query = `
    SELECT * FROM reminders
    WHERE user_id = $1
    ORDER BY time
  `;

  try {
    const result = await pool.query(query, [ user_id ]);
    return result.rows;
  } catch (error) {
    console.error('Error fetching reminders: ', error);
    throw error;
  }
}


const fetchRemindersUserByRepeat = async (user_id, repeat) => {
  const query = `
    SELECT * FROM reminders
    WHERE user_id = $1
    AND repeat = $2
    ORDER BY time
  `;

  try {
    const result = await pool.query(query, [ user_id, repeat ]);
    return result.rows;
  } catch (error) {
    console.error('Error fetching reminders: ', error);
    throw error;
  }
}

/**
  * @returns all reminders in an array.
  */
const fetchReminders = async () => {
  const query = `
    SELECT * FROM reminders
    ORDER BY time
  `;

  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.error('Error fetching reminders: ', error);
    throw error;
  }
}

/**
  * @returns all reminders in an array.
  */
const fetchReminder = async (reminder_id) => {
  const query = `
    SELECT * FROM reminders
    WHERE id = $1;
  `;

  try {
    const result = await pool.query(query, [reminder_id]);
    return result.rows;
  } catch (error) {
    console.error('Error fetching reminder: ', error);
    throw error;
  }
}


const fetchLatestReminder = async (user_id) => {
  const query = `
    SELECT * FROM reminders
    WHERE user_id = $1
    ORDER BY id DESC;
  `;

  try {
    const result = await pool.query(query, [ user_id ]);
    return result.rows[0];
  } catch (error) {
    console.error('Error fetching latest reminder: ', error);
    throw error;
  }
}


module.exports = {
  createReminder,
  fetchReminders,
  fetchReminder,
  fetchRemindersUser,
  removeReminder,
  toggleReminder,
  checkEnabled,
  fetchLatestReminder,
  editReminder,
  fetchRemindersUserByRepeat
};
