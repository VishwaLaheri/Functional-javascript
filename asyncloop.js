function loadUsers(userIds, load, done) {
    const users = [];
    let completed = 0;
  
    userIds.forEach((id, index) => {
      load(id, (user) => {
        users[index] = user; 
        completed++;
  
        if (completed === userIds.length) {
          done(users); 
        }
      });
    });
  }
  
  module.exports = loadUsers;