const childProcess = require('child_process');

module.exports = {
  exec: async (cmd, cwd) => {
    return new Promise((resolve, reject) => childProcess.exec(cmd, { cwd }).on('error', reject).on('exit', resolve));
  }
};
