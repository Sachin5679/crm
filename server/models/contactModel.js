const pool = require('../config/db');

const Contact = {
    create: async (firstName, lastName, email, phoneNumber, company, jobTitle)=>{
        const query = `
            INSERT INTO "Contact" ("firstName", "lastName", "email", "phoneNumber", "company", "jobTitle")
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *;
        `;
        const values = [firstName, lastName, email, phoneNumber, company, jobTitle];
        const result = await pool.query(query, values);
        return result.rows[0];
    },

    getAll: async () => {
        const query = 'SELECT * FROM "Contact";';
        const result = await pool.query(query);
        return result.rows;
      },
    
    update: async (id, firstName, lastName, email, phoneNumber, company, jobTitle) => {
        const query = `
          UPDATE "Contact"
          SET "firstName" = $1, "lastName" = $2, "email" = $3, "phoneNumber" = $4, "company" = $5, "jobTitle" = $6
          WHERE id = $7
          RETURNING *;
        `;
        const values = [firstName, lastName, email, phoneNumber, company, jobTitle, id];
        const result = await pool.query(query, values);
        return result.rows[0];
      },
    
    delete: async (id) => {
        const query = 'DELETE FROM "Contact" WHERE id = $1 RETURNING *;';
        const result = await pool.query(query, [id]);
        return result.rows[0];
      }
}

module.exports = Contact;