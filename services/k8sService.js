

const Client = require('kubernetes-client').Client;
const config = require('kubernetes-client').config;

class K8sService {
  constructor() {
    this.client = new Client({ config: config.fromKubeconfig(), version: '1.13' });
  }

  async listNamespaces() {
    try {
      const namespaces = await this.client.api.v1.namespaces.get();
      return namespaces.body;
    } catch (err) {
      console.error('Error listing namespaces:', err);
      throw err;
    }
  }

    async getPods(namespace) {
        try {
            console.log(`Getting pods in namespace ${namespace}`);
            const pods = await this.client.api.v1.namespaces(namespace).pods.get();
            return pods.body;
        } catch (err) {
            console.error(`Error getting pods in namespace ${namespace}:`, err);
            throw err;
        }
    }
}

module.exports = K8sService;