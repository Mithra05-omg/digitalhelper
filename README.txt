DIGITALHELPER PORTFOLIO: HOW TO PUT IT ONLINE (GitHub Pages, free)

FILES (upload all 4 .html files to the same repository, at the top level, not in a folder)
- index.html          the portfolio page
- demo-bakery.html    live demo: bakery website
- demo-booking.html   live demo: booking and enquiry form
- demo-catalog.html   live demo: product catalog with Enquire button
(README.txt is only for you. You do not need to upload it.)

STAY ANONYMOUS FIRST
Your GitHub username becomes part of the link (username.github.io/...).
If you want to stay anonymous, create a NEW GitHub account with a neutral name,
for example digitalhelper-my, and use a separate email, not your real name.
Do not use your main account if it shows your real name.

IF YOU ALREADY UPLOADED THE OLD VERSION
1. Open your repository on GitHub.
2. Click Add file > Upload files.
3. Drag in the 4 new .html files. Files with the same name will be replaced.
4. Click Commit changes. Wait 1 to 2 minutes, then refresh your link.

FIRST TIME SETUP
1. Create a repository (public). Name it: digitalhelper (or any name).
2. Add file > Upload files, drag in the 4 .html files, Commit changes.
3. Settings > Pages > Source: Deploy from a branch > Branch: main, folder / (root) > Save.
4. After 1 to 2 minutes your link appears, like:
   https://your-username.github.io/digitalhelper/

MAKE THE DM BUTTONS WORK (index.html)
1. Open index.html on GitHub, click the pencil icon.
2. Press Ctrl + F and search for THREADS_URL.
3. Put your Threads link between the quotes, for example:
   const THREADS_URL = "https://www.threads.net/@your_username";
4. Commit changes. Wait 1 minute, then refresh.

OPTIONAL: TURN ON THE CONTACT FORM
The form is hidden until you set it up, so visitors never see a broken form.
1. Go to formspree.io and make a free account (use an email you check).
2. Create a new form. Formspree gives you a link like https://formspree.io/f/abcdwxyz
3. In index.html, find:  const FORM_URL = "";
4. Put your Formspree link between the quotes, then Commit changes.
5. The form now appears above the footer. Messages arrive in your email.
   Your email is never shown on the website.
Free Formspree plans have a monthly limit on messages, so check their page for the current number.

HOW TO EDIT TEXT LATER
Open the file on GitHub, click the pencil icon, change the words between the tags, then Commit changes.
Things you may want to edit: the FAQ answers (timeline, payments) so they match how you really work.

IMPORTANT
- The demos and previews use made-up businesses and sample data. Nothing is sent or saved.
- Do not add real client names, internship screenshots, code or data.
- Do not add your name, phone number or photo if you want to stay anonymous.
- Do not link your UKM server address (it contains your matric number).
