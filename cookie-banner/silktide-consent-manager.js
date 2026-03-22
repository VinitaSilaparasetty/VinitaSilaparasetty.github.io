<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aevoxis | Vinita Silaparasetty | AI & Data Science</title>
  
  <link rel="stylesheet" id="silktide-consent-manager-css" href="cookie-banner/silktide-consent-manager.css">
  <script src="cookie-banner/silktide-consent-manager.js"></script>
  <script>
    silktideCookieBannerManager.updateCookieBannerConfig({
      background: { showBackground: true },
      cookieIcon: { position: "bottomLeft" },
      cookieTypes: [
        {
          id: "necessary",
          name: "Essenziell",
          description: "<p>Diese Cookies sind für den technischen Betrieb der Website notwendig.</p>",
          required: true
        },
        {
          id: "analytics",
          name: "Analyse",
          description: "<p>Diese Cookies helfen uns, die Nutzung der Website zu verstehen und zu verbessern.</p>",
          required: false,
          onAccept: function() {
            console.log('Analytics accepted');
          }
        }
      ],
      text: {
        banner: {
          description: "<p>Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und den Verkehr zu analysieren. <a href=\"/datenschutz\" target=\"_blank\">Datenschutzerklärung</a></p>",
          acceptAllButtonText: "Alle akzeptieren",
          rejectNonEssentialButtonText: "Ablehnen",
          preferencesButtonText: "Einstellungen"
        },
        preferences: {
          title: "Cookie-Einstellungen",
          description: "<p>Wir respektieren Ihre Privatsphäre. Wählen Sie die Kategorien aus, die Sie zulassen möchten.</p>"
        }
      },
      position: { banner: "center" }
    });
  </script>

  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background-color: #000; color: #f0f4f8; font-family: 'Inter', sans-serif; line-height: 1.6; }
    
    /* Ensure Cookie Icon is always on top */
    .st-consent-manager__icon {
      z-index: 9999 !important;
    }

    .contact-links {
      position: absolute;
      top: 20px;
      width: 100%;
      padding: 0 30px;
      display: flex;
      justify-content: space-between;
      font-size: 0.9rem;
      color: #38bdf8;
      z-index: 100;
    }
    .contact-links a { color: #38bdf8; text-decoration: none; font-weight: 600; }
    .contact-links a:hover { text-decoration: underline; }

    .video-container {
      margin-top: 100px;
      display: flex;
      justify-content: center;
      padding: 0 20px;
    }
    iframe.video-player {
      width: 90vw;
      max-width: 720px;
      height: calc(90vw * 9 / 16);
      max-height: 405px;
      border: 1px solid rgba(56, 189, 248, 0.2);
      border-radius: 8px;
    }

    .services {
      margin-top: 40px;
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 30px;
      padding: 0 5%;
    }
    .service-box {
      width: 100%;
      max-width: 320px;
      min-height: 220px;
      border-radius: 12px;
      border: 1px solid rgba(56, 189, 248, 0.3);
      box-shadow: 0 0 15px rgba(56, 189, 248, 0.15);
      padding: 1.5rem;
      background-color: rgba(255,255,255,0.03);
    }
    .service-box h3 { color: #38bdf8; margin-bottom: 1rem; font-size: 1.1rem; }
    .service-box ul { list-style: square; padding-left: 1.2rem; font-size: 0.9rem; }
    .service-box li { margin-bottom: 0.5rem; }

    .form-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 60px 0;
      padding: 0 20px;
    }
    .footer-links {
      margin-top: 40px;
      font-size: 0.8rem;
      opacity: 0.6;
    }
    .footer-links a { color: #f0f4f8; margin: 0 10px; text-decoration: none; }
  </style>
</head>
<body>

  <div class="contact-links">
    <div>📧 <a href="mailto:info@aevoxis.de">info@aevoxis.de</a></div>
    <div>🔗 <a href="https://linkedin.com/in/vinita-silaparasetty" target="_blank">LinkedIn</a></div>
  </div>

  <div class="video-container">
    <iframe class="video-player" src="https://www.youtube-nocookie.com/embed/C8dB807s0hA" allowfullscreen></iframe>
  </div>

  <section class="services">
    <div class="service-box">
      <h3>Services for Business</h3>
      <ul>
        <li>Agentic AI Product Development</li>
        <li>AI Consultation</li>
        <li>Corporate Training</li>
        <li>Speaker Engagements</li>
        <li>Curriculum Development</li>
      </ul>
    </div>
    <div class="service-box">
      <h3>Services for Individuals</h3>
      <ul>
        <li>Project Guidance</li>
        <li>Mentorship & Coaching</li>
        <li>Career Switch Support</li>
      </ul>
    </div>
  </section>

  <div class="form-container">
    <h3 style="margin-bottom: 20px; color: #38bdf8;">Work with Aevoxis</h3>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScXAIcC8X3E3zCDRy4Gl6ofiCFn00_2_JKRq3PLz7DfoQMTzA/viewform?embedded=true" width="100%" style="max-width:640px;" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    
    <div class="footer-links">
      <a href="/impressum">Impressum</a> | <a href="/datenschutz">Datenschutz</a>
    </div>
  </div>

</body>
</html>
