// Google Analytics - GA4 tracking script
function initializeAnalytics() {
    // Replace with your GA4 Measurement ID
    const measurementId = 'G-HW7L0D4S14';  // Use your own GA4 Measurement ID

    // Inject Google Analytics script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.async = true;
    script.onload = function() {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', measurementId);
    };
    document.head.appendChild(script);
}



// Google AdSense Script
function loadAds() {
    // AdSense ad unit 1
    const adUnit1 = `
<script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
<script>
  window.googletag = window.googletag || {cmd: []};
  googletag.cmd.push(function() {
    googletag.defineSlot('/22758652372/ca-pub-8851735750518798-tag/sugany1', [320, 50], 'div-gpt-ad-1732407228104-0').addService(googletag.pubads());
    googletag.pubads().enableSingleRequest();
    googletag.pubads().collapseEmptyDivs();
    googletag.enableServices();
  });
</script>
<!-- /22758652372/ca-pub-8851735750518798-tag/sugany1 -->
<div id='div-gpt-ad-1732407228104-0' style='min-width: 320px; min-height: 50px;'>
  <script>
    googletag.cmd.push(function() { googletag.display('div-gpt-ad-1732407228104-0'); });
  </script>
</div>
    `;

    // AdSense ad unit 2
    const adUnit2 = `
<script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
<script>
  window.googletag = window.googletag || {cmd: []};
  googletag.cmd.push(function() {
    googletag.defineSlot('/22758652372/ca-pub-8851735750518798-tag/sugany2', [320, 50], 'div-gpt-ad-1732407265714-0').addService(googletag.pubads());
    googletag.pubads().enableSingleRequest();
    googletag.pubads().collapseEmptyDivs();
    googletag.enableServices();
  });
</script>
<!-- /22758652372/ca-pub-8851735750518798-tag/sugany2 -->
<div id='div-gpt-ad-1732407265714-0' style='min-width: 320px; min-height: 50px;'>
  <script>
    googletag.cmd.push(function() { googletag.display('div-gpt-ad-1732407265714-0'); });
  </script>
</div>
    `;

    // Insert the ad units into the page
    document.getElementById('ad1').innerHTML = adUnit1;
    document.getElementById('ad2').innerHTML = adUnit2;
}
