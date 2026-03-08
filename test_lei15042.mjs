import puppeteer from 'puppeteer';
import fs from 'fs';

const delay = ms => new Promise(res => setTimeout(res, ms));

(async () => {
    try {
        const browser = await puppeteer.launch({ defaultViewport: { width: 1280, height: 900 } });
        const page = await browser.newPage();

        page.on('console', msg => {
            if (msg.type() === 'error') console.log(`[PAGE ERROR]:`, msg.text());
        });

        console.log("Navigating to app...");
        await page.goto('http://localhost:5173/');
        
        console.log("Injecting Auth...");
        await page.evaluate(() => {
            localStorage.setItem('lotus_auth_v2', 'true');
            localStorage.setItem('lotus_profile_v2', JSON.stringify({name: 'Admin', email: 'admin@lotus.com'}));
            localStorage.setItem('lotus_unlockedSections_lei15042', JSON.stringify([1,2,3,4,5,6,7,8,9]));
            localStorage.setItem('lotus_activeCourse', 'lei15042');
        });
        
        await page.reload();
        await page.waitForSelector('select');
        
        console.log("Changing course to lei15042...");
        await page.select('select', 'lei15042');
        await delay(2000);
        
        console.log("Taking screenshot of Módulo 1 (Intro)...");
        await page.screenshot({ path: 'C:/Users/CumpadiBigos/.gemini/antigravity/brain/03e80404-34c4-4b78-81b3-6588fc0da931/lei15042_mod1.png' });
        
        console.log("Clicking Módulo 3 (Teto)...");
        const chapters = await page.$$('._chapterButton_1ccjj_69');
        if (chapters.length > 2) {
            await chapters[2].click();
            await delay(1000);
            
            // Wait for EmissionsThresholdChecker to render
            await page.evaluate(() => {
                const els = document.querySelectorAll('h2');
                const target = Array.from(els).find(el => el.textContent.includes('3.2'));
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
            await delay(1000);
            await page.screenshot({ path: 'C:/Users/CumpadiBigos/.gemini/antigravity/brain/03e80404-34c4-4b78-81b3-6588fc0da931/lei15042_mod3_threshold.png' });
        }

        console.log("Clicking Módulo 6 (Penalidades)...");
        if (chapters.length > 5) {
            await chapters[5].click();
            await delay(1000);
            
            await page.evaluate(() => {
                const els = document.querySelectorAll('h2');
                const target = Array.from(els).find(el => el.textContent.includes('6.3'));
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
            await delay(1000);
            await page.screenshot({ path: 'C:/Users/CumpadiBigos/.gemini/antigravity/brain/03e80404-34c4-4b78-81b3-6588fc0da931/lei15042_mod6_penalty.png' });
        }

        console.log("Clicking Módulo 8 (Mercado)...");
        if (chapters.length > 7) {
            await chapters[7].click();
            await delay(1000);
            
            await page.evaluate(() => {
                const els = document.querySelectorAll('h2');
                const target = Array.from(els).find(el => el.textContent.includes('8.3'));
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
            await delay(1000);
            await page.screenshot({ path: 'C:/Users/CumpadiBigos/.gemini/antigravity/brain/03e80404-34c4-4b78-81b3-6588fc0da931/lei15042_mod8_allocation.png' });
        }

        console.log("Done checking.");
        await browser.close();
        process.exit(0);
    } catch(e) {
        console.error("Script error:", e);
        process.exit(1);
    }
})();
