if (typeof AOS !== "undefined") {
  AOS.init({
    duration: 800,
    once: true,
    offset: 80
  });
}

const navbar = document.querySelector(".main-navbar");
const sidebar = document.querySelector(".mobile-sidebar");
const mobileLinks = document.querySelectorAll(".sidebar-link");

window.addEventListener("scroll", function () {
  if (!navbar) return;

  if (window.scrollY > 30) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

mobileLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    mobileLinks.forEach(function (item) {
      item.classList.remove("active");
    });

    this.classList.add("active");
  });
});

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    if (!href || href === "#") return;

    const target = document.querySelector(href);

    if (target) {
      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

const desktopLinks = document.querySelectorAll(".nav-links a");

desktopLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    desktopLinks.forEach(function (item) {
      item.classList.remove("active");
    });

    this.classList.add("active");
  });
});

const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length) {
  const revealObserver = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  revealElements.forEach(function (element, index) {
    element.style.transitionDelay = `${index * 120}ms`;
    revealObserver.observe(element);
  });
}

const valuesSection = document.querySelector(".bailsan-values-section");

if (valuesSection) {
  const valuesItems = valuesSection.querySelectorAll(".bailsan-value-item");

  const valuesObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          valuesItems.forEach(function (item, index) {
            item.style.opacity = "0";
            item.style.transform = "translateY(25px)";

            setTimeout(function () {
              item.style.transition = "0.7s ease";
              item.style.opacity = "1";
              item.style.transform = "translateY(0)";
            }, index * 150);
          });

          valuesObserver.unobserve(valuesSection);
        }
      });
    },
    {
      threshold: 0.2
    }
  );

  valuesObserver.observe(valuesSection);
}

const whyUsItems = document.querySelectorAll(".bailsan-process-item");

if (whyUsItems.length) {
  const whyUsObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const item = entry.target;
          const index = Array.from(whyUsItems).indexOf(item);

          setTimeout(function () {
            item.classList.add("active");
          }, index * 180);

          whyUsObserver.unobserve(item);
        }
      });
    },
    {
      threshold: 0.2
    }
  );

  whyUsItems.forEach(function (item) {
    whyUsObserver.observe(item);
  });
}

const teamBreakerBox = document.querySelector(".bailsan-team-breaker-box");

if (teamBreakerBox) {
  teamBreakerBox.style.opacity = "0";
  teamBreakerBox.style.transform = "translateY(40px)";

  const teamBreakerObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          teamBreakerBox.style.transition =
            "opacity 0.9s ease, transform 0.9s ease";

          teamBreakerBox.style.opacity = "1";
          teamBreakerBox.style.transform = "translateY(0)";

          teamBreakerObserver.unobserve(teamBreakerBox);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  teamBreakerObserver.observe(teamBreakerBox);
}

const offersSwiperElement = document.querySelector(".bailsanOffersSwiper");

if (offersSwiperElement && typeof Swiper !== "undefined") {
  new Swiper(".bailsanOffersSwiper", {
    slidesPerView: 1,
    spaceBetween: 25,
    speed: 800,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".bailsan-offer-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".bailsan-offer-next",
      prevEl: ".bailsan-offer-prev"
    },
    breakpoints: {
      576: {
        slidesPerView: 1.4,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 25
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 25
      }
    }
  });
}

const faqItems = document.querySelectorAll(".bailsan-faq-item");

faqItems.forEach(function (item) {
  const question = item.querySelector(".bailsan-faq-question");

  if (!question) return;

  question.addEventListener("click", function () {
    const isActive = item.classList.contains("active");

    faqItems.forEach(function (faqItem) {
      faqItem.classList.remove("active");
    });

    if (!isActive) {
      item.classList.add("active");
    }
  });
});

const contactForm = document.querySelector(".bailsan-contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const submitButton = contactForm.querySelector(
      ".bailsan-contact-submit"
    );

    if (!submitButton) return;

    const originalContent = submitButton.innerHTML;

    submitButton.innerHTML =
      '<span>تم إرسال طلبك بنجاح</span><i class="fa-solid fa-check"></i>';

    submitButton.style.background = "var(--gold)";
    submitButton.style.color = "var(--purple-dark)";

    setTimeout(function () {
      submitButton.innerHTML = originalContent;
      submitButton.style.background = "";
      submitButton.style.color = "";
      contactForm.reset();
    }, 3000);
  });
}

const blogRevealCards = document.querySelectorAll(
  ".bailsan-blog-featured, .bailsan-blog-card"
);

if (blogRevealCards.length) {
  const blogRevealObserver = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  blogRevealCards.forEach(function (card) {
    card.classList.add("blog-reveal");
    blogRevealObserver.observe(card);
  });
}

const shareButtons = document.querySelectorAll(".share-btn");

shareButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: window.location.href
      });
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert("تم نسخ رابط المقال");
    }
  });
});

const galleryTabs = document.querySelectorAll(".gallery-tab");
const galleryItems = document.querySelectorAll(".gallery-item");

if (galleryTabs.length && galleryItems.length) {
  galleryTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      galleryTabs.forEach(function (item) {
        item.classList.remove("active");
      });

      this.classList.add("active");

      const filter = this.getAttribute("data-filter");

      galleryItems.forEach(function (item) {
        const category = item.getAttribute("data-category");

        if (filter === "all" || category === filter) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
}

const galleryModalElement = document.getElementById("galleryModal");

if (
  galleryModalElement &&
  typeof bootstrap !== "undefined" &&
  galleryItems.length
) {
  const galleryModal = new bootstrap.Modal(galleryModalElement);

  const modalMedia = document.getElementById("modalMedia");
  const modalTitle = document.getElementById("modalTitle");
  const modalCategory = document.getElementById("modalCategory");
  const modalCounter = document.getElementById("modalCounter");

  galleryItems.forEach(function (item, index) {
    item.addEventListener("click", function () {
      const type = this.getAttribute("data-type");
      const title = this.getAttribute("data-title");
      const category = this.getAttribute("data-subtitle");
      const media = this.getAttribute("data-media");

      if (!modalMedia) return;

      modalMedia.innerHTML = "";

      if (type === "image") {
        const image = document.createElement("img");

        image.src = media;
        image.alt = title;

        modalMedia.appendChild(image);
      }

      if (type === "video") {
        const video = document.createElement("video");

        video.src = media;
        video.controls = true;
        video.autoplay = true;
        video.playsInline = true;

        modalMedia.appendChild(video);
      }

      if (modalTitle) {
        modalTitle.textContent = title;
      }

      if (modalCategory) {
        modalCategory.textContent = category;
      }

      if (modalCounter) {
        const number = index + 1;

        modalCounter.textContent =
          number < 10 ? "0" + number : number;
      }

      galleryModal.show();
    });
  });

  galleryModalElement.addEventListener(
    "hidden.bs.modal",
    function () {
      if (modalMedia) {
        modalMedia.innerHTML = "";
      }
    }
  );
}

const menuButton = document.querySelector(".bailsan-menu-btn");
const navLinks = document.querySelector(".bailsan-nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("mobile-open");
  });
}

const blogFilterButtons = document.querySelectorAll(".filter-btn");
const blogPageCards = document.querySelectorAll(".blog-card");
const blogPageButtons = document.querySelectorAll(".page-btn");
const blogSearchInput = document.getElementById("searchInput");
const blogNoResults = document.getElementById("noResults");
const blogGrid = document.getElementById("blogGrid");

if (blogFilterButtons.length && blogPageCards.length) {
  let currentBlogCategory = "all";
  let currentBlogPage = 1;

  const blogsPerPage = 3;

  function getFilteredBlogCards() {
    const searchValue = blogSearchInput
      ? blogSearchInput.value.trim().toLowerCase()
      : "";

    return Array.from(blogPageCards).filter(function (card) {
      const category =
        card.getAttribute("data-category") || "";

      const title =
        card.getAttribute("data-title") || "";

      const content =
        card.textContent || "";

      const categoryMatch =
        currentBlogCategory === "all" ||
        category === currentBlogCategory;

      const searchMatch =
        !searchValue ||
        title.toLowerCase().includes(searchValue) ||
        content.toLowerCase().includes(searchValue);

      return categoryMatch && searchMatch;
    });
  }

  function hideBlogCard(card) {
    card.style.setProperty("display", "none", "important");
  }

  function showBlogCard(card) {
    card.style.removeProperty("display");
  }

  function updateBlogPagination(totalPages) {
    blogPageButtons.forEach(function (button, index) {
      if (index < blogPageButtons.length - 1) {
        const pageNumber = index + 1;

        button.textContent = pageNumber;

        if (pageNumber <= totalPages) {
          button.style.display = "flex";
        } else {
          button.style.display = "none";
        }

        button.classList.toggle(
          "active",
          pageNumber === currentBlogPage
        );
      } else {
        button.textContent = "→";

        if (totalPages > 1) {
          button.style.display = "flex";
        } else {
          button.style.display = "none";
        }

        button.classList.remove("active");
      }
    });
  }

  function renderBlogs() {
    const filteredBlogCards = getFilteredBlogCards();

    blogPageCards.forEach(function (card) {
      hideBlogCard(card);
    });

    if (blogNoResults) {
      blogNoResults.style.display =
        filteredBlogCards.length === 0 ? "block" : "none";
    }

    const totalPages = Math.ceil(
      filteredBlogCards.length / blogsPerPage
    );

    if (totalPages === 0) {
      currentBlogPage = 1;
      updateBlogPagination(0);
      return;
    }

    if (currentBlogPage > totalPages) {
      currentBlogPage = totalPages;
    }

    const start =
      (currentBlogPage - 1) * blogsPerPage;

    const end =
      start + blogsPerPage;

    filteredBlogCards
      .slice(start, end)
      .forEach(function (card) {
        showBlogCard(card);
      });

    updateBlogPagination(totalPages);
  }

  blogFilterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      blogFilterButtons.forEach(function (item) {
        item.classList.remove("active");
      });

      this.classList.add("active");

      currentBlogCategory =
        this.getAttribute("data-category") || "all";

      currentBlogPage = 1;

      renderBlogs();
    });
  });

  blogPageButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      const filteredBlogCards =
        getFilteredBlogCards();

      const totalPages = Math.ceil(
        filteredBlogCards.length / blogsPerPage
      );

      if (index < blogPageButtons.length - 1) {
        const selectedPage = index + 1;

        if (selectedPage <= totalPages) {
          currentBlogPage = selectedPage;
          renderBlogs();

          if (blogGrid) {
            blogGrid.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          }
        }
      } else {
        if (currentBlogPage < totalPages) {
          currentBlogPage++;
          renderBlogs();

          if (blogGrid) {
            blogGrid.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          }
        }
      }
    });
  });

  if (blogSearchInput) {
    blogSearchInput.addEventListener("input", function () {
      currentBlogPage = 1;
      renderBlogs();
    });
  }

  renderBlogs();
}
const backToTop = document.getElementById("bailsanBackToTop"); window.addEventListener("scroll", () => { if (window.scrollY > 300) { backToTop.classList.add("show"); } else { backToTop.classList.remove("show"); } }); backToTop.addEventListener("click", () => { window.scrollTo({ top: 0, behavior: "smooth" }); });