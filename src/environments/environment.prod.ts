import { GithubService as MockGitHubService } from "src/app/services/github.mock.service";
import { GithubService } from "src/app/services/github.service";

export const environment = {
  production: true,
  providers: [
    { provide: MockGitHubService, useClass: GithubService }
  ],
};
