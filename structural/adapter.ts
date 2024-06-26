// Allows objects with incompatible interfaces to collaborate

abstract class FileRead<T> {
  protected adaptee: T;

  constructor(adaptee: T) {
    this.adaptee = adaptee;
  }

  abstract readProperty(property: string): any;
}

class XMLFileRead extends FileRead<XMLDocument> {

  readProperty(property: string): any {
    return this.adaptee.getElementsByTagName(property)[0].innerHTML;
  }
}

class JSONFileRead extends FileRead<JSON> {

  readProperty(property: string): any {
    return this.adaptee[property];
  }
}
