class Action extends baseAction {
    async execute(context) {

      const { emailId } = context

      return {
        code: 'SUCCESS',
        data: {
            user_id: emailId
        }
      }
    };
}

module.exports = () => new Action;
