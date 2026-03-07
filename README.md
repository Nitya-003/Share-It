# 📁 Share-IT: Secure File Sharing System

![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)
![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

Share-IT is a secure, scalable full-stack web application designed for internal organizational use. It allows users to upload and share files via unique, time-bound, and password-protected links.

---

## 🚀 Key Features
* **Secure Uploads:** Multi-format validation with size limits.
* **Time-Bound Links:** Links automatically expire after a set duration.
* **Shielded Sharing:** Optional AES-encrypted password protection.
* **Admin Control:** Full dashboard to monitor file traffic and manage storage.
* **Auth System:** Secure JWT-based authentication for administrative tasks.

---

## 🌟 Why Share-IT? 
In an era of data breaches, relying on public cloud links or unencrypted email attachments is a risk. Share-IT is necessary because it provides:
1. **Corporate Confidentiality:** Ideal for HR or Legal departments to share sensitive documents (contracts, payroll) that must "vanish" after 24 hours.
2. **Reduced Storage Bloat:** Since links are time-bound, the system automatically encourages a "clean-as-you-go" storage policy, preventing servers from filling up with old files.
3. **Internal Security:** Avoids "Shadow IT" (employees using personal Dropbox/WeTransfer) by providing a controlled, audited internal alternative.
4. **Developer Collaboration:** Securely share .env templates or configuration files across team members with password protection.

---

## 🛠️ Technology Stack
| Frontend | Backend | Database | Tools |
|----------|---------|----------|-------|
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="18"/> React.js + Vite | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="18"/> Node.js | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width="18"/> MongoDB | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" width="18"/> Figma |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="18"/> TypeScript | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="18"/> Express | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg" width="18"/> Mongoose | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" width="18"/> Postman |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg" width="18"/> Axios | Multer |  | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="18"/> Git / <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="18"/> GitHub |

---

## 🔄 System Flow 
```mermaid
graph TD
    A[User Selects File] --> B{Validation}
    B -- Type/Size OK --> C[Upload to Server]
    B -- Invalid --> D[Error Message]
    C --> E[Generate Unique Link]
    E --> F[Set Expiry & Password]
    F --> G[(Store in MongoDB)]
    G --> H[Share Link with Recipient]
    H --> I{Recipient Access}
    I -- Password Required --> J[Verify Password]
    I -- Direct Access --> K[Download File]
    J -- Success --> K
    K --> L[Update Download Stats]
```

---

## 📂 Project Structure
<table>
<tr>
<th>Directory</th>
<th>Description</th>
</tr>
<tr>
<td>
<details>
<summary><code>📂 backend/</code></summary>
<ul>
<li><code>📂 controllers/</code> - Request handling logic</li>
<li><code>📂 models/</code> - Mongoose schemas (File, User)</li>
<li><code>📂 routes/</code> - API endpoint definitions</li>
<li><code>📂 middleware/</code> - Auth & Multer config</li>
<li><code>📂 uploads/</code> - Physical file storage</li>
<li><code>server.js</code> - Entry point</li>
</ul>
</details>
</td>
<td>Node.js & Express server-side logic</td>
</tr>
<tr>
<td>
<details>
<summary><code>📂 frontend/</code></summary>
<ul>
<li><code>📂 src/components/</code> - Reusable UI elements</li>
<li><code>📂 src/pages/</code> - View components</li>
<li><code>📂 src/services/</code> - API integration</li>
<li><code>vite.config.ts</code> - Build configuration</li>
</ul>
</details>
</td>
<td>React + TypeScript client application</td>
</tr>
</table>

---

## ⚙️ Quick Start
**1. Clone & Install**
```bash
git clone https://github.com/Secure-File-Sharing-System.git
npm install # Run in both /frontend and /backend
```

**2. Configure Environment (`backend/.env`)**
```code snippet
PORT=5000
MONGO_URI=mongodb://localhost:27017/secureFileDB
JWT_SECRET=your_jwt_secret_key
```

**3. Launch**
```bash
# Start Backend
cd backend && npm run dev

# Start Frontend
cd frontend && npm run dev
```

---

## 🤝 Contributions

We welcome contributions from everyone! To keep the project healthy and safe, please refer to the following:

* **Contribution Guidelines:** Learn how to report bugs or submit features in [CONTRIBUTING.md](./CONTRIBUTING.md).
* **Community Standards:** We follow a strict [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) to ensure a welcoming environment.

---

## ⚖️ License

This project is licensed under the **GNU General Public License v3 (GPLv3)**. This ensures that the code remains free and open-source for everyone. See the [LICENSE](./LICENSE) file for details.

---

## **_Built to provide a secure bridge for data, ensuring privacy remains a right, not a privilege._**
