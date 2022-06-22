async function executePackageMethod(_this, packageName, methodName) {
    const TestTestPkg = _this.loadPkg(`${packageName}/${methodName}`);
    const res = await TestTestPkg.execute(_this);
    _this.setResponse(res.code, [], `${packageName}/${methodName}`);
    return res.data;
}

class Action extends baseAction {
  async executeMethod() {
    return await executePackageMethod(this, 'guild', 'guildList');
  };
}

module.exports = Action;
