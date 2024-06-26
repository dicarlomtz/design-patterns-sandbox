// Iterator let us traverse elements of a collection without exposing its underlying representation (list, stack, tree, etc)

interface IteratorInterface<T> {
  hasNext(): boolean
  nexItem(): T;
  hasPrevious(): boolean;
  previous(): T;
}

class Song {

}

interface Collection<T> {
  iterator(): IteratorInterface<T>;
}

class SongsRandomCollection implements Collection<Song> {
  iterator(): IteratorInterface<Song> {
    return new SongsIterator([new Song()]);
  }
}

class SongsIterator implements IteratorInterface<Song> {

  constructor(private songs: Song[]) { }

  nexItem(): Song {
    throw new Error("Method not implemented.");
  }

  hasNext(): boolean {
    throw new Error("Method not implemented.");
  }
  hasPrevious(): boolean {
    throw new Error("Method not implemented.");
  }
  previous(): Song {
    throw new Error("Method not implemented.");
  }

}

const collection = new SongsRandomCollection();
const iterator = collection.iterator();
iterator.hasNext();
iterator.nexItem();
iterator.hasPrevious();
iterator.previous();