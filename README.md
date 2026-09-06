# Anything Automation — Website

Full-stack company website for **Anything Automation — Empire of Intelligence**.

Built with:

* **Backend:** Python, Django, Django REST Framework
* **Frontend:** React + Vite
* **Database:** MySQL
* **Media:** Cloudinary (when configured)
* **Frontend Deployment:** Vercel
* **Backend Deployment:** Render
* **Production Database:** Aiven MySQL

The website provides company information, automation services, industries served, special machines, PLC/HMI brands, projects and a live contact/enquiry system.

Content such as services, industries, machines, brands and company information can be managed through the **Django Admin** without changing frontend code.

---

## Project Structure

```text
anything-automation/
├── backend/       Django + DRF REST API
├── frontend/      React + Vite website
└── README.md
```

---

# 1. Backend Setup

Go to the backend directory:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate it:

### Windows

```powershell
venv\Scripts\activate
```

### macOS / Linux

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create your local environment file:

```bash
cp .env.example .env
```

On Windows, you can also create `.env` manually from `.env.example`.

> **Never commit `.env` to GitHub.** It contains database credentials, Django secrets and email credentials.

---


For production, use the database and credentials provided by your managed MySQL provider.

---

## Database

For a local MySQL setup, create a database:

```sql
CREATE DATABASE anything_automation
CHARACTER SET utf8mb4;
```

Then configure the database values in `backend/.env`.

Run migrations:

```bash
python manage.py makemigrations
python manage.py migrate
```

Create the Django admin user:

```bash
python manage.py createsuperuser
```

Optional: load the initial company/brochure content:

```bash
python manage.py seed_content
```

Start the development server:

```bash
python manage.py runserver
```

Backend API:

```text
http://127.0.0.1:8000/api/
```

Django Admin:

```text
http://127.0.0.1:8000/admin/
```

---

# API Endpoints

| Endpoint                | Method | Purpose                       |
| ----------------------- | ------ | ----------------------------- |
| `/api/`                 | GET    | API root                      |
| `/api/company/`         | GET    | Company information           |
| `/api/services/`        | GET    | Automation services           |
| `/api/services/<slug>/` | GET    | Individual service            |
| `/api/industries/`      | GET    | Industries served             |
| `/api/machines/`        | GET    | Special machine manufacturing |
| `/api/brands/`          | GET    | PLC/HMI brands                |
| `/api/projects/`        | GET    | Company projects              |
| `/api/projects/<slug>/` | GET    | Individual project            |
| `/api/contact/`         | POST   | Submit website enquiry        |

### Services Filtering

Example:

```text
GET /api/services/?category=scope_of_work
```

---

# 2. Frontend Setup

Go to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create the frontend environment file:

```bash
cp .env.example .env
```

Configure the API URL:

```env
VITE_API_BASE_URL=http://127.0.0.1:8000/api
```

Start the development server:

```bash
npm run dev
```

The frontend normally runs at:

```text
http://localhost:5173
```

The frontend fetches company content from the Django REST API.

If API content is unavailable during development, the frontend can use its built-in fallback content so the website does not appear blank.

---

# 3. Production Deployment

The current production architecture is:

```text
React / Vite
      │
      ▼
   Vercel
      │
      │ HTTPS API requests
      ▼
Django + DRF
      │
      ▼
   Render
      │
      ▼
 Aiven MySQL
```

## Frontend — Vercel

Build the frontend:

```bash
npm run build
```

The production build is generated in:

```text
frontend/dist/
```

Set the Vercel environment variable:

```env
VITE_API_BASE_URL=https://anything-automation.onrender.com/api
```

Deploy the `frontend` project through Vercel.

---

## Backend — Render

The Django backend is deployed on Render.

Production server:

```bash
gunicorn config.wsgi:application
```

Before deployment, configure the required environment variables in Render.

Important production settings:

```env
DJANGO_DEBUG=False
DJANGO_SECRET_KEY=your-production-secret
```

Also configure:

* Database credentials
* CORS allowed origins
* CSRF trusted origins
* Gmail SMTP credentials
* Cloudinary credentials if media storage is enabled

Run migrations on the production database:

```bash
python manage.py migrate
```

Collect static files:

```bash
python manage.py collectstatic --noinput
```

Create an admin user when required:

```bash
python manage.py createsuperuser
```

---


> **Do not commit database passwords, API keys or other secrets to GitHub.**

Aiven MySQL may require SSL depending on the service configuration.

The production database stores website content and submitted enquiries.

---

# 5. Contact / Enquiry System

The website contains a live contact form.

Flow:

```text
Website Contact Form
        │
        ▼
POST /api/contact/
        │
        ▼
Django REST API
        │
        ├──► MySQL / Aiven
        │       └── Enquiry stored
        │
        └──► Gmail SMTP
                └── Email notification
```

Submitted enquiries contain information such as:

* Name
* Email
* Phone
* Company
* Subject
* Message
* Created date/time

Enquiries can be viewed from:

```text
/admin/
```

through the Django Admin interface.

For email notifications, use a **Gmail App Password**, not the normal Gmail account password.

---

# 6. Admin Content Management

The Django Admin is used to manage website content.

From `/admin/`, administrators can manage:

* Company information
* Services
* Industries
* Special machines
* PLC/HMI brands
* Projects
* Contact enquiries

This allows content updates without modifying React components.

For example, changing service descriptions or adding a new machine can be done through the admin panel without rebuilding the frontend.

---

# 7. Frontend Pages

The website includes separate pages for:

```text
/
 /about
 /services
 /machines
 /industries
 /projects
 /contact
```

Navigation also includes company and solution sections such as:

* About Us
* Why Choose Us
* Our Approach
* Services
* Machines
* Industries
* PLC & HMI

---

# 8. Automation Services

Anything Automation provides industrial automation solutions including:

* PLC Programming
* HMI Programming
* SCADA Programming
* Server & IT Traceability
* Panel Wiring
* Field Wiring
* Robot Integration
* Camera Teaching & Integration
* Mechanical Fixture Manufacturing
* Design Support
* Special Machine Manufacturing

---

# 9. Special Machines

The company website presents special machine solutions such as:

* Leak Test Machine
* Washing Machine
* Assembly Machine
* Mechanical Fixture
* Conveyor Setup

---

# 10. Industries Served

Solutions are applicable across industries including:

* Automotive
* Pharmaceutical
* Food & Beverage
* Packaging
* Electronics
* Textile
* General Engineering

---

# 11. PLC / HMI Technologies

The website supports content for major industrial automation brands, including:

* Siemens
* Omron
* Mitsubishi Electric
* Delta
* ABB
* Keyence
* Cognex

---

# 12. Security

Never commit sensitive files or credentials.

The following should remain local/environment-only:

```text
.env
*.env
```

Do not commit:

* Database passwords
* Django secret keys
* Gmail App Passwords
* Cloudinary API secrets
* Production credentials

Use environment variables in Render and Vercel for production configuration.

---

# 13. Development Commands

### Backend

```bash
cd backend
venv\Scripts\activate
python manage.py check
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Production frontend build

```bash
npm run build
```

---

# 14. Deployment Summary

| Component      | Technology   | Platform   |
| -------------- | ------------ | ---------- |
| Frontend       | React + Vite | Vercel     |
| Backend        | Django + DRF | Render     |
| Database       | MySQL        | Aiven      |
| Email          | Gmail SMTP   | Gmail      |
| Media          | Cloudinary   | Cloudinary |
| Source Control | Git + GitHub | GitHub     |

---

## Anything Automation

**Empire of Intelligence**

Industrial Automation • PLC • HMI • SCADA • Robotics • Machine Manufacturing

