export enum StartupRequestStatus {
  CreateStartupDeskAndWaitForAssignMemebrByApplicant = 1,
  WaitingForSelectByStartupResponsible = 2,
  WaitingForVerifyMemberByStartupResponsible = 3,
  PerformingProject = 4,
  AwaitingReviewOfTheProjectCompletionRequestByTheStartupDeskManager = 5,
  EndOfTheProject = 6,
}
