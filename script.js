// Progress bar fill animation
    document.addEventListener("DOMContentLoaded", function() {
      const progressBars = document.querySelectorAll(".progress-bar");
      progressBars.forEach(bar => {
        let percentage = bar.getAttribute("data-progress");
        bar.style.width = percentage + "%";
      });
    });
        // Mobile Navigation Toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Form submission
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function (e) {
                e.preventDefault();
                alert('Thank you for your message, Bittu! I will get back to you soon.');
                this.reset();
            });
        }

        // Animate skill bars when they come into view
        const skillBars = document.querySelectorAll('.skill-progress');

        const animateSkillBars = () => {
            skillBars.forEach(bar => {
                const barWidth = bar.style.width;
                bar.style.width = '0';

                setTimeout(() => {
                    bar.style.width = barWidth;
                }, 300);
            });
        };

        // Trigger animation when skills section is in view
        const skillsSection = document.getElementById('skills');
        const options = {
            threshold: 0.3
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        observer.observe(skillsSection);

        // Back to top button visibility
        const backToTopBtn = document.querySelector('.back-to-top');

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.style.display = 'flex';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });









        // extra