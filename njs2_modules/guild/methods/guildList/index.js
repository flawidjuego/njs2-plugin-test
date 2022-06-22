class Action extends baseAction {
    async execute() {
      return {
        code: 'SUCCESS',
        data: {
            user_id: 2
        }
      }
    };
}

module.exports = () => new Action;
