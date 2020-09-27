// 'use strict';

const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const moduleFileExtensions = [
  'web.mjs',
  'mjs',
  'web.js',
  'js',
  'web.ts',
  'ts',
  'web.tsx',
  'tsx',
  'json',
  'web.jsx',
  'jsx',
  'global.css',
  'css',
  'global.sass',
  'sass',
  'global.scss',
  'scss',
];

// Resolve file paths in the same order as webpack
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const resolveModule = (resolveFn, filePath) => {
  const extension = moduleFileExtensions.find(
    // eslint-disable-next-line no-shadow
    (extension) => fs.existsSync(resolveFn(`${filePath}.${extension}`)),
  );

  if (extension) {
    return resolveFn(`${filePath}.${extension}`);
  }

  return resolveFn(`${filePath}.js`);
};

// config after eject: we're in ./config/
module.exports = {
  appPath: resolveApp('.'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('app'),
  appTsConfig: resolveApp('tsconfig.json'),
  appNodeModules: resolveApp('node_modules'),
  // user defined
  appGlobal: resolveApp('app/global'),
  globalComp: resolveApp('app/global/components'),
  globalScss: resolveApp('app/global/scss'),
  globalStore: resolveApp('app/global/store'),
  globalStyled: resolveApp('app/global/styled'),
  appComp: resolveApp('app/components'),
  appCon: resolveApp('app/containers'),
  appStore: resolveApp('app/store'),
  appScss: resolveApp('app/scss'),
  appUtils: resolveApp('app/utils'),
  appTools: resolveApp('app/utils/tools'),
  themeConfig: resolveApp('app/utils/themeConfig'),
  appStatic: resolveApp('app/static'),
  appImage: resolveApp('app/static/image'),
  appDocs: resolveApp('app/docs'),
  appTest: resolveApp('app/test'),
};

module.exports.moduleFileExtensions = moduleFileExtensions;
