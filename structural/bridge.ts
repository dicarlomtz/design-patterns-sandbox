// Let us split a large class or a set of closely related classes into two separate
// hierarchies—abstraction and implementation—which can be developed independently of each other

interface IViewModel {
  title(): void;
}

class VideoViewModel implements IViewModel {
  title() {
    console.log("Video title");
  }
}

class StreamViewModel implements IViewModel {
  title() {
    console.log("Stream title");
  }
}

abstract class ListItemView {
  protected viewModel: IViewModel;

  constructor(viewModel: IViewModel) {
    this.viewModel = viewModel;
  }

  abstract render(): void;
}

class ThumbnailListItemView extends ListItemView {

  render(): void {
    console.log("Render thumbnail");
    this.viewModel.title();
  }
}

class JustTextListItemView extends ListItemView {
  render(): void {
    console.log("Render just text");
    this.viewModel.title();
  }
}

const stream = new StreamViewModel();
const video = new VideoViewModel();
const thumbnail = new ThumbnailListItemView(stream);
const justText = new JustTextListItemView(video);
thumbnail.render();
justText.render();