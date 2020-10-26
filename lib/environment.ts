enum Environments {
  localEnv = 'local',
  devEnv = 'dev',
  prodEnv = 'prod',
  qaEnv = 'qa'
}

class Environment {
  private environment: String

  constructor (environment: String) {
    this.environment = environment
  }

  getPort(): Number {
    let port = 4000
    if (this.environment === Environments.prodEnv) {
      port = 8081
    } else if (this.environment === Environments.devEnv) {
      port = 8082
    } else if (this.environment === Environments.qaEnv) {
      port = 8083
    }

    return port
  }

  getDBName(): String {
    let dbName = 'md-version'
    if (this.environment === Environments.prodEnv) {
      dbName = 'db_test_project_prod';
    } else if (this.environment === Environments.devEnv) {
      dbName = 'db_test_project_dev';
    } else if (this.environment === Environments.qaEnv) {
      dbName = 'db_test_project_qa';
    }

    return dbName
  }
}

export default new Environment(Environments.localEnv)
