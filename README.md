# Electron Vite React Starter Template

> A lightweight, modern, and production-ready starter for building desktop applications with a focus on simplicity.

---

## ⚡ Tech Stack
* **Framework:** React 19+
* **Build Tool:** Vite (HMR)
* **Runtime:** Electron
* **Package Manager:** pnpm
* **Bundler:** Electron-Builder
* **Language:** TypeScript


## 📂 Structure

```bash
$.
├── .dist         # Compiled code (Frontend & Electron)
├── .release      # Production installers (Generated)
├── app           # React source code
├── electron      # Electron Main & Preload scripts
├── public        # Static assets and icons
└── ...        
```

## Get Starter

```bash
# clone
git clone https://github.com/get-starter/electron-vite-react-starter.git
cd electron-vite-react-starter

# run for development
pnpm install
pnpm dev

# this will compile your code and generate a setup in /.release
pnpm build
pnpm release
```

> [!IMPORTANT]
> **Windows Privileges:** If `pnpm release` fails with a "privilege" error,  **run your terminal as Administrator** or enable **Windows Developer Mode** to allow symbolic links.
> 

## 🛠 Configuration

* **Vite**: Managed via  ``vite.config.ts``. The root is set to the /app directory.

* **Electron-Builder**: Managed via ``builder.config.ts``. Highly optimized for a clean .dist folder structure.


## Resources & Documentation

For more detailed information and advanced configuration, visit:

* **Electron:** [electronjs.org](https://www.electronjs.org/)
* **Electron Builder:** [electron.build](https://www.electron.build/)
* **React:** [react.dev](https://react.dev/)
* **Vite:** [vitejs.dev](https://vitejs.dev/)

---


## Contributing

If you spot any issues or want to add a feature, feel free to open an issue or submit a pull request.


## 📄 License

MIT