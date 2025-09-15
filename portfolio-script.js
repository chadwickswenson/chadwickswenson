$(document).ready(function() {
    // Centralized Portfolio Configuration
    const portfolioItems = [
        {
          id: 'tappity-app',
          title: 'Tappity – Designing the #1 Science App for Kids',
          shortSummary: 'Designed Tappity from the ground up; brand identity, design system, user flows, marketing, and book design. It grew into the #1 kids’ science app, offering thousands of interactive lessons and curriculum-paired books.',
          longSummary: 'I invested thousands of hours designing everything from product UX to eight published science books. The result is a cohesive experience for families: casual science exploration for kids, dashboards and controls for parents, curriculum depth for homeschoolers, and AI implemented throughout.',
          results: '$5M+ in revenue, 1M+ users, 40M+ lessons completed, and an incredible team making it all possible. Recognized by Apple for design quality and craft, with 30+ App Store features.',
          links: [
            { url: 'https://tappityapp.com', text: 'Tappity Web App' },
            { url: 'https://apps.apple.com/us/app/science-for-kids-by-tappity/id1265019371', text: 'iOS App Store App Page' }
          ],
          media: [
            'stream-images/portfolio images/tappity-app/card1.png',
            'stream-images/portfolio images/tappity-app/apple-feature.jpg',
            'https://www.youtube.com/watch?v=cyCMt1j5GF0',
            'https://youtu.be/6wwfFbxwC_k',
            'https://youtu.be/fLVC2XDkq_s',
            'https://youtu.be/LQ_4padvqVw',
            'https://youtu.be/xvC1woVQJpc',
            'https://youtu.be/vVNBnOaWNxg',
            'https://youtu.be/98Bp0ze88_k',

          ],
          captions: [
            'Tappity is the #1 science app for kids.',
            'Tappity has been recognized by Apple for design quality and craft, with 30+ App Store features.',
            'This project connected the UI with every part of the product experience. Because we produce our own interactive content in a film studio, we design filming, editing, and interactivity to align seamlessly with the app. From the device interface to lesson filming, series progress, and interactive elements, everything works together to create a truly interactive experience.',
            'The home page offers users a daily challenge, personalized lesson recommendations, and a library of lessons to explore.',
            'Every page is responsive and designed for the phone, tablet, and desktop.',
            'The AI-powered science curriculum is designed to be fun and engaging for kids, and easy for parents to use.',
            'We improved trial to paid conversion by 23% by offering interactive ebook versions of our physical books. This allowed users to get immediate value while waiting for the physical books to arrive.',
            'A creative UI allows kids to create.',
            'As part of this project I learned print design and published over 10 science books.',
          ]
        },
        {
          id: 'tappity-onboarding',
          title: 'Tappity – Onboarding that Converts',
          shortSummary: 'Over 5 years, I iterated on onboarding across iOS, mobile web, and desktop. The focus was on getting users to early “wow” moments and tailoring flows by source (paid marketing, referrals, organic search) and family type (homeschool vs. non-homeschool) to maximize conversion to subscription.',
          longSummary: 'We funneled hundreds of users a day through tests to refine every step. Highlights included “early wow” personalization (characters greeting kids by name from a library of 500+ names, later scaled with AI) and source-specific flows. For example, motivated organic search users could complete more setup, while paid users needed a lighter path with immediate value. Homeschool families, on the other hand, tended to prefer more setup and more context before getting started. They valued understanding the product upfront and often made larger purchases sooner, so we customized their flow to match that behavior.',
          results: 'Raised onboarding completion from 60% → 95%. Increased mobile download-to-paid conversion from 2.5% → 5%+, which is above the typical 1–4% range for consumer education apps, despite our product being priced at a premium ($10+/month).',
          links: [
            { url: 'https://tappityapp.com', text: 'Tappity Web App' }
          ],
          media: [
            'https://youtu.be/0LpfQVcK9Ew',
            'https://youtu.be/CYm2ken-UPY',
            'stream-images/portfolio images/tappity-onboarding/tracking.jpg',
            'stream-images/portfolio images/tappity-onboarding/fb-ad.jpg',
            'stream-images/portfolio images/tappity-onboarding/free-ebook-landing.jpg'
          ],
          captions: [
            'Onboarding aims to have early small "wow" moments like saying the child\'s name from their chosen character.',
            'We tripled the number of books purchased by adding two onboarding steps after checkout. These steps educated customers about what they already had (ebooks) and what was available (print books and member discounts).',
            'Tracking dropoff in the funnel to make rapid improvements every day.',
            'Paid acquisition start of the funnel -> custom funnel to reflect marketing copy and offer.',
            'Marketing landing pages have customized funnels based off user behavior, product knowledge, and level of motivation.'
          ]
        },
        {
            id: 'ai-prototype',
            title: 'AI Lesson Creator Prototype – Designed, Built, & Launched in Two Weeks',
            shortSummary: 'I created both the AI agent and the app’s UI/UX, enabling users to generate interactive lessons instantly from a simple prompt. Each lesson included image and video backgrounds, audio, an animated character, subtitles, and interactive elements all controlled by AI. The result is an app where a kid can ask any question and receive a personalized interactive lesson in seconds.',
            longSummary: 'I built this as a quick prototype and released it publicly on the App Store to gather customer feedback. My goal was to fully understand the capabilities of AI and how it could impact our product, as well as see how customers would react. The app used Gemini, ChatGPT, Anthropic, and ElevenLabs APIs to power unique capabilities like script generation, visuals, narration, and interactivity. Thousands of users asked questions, used the app to learn, and completed surveys, giving me valuable insights into the potential of AI-driven lesson creation.',
            results: 'The prototype reached thousands of users who tested lessons and shared feedback. Learnings from this project directly informed our new AI course and lesson creation tools, enabling the team to build courses 100x faster with richer interaction and higher quality.',
            links: [
              { url: 'https://apps.apple.com/us/app/snap-science-learn-anything/id6739454340', text: 'Try the iOS App Prototype' }
            ],
            media: [
              'stream-images/portfolio images/snap-science/ipad-slide1.jpg',
              'stream-images/portfolio images/snap-science/ipad-slide2.jpg',
              'stream-images/portfolio images/snap-science/ipad-slide3.jpg',
              'stream-images/portfolio images/snap-science/ipad-slide4.jpg',
              'stream-images/portfolio images/snap-science/ipad-slide5.jpg',
            ],
            captions: [
              'Ask a question on any topic.',
            'Designed to be simple and kid-friendly.',
            'My AI agent creates an interactive lesson based on your question.',
            'You can also learn by snapping a picture of something around you.',
            'I gave the AI lesson agent access to our image and video library so it can select the best visuals for each lesson.',
            ]
          },
       /* {
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
          ],
          captions: [
            'AI content generation interface for lesson creation',
            'Automated script and quiz generation workflow',
            'Demo of the complete AI-powered content pipeline',
            'Performance metrics showing 90% time reduction',
            'Content quality comparison: AI vs manual creation'
          ]
        },*/
        {
          id: 'billcom-redesign',
          title: 'Bill.com – Complete Redesign, Onboarding, and Activation',
          shortSummary: 'Led the full redesign of Bill.com, simplifying onboarding, bill pay, and admin workflows. Built a custom design sprint process to integrate engineering, compliance, accessibility, partnerships, and marketing from the start.',
          longSummary: 'Partnered with PM, two engineering teams (15+ engineers), and ~5 designers. Designed hundreds of components and workflows, testing weekly with users. Championed the redesign vision across 500+ employees and created a repeatable sprint methodology (50+ sprints) that balanced speed with gathering requirements from dozens of stakeholders.',
          results: 'Launched redesigned Bill.com within 6 months. Completed 30+ ADA-compliant flows. Improved SMB adoption and set the foundation for SMB growth to IPO.',
          links: [
            { url: 'https://bill.com', text: 'Bill.com' }
          ],
          media: [
            'stream-images/portfolio images/bill-redesign/bill1.jpg',
            'stream-images/portfolio images/bill-redesign/bill2.jpg',
            'stream-images/portfolio images/bill-redesign/bill3.jpg',
          ],
          captions: [
            'Modernized Bill.com’s design with role-based onboarding to boost activation.',
            'Aligned 500+ employees around the redesign vision through clear communication and company-wide engagement.',
            'Built a custom sprint process to gather requirements from diverse stakeholders across product, engineering, compliance, ADA, marketing, and partnerships.',
          ]
        },
        {
          id: 'yahoo-fantasy',
          title: 'Yahoo Fantasy Sports – Introducing Daily Fantasy to Millions of Users',
          shortSummary: 'Designed the integration of Daily Fantasy into Yahoo Fantasy Sports, helping 5M+ monthly active users discover and try a brand-new feature.',
          longSummary: 'Collaborated with PM, design leadership, and a 15-person iOS/Android engineering team. After testing different approaches, we landed on a playful “coin flip” interaction that let users toggle seamlessly between traditional fantasy and daily fantasy, with room for notifications and promotions. ',
          results: '80% of users discovered the new feature, with 60% engaging via the new navigation.',
          links: [
            { url: 'https://apps.apple.com/us/app/yahoo-fantasy-football-sports/id328415391', text: 'Yahoo Fantasy Sports' }
          ],
          media: [
            'stream-images/portfolio images/yahoo-sports/80.png',
            'stream-images/portfolio images/yahoo-sports/data.png',
            'stream-images/portfolio images/yahoo-sports/lobby.png',
            'stream-images/portfolio images/yahoo-sports/chat.png',
          ],
          captions: [
            'Introduced a “coin flip” navigation that let users seamlessly toggle between traditional and daily fantasy.',
            'Within Daily Fantasy, I designed a modular element where we could test different offers and promotions to drive user activation.',
            'Redesigned the draft lobby for clarity and ease of use.',
            'Designed and launched a new in-app chat feature for fantasy players.',
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
            images: item.media, // Keep 'images' for backward compatibility
            captions: item.captions || [] // Add captions support
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
                            <div class="portfolio-label">
                                <i class="ti ti-compass-filled"></i>
                                Project Summary
                            </div>
                            <div class="portfolio-description">
                                ${item.shortSummary}
                            </div>
                        </div>
                        <div class="portfolio-section">
                            <div class="portfolio-label">
                                <i class="ti ti-chart-area-line-filled"></i>
                                Results
                            </div>
                            <div class="portfolio-results">
                                ${item.results}
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-thumbnails">
                        ${item.media.map(mediaUrl => 
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
            $(this).css('background-image', `url("${imagePath}")`);
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
                thumbnail.css('background-image', `url("${imagePath}")`);
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
        updateCaption();
        updateNavigationArrows();

        // Show modal with fade in effect
        $('#portfolioModal').fadeIn(300);
        $('body').css('overflow', 'hidden');
    }

    function closeModal() {
        // Stop all videos before closing
        $('#carouselImages iframe').each(function() {
            const iframe = $(this)[0];
            const src = iframe.src;
            iframe.src = src; // This reloads the iframe and stops the video
        });
        
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
        
        // Stop all videos before changing slides
        $('#carouselImages iframe').each(function() {
            const iframe = $(this)[0];
            const src = iframe.src;
            iframe.src = src; // This reloads the iframe and stops the video
        });
        
        currentImageIndex = index;
        updateCarousel();
        updateThumbnails();
        updateCaption();
        updateNavigationArrows();
    }

    function updateCarousel() {
        const translateX = -currentImageIndex * 100;
        $('#carouselImages').css('transform', `translateX(${translateX}%)`);
    }

    function updateThumbnails() {
        $('.carousel-thumbnail').removeClass('active');
        $(`.carousel-thumbnail[data-index="${currentImageIndex}"]`).addClass('active');
    }

    function updateCaption() {
        if (!currentPortfolio) return;
        
        const portfolio = portfolioData[currentPortfolio];
        const caption = portfolio.captions && portfolio.captions[currentImageIndex] 
            ? portfolio.captions[currentImageIndex] 
            : '';
        
        $('#imageCaption').text(caption);
    }

    function updateNavigationArrows() {
        if (!currentPortfolio) return;
        
        const portfolio = portfolioData[currentPortfolio];
        const totalImages = portfolio.images.length;
        
        // Hide/show left arrow
        if (currentImageIndex <= 0) {
            $('#carouselPrev').hide();
        } else {
            $('#carouselPrev').show();
        }
        
        // Hide/show right arrow
        if (currentImageIndex >= totalImages - 1) {
            $('#carouselNext').hide();
        } else {
            $('#carouselNext').show();
        }
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
