<h1>Anniversary Website</h1>
<h2>💖 Love's Celebration</h2>
A beautiful, heartfelt web application to express your deepest feelings for your loved one and celebrate your special anniversary. Built with HTML, CSS, JavaScript, and Django.

<h2>✨ Features</h2>
<h3>Frontend (HTML/CSS/JS)</h3>
Romantic Landing Page with couple photos and anniversary countdown

Love Letter Section to write personalized messages

Memory Gallery to showcase your special moments

Timeline of your relationship journey

Interactive Love Meter with fun compatibility quizzes

Music Player with your special songs

Photo Slideshow with romantic transitions

Responsive Design that works on all devices

Romantic Animations (hearts floating, fade-ins, etc.)

<h3>Backend (Django)</h3>
User Authentication for private anniversary pages

Memory Storage for photos and messages

Anniversary Tracking with automatic date calculations

Message System for love notes and reminders

Admin Dashboard to manage content

Email Integration for anniversary reminders

Secure Data Storage for your precious memories

<h2>🚀 Installation</h2>
Prerequisites
Python 3.8+

Django 3.2+

Pillow (for image handling)

PostgreSQL/MySQL/SQLite (based on preference)

Setup Instructions
Clone the repository

bash
git clone https://github.com/yourusername/anniversary-website.git
cd anniversary-website
Create virtual environment

bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
Install dependencies

bash
pip install django pillow django-crispy-forms
Configure settings

bash
cp config/settings.example.py config/settings.py
# Edit settings.py with your database and secret key
Run migrations

bash
python manage.py migrate
Create superuser

bash
python manage.py createsuperuser
Run development server

bash
python manage.py runserver

<h2>💑 Key Pages</h2>
Homepage - Anniversary countdown and main celebration

Our Story - Timeline of your relationship

Love Letters - Personal messages section

Memory Lane - Photo gallery and shared moments

Secret Messages - Private notes (requires login)

Future Dreams - Shared goals and bucket list


<h2>📱 Responsive Design</h2>
Mobile First approach

Touch-friendly navigation

Optimized images for fast loading

Progressive Web App capabilities

<h2>🔒 Security Features</h2>
Secure user authentication

Private/public content control

Image optimization and validation

CSRF protection

SQL injection prevention


<h2>🚀 Deployment</h2>
Option 1: Heroku
bash
heroku create your-anniversary-name
git push heroku main
heroku run python manage.py migrate
Option 2: PythonAnywhere
Upload via Git or ZIP

Configure WSGI file

Set up static files

Option 3: Traditional Hosting
Configure with Nginx + Gunicorn

Set up PostgreSQL database

Configure domain and SSL

<h2>📸 Screenshots</h2>

<img width="2880" height="1576" alt="anniversary" src="https://github.com/user-attachments/assets/e511f9f4-3fb3-4b3d-bce8-c50489768671" />

<img width="2855" height="1573" alt="Screenshot (99)" src="https://github.com/user-attachments/assets/03adedda-845d-41d0-935b-8d7ccd48244c" />

<img width="2862" height="1570" alt="Screenshot (98)" src="https://github.com/user-attachments/assets/394a4328-964e-41ef-8ae0-e2085316af88" />

<img width="2840" height="1542" alt="Screenshot (97)" src="https://github.com/user-attachments/assets/2cea6560-e7e0-42c8-aadf-84302b0e8e2f" />

<img width="2857" height="1566" alt="Screenshot (96)" src="https://github.com/user-attachments/assets/68031a76-f6ce-4d0e-b147-456ac94a7323" />

<img width="2857" height="1567" alt="Screenshot (95)" src="https://github.com/user-attachments/assets/18dbdaa5-c2c1-4f8d-a280-152675f47763" />

<img width="2850" height="1576" alt="Screenshot (94)" src="https://github.com/user-attachments/assets/cbba7085-da1d-49fc-81b2-d5bad82a69de" />



Add romantic features

Submit pull request
