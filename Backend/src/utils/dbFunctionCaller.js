// src/utils/dbFunctionCaller.js
const { pool } = require('../config/db');
// filepath: c:\Users\msriz\Desktop\Projects\DocRepoAI\Backend\src\utils\dbFunctionCaller.js

/**
 * Dynamically calls a Postgres function.
 * @param {string} functionName - The Postgres function name.
 * @param {Array} params - The function parameters.
 * @returns {Promise<any>} - The function result.
 */
const callDbFunction = async (functionName, params = []) => {
    try {
        console.log(`Calling DB function: ${functionName} with params:`, params);
        const placeholders = params.map((_, idx) => `$${idx + 1}`).join(', ');
        const query = `SELECT * FROM ${functionName}(${placeholders})`;
        const result = await pool.query(query, params);
        return result.rows;
    } catch (error) {
        console.error('Database Function Call Error:', error);
        throw error;
    }
};

module.exports = { callDbFunction };
