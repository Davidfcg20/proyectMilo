const bcrypt = require('bcrypt');

const userPassword = '375NegroDF';

bcrypt.compare(userPassword, '$2b$05$OcYs7lazHy.jz/InhyJ.CuEf3iUQsRoQctMa6b8i25a48OFLxA/vG').then((result) => {
  console.log(result);
});

