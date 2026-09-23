/* =========================================================
   PizzaLo Digital Menu — Script
   Edit the `menuItems` array below to add, remove, or update
   menu items. Everything on the page renders from this data.
   ========================================================= */

const FALLBACK_IMAGE =
  "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect width='200' height='200' fill='%23fdecc8'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='42' fill='%23d98a0f' text-anchor='middle' dominant-baseline='middle'%3E%F0%9F%8D%95%3C/text%3E%3C/svg%3E";

// Category metadata: order controls display order on the page.
const categories = [
  {
    id: "pizzas",
    name: "Pizzas",
    icon: "🍕",
    tagline: "Freshly Baked. Always Better.",
    style: "is-leaf",
  },
  {
    id: "burgers",
    name: "Burgers",
    icon: "🍔",
    tagline: "Bite into Happiness",
    style: "is-amber",
  },
  {
    id: "fries",
    name: "French Fries",
    icon: "🍟",
    tagline: "Crispy. Golden. Irresistible.",
    style: "is-leaf",
  },
  {
    id: "coffee",
    name: "Coffee",
    icon: "☕",
    tagline: "Brews for a Better Day.",
    style: "is-amber",
  },
  {
    id: "shakes",
    name: "Shakes",
    icon: "🥤",
    tagline: "Shake It. Love It.",
    style: "is-leaf",
  },
];

// Menu data — sourced from PizzaLo's printed menu. Prices and
// names are kept exactly as listed there.
const menuItems = [
  // Pizzas
  {
    id: "margarita-pizza",
    name: "Margarita Pizza",
    category: "pizzas",
    price: 99,
    description: "Fresh Tomato, Mozzarella & Oregano",
    image:
      "https://images.pexels.com/photos/17800186/pexels-photo-17800186.jpeg?auto=compress&cs=tinysrgb&w=600",
    veg: true,
  },
  {
    id: "corn-cheese-pizza",
    name: "Veg. Corn Cheese Pizza",
    category: "pizzas",
    price: 119,
    description: "Sweet Corn, Cheese & Herbs",
    image:
      "https://images.pexels.com/photos/2762942/pexels-photo-2762942.jpeg?auto=compress&cs=tinysrgb&w=600",
    veg: true,
  },
  {
    id: "jalapeno-pizza",
    name: "Jalapeno Pizza",
    category: "pizzas",
    price: 159,
    description: "Jalapeno & Extra Cheese",
    image:
      "https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg?auto=compress&cs=tinysrgb&w=600",
    veg: true,
  },

  // Burgers
  {
    id: "veg-burger",
    name: "Veg Burger",
    category: "burgers",
    price: 99,
    description: "Crispy Veg Patty With Fresh Veggies",
    image:
      "https://images.pexels.com/photos/2300034/pexels-photo-2300034.jpeg?auto=compress&cs=tinysrgb&w=600",
    veg: true,
  },
  {
    id: "veg-double-burger",
    name: "Veg Double Burger",
    category: "burgers",
    price: 179,
    description: "Double Patty, Cheese & Veggies",
    image:
      "https://images.pexels.com/photos/2300031/pexels-photo-2300031.jpeg?auto=compress&cs=tinysrgb&w=600",
    veg: true,
  },

  // French Fries
  {
    id: "classic-fries",
    name: "Classic French Fries",
    category: "fries",
    price: 79,
    description: "Salt Seasoned",
    image:
      "https://images.pexels.com/photos/4109234/pexels-photo-4109234.jpeg?auto=compress&cs=tinysrgb&w=600",
    veg: true,
  },
  {
    id: "peri-peri-fries",
    name: "Peri Peri French Fries",
    category: "fries",
    price: 99,
    description: "Spicy Peri Peri Seasoning",
    image:
      "https://images.pexels.com/photos/11485199/pexels-photo-11485199.jpeg?auto=compress&cs=tinysrgb&w=600",
    veg: true,
  },

  // Coffee
  {
    id: "latte",
    name: "Latte",
    category: "coffee",
    price: 59,
    description: "Smooth & Creamy",
    image:
      "https://images.pexels.com/photos/12703064/pexels-photo-12703064.jpeg?auto=compress&cs=tinysrgb&w=600",
    veg: true,
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    category: "coffee",
    price: 69,
    description: "Rich & Aromatic",
    image:
      "https://images.pexels.com/photos/186857/pexels-photo-186857.jpeg?auto=compress&cs=tinysrgb&w=600",
    veg: true,
  },
  {
    id: "americano",
    name: "Americano",
    category: "coffee",
    price: 89,
    description: "Bold & Strong",
    image:
      "https://images.pexels.com/photos/1627933/pexels-photo-1627933.jpeg?auto=compress&cs=tinysrgb&w=600",
    veg: true,
  },

  // Shakes (no descriptions listed on the source menu)
  {
    id: "oreo-shake",
    name: "Oreo Shake",
    category: "shakes",
    price: 69,
    description: "",
    image:
      "https://images.pexels.com/photos/3727250/pexels-photo-3727250.jpeg?auto=compress&cs=tinysrgb&w=600",
    veg: true,
  },
  {
    id: "kitkat-shake",
    name: "Kitkat Shake",
    category: "shakes",
    price: 89,
    description: "",
    image:
      "https://images.pexels.com/photos/18133821/pexels-photo-18133821.jpeg?auto=compress&cs=tinysrgb&w=600",
    veg: true,
  },
  {
    id: "strawberry-shake",
    name: "Strawberry Shake",
    category: "shakes",
    price: 99,
    description: "",
    image:
      "https://images.pexels.com/photos/11299733/pexels-photo-11299733.jpeg?auto=compress&cs=tinysrgb&w=600",
    veg: true,
  },
  {
    id: "mango-shake",
    name: "Mango Shake",
    category: "shakes",
    price: 99,
    description: "",
    image:
      "https://images.pexels.com/photos/7377106/pexels-photo-7377106.jpeg?auto=compress&cs=tinysrgb&w=600",
    veg: true,
  },
];

/* ---------------------------------------------------------
   Rendering
   --------------------------------------------------------- */

function itemCardHTML(item) {
  const descHTML = item.description
    ? `<p class="item-card__desc">${item.description}</p>`
    : "";
  return `
    <button class="item-card" type="button" data-item-id="${item.id}" aria-haspopup="dialog">
      <span class="item-card__img-wrap">
        <img
          class="item-card__img"
          src="${item.image}"
          alt="${item.name}${item.description ? " - " + item.description : ""}"
          loading="lazy"
          width="88" height="88"
          onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}';"
        />
      </span>
      <span class="item-card__body">
        <span class="item-card__top">
          ${item.veg ? '<span class="veg-dot" title="Vegetarian" aria-label="Vegetarian"></span>' : ""}
          <span class="item-card__name">${item.name}</span>
        </span>
        ${descHTML}
      </span>
      <span class="item-card__price">₹${item.price}</span>
    </button>
  `;
}

function renderMenu(filterCategory = "all", searchTerm = "") {
  const wrap = document.getElementById("menuSections");
  const noResults = document.getElementById("noResults");
  const term = searchTerm.trim().toLowerCase();

  wrap.innerHTML = "";
  let totalShown = 0;

  categories.forEach((cat) => {
    if (filterCategory !== "all" && filterCategory !== cat.id) return;

    let items = menuItems.filter((i) => i.category === cat.id);
    if (term) {
      items = items.filter(
        (i) =>
          i.name.toLowerCase().includes(term) ||
          i.category.toLowerCase().includes(term) ||
          (i.description && i.description.toLowerCase().includes(term))
      );
    }
    if (items.length === 0) return;

    totalShown += items.length;

    const section = document.createElement("section");
    section.className = "menu-section";
    section.id = cat.id;
    section.innerHTML = `
      <div class="menu-section__header ${cat.style}">
        <span class="menu-section__title">
          <span class="menu-section__icon" aria-hidden="true">${cat.icon}</span>
          ${cat.name}
        </span>
        <span class="menu-section__tagline">${cat.tagline}</span>
      </div>
      <div class="menu-grid">
        ${items.map(itemCardHTML).join("")}
      </div>
    `;
    wrap.appendChild(section);
  });

  noResults.classList.toggle("is-visible", totalShown === 0);

  // Wire up click handlers for the newly rendered cards.
  wrap.querySelectorAll(".item-card").forEach((card) => {
    card.addEventListener("click", () => {
      const item = menuItems.find((i) => i.id === card.dataset.itemId);
      if (item) openModal(item);
    });
  });
}

/* ---------------------------------------------------------
   Category filter chips
   --------------------------------------------------------- */

function renderCategoryChips() {
  const nav = document.getElementById("categoryScroll");
  const allCats = [{ id: "all", name: "All" }, ...categories];
  nav.innerHTML = allCats
    .map(
      (c, idx) =>
        `<button class="chip${idx === 0 ? " is-active" : ""}" type="button" data-cat="${c.id}">${c.name}</button>`
    )
    .join("");

  nav.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      nav.querySelectorAll(".chip").forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      document.getElementById("searchInput").value = "";
      renderMenu(chip.dataset.cat, "");
    });
  });
}

/* ---------------------------------------------------------
   Search
   --------------------------------------------------------- */

function setupSearch() {
  const input = document.getElementById("searchInput");
  input.addEventListener("input", () => {
    const value = input.value;
    if (value.trim() !== "") {
      document.querySelectorAll("#categoryScroll .chip").forEach((c) => c.classList.remove("is-active"));
      document.querySelector('#categoryScroll .chip[data-cat="all"]').classList.add("is-active");
    }
    renderMenu("all", value);
  });
}

/* ---------------------------------------------------------
   Modal
   --------------------------------------------------------- */

function openModal(item) {
  const overlay = document.getElementById("modalOverlay");
  document.getElementById("modalImg").src = item.image.replace("w=600", "w=900");
  document.getElementById("modalImg").alt = item.name;
  document.getElementById("modalNameText").textContent = item.name;
  document.querySelector("#modalName .veg-dot").style.display = item.veg ? "inline-flex" : "none";
  document.getElementById("modalDesc").textContent = item.description || "";
  document.getElementById("modalDesc").style.display = item.description ? "block" : "none";
  document.getElementById("modalPrice").textContent = `₹${item.price}`;
  overlay.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("is-open");
  document.body.style.overflow = "";
}

function setupModal() {
  document.getElementById("modalOverlay").addEventListener("click", (e) => {
    if (e.target.id === "modalOverlay") closeModal();
  });
  document.getElementById("modalClose").addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

/* ---------------------------------------------------------
   Nav active-link highlighting on scroll
   --------------------------------------------------------- */

function setupActiveNav() {
  const links = document.querySelectorAll(".navbar__link[data-target]");
  const sections = Array.from(links)
    .map((l) => document.getElementById(l.dataset.target))
    .filter(Boolean);

  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.remove("is-active"));
          const match = document.querySelector(`.navbar__link[data-target="${entry.target.id}"]`);
          if (match) match.classList.add("is-active");
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );

  sections.forEach((s) => observer.observe(s));
}

/* ---------------------------------------------------------
   Init
   --------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  renderCategoryChips();
  renderMenu();
  setupSearch();
  setupModal();
  setupActiveNav();

  // Gallery images reuse a few of the menu photos.
  const galleryPicks = ["margarita-pizza", "jalapeno-pizza", "veg-double-burger", "peri-peri-fries", "cappuccino", "mango-shake", "corn-cheese-pizza", "strawberry-shake"];
  const galleryGrid = document.getElementById("galleryGrid");
  if (galleryGrid) {
    galleryGrid.innerHTML = galleryPicks
      .map((id) => {
        const item = menuItems.find((i) => i.id === id);
        if (!item) return "";
        return `<img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}';" />`;
      })
      .join("");
  }
});
