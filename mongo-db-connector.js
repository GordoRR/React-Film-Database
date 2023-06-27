const MongoClient = require('mongodb').MongoClient;

class MongoDBConnector {
  constructor(url, dbName) {
    this.url = url;
    this.dbName = dbName;
    this.client = new MongoClient(url, { useNewUrlParser: true });
    this.db = null;
  }

  async connect() {
    try {
      await this.client.connect();
      console.log('Úspěšné připojení k MongoDB');
      this.db = this.client.db(this.dbName);
    } catch (err) {
      console.error('Chyba při připojování k MongoDB:', err);
      throw err;
    }
  }

  async close() {
    await this.client.close();
    console.log('Připojení k MongoDB bylo uzavřeno');
  }

  async createDocument(collectionName, document) {
    try {
      const collection = this.db.collection(collectionName);
      const result = await collection.insertOne(document);
      console.log('Dokument byl úspěšně vytvořen:', result.insertedId);
      return result.insertedId;
    } catch (err) {
      console.error('Chyba při vytváření dokumentu:', err);
      throw err;
    }
  }

  async updateDocument(collectionName, filter, update) {
    try {
      const collection = this.db.collection(collectionName);
      const result = await collection.updateOne(filter, { $set: update });
      console.log('Dokument byl úspěšně aktualizován');
      return result.modifiedCount;
    } catch (err) {
      console.error('Chyba při aktualizaci dokumentu:', err);
      throw err;
    }
  }

  async listDocuments(collectionName, filter) {
    try {
      const collection = this.db.collection(collectionName);
      return await collection.find(filter).toArray();
    } catch (err) {
      console.error('Chyba při získávání dokumentů:', err);
      throw err;
    }
  }
}

module.exports = MongoDBConnector;
