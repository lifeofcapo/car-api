# 🚗 Car Brands, Models & Parts Database

[![npm version](https://img.shields.io/npm/v/auto-parts-db)](https://www.npmjs.com/package/auto-parts-db)
[![npm downloads](https://img.shields.io/npm/dm/auto-parts-db)](https://www.npmjs.com/package/auto-parts-db)
[![GitHub stars](https://img.shields.io/github/stars/lifeofcapo/car-list?style=social)](https://github.com/lifeofcapo/car-list/stargazers)
[![GitHub last commit](https://img.shields.io/github/last-commit/lifeofcapo/car-list)]()
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

📚 [Documentation](https://lifeofcapo.github.io/car-api/) · [NPM](https://npmjs.com/package/auto-parts-db)

**Save hundreds of euros on commercial APIs!** 

The most comprehensive **automotive database** for JavaScript/TypeScript. 
Includes 100+ car brands, 2000+ models with generations (1968-present), 
and 1200+ auto parts. Perfect for dealerships, e-commerce, and automotive apps.

## ✨ Features

- 🚙 **100+ Car Brands** - Audi, BMW, Toyota, Ford, Tesla, and more
- 📅 **Generations with years** - Exact production years (1968-present)
- 🔧 **1200+ Auto Parts** - Comprehensive parts catalog
- 📦 **Lightweight & Tree-shakeable** - Use only what you need
- 🌐 **Works everywhere** - Node.js, browsers, React, Vue, Angular
- 📘 **TypeScript ready** - Full type definitions included

## 📦 Installation 

```bash
npm install auto-parts-db

yarn add auto-parts-db

pnpm add auto-parts-db
```
---

## 🚀 Quick Start
```js
import { getBrands, getModelsByBrand, searchParts } from 'auto-parts-db';

const brands = getBrands();
console.log(brands);

const audiModels = getModelsByBrand('Audi');
console.log(audiModels[0]); 

const brakeParts = searchParts('brake');
console.log(brakeParts);
```

## Auto parts store integration
```js
import { searchParts } from 'auto-parts-db';

const parts = searchParts('absorber');
// Returns all parts containing 'absorber' in name or slug
```
## 🌐 Browser (CDN / Script tag)
```js
    <script src="https://cdn.jsdelivr.net/npm/auto-parts-db/dist/browser/auto-parts-db.min.js"></script>

    const brands = AutoPartsDB.getBrands();
    const parts = AutoPartsDB.searchParts('absorber');
    console.log(brands); 

```

All functions are available via the global `AutoPartsDB` object.

---
## 💡 Use Cases

*   **Car Catalogs**: Building filters by brand, model, and year
*   **Auto Parts E-commerce**: Creating compatible parts finder systems
*   **Automotive Portals**: Enriching content with structured data
*   **Mobile Applications**: For taxi services, car sharing, maintenance
*   **Analytics & Research**: Automotive market analysis
---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add missing car brands or models
- Extend parts catalog
- Improve data accuracy

---
