// Simple React Native specific changes

export default {
  // font scaling override - RN default is on
  allowTextFontScaling: true,

  // Current instantiation of app for project. Should be adjusted in
  // camelCase name of app, e.g., demoXyz
  // (CAUTION 1: MUST be adjusted for encrypted apps!!!!)
  // (CAUTION 2: Parameter AppConfig.mobileCoachClient must be changed to the same name)
  project: 'mobileCoachClient',
  // Project name as it can be presented to the customer
  projectName: 'MobileCoach Client App',
  // Encryption secret for instance of app project.
  projectSecret: 'mc-client-top-secret',

  // Configuration of the project
  config: {
    dev: {
      purgeStoreAtStartup: true,
      fakeDeviceAlwaysOnlineForOfflineDev: false,
      fakeQRCodeScanWithURL: null,
      allowDebugKeyboard: false,
      deepstreamUserForDebugging: null,
      deepstreamSecretForDebugging: null,
      disableYellowbox: true
    },
    storage: {
      encryptedReduxStorage: false,
      reduxStorageBlacklist: [
        'search',
        'nav',
        'hydrationCompleted',
        'serverSyncStatus',
        'giftedchatmessages',
        'guistate'
      ]
    },
    logger: {
      // Levels: 'DEBUG', 'INFO', 'WARN', 'ERROR', 'OFF', 'CRASHLYTICS'
      defaultLevel: 'DEBUG', // 'OFF' to deactivate the WHOLE logger (also exceptions)
      trackActivities: false,
      trackingURL: 'https://---/piwik/piwik.php',
      trackingId: 5,
      loggerLevels: {
        'Components/CameraComponent': 'INFO',
        'Components/RecordAudioComponent': 'INFO',
        'Components/CustomMessages/MediaInput': 'INFO',
        'Navigation/ReduxNavigation': 'INFO',
        'Redux/MessageRedux': 'INFO',
        'Redux/ServerSyncRedux': 'INFO',
        'Redux/StoryProgressRedux': 'INFO',
        'Sagas/GiftedChatMessageSaga': 'INFO',
        'Sagas/MessageSagas': 'INFO',
        'Sagas/ServerSyncSagas': 'INFO',
        'Utils/PushNotifications': 'INFO'
      }
    },
    typingIndicator: {
      fastMode: true,
      // typing speed (words/minute)
      coachTypingSpeed: 200,
      // max delay for larger msgs (in ms)
      maxTypingDelay: 15000,
      // delay before active elements (in ms)
      interactiveElementDelay: 300
    },
    messages: {
      initialNumberOfMinimalShownMessages: 10,
      incrementShownMessagesBy: 25,
      // Show message instead if loading-indicator if chat is empty
      showEmptyChatMessage: false,
      // true: expired answer-buttons are switched to an 'answer expired'-message
      // false: expired answers are being greyed out
      showAnswerExpiredMessage: false,
      // if true, alert text is displayed when user taps on expired message (text defined in i18n json)
      showExpiryAlert: true
    },
    startup: {
      automaticallyRequestPushPermissions: false,
      automaticallyConnectOnFirstStartup: true,
      automaticallyShareObserverAccessToken: false,
      automaticallyShareParticipantAccessToken: false,
      backButtonInOnboardingEnabled: false,
      onboardingURL: '---'
    },
    serverSync: {
      useLocalServer: false,
      userChatEnabled: true,
      dashboardChatEnabled: true,
      // null or varible name if record length shall be automatically communicated to server
      sendRecordedMediaLengthValues: 'lastRecordLength',
      clientVersion: 1,
      role: 'participant', // Can be: participant, supervisor, observer, or team-manager
      defaultNickname: 'MobileCoach Client User',
      interventionPattern: 'Unlimibot',
      interventionPassword: 'lnqwBbgppE0tblnikQRn',
      androidSenderId: '1234567890',
      localDeepstreamURL: 'ws://127.0.0.1:8082/deepstream',
      localRestURL: 'http://127.0.0.1:8080/PMCP/api/v02/',
      localMediaURL: 'http://127.0.0.1:8080/PMCP/files/',
      remoteDeepstreamURL: 'wss://http://167.71.46.73:8082/deepstream',
      remoteRestURL: 'https://http://167.71.46.73:8082/PMCP/api/v02/',
      remoteMediaURL: 'https://http://167.71.46.73:8082/PMCP/files/',
      // Whether or not user uploads are protected with auth-tokens
      mediaUploadsWithAuthenticiation: true
    },
    supportedLanguages: ['de', 'en'],
    mobileCoachClient: {
      shareUrl: {
        fr: 'https://www.shareurl-fr.fr',
        it: 'https://www.shareurl-it.it',
        de: 'https://www.shareurl-de.de'
      }
    }
  }
}