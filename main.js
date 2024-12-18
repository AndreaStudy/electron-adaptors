const { app, Menu } = require("electron");

app.whenReady().then(() => {
  // 메인 화면
  const window = require("./src/window");
  mainWindow = window.createBrowserWindow(app);

  // 1번 html 파일 직접 로드
  // mainWindow.loadFile("index.html");
  // mainWindow.loadURL(`file://${__dirname}/index.html`);

  // 2번 url 직접 쓰기
  mainWindow.loadURL("https://admin.adaptors.site/login");

  // Option 3: Uses BrowserView to load an URL
  //const view = require("./src/view");
  //view.createBrowserView(mainWindow);

  // 개발자도구 보기
  //mainWindow.openDevTools();

  // 메뉴 옵션
  // const menu = require("./src/menu");
  // const template = menu.createTemplate(app.name);
  // const builtMenu = Menu.buildFromTemplate(template);
  // Menu.setApplicationMenu(builtMenu);

  // 기능 보여주기
  require("./src/print");
});

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
