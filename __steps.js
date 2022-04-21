/**
 * -------------------------
 * basic server setup
 * ------------------------
 * 1. Create a folder (manually of mkdir)
 * 2. Open command line to that folder
 * 3. npm init
 * 4. install express
 * 5. create index.js
 * --------------------------
 * For express
 * -------------------------
 * 1. require express.
 * 2. create app variable.
 * 3. declare port
 * 4. set app.get('/')
 * 5. listen to port
 * 6. node index.js
 * 7. check your browser.
 * ------------------------
 * cors middleware
 * -----------------------
 * 1. cors middleware
 * 2. npm install cors
 * 3. const cors = require("cors");
 * 4. app.use(cors());
 * -------------------------
 * post
 * ------------------------
 *fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        const newUsers = [...users, data];
        setUsers(newUsers);
      });
  };
 *
 */
