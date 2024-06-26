// Singleton let us create a single instance of a class

class FileManager {
  private static instance: FileManager;

  public static get manager() {
    if (!this.instance) {
      this.instance = new FileManager();
    }

    return this.instance;
  }

  public readFile(path: string): void {
    console.log(`Reading file from ${path}`);
  }
}

FileManager.manager.readFile('file.txt');