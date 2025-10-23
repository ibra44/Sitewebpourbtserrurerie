# 📦 Comment exporter votre site BT Serrurerie depuis Figma Make

## 🎯 Objectif
Récupérer tous les fichiers de votre site pour les mettre en ligne sur un hébergeur (Netlify, Vercel, etc.)

---

## 📥 Méthode 1 : Export depuis Figma Make (Interface)

### Étapes :

1. **Dans l'interface Figma Make**, cherchez l'un de ces boutons :
   - 🔽 **"Export"** ou **"Download"** ou **"Télécharger"**
   - 📤 **"Export to ZIP"**
   - ⬇️ Icône de téléchargement (généralement en haut à droite)

2. **Cliquez sur le bouton d'export**
   - Le site va générer un fichier ZIP contenant tous vos fichiers
   - Le téléchargement démarre automatiquement

3. **Décompressez le fichier ZIP**
   - Double-cliquez sur le fichier `.zip` téléchargé
   - Vous obtenez un dossier avec tous les fichiers du site

4. **Vérifiez le contenu**
   
   Vous devriez avoir ces fichiers/dossiers :
   ```
   bt-serrurerie/
   ├── index.html (ou App.tsx)
   ├── components/
   ├── styles/
   ├── public/
   └── package.json
   ```

---

## 📥 Méthode 2 : Si pas de bouton Export visible

### Option A : Menu contextuel

1. **Faites un clic droit** sur le projet
2. Cherchez **"Export"**, **"Download"**, ou **"Save as"**
3. Téléchargez le projet

### Option B : Menu principal

1. Cherchez dans le menu : **File** → **Export** ou **Download**
2. Sélectionnez le format (généralement "Complete project" ou "ZIP")
3. Téléchargez

### Option C : Depuis le code

Si Figma Make affiche les fichiers dans un éditeur :

1. Copiez le contenu de chaque fichier manuellement
2. Créez les fichiers sur votre ordinateur avec le même nom
3. Structure à recréer :

```
bt-serrurerie/
├── App.tsx
├── package.json
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── SEO.tsx
│   └── ui/ (tous les composants)
├── styles/
│   └── globals.css
└── public/
    └── robots.txt
```

---

## 🚀 Après l'export : Mise en ligne sur Netlify

### Étape 1 : Préparer les fichiers

Assurez-vous d'avoir le dossier complet avec tous les fichiers

### Étape 2 : Créer un compte Netlify

1. Allez sur : **https://www.netlify.com**
2. Cliquez sur **"Sign up"** (Inscription)
3. Inscrivez-vous avec :
   - Email + mot de passe, OU
   - Compte GitHub, OU
   - Compte GitLab

### Étape 3 : Déployer le site

#### Méthode simple (Drag & Drop) :

1. Une fois connecté à Netlify, vous verrez le tableau de bord
2. Cherchez la zone qui dit :
   
   ```
   Want to deploy a new site without connecting to Git?
   Drag and drop your site folder here
   ```

3. **Glissez-déposez** votre dossier `bt-serrurerie` dans cette zone

4. Netlify va :
   - ✅ Analyser vos fichiers
   - ✅ Construire le site (build)
   - ✅ Le mettre en ligne
   - ⏱️ Durée : 1-3 minutes

5. **Votre site est en ligne !**
   - Netlify vous donne une adresse temporaire
   - Ex: `random-name-abc123.netlify.app`

### Étape 4 : Personnaliser le nom du site

1. Cliquez sur **"Site settings"** ou **"Domain settings"**
2. Cherchez **"Change site name"**
3. Entrez : `bt-serrurerie`
4. Votre nouvelle adresse : `bt-serrurerie.netlify.app` ✅

---

## 🌐 Ajouter un nom de domaine personnalisé (optionnel)

### Si vous voulez `www.bt-serrurerie.fr` au lieu de `.netlify.app`

1. **Achetez un domaine** (12€/an) :
   - OVH : https://www.ovh.com/fr/
   - Gandi : https://www.gandi.net/fr
   - Namecheap : https://www.namecheap.com

2. **Connectez le domaine à Netlify** :
   
   Dans Netlify :
   - Allez dans **Domain settings**
   - Cliquez **"Add custom domain"**
   - Entrez : `bt-serrurerie.fr`
   - Netlify vous donne des instructions DNS

3. **Configurez les DNS** :
   
   Chez votre registrar (OVH, Gandi, etc.) :
   - Allez dans la gestion DNS
   - Ajoutez un enregistrement **A** vers Netlify
   - Ou modifiez les **Nameservers** (plus simple)
   - Netlify fournit toutes les informations nécessaires

4. **Attendez la propagation** : 2-48 heures

5. **SSL automatique** : Netlify active automatiquement HTTPS (cadenas sécurisé)

---

## ✅ Vérifications après mise en ligne

Une fois votre site en ligne sur `bt-serrurerie.netlify.app` :

### Tests à faire :

- [ ] Le site s'affiche correctement
- [ ] Le numéro de téléphone **06 78 06 86 90** est cliquable
- [ ] Le formulaire de contact fonctionne
- [ ] Toutes les sections sont visibles (Services, À propos, Témoignages, Contact)
- [ ] Le site fonctionne sur mobile (testez sur votre téléphone)
- [ ] Les images s'affichent
- [ ] La navigation fonctionne (boutons du menu)

### Tester sur différents appareils :

- 📱 iPhone / Android
- 💻 Ordinateur (Chrome, Firefox, Safari)
- 📱 Tablette

---

## 🔄 Mettre à jour le site plus tard

Si vous modifiez le site dans Figma Make :

1. **Exportez** à nouveau le site (même méthode)
2. Dans Netlify, allez dans l'onglet **"Deploys"**
3. **Glissez-déposez** le nouveau dossier
4. Netlify mettra à jour le site automatiquement

---

## 🆘 Problèmes courants et solutions

### ❌ "Je ne trouve pas le bouton Export dans Figma Make"

**Solutions :**
- Cherchez une icône de téléchargement ⬇️
- Menu **File** → **Export** / **Download**
- Regardez en haut à droite de l'interface
- Contactez le support Figma Make

### ❌ "Le fichier ZIP est vide ou incomplet"

**Solutions :**
- Réessayez l'export
- Vérifiez votre connexion internet
- Copiez les fichiers manuellement (Méthode 2, Option C)

### ❌ "Netlify affiche une erreur lors du déploiement"

**Solutions :**
- Vérifiez que vous avez bien tous les fichiers
- Assurez-vous d'avoir le fichier `package.json`
- Essayez Vercel à la place : https://vercel.com (même principe)

### ❌ "Le site ne s'affiche pas correctement"

**Solutions :**
- Videz le cache de votre navigateur (Ctrl + F5)
- Attendez 2-3 minutes après le déploiement
- Vérifiez dans l'onglet "Deploys" si le build est réussi

---

## 📞 Alternative : Vercel

Si Netlify ne fonctionne pas, essayez **Vercel** (même principe) :

1. Allez sur : **https://vercel.com**
2. Créez un compte (gratuit)
3. Cliquez sur **"Add New"** → **"Project"**
4. Glissez-déposez votre dossier
5. Votre site est en ligne sur `.vercel.app`

---

## 🎉 Récapitulatif

1. ✅ **Exporter** le site depuis Figma Make (bouton Export/Download)
2. ✅ **Décompresser** le fichier ZIP
3. ✅ **Créer un compte** Netlify (gratuit)
4. ✅ **Glisser-déposer** le dossier sur Netlify
5. ✅ **Personnaliser** le nom : `bt-serrurerie.netlify.app`
6. ✅ (Optionnel) Acheter un domaine : `bt-serrurerie.fr`

**Durée totale : 15-30 minutes** ⏱️

**Coût : GRATUIT** (ou 12€/an avec domaine personnalisé) 💰

---

## 📚 Prochaines étapes

Une fois le site en ligne :

1. 📱 **Créez votre fiche Google Business Profile**
   → Guide dans `/GUIDE-REFERENCEMENT-GOOGLE.md`

2. 📊 **Ajoutez Google Analytics** (optionnel)
   → Pour suivre les visiteurs

3. 🔍 **Inscrivez-vous à Google Search Console**
   → Pour apparaître dans les recherches Google

4. 💬 **Partagez l'adresse** à vos clients !
   - Cartes de visite
   - Signature email
   - Réseaux sociaux

Bon courage ! 🚀
