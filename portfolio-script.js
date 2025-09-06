$(document).ready(function() {
    // Centralized Portfolio Configuration
    const portfolioItems = [
        {
          id: 'tappity-app',
          title: 'Tappity – Designing the #1 Science App for Kids from Scratch',
          shortSummary: 'I designed Tappity from the ground up, including brand identity, design system, and all key flows. It grew from a side project to $5M+ in subscription revenue and over 1M users.',
          longSummary: 'Beyond visual identity, I led the end-to-end UX across mobile and web, focusing on onboarding optimization, personalization, and parent engagement. I also built tools for subscription flows, content management, and analytics that fueled revenue growth and scale.',
          results: 'Generated $5M+ in subscription revenue and 1M+ users',
          links: [
            { url: 'https://tappityapp.com', text: 'Tappity Web App' },
            { url: 'https://apps.apple.com/us/app/science-for-kids-by-tappity/id1265019371', text: 'iOS App Store' }
          ],
          media: [
            'stream-images/lobby.png',
            'stream-images/chat.png',
            'https://www.youtube.com/watch?v=cyCMt1j5GF0',
            'stream-images/data.png',
            'stream-images/modal.png'
          ]
        },
        {
          id: 'tappity-onboarding',
          title: 'Tappity – Onboarding that Converts',
          shortSummary: 'Designed and optimized onboarding across iOS, mobile web, and desktop, balancing personalization with minimizing drop-off. Source-specific flows tailored for marketing, referrals, and organic search doubled mobile paid conversion.',
          longSummary: 'Onboarding at Tappity evolved through years of iteration. We used funnel testing with hundreds of users per day to refine every step. A highlight was creating “early wow” moments, such as recording 500+ popular kids’ names so characters could greet users personally, and later scaling personalization with AI. We also experimented with deferred onboarding for giveaway campaigns to let users experience value before setup.',
          results: 'Improved mobile download-to-paid conversion from 2.5% to 5%+',
          links: [
            { url: 'https://tappityapp.com', text: 'Tappity Web App' }
          ],
          media: [
            'stream-images/lobby.png',
            'stream-images/chat.png',
            'https://www.youtube.com/watch?v=cyCMt1j5GF0',
            'stream-images/data.png',
            'stream-images/modal.png'
          ]
        },
        {
          id: 'ai-lesson-creation',
          title: 'AI Lesson Creation – Automating Content Workflows',
          shortSummary: 'Designed and built an internal tool that generates complete lessons from a single AI prompt, automating ~90% of content creation tasks.',
          longSummary: 'The tool produces scripts, quizzes, interactions, narration, and imagery in minutes. It integrates OpenAI, Gemini, and ElevenLabs APIs, enabling the team to ship high-quality, interactive lessons with just a few clicks. This dramatically streamlined production and standardized quality across content.',
          results: 'Reduced lesson creation effort by ~90%',
          links: [],
          media: [
            'stream-images/lobby.png',
            'stream-images/chat.png',
            'https://www.youtube.com/watch?v=cyCMt1j5GF0',
            'stream-images/data.png',
            'stream-images/modal.png'
          ]
        },
        {
          id: 'tappity-personalization',
          title: 'Tappity – Personalization & Daily Engagement',
          shortSummary: 'Built a suite of features including a daily science challenge, recommendation engine, and gamification to drive repeat use.',
          longSummary: 'Parents could choose daily or weekly cadence. Challenges paired with personalized recommendations based on child interests helped increase ongoing engagement, creating habits and stronger retention.',
          results: 'Increased daily/weekly active usage through personalized challenges',
          links: [
            { url: 'https://tappityapp.com', text: 'Tappity Web App' }
          ],
          media: [
            'stream-images/lobby.png',
            'stream-images/chat.png',
            'https://www.youtube.com/watch?v=cyCMt1j5GF0',
            'stream-images/data.png',
            'stream-images/modal.png'
          ]
        },
        {
          id: 'billcom-process',
          title: 'Bill.com – Custom Design Process for Complex Workflows',
          shortSummary: 'Created a custom design sprint process to integrate input from engineering, compliance, partnerships, and marketing from day one.',
          longSummary: 'The process supported both fast-turnaround features (2-hour sprints) and large-scale projects (1+ week). It ensured accessibility and compliance requirements were addressed early, avoiding late blockers and speeding delivery for a complex financial SaaS product.',
          results: 'Improved design efficiency and cross-functional alignment for 50+ sprints',
          links: [
            { url: 'https://bill.com', text: 'Bill.com' }
          ],
          media: [
            'stream-images/lobby.png',
            'stream-images/chat.png',
            'https://www.youtube.com/watch?v=cyCMt1j5GF0',
            'stream-images/data.png',
            'stream-images/modal.png'
          ]
        },
        {
          id: 'billcom-redesign',
          title: 'Bill.com – Redesigning SMB Onboarding & Workflows',
          shortSummary: 'Led a major redesign of Bill.com for SMB customers, simplifying complex onboarding and workflows.',
          longSummary: 'Designed hundreds of components and dozens of workflows, tested weekly with real users. The redesign focused on making compliance-heavy processes accessible while improving usability for small business admins and enterprise teams, supporting Bill.com’s growth to IPO.',
          results: 'Supported $100M+ ARR growth and IPO readiness',
          links: [
            { url: 'https://bill.com', text: 'Bill.com' }
          ],
          media: [
            'stream-images/lobby.png',
            'stream-images/chat.png',
            'https://www.youtube.com/watch?v=cyCMt1j5GF0',
            'stream-images/data.png',
            'stream-images/modal.png'
          ]
        },
        {
          id: 'yahoo-fantasy',
          title: 'Yahoo Fantasy Sports – Designing “Two Apps in One”',
          shortSummary: 'Designed mobile interactions to integrate two data-heavy fantasy sports products into one seamless app.',
          longSummary: 'Explored and tested playful UI patterns for switching between modes, including coin-flip interactions. The result was a responsive, engaging experience that allowed users to quickly toggle between contexts on iOS and Android.',
          results: 'Improved usability and engagement for millions of mobile sports users',
          links: [
            { url: 'https://sports.yahoo.com/fantasy/', text: 'Yahoo Fantasy Sports' }
          ],
          media: [
            'stream-images/lobby.png',
            'stream-images/chat.png',
            'https://www.youtube.com/watch?v=cyCMt1j5GF0',
            'stream-images/data.png',
            'stream-images/modal.png'
          ]
        }
      ];
      

    // Convert array to object for backward compatibility
    const portfolioData = {};
    portfolioItems.forEach(item => {
        portfolioData[item.id] = {
            title: item.title,
            shortSummary: item.shortSummary,
            longSummary: item.longSummary,
            results: item.results,
            links: item.links,
            images: item.media // Keep 'images' for backward compatibility
        };
    });

    let currentPortfolio = null;
    let currentImageIndex = 0;

    // Function to generate portfolio HTML from data
    function generatePortfolioHTML() {
        const portfolioContainer = $('.portfolio-items');
        portfolioContainer.empty();

        portfolioItems.forEach(item => {
            const portfolioCard = $(`
                <div class="portfolio-card" data-portfolio="${item.id}">
                    <div class="portfolio-card-header">
                        <h3 class="portfolio-title">${item.title}</h3>
                        <i class="ti ti-circle-arrow-right-filled portfolio-arrow"></i>
                    </div>
                    <div class="portfolio-content">
                        <div class="portfolio-section">
                            <div class="portfolio-label">Project Summary</div>
                            <div class="portfolio-description">
                                ${item.shortSummary}
                            </div>
                        </div>
                        <div class="portfolio-section">
                            <div class="portfolio-label">Results</div>
                            <div class="portfolio-results">
                                ${item.results}
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-thumbnails">
                        ${item.media.slice(0, 4).map(mediaUrl => 
                            `<div class="thumbnail" data-image="${mediaUrl}"></div>`
                        ).join('')}
                    </div>
                </div>
            `);
            
            portfolioContainer.append(portfolioCard);
        });
    }

    // Helper function to check if URL is a YouTube video
    function isYouTubeUrl(url) {
        return url.includes('youtube.com/watch?v=') || url.includes('youtu.be/');
    }

    // Helper function to get YouTube video ID from URL
    function getYouTubeVideoId(url) {
        const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
        return match ? match[1] : null;
    }

    // Helper function to get YouTube thumbnail URL
    function getYouTubeThumbnail(videoId) {
        // Use hqdefault as it's more reliable than maxresdefault
        return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }

    // Generate portfolio HTML from data
    generatePortfolioHTML();

    // Set background images for thumbnails
    $('.thumbnail').each(function() {
        const imagePath = $(this).data('image');
        if (isYouTubeUrl(imagePath)) {
            const videoId = getYouTubeVideoId(imagePath);
            console.log('YouTube URL detected:', imagePath);
            console.log('Extracted video ID:', videoId);
            
            if (videoId) {
                const thumbnailUrl = getYouTubeThumbnail(videoId);
                console.log('Thumbnail URL:', thumbnailUrl);
                $(this).css('background-image', `url(${thumbnailUrl})`);
                $(this).addClass('video-thumbnail');
                // Add play icon overlay for main portfolio thumbnails
                $(this).append('<div class="video-play-overlay"><i class="ti ti-player-play-filled"></i></div>');
            } else {
                console.log('Failed to extract video ID from:', imagePath);
            }
        } else {
            $(this).css('background-image', `url(${imagePath})`);
        }
    });

    // Handle thumbnail clicks (with event stopping to prevent card click)
    $('.thumbnail').on('click', function(e) {
        e.stopPropagation(); // Prevent card click handler from firing
        
        const portfolioId = $(this).closest('.portfolio-card').data('portfolio');
        const imagePath = $(this).data('image');
        const portfolio = portfolioData[portfolioId];
        
        if (portfolio) {
            const imageIndex = portfolio.images.indexOf(imagePath);
            openModal(portfolioId, imageIndex >= 0 ? imageIndex : 0);
        }
    });

    // Handle portfolio card clicks (anywhere in the card)
    $('.portfolio-card').on('click', function(e) {
        const portfolioId = $(this).data('portfolio');
        openModal(portfolioId, 0);
    });

    // Handle modal read more button clicks
    $('#modalReadMoreBtn').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const $btn = $(this);
        const $longSummary = $('#modalLongSummary');
        const $text = $btn.find('.read-more-text');
        const isExpanded = $btn.data('expanded');
        
        if (!isExpanded) {
            // Expand: show long summary alongside short
            $longSummary.slideDown(300);
            $text.text('read less');
            $btn.addClass('expanded');
            $btn.data('expanded', true);
        } else {
            // Collapse: hide long summary
            $longSummary.slideUp(300);
            $text.text('read more');
            $btn.removeClass('expanded');
            $btn.data('expanded', false);
        }
    });

    // Handle modal close
    $('#modalClose').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        closeModal();
    });
    
    $('.modal').on('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });

    // Prevent modal content clicks from closing modal
    $('.modal-content').on('click', function(e) {
        e.stopPropagation();
    });

    // Handle carousel navigation
    $('#carouselPrev').on('click', function() {
        navigateCarousel(-1);
    });

    $('#carouselNext').on('click', function() {
        navigateCarousel(1);
    });

    // Handle keyboard navigation
    $(document).on('keydown', function(e) {
        if ($('#portfolioModal').is(':visible')) {
            switch(e.key) {
                case 'Escape':
                    closeModal();
                    break;
                case 'ArrowLeft':
                    navigateCarousel(-1);
                    break;
                case 'ArrowRight':
                    navigateCarousel(1);
                    break;
            }
        }
    });

    // Thumbnail clicks are now handled directly when thumbnails are created

    function openModal(portfolioId, startIndex = 0) {
        const portfolio = portfolioData[portfolioId];
        if (!portfolio) return;

        currentPortfolio = portfolioId;
        currentImageIndex = startIndex;

        // Set modal content
        $('#modalTitle').text(portfolio.title);
        $('#modalResults').text(portfolio.results);
        $('#modalShortSummary').text(portfolio.shortSummary);
        $('#modalLongSummary').text(portfolio.longSummary);
        
        // Handle links section
        const $linksSection = $('#modalLinksSection');
        const $linksContainer = $('#modalLinks');
        
        if (portfolio.links && portfolio.links.length > 0) {
            $linksContainer.empty();
            portfolio.links.forEach(link => {
                const linkElement = $(`
                    <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="modal-link">
                        <span class="link-text">${link.text}</span>
                        <i class="ti ti-external-link link-icon"></i>
                    </a>
                `);
                $linksContainer.append(linkElement);
            });
            $linksSection.show();
        } else {
            $linksSection.hide();
        }
        
        // Reset read more button state
        $('#modalReadMoreBtn').data('expanded', false);
        $('#modalReadMoreBtn .read-more-text').text('read more');
        $('#modalReadMoreBtn').removeClass('expanded');
        $('#modalLongSummary').hide();

        // Build carousel images
        const carouselImages = $('#carouselImages');
        carouselImages.empty();
        
        portfolio.images.forEach((imagePath, index) => {
            if (isYouTubeUrl(imagePath)) {
                const videoId = getYouTubeVideoId(imagePath);
                const iframe = $('<iframe>')
                    .addClass('carousel-video')
                    .attr('src', `https://www.youtube.com/embed/${videoId}`)
                    .attr('frameborder', '0')
                    .attr('allowfullscreen', true)
                    .attr('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
                carouselImages.append(iframe);
            } else {
                const img = $('<img>')
                    .addClass('carousel-image')
                    .attr('src', imagePath)
                    .attr('alt', `${portfolio.title} - Image ${index + 1}`);
                carouselImages.append(img);
            }
        });

        // Build thumbnails
        const thumbnailsContainer = $('#carouselThumbnails');
        thumbnailsContainer.empty();
        
        portfolio.images.forEach((imagePath, index) => {
            const thumbnail = $('<div>')
                .addClass('carousel-thumbnail')
                .attr('data-index', index)
                .toggleClass('active', index === currentImageIndex);
            
            if (isYouTubeUrl(imagePath)) {
                const videoId = getYouTubeVideoId(imagePath);
                const thumbnailUrl = getYouTubeThumbnail(videoId);
                thumbnail.css('background-image', `url(${thumbnailUrl})`);
                thumbnail.addClass('video-thumbnail');
                // Add play icon overlay
                thumbnail.append('<div class="play-icon"><i class="ti ti-player-play-filled"></i></div>');
            } else {
                thumbnail.css('background-image', `url(${imagePath})`);
            }
            
            // Attach click handler directly to the thumbnail
            thumbnail.on('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                goToImage(index);
            });
            
            thumbnailsContainer.append(thumbnail);
        });

        // Show the correct image
        updateCarousel();

        // Show modal with fade in effect
        $('#portfolioModal').fadeIn(300);
        $('body').css('overflow', 'hidden');
    }

    function closeModal() {
        $('#portfolioModal').fadeOut(300);
        $('body').css('overflow', 'auto');
        currentPortfolio = null;
        currentImageIndex = 0;
    }

    function navigateCarousel(direction) {
        if (!currentPortfolio) return;
        
        const portfolio = portfolioData[currentPortfolio];
        const newIndex = currentImageIndex + direction;
        
        if (newIndex >= 0 && newIndex < portfolio.images.length) {
            goToImage(newIndex);
        }
    }

    function goToImage(index) {
        if (!currentPortfolio) return;
        
        const portfolio = portfolioData[currentPortfolio];
        if (index < 0 || index >= portfolio.images.length) return;
        
        currentImageIndex = index;
        updateCarousel();
        updateThumbnails();
    }

    function updateCarousel() {
        const translateX = -currentImageIndex * 100;
        $('#carouselImages').css('transform', `translateX(${translateX}%)`);
    }

    function updateThumbnails() {
        $('.carousel-thumbnail').removeClass('active');
        $(`.carousel-thumbnail[data-index="${currentImageIndex}"]`).addClass('active');
    }

    // Handle window resize
    $(window).on('resize', function() {
        if ($('#portfolioModal').is(':visible')) {
            updateCarousel();
        }
    });

    // Preload images on hover for better UX
    $('.portfolio-card').on('mouseenter', function() {
        const portfolioId = $(this).data('portfolio');
        const portfolio = portfolioData[portfolioId];
        
        if (portfolio && portfolio.images) {
            portfolio.images.forEach(imagePath => {
                const img = new Image();
                img.src = imagePath;
            });
        }
    });
});
