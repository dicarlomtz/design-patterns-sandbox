// Creates different objects for different contexts

interface ViewItem {
  render(): void;
}
interface Button extends ViewItem {
  render(): void;
  click(): void;
}

interface Input extends ViewItem {
  render(): void;
  fill(value: string): void;
}

class IosButton implements Button {
  click(): void {
    console.log("Click ios button");
  }

  render(): void {
    console.log("Render ios button");
  }
}

class AppleTvButton implements Button {
  render(): void {
    console.log("Render apple tv button");
  }
  click(): void {
    console.log("Click apple tv button");
  }
}

class AndroidButton implements Button {
  click(): void {
    console.log("Click android button");
  }

  render(): void {
    console.log("Render android button");
  }
}

class IosInput implements Input {
  render(): void {
    console.log("Render ios input");
  }
  fill(value: string): void {
    console.log(`Fill ${value} in ios input`);
  }
}

class AppleTvInput implements Input {
  render(): void {
    console.log("Render apple tv input");
  }
  fill(value: string): void {
    console.log(`Fill ${value} in apple tv input`);
  }
}

class AndroidInput implements Input {
  render(): void {
    console.log("Render android input");
  }
  fill(value: string): void {
    console.log(`Fill ${value} in android input`);
  }
}

// Abstract Factory
interface ViewItemFactory {
  createButton(): Button;
  createInput(): Input;
}

// Abstract Factory Implementation
class IosViewItemFactory implements ViewItemFactory {
  createInput(): Input {
    return new IosInput();
  }

  createButton(): Button {
    return new IosButton();
  }
}

// Abstract Factory Implementation
class AndroidViewItemFactory implements ViewItemFactory {
  createInput(): Input {
    return new IosInput();
  }
  createButton(): Button {
    return new AndroidButton();
  }
}

// Abstract Factory Implementation
class AppleTvViewItemFactory implements ViewItemFactory {
  createInput(): Input {
    return new AppleTvInput();
  }
  createButton(): Button {
    return new AppleTvButton();
  }
}

// Factory Method
interface MultiplatformViewItemFactory {
  createViewItemFactory(): ViewItemFactory;
}

// Factory Method Implementation
class MobileMultiplatformViewItemFactory implements MultiplatformViewItemFactory {
  private platform: 'ios' | 'android';

  constructor(platform: 'ios' | 'android') {
    this.platform = platform;
  }

  createViewItemFactory(): ViewItemFactory {
    return this.platform === 'ios'
      ? new IosViewItemFactory()
      : new AndroidViewItemFactory();
  }
}

// Factory Method Implementation
class TvMultiplatformViewItemFactory implements MultiplatformViewItemFactory {
  private platform: 'appleTv' | 'androidTv';

  constructor(platform: 'appleTv' | 'androidTv') {
    this.platform = platform;
  }

  createViewItemFactory(): ViewItemFactory {
    return this.platform === 'appleTv'
      ? new AppleTvViewItemFactory()
      : new AndroidViewItemFactory();
  }
}

class MultiplatformViewItemBucket {
  private platform: 'mobile' | 'smartTv';
  private platformTypeFactory: MultiplatformViewItemFactory;
  private viewItemFactory: ViewItemFactory;
  private static multiplatformViewItemBucket: MultiplatformViewItemBucket;

  private constructor() {
    this.platform = this.getPlatformType();
    this.platformTypeFactory = this.createPlatformTypeFactory();
    this.viewItemFactory = this.platformTypeFactory.createViewItemFactory();
  }

  private getPlatformType(): 'smartTv' | 'mobile' {
    return 'mobile';
  }

  private createPlatformTypeFactory(): MultiplatformViewItemFactory {
    switch(this.platform) {
      case 'mobile':
        return new MobileMultiplatformViewItemFactory('ios');
      case 'smartTv':
        return new TvMultiplatformViewItemFactory('appleTv');
      default:
        throw new Error('Not Supported Platform Type');
    }
  }

  public static get createViewItem(): ViewItemFactory {
    if (!this.multiplatformViewItemBucket) {
      this.multiplatformViewItemBucket = new MultiplatformViewItemBucket();
    }

    return this.multiplatformViewItemBucket.viewItemFactory;
  }
}

const button = MultiplatformViewItemBucket.createViewItem.createButton();
const input = MultiplatformViewItemBucket.createViewItem.createInput();


button.render();
button.click();

input.render();
input.fill('test');