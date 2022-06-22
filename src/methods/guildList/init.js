class Initalize extends baseInitialize {
  constructor() {
    super();
    this.initializer = this.loadIntializer('guild/guildList');
  }

  getParameter() {
    return { ...this.initializer.initParams };
  }
}

module.exports = Initalize;
