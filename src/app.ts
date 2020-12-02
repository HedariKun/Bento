import { app, BrowserWindow } from "electron"

function createWindow() {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true
		}
	})
	win.setMenu(null)
	if(process.env.IS_DEV == "true") {
		win.loadURL("http://localhost:1234")
	} else {
		win.loadFile("./view/index.html")
	}
}

app.whenReady().then(createWindow)

app.on("window-all-closed", () => {
	if(process.platform !== "darwin") {
		app.quit()
	}
})

app.on('activate', () => {
	if(BrowserWindow.getAllWindows().length === 0) {
		createWindow()
	}
})
