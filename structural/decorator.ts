// Let us attach new behaviors to objects by placing these objects inside a special wrapper
// objects that contain the behavior

class Notifier {
  notify(message: string): void {
    console.log('Email Notification: ' + message);
  }
}

class BaseNotifierDecorator extends Notifier {
  protected wrappee?: Notifier;
  constructor(wrappee?: Notifier) {
    super();
    this.wrappee = wrappee;
  }
  notify(message: string): void {
    this.wrappee?.notify(message);
  }
}

class SMSNotifier extends BaseNotifierDecorator {
  notify(message: string) {
    super.notify(message);
    console.log('SMS Notification: ' + message);
  }
}

class SlackNotifier extends BaseNotifierDecorator {
  notify(message: string) {
    super.notify(message);
    console.log('Slack Notification: ' + message);
  }
}

const stack = new SlackNotifier();

const notifier = new SMSNotifier(stack);
notifier.notify('Hello, World!');