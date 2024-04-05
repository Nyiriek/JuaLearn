// Routes

// Route to retrieve grades
app.get('/grades', (req, res) => {
  db.query('SELECT * FROM user_grades', (err, results) => {
    if (err) {
      console.error('Error fetching grades:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results);
  });
});

// Route to handle user signup
app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  // Query to insert user signup data into the database
  const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  const values = [username, email, password];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error signing up:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    console.log('User signed up successfully');
    res.send('User signed up successfully');
  });
});
