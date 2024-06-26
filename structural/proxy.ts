// A proxy controls access to their original object, allowing you to perform
// something either before or after the request gets through the original object

interface IYoutubeThirdParty {
  listVideos(): void;
  listPopularVideos(): void;
  listTrendingVideos(): void;
}

class YoutubeService implements IYoutubeThirdParty {
  listPopularVideos(): void {
    console.log('list popular videos');
  }
  listTrendingVideos(): void {
    console.log('list trending videos');
  }

  listVideos(): void {
    console.log('list videos');
  }
}

class YoutubeProxy implements IYoutubeThirdParty {
  private youtubeService: YoutubeService;
  private isAuth: boolean;
  constructor() {
    this.youtubeService = new YoutubeService();
    this.isAuth = false;
  }
  listVideos(): void {
    throw new Error("Method not implemented.");
  }

  listPopularVideos(): void {
    if (this.isAuth) {
      this.youtubeService.listPopularVideos();
    } else {
      console.log('please login');
    }
  }
  listTrendingVideos(): void {
    if (this.isAuth) {
      this.youtubeService.listTrendingVideos();
    } else {
      console.log('please login');
    }
  }

}

abstract class IController {
  abstract get(): void;
  abstract post(): void;
}

class UsersController implements IController {
  get(): void {
    throw new Error("Method not implemented.");
  }
  post(): void {
    throw new Error("Method not implemented.");
  }
}

class ControllerProxy implements IController {
  private controller: IController;
  private isAuth: boolean;
  constructor(controller: IController) {
    this.controller = controller;
    this.isAuth = false;
  }
  get(): void {
    if (this.isAuth) {
      this.controller.get();
    } else {
      console.log('please login');
    }
  }
  post(): void {
    if (this.isAuth) {
      this.controller.post();
    } else {
      console.log('please login');
    }
  }
}