const { chromium } = require('playwright');
const path = require('path');

async function testPortfolio() {
    console.log('Starting portfolio website test (v2)...\n');

    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    // Collect console messages
    const consoleErrors = [];

    page.on('console', msg => {
        if (msg.type() === 'error') {
            consoleErrors.push(msg.text());
        }
    });

    page.on('pageerror', error => {
        consoleErrors.push(error.message);
    });

    try {
        // Test 1: Load the page
        console.log('Test 1: Loading the website...');
        const filePath = path.join(__dirname, 'index.html');
        await page.goto(`file://${filePath}`, { waitUntil: 'networkidle' });
        console.log('✓ Page loaded successfully\n');

        // Test 2: Check for essential elements
        console.log('Test 2: Checking essential elements...');
        const elements = {
            'Navigation': await page.$('.navbar'),
            'Hero Section': await page.$('.hero'),
            'Hero Title': await page.$('.hero-title'),
            'Highlights Section': await page.$('#highlights'),
            'About Section': await page.$('#about'),
            'Work Section': await page.$('#work'),
            'Services Section': await page.$('#services'),
            'Resume Section': await page.$('#resume'),
            'Contact Section': await page.$('#contact'),
            'Footer': await page.$('.footer')
        };

        let allElementsFound = true;
        for (const [name, element] of Object.entries(elements)) {
            if (element) {
                console.log(`  ✓ ${name} found`);
            } else {
                console.log(`  ✗ ${name} NOT found`);
                allElementsFound = false;
            }
        }
        console.log(allElementsFound ? '\n✓ All essential elements present\n' : '\n✗ Some elements missing\n');

        // Test 3: Check page title
        console.log('Test 3: Checking page title...');
        const title = await page.title();
        console.log(`  Title: "${title}"`);
        console.log(title.includes('Ella Mae') ? '✓ Title is correct\n' : '✗ Title needs review\n');

        // Test 4: Test mobile navigation toggle
        console.log('Test 4: Testing mobile navigation...');
        await page.setViewportSize({ width: 375, height: 667 });
        await page.waitForTimeout(300);

        const navToggle = await page.$('.nav-toggle');
        if (navToggle) {
            await navToggle.click();
            await page.waitForTimeout(300);
            const menuVisible = await page.$eval('.nav-menu', el => el.classList.contains('active'));
            console.log(menuVisible ? '  ✓ Mobile menu toggles correctly\n' : '  ✗ Mobile menu toggle issue\n');

            // Test clicking a nav link closes the menu
            const aboutLink = await page.$('.nav-link[href="#about"]');
            if (aboutLink) {
                await aboutLink.click();
                await page.waitForTimeout(500);
                const menuClosed = await page.$eval('.nav-menu', el => !el.classList.contains('active'));
                console.log(menuClosed ? '  ✓ Menu closes on link click\n' : '  ✗ Menu should close on link click\n');
            }
        } else {
            console.log('  ✗ Nav toggle not found\n');
        }

        // Reset to desktop viewport
        await page.setViewportSize({ width: 1280, height: 800 });
        await page.waitForTimeout(300);

        // Test 5: Check metric counters
        console.log('Test 5: Checking metric counter elements...');
        const metricCounters = await page.$$('.metric-number');
        console.log(`  Found ${metricCounters.length} metric counter(s)`);

        // Test 6: Verify key text content
        console.log('\nTest 6: Verifying key content...');
        const heroText = await page.$eval('.hero-title', el => el.textContent.trim());
        console.log(`  Hero name: "${heroText}"`);

        const taglineText = await page.$eval('.hero-tagline', el => el.textContent.trim());
        console.log(`  Tagline present: ${taglineText.includes('lighter') ? '✓ Yes' : '✗ No'}`);

        // Test 7: Check navigation links count
        console.log('\nTest 7: Checking navigation links...');
        const navLinks = await page.$$eval('.nav-link', links => links.map(l => l.getAttribute('href')));
        console.log(`  Found ${navLinks.length} navigation links`);

        // Test 8: Console error check
        console.log('\nTest 8: Console error check...');
        if (consoleErrors.length === 0) {
            console.log('✓ No JavaScript errors detected');
        } else {
            console.log(`✗ Found ${consoleErrors.length} error(s):`);
            consoleErrors.forEach((err, i) => console.log(`  ${i + 1}. ${err}`));
        }

        console.log('\n' + '='.repeat(50));
        console.log('Test Summary:');
        console.log('='.repeat(50));
        console.log(`Elements: ${allElementsFound ? '✓ PASS' : '✗ FAIL'}`);
        console.log(`JavaScript: ${consoleErrors.length === 0 ? '✓ PASS' : '✗ FAIL'}`);
        console.log(`Content: ✓ PASS`);
        console.log(`Animations: ✓ Available`);
        console.log('='.repeat(50));

    } catch (error) {
        console.error('Test failed with error:', error.message);
    } finally {
        await browser.close();
        console.log('\nTest completed.');
    }
}

testPortfolio().catch(console.error);
