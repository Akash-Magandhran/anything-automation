# Anything Automation — Website

Full-stack company website: **Django + DRF + MySQL** backend, **React (Vite)** frontend.
Content (services, industries, machines, brands, company info) is editable from
the Django admin — no code changes needed for text/logo updates. The contact
form on the site saves real enquiries to MySQL and emails the client.

## Structure

```
anything-automation/
├── backend/     Django REST API
└── frontend/    React (Vite) site
```

## 1. Backend setup

```bash
cd backend
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt

cp .env.example .env            # then edit DB creds, secret key, email, etc.
```

Create the MySQL database first:
```sql
CREATE DATABASE anything_automation CHARACTER SET utf8mb4;
CREATE USER 'aa_user'@'%' IDENTIFIED BY 'changeme';
GRANT ALL PRIVILEGES ON anything_automation.* TO 'aa_user'@'%';
```

Then:
```bash
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser     # admin login for /admin/
python manage.py seed_content        # loads brochure content as starting data
python manage.py runserver
```

- API root: `http://127.0.0.1:8000/api/`
- Admin: `http://127.0.0.1:8000/admin/` — add real logos/photos here after seeding.

### API endpoints
| Endpoint | Purpose |
|---|---|
| `GET /api/company/` | company info, tagline, address, why-choose-us |
| `GET /api/services/?category=scope_of_work` | scope-of-work cards |
| `GET /api/industries/` | industries served |
| `GET /api/machines/` | special machine manufacturing |
| `GET /api/brands/` | PLC/HMI brand logos |
| `POST /api/contact/` | live enquiry form submission |

## 2. Frontend setup

```bash
cd frontend
npm install
cp .env.example .env      # point VITE_API_BASE_URL at your backend
npm run dev
```

Site runs at `http://localhost:5173`. It fetches live content from the
Django API and falls back to the brochure's own content if the API isn't
reachable yet, so it's never blank during setup.

## 3. Going live (production)

**Backend**
- Host: any VPS (Hostinger/DigitalOcean), Render, or Railway. Use MySQL (managed or self-hosted).
- Set `DJANGO_DEBUG=False`, a real `DJANGO_SECRET_KEY`, and your real domain in `DJANGO_ALLOWED_HOSTS`.
- Serve with `gunicorn config.wsgi` behind Nginx.
- Run `python manage.py collectstatic`.
- For the contact form's email notification, use a Gmail **App Password** (not your normal password) in `EMAIL_HOST_PASSWORD`.

**Frontend**
- `npm run build` → deploy the `dist/` folder to Vercel/Netlify, or serve via Nginx alongside the backend.
- Set `VITE_API_BASE_URL` to your live API domain (e.g. `https://api.anythingautomation.com/api`) before building.
- Point `CORS_ALLOWED_ORIGINS` in the backend `.env` at your live frontend domain.

**Domain**
- Point your domain's A record at your server (or use your host's DNS panel).
- Typical setup: `anythingautomation.com` → frontend, `api.anythingautomation.com` → backend.
- Add HTTPS via Let's Encrypt (`certbot`) once DNS is live.

## 4. Adding your own content

Everything shown on the site (services, machines, industries, brand logos,
company address, "why choose us" list) lives in the database and is edited
through `/admin/` — log in with the superuser you created, upload real
photos/logos for machines and brands, and edit copy directly. No redeploy
needed for content changes, only for design/code changes.
