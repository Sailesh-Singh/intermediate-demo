# Intermediate DevOps Demo

A comprehensive DevOps demonstration project showcasing advanced CI/CD practices, testing, linting, building, and deployment.

## 🚀 Features

- **Node.js Express API** with health checks and status endpoints
- **Modern Frontend** with responsive design and real-time status updates
- **Comprehensive Testing** with Jest and coverage reporting
- **Code Quality** with ESLint and Prettier
- **Asset Building** with Webpack and Babel
- **Containerization** with multi-stage Docker builds
- **Advanced CI/CD** with GitHub Actions
- **Security** with non-root Docker containers and health checks

## 📁 Project Structure

```
IntermediateDemo/
├── src/
│   ├── index.js              # Express server
│   └── public/               # Frontend assets
│       ├── index.html
│       ├── styles.css
│       └── app.js
├── tests/
│   └── index.test.js         # Jest tests
├── .github/
│   └── workflows/
│       └── ci-cd.yml         # GitHub Actions
├── package.json
├── webpack.config.js
├── .eslintrc.js
├── Dockerfile
└── README.md
```

## 🛠️ Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Docker (optional)

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run tests:**
   ```bash
   npm test
   npm run test:coverage
   ```

3. **Run linting:**
   ```bash
   npm run lint
   npm run lint:fix
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

### Docker

1. **Build image:**
   ```bash
   docker build -t intermediate-devops-demo .
   ```

2. **Run container:**
   ```bash
   docker run -p 3000:3000 intermediate-devops-demo
   ```

3. **Access the application:**
   - Web UI: http://localhost:3000
   - Health check: http://localhost:3000/api/health
   - Status: http://localhost:3000/api/status

## 🔄 CI/CD Pipeline

The GitHub Actions workflow includes:

1. **Testing Stage:**
   - Linting with ESLint
   - Unit tests with Jest
   - Coverage reporting

2. **Build Stage:**
   - Asset bundling with Webpack
   - Production build optimization

3. **Docker Stage:**
   - Multi-stage Docker build
   - Security scanning

4. **Deploy Stage:**
   - Production deployment (configurable)

## 📊 Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start production server |
| `npm run dev` | Start development server with nodemon |
| `npm test` | Run Jest tests |
| `npm run test:coverage` | Run tests with coverage |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |
| `npm run build` | Build with Webpack |
| `npm run ci` | Run full CI pipeline locally |

## 🐳 Docker Features

- Multi-stage builds for optimization
- Non-root user for security
- Health checks for monitoring
- Production-ready configuration

## 🔍 API Endpoints

- `GET /` - Main application page
- `GET /api/health` - Health check endpoint
- `GET /api/status` - System status information

## 📈 Monitoring

The application includes:
- Health check endpoints
- Real-time status monitoring
- Docker health checks
- Coverage reporting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📝 License

MIT License - Created by Sailesh Singh

---

**This project demonstrates intermediate-level DevOps practices suitable for production applications.** 