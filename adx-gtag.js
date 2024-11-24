        // Google Analytics - GA4 tracking script
        function initializeAnalytics() {
            const measurementId = 'G-HW7L0D4S14'; // Use your own GA4 Measurement ID

            const script = document.createElement('script');
            script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
            script.async = true;
            script.onload = function() {
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                    dataLayer.push(arguments);
                }
                gtag('js', new Date());
                gtag('config', measurementId);
            };
            document.head.appendChild(script);
        }

        // GPT Ad setup
        function setupAds() {
            const script = document.createElement('script');
            script.async = true;
            script.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
            document.head.appendChild(script);

            script.onload = function() {
                window.googletag = window.googletag || { cmd: [] };

                googletag.cmd.push(function() {
                    // Ad slot 1
                    const adContainer1 = document.createElement('div');
                    adContainer1.id = 'div-gpt-ad-1732407228104-0';
                    adContainer1.style.minWidth = '320px';
                    adContainer1.style.minHeight = '50px';
                    const targetDiv1 = document.getElementById('ad1');
                    if (targetDiv1) {
                        targetDiv1.appendChild(adContainer1);
                    } else {
                        console.error("Div with id 'ad1' not found.");
                    }

                    googletag.defineSlot('/22758652372/ca-pub-8851735750518798-tag/sugany1', [320, 50], 'div-gpt-ad-1732407228104-0')
                        .addService(googletag.pubads());

                    // Ad slot 2
                    const adContainer2 = document.createElement('div');
                    adContainer2.id = 'div-gpt-ad-1732407265714-0';
                    adContainer2.style.minWidth = '320px';
                    adContainer2.style.minHeight = '50px';
                    const targetDiv2 = document.getElementById('ad2');
                    if (targetDiv2) {
                        targetDiv2.appendChild(adContainer2);
                    } else {
                        console.error("Div with id 'ad2' not found.");
                    }

                    googletag.defineSlot('/22758652372/ca-pub-8851735750518798-tag/sugany2', [320, 50], 'div-gpt-ad-1732407265714-0')
                        .addService(googletag.pubads());

                    // Enable single request mode and collapse empty divs
                    googletag.pubads().enableSingleRequest();
                    googletag.pubads().collapseEmptyDivs();
                    googletag.enableServices();

                    // Display the ads
                    googletag.display('div-gpt-ad-1732407228104-0');
                    googletag.display('div-gpt-ad-1732407265714-0');
                });
            };
        }

        // Initialize Analytics and Ads
        (function() {
            initializeAnalytics();
            setupAds();
        })();
