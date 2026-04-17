/**
 * @see https://www.electron.build/
 *
 */
import type { Configuration } from "electron-builder";

const config: Configuration = {
  appId: "com.electron.app",
  productName: "Electron App",
  copyright: "Copyright © 2026 Your Company",
  directories: {
    output: ".release",
    buildResources: "public",
  },
  files: [".dist/electron/**/*", ".dist/app/**/*", "package.json"],
  asar: true,
  win: {
    target: "nsis",
    artifactName: "${productName}-Setup-${version}.${ext}",
  },
  nsis: {
    oneClick: false,
    allowToChangeInstallationDirectory: true,
    createDesktopShortcut: "always",
    runAfterFinish: true,
    createStartMenuShortcut: true,
    deleteAppDataOnUninstall: true,
    displayLanguageSelector: true,
    // installerSidebar: "public/installer-sidebar.bmp",
  },
};

export default config;
