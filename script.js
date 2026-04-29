// Initialize AOS
AOS.init({
    duration: 1000,
    once: false,
    mirror: true
});

// Navigation toggle for mobile
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.padding = '0.5rem 0';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.padding = '1rem 0';
    }
});

// Typing effect
const typedTextElement = document.querySelector('.typed-text');
const textArray = [
    'Data Analyst',
    'Machine Learning Enthusiast',
    'Business Intelligence Expert',
    'Python Developer',
    'Dashboard Creator',
    'AI Educator'
];

let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextElement.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextElement.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, 1000);
    }
}

// Start typing effect
setTimeout(type, 1000);

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Skill progress bars animation
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const skillObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    skillObserver.observe(skillsSection);
}

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Create mailto link
        const mailtoLink = `mailto:raissumran@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Reset form
        contactForm.reset();
        
        // Show success message
        alert('Thank you for your message! Your email client has been opened with the pre-filled message.');
    });
}

// Project detail modal
const modal = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.querySelector('.close');

function showProjectDetail(project) {
    const projectDetails = {
        'ipl': {
            title: 'IPL Data Analysis Dashboard',
            description: `
                <h2>IPL Data Analysis (2008-2025)</h2>
                <p>A comprehensive cricket analytics platform that provides deep insights into IPL performance metrics.</p>
                
                <h3>Key Features:</h3>
                <ul>
                    <li>Real-time data extraction via Kaggle API</li>
                    <li>Automated ETL pipeline using Python</li>
                    <li>PostgreSQL database for efficient data storage</li>
                    <li>Interactive PowerBI dashboards with 15+ visualizations</li>
                    <li>Player performance prediction models</li>
                    <li>Team statistics and match analytics</li>
                    <li>Season-wise comparison reports</li>
                </ul>
                
                <h3>Technical Stack:</h3>
                <ul>
                    <li>Python (Pandas, NumPy) for data preprocessing</li>
                    <li>PostgreSQL for database management</li>
                    <li>PowerBI for interactive visualizations</li>
                    <li>Kaggle API for data sourcing</li>
                    <li>DAX for complex calculations</li>
                </ul>
                
                <h3>Impact:</h3>
                <p>This dashboard helps teams and analysts make data-driven decisions by providing comprehensive insights into player performances, team strategies, and match outcomes.</p>
            `
        },
        'fraud': {
            title: 'Online Payment Fraud Detection System',
            description: `
                <h2>Machine Learning-Based Fraud Detection</h2>
                <p>An advanced fraud detection system that identifies suspicious payment transactions with 99.8% accuracy.</p>
                
                <h3>Key Achievements:</h3>
                <ul>
                    <li>99.8% accuracy with Random Forest algorithm</li>
                    <li>Real-time fraud detection capabilities</li>
                    <li>Reduced false positives by 40%</li>
                    <li>Processing 10,000+ transactions per second</li>
                </ul>
                
                <h3>Technical Implementation:</h3>
                <ul>
                    <li>Feature engineering with 20+ derived features</li>
                    <li>Ensemble methods (Random Forest, XGBoost)</li>
                    <li>SMOTE for handling imbalanced datasets</li>
                    <li>Cross-validation for model reliability</li>
                    <li>Real-time prediction API</li>
                </ul>
                
                <h3>Model Performance:</h3>
                <ul>
                    <li>Logistic Regression: 99.83% accuracy</li>
                    <li>Random Forest: 99.97% accuracy</li>
                    <li>XGBoost: 99.88% accuracy</li>
                    <li>F1-Score: 0.876</li>
                </ul>
            `
        },
        'insurance': {
            title: 'Insurance Risk and Claim Analysis',
            description: `
                <h2>Insurance Analytics Dashboard</h2>
                <p>Comprehensive risk assessment platform analyzing 37,542 insurance policies worth $187.82M in claims.</p>
                
                <h3>Analysis Highlights:</h3>
                <ul>
                    <li>Customer segmentation based on risk profiles</li>
                    <li>Claim prediction models with 92% accuracy</li>
                    <li>Fraud detection patterns identification</li>
                    <li>Premium optimization recommendations</li>
                    <li>Geographic risk distribution analysis</li>
                </ul>
                
                <h3>Dashboard Features:</h3>
                <ul>
                    <li>Interactive filters for dynamic analysis</li>
                    <li>Real-time KPI monitoring</li>
                    <li>Drill-down capabilities for detailed insights</li>
                    <li>Automated report generation</li>
                    <li>Risk scoring algorithm integration</li>
                </ul>
                
                <h3>Business Impact:</h3>
                <p>Reduced claim processing time by 35% and improved risk assessment accuracy, leading to better premium pricing strategies.</p>
            `
        },
        'employee': {
            title: 'Employee Performance Analysis',
            description: `
                <h2>HR Analytics and Performance Prediction</h2>
                <p>Machine learning solution for predicting employee performance and identifying factors affecting productivity.</p>
                
                <h3>Key Insights:</h3>
                <ul>
                    <li>Identified top 3 factors influencing performance</li>
                    <li>Predicted attrition risk with 89% accuracy</li>
                    <li>Salary optimization recommendations</li>
                    <li>Department-wise performance analysis</li>
                    <li>Training needs identification</li>
                </ul>
                
                <h3>Analytical Approach:</h3>
                <ul>
                    <li>Feature importance analysis using Random Forest</li>
                    <li>Correlation analysis for variable relationships</li>
                    <li>Clustering for employee segmentation</li>
                    <li>Time series analysis for performance trends</li>
                    <li>Predictive modeling for future performance</li>
                </ul>
                
                <h3>Outcomes:</h3>
                <p>Helped HR departments improve employee retention by 25% and increase overall productivity by identifying key performance drivers.</p>
            `
        }
    };
    
    if (projectDetails[project]) {
        modalContent.innerHTML = projectDetails[project].description;
        modal.style.display = 'block';
    }
}

// Close modal
if (closeBtn) {
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add animation to stats when visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-item h3');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.innerText);
                let current = 0;
                const increment = target / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        stat.innerText = target + (stat.innerText.includes('+') ? '+' : '');
                        clearInterval(timer);
                    } else {
                        stat.innerText = Math.floor(current) + (stat.innerText.includes('+') ? '+' : '');
                    }
                }, 30);
            });
            statsObserver.unobserve(entry.target);
        }
    });
});

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    statsObserver.observe(aboutStats);
}

console.log('Portfolio website loaded successfully!');
