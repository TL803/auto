ПРЕДУПРЕЖДЕНИЕ!!!
в этих скриптах я использовал старые скрипты и пока не прикасался к тому, что ты мне кидал, но
изменил я по большей части очень мало, 
разбил utils на mobileMenu и utils(работа с выбором option в select)
разбил brandGrid на  data.js cars.js brands.js

---

# 📄 Скрипты в HTML-файлах

Все пути к скриптам, подключаемым в HTML-файлах проекта, описаны ниже.  
В каждый `.html` файл необходимо добавить **базовые скрипты**:

```html
<script src="./src/components/modals/exitModal.js"></script>
<script src="./src/components/modals/modalForm.js"></script>
<script src="./src/components/modals/TimeModal.js"></script>
<script src="./src/mobile/MobileMenu.js"></script>
```

Ниже приведены специфические скрипты для отдельных страниц.

---

## 🏠 `index.html`

```html
<script type="module">
  import { renderBrands, setSelectedBrandsUpdater } from './src/components/filters/brands.js';
  import { updateCarsDisplay } from './src/components/filters/cars.js';

  setSelectedBrandsUpdater(updateCarsDisplay);
  renderBrands();
</script>

<script src="./src/components/sliders/BannerSlider.js"></script>
<script src="./src/components/utils/selectedOption.js"></script>
<script src="./src/mobile/MobileMenu.js"></script>
<script src="./src/components/modals/modalForm.js"></script>
<script src="./src/components/modals/TimeModal.js"></script>
```

---

## 🚗 `product.html`

```html
<script src="./src/components/iterating/ChangeColors.js"></script>
<script src="./src/components/tabs/tabs.js"></script>
<script src="./src/components/calculators/tradeInCalculator.js"></script>

<script src="./src/components/modals/exitModal.js"></script>
<script src="./src/components/modals/modalForm.js"></script>
<script src="./src/components/modals/TimeModal.js"></script>
<script src="./src/components/modals/yourDataModel.js"></script>
```

---

## 💰 `carLoan.html`

```html

<script src="./src/components/utils/selectedOption.js"></script>
<script src="./src/modules/showAuto.js"></script>
<script src="./src/components/sliders/slider.js"></script>
<script src="./src/components/sliders/mobilePaymentSlider.js"></script>
<script src="./src/modules/showTradeIn.js"></script>
```

---

## ♻️ `TradeIn.html`

```html
<script src="./src/components/utils/selectedOption.js"></script>
<!-- В этом файле должно быть больше скриптов, логика реализована в других файлах -->
```

---

## 🎉 `stock.html`

```html
<script src="./src/components/modals/yourDataModel.js"></script>
<script src="./src/components/modals/modalForm.js"></script>
<script src="./src/mobile/MobileMenu.js"></script>
```

---

## 📁 Остальные файлы

Во все остальные `.html` файлы необходимо подключить **только базовые скрипты**:

```html
<script src="./src/components/modals/exitModal.js"></script>
<script src="./src/components/modals/modalForm.js"></script>
<script src="./src/components/modals/TimeModal.js"></script>
<script src="./src/mobile/MobileMenu.js"></script>
```

---